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
			privilege: 1, // 1 = Student, 2 = Editor (CS club officer?), 3 = Admin (Professors only)
			id: "",
			fname: "",
			lname: "",
		},
		faculty: {},
		events: [],
		payload: {},
        announcements: {},
	},
	mutations: {

		setFaculty(state, payload) {
			state.faculty = payload;
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

			console.log("EVENTS", state.events);
		},
		setPayload(state, payload) {
			state.payload = payload;
		},
		setEmail(state, payload) {
			state.auth.email = payload;
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
		setID(state, payload) {
			state.auth.id = payload;
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
        setAnnouncements(state, payload) {
            state.announcements = payload;
        }
	},
	actions: {
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
				url: "https://slack.com/api/conversations.history?channel=C3J6WM8KC",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				data: data,
			};

			await axios(config)
				.then(function (response) {
					console.log("ANNOUNCEMENTS", response.data);
                    commit("setAnnouncements", response.data);
				})
				.catch(function (error) {
					console.log(error);
				});
		},
		async addEvent({ state }) {
			await addDoc(collection(db, "events"), state.payload);
		},
		async addFaculty({ state }, name) {
			await setDoc(doc(db, "faculty", name), state.payload);
		},
		async createUser({ state }) {
			// Create new user in users table
			await setDoc(doc(db, "users", state.auth.email), {
				username: state.auth.username,
				pfp: state.auth.pfp,
				privilege: state.auth.privilege,
				id: state.auth.id,
				fname: state.auth.fname,
				lname: state.auth.lname,
			});
		},
		async fetchUser({ commit, state }) {
			// Get user from users table
			const data = await getDoc(doc(db, "users", state.auth.email));
			commit("setUsername", data.data().username);
			commit("setFname", data.data().fname);
			commit("setLname", data.data().lname);
			commit("setPFP", data.data().pfp);
			commit("setPrivilege", data.data().privilege);
			commit("setID", data.data().id);
		},
		// async fetchAboutPage({ commit }) {
		// 	const data = await getDoc(doc(db, "pageData", "aboutPage"));
		// 	commit("setAboutPage", data.data());
		// },
		// async fetchProjectsPage({ commit }) {
		// 	const data = await getDoc(doc(db, "pageData", "projectsPage"));
		// 	commit("setProjectsPage", data.data());
		// },

		// async updatePb({ state }) {
		//     // Update user's pb in users table
		//     await setDoc(doc(db, "users", state.email), {
		//         username: state.username,
		//         pb: state.pb,
		//     });
		// },
		// async fetchLeaderboard({ commit }) {
		// 	// Get leaderboard from leaderboard table
		// 	const data = await getDoc(doc(db, "leaderboard", "leaderboard"));
		// 	commit("setLeaderboard", data.data().scores);
		// },
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
		getUser(state) {
			return state.auth;
		},
	},
});

export default store;
