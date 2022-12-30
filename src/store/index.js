import { createStore } from "vuex";
import axios from "axios";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    getDocs,
    collection,
    addDoc,
    query,
    orderBy,
    where,
    updateDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsqL3m_B66Rfg7kT86tjEwJP8wXiFO4r4",
    authDomain: "fsc-cs.firebaseapp.com",
    projectId: "fsc-cs",
    storageBucket: "fsc-cs.appspot.com",
    messagingSenderId: "1016219790552",
    appId: "1:1016219790552:web:b6f8e86da78b92bf98bbad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Connect to firestore and get database
const db = getFirestore(app);

const store = createStore({
    state: {
        auth: {
            email: "",
            username: "",
            pfp: "",
            privilege: 1, // 1 = Student, 2 = Editor (CS club officer?), 3 = Professor, 4 = Admin
            fname: "",
            lname: "",
        },
        faculty: {},
        events: [],
        payload: {},
        announcements: {},
        researchProjects: {},
        officers: {},
        courses: {},
        advisingresources: {},
        tutors: {},
        tutorInfo: {},
        authEmail: "",
        cubeLifeMode: false,
        showLoader: false,
    },
    mutations: {
        setFaculty(state, payload) {
            state.faculty = payload;
        },
        setOfficers(state, payload) {
            state.officers = payload;
        },
        setEvents(state, payload) {
            const months = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ];

            payload.forEach((event) => {
                const date = new Date(event.start.dateTime);
                var icon = "fa-solid fa-calendar-days";

                if (event.summary.startsWith("IM")) {
                    icon = "fa-solid fa-medal";
                } else if (event.summary.includes("Board Game Lunch")) {
                    icon = "fa-solid fa-chess";
                } else if (event.summary.includes("Tutoring")) {
                    icon = "fa-solid fa-graduation-cap";
                } else if (event.summary.includes("Programming Team")) {
                    icon = "fa-solid fa-code";
                } else if (event.summary.includes("CS Club")) {
                    icon = "fa-solid fa-people-group";
                } else if (event.summary.includes("CTF")) {
                    icon = "fa-solid fa-network-wired";
                }

                state.events.push({
                    title: event.summary,
                    icon: icon,
                    location: event.location,
                    date: date.toLocaleDateString(),
                    time:
                        date.toLocaleTimeString().split(" ")[0].split(":")[0] +
                        ":" +
                        date.toLocaleTimeString().split(" ")[0].split(":")[1] +
                        " " +
                        date.toLocaleTimeString().split(" ")[1].toLowerCase(),
                    month: months[date.getMonth()],
                    description: event.description,
                });
            });

        },
        setPayload(state, payload) {
            state.payload = payload;
        },
        setEmail(state, payload) {
            state.auth.email = payload;
            state.authEmail = payload;
        },
        setUsername(state, payload) {
            state.auth.username = payload;
        },
        setPFP(state, payload) {
            state.auth.pfp = payload;
        },
        setPrivilege(state, payload) {
            state.auth.privilege = payload;
        },
        setFname(state, payload) {
            state.auth.fname = payload;
        },
        setLname(state, payload) {
            state.auth.lname = payload;
        },
        setAuth(state, payload) {
            state.auth = payload;
        },
        resetAuth(state) {
            state.auth = {
                email: "",
                username: "",
                pfp: "",
                privilege: 1, // 1 = Student, 2 = Editor (CS club officer?), 3 = Admin (Professors only)
                fname: "",
                lname: "",
            };

            state.authEmail = "";
        },
        setAnnouncements(state, payload) {
            state.announcements = payload;
        },
        setResearchProjects(state, payload) {
            state.researchProjects = payload;
        },
        setCourses(state, payload) {
            state.courses = payload;
        },
        setAdvisingResources(state, payload) {
            state.advisingresources = payload;
        },
        setTutors(state, payload) {
            state.tutors = payload;
        },
        setTutorInfo(state, payload) {
            state.tutorInfo = payload;
        },
        toggleCubeLife(state) {
            state.cubeLifeMode = !state.cubeLifeMode;
        },
    },
    actions: {
        // #region FETCH
        async fetchFaculty({ commit }) {
            const data = await getDocs(collection(db, "faculty"));
            commit("setFaculty", data);
        },
        async fetchEvents({ commit }) {
            const apiKey = process.env.VUE_APP_GOOGLE_API_KEY;
            const calendarID = process.env.VUE_APP_CALENDAR_ID;
            const calendarParams = `orderBy=startTime&singleEvents=true&timeMin=${new Date().toISOString()}&key=${apiKey}`;
            const calendarURL = `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events?${calendarParams}`;
            const calendarResponse = await axios.get(calendarURL);

            commit("setEvents", calendarResponse.data.items);
        },
        async fetchAnnouncements({ commit }) {
            var qs = require("qs");
            var data = qs.stringify({
                token: process.env.VUE_APP_SLACK_TOKEN,
            });
            var config = {
                method: "post",
                url: "https://slack.com/api/conversations.history?channel=C3J6WM8KC&limit=20",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                data: data,
            };

            await axios(config)
                .then(function (response) {
                    commit("setAnnouncements", response.data.messages);
                })
                .catch(function (error) {
                    console.error("SLACK_API_ERROR", error);
                });
        },
        async fetchResearchProjects({ commit }) {
            const data = await getDocs(collection(db, "researchProjects"));
            commit("setResearchProjects", data);
        },
        async fetchUser({ commit, state }) {
            // Get user from users table
            const temp = state.authEmail;
            const data = await getDoc(doc(db, "users", state.authEmail));
            commit("setAuth", data.data());
            commit("setEmail", temp);
        },
        async fetchOfficers({ commit }) {
            const data = await getDocs(collection(db, "CS-club-officers"));
            commit("setOfficers", data);
        },
        async fetchAdvisingResources({ commit }) {
            const data = await getDocs(collection(db, "advising-resources"));
            commit("setAdvisingResources", data);
        },
        async fetchTutors({ commit }) {
            const data = await getDocs(collection(db, "cs-tutors"));
            commit("setTutors", data);
        },
        async fetchTutorInfo({ commit }) {
            const data = await getDoc(doc(db, "tutor-info", "data"));
            commit("setTutorInfo", data.data());
        },
        async fetchCourses({ commit }) {
            const data = await getDoc(doc(db, "courses", "courses"));
            commit("setCourses", data.data());
        },
        // #endregion

        // #region ADD
        async addEvent({ state }) {
            await addDoc(collection(db, "events"), state.payload);
        },
        async addFaculty({ state }, name) {
            await setDoc(doc(db, "faculty", name), state.payload);
        },
        // #endregion

        // #region UPDATE
        async updateUserCourses({ state }, courses) {
            await updateDoc(doc(db, "users", state.authEmail), {
                coursesTaken: courses,
            });
        },
        async updateUser({ state }) {
            // Create new user in users table
            await setDoc(doc(db, "users", state.auth.email), {
                username: state.auth.username,
                pfp: state.auth.pfp,
                privilege: state.auth.privilege,
                fname: state.auth.fname,
                lname: state.auth.lname,
                coursesTaken: state.auth.coursesTaken,
                registrationComplete: state.auth.registrationComplete,
            });
        },
        async updateCourses({ commit }, courses) {
            commit("setCourses", courses);
            await setDoc(doc(db, "courses", "courses"), courses);
        },
        // #endregion

        // #region MISC
        async initUser({ state }) {
            await setDoc(doc(db, "users", state.auth.email), {
                registrationComplete: false,
            });
        },
        async finalizeUser({ state }) {
            // Create new user in users table
            await setDoc(doc(db, "users", state.auth.email), {
                username: state.auth.username,
                pfp: "https://www.knack.com/images/about/default-profile.png",
                privilege: 1,
                fname: state.auth.fname,
                lname: state.auth.lname,
                coursesTaken: [],
                registrationComplete: true,
            });
        },
        // #endregion
    },
    getters: {
        getFaculty(state) {
            return state.faculty;
        },
        getEvents(state) {
            return state.events;
        },
        getAnnouncements(state) {
            return state.announcements;
        },
        getResearchProjects(state) {
            return state.researchProjects;
        },
        getUser(state) {
            return state.auth;
        },
        getOfficers(state) {
            return state.officers;
        },
        getCourses(state) {
            return state.courses;
        },
        getAdvisingResources(state) {
            return state.advisingresources;
        },
        getTutors(state) {
            return state.tutors;
        },
        getTutorInfo(state) {
            return state.tutorInfo;
        },
        getCubeLifeMode(state) {
            return state.cubeLifeMode;
        }
    },
});

export default store;
