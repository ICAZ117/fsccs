import { createRouter, createWebHistory } from "vue-router";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
} from "firebase/firestore";
import Home from "../views/Home.vue";
import Faculty from "../views/Faculty.vue";
import Tour from "../views/Tour.vue";
import Login from "../views/Authorization/Login.vue";
import SignUp from "../views/Authorization/SignUp.vue";
import SignUpAuthorized from "../views/Authorization/SignUpAuthorized.vue";
import ResetPassword from "../views/Authorization/ResetPassword.vue";
import Logout from "../views/Authorization/Logout.vue";
import Profile from "../views/Profile.vue";
import EmailVerified from "../views/Authorization/EmailVerified.vue";

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

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: "Home | FSC CS",
        },
    },
    {
        path: "/about/department",
        name: "About the Department",
        component: () => import("../views/About/Department.vue"),
        meta: {
            title: "About the Department | FSC CS",
        },
    },
    {
        path: "/about/faculty",
        name: "Meet the Faculty",
        component: () => import("../views/About/Faculty.vue"),
        meta: {
            title: "Meet the Faculty | FSC CS",
        },
    },
    {
        path: "/about/degree-and-concentrations",
        name: "Degree & Concentrations",
        component: () => import("../views/About/Degree.vue"),
        meta: {
            title: "Degree & Concentrations | FSC CS",
        },
    },
    {
        path: "/about/cs-building",
        name: "About the CS Building",
        component: () => import("../views/About/Building.vue"),
        meta: {
            title: "About the CS Building | FSC CS",
        },
    },
    {
        path: "/about/cube-life",
        name: "About the Cube Life",
        component: () => import("../views/About/CubeLife.vue"),
        meta: {
            title: "About the Cube Life | FSC CS",
        },
    },
    {
        path: "/get-involved/cs-club",
        name: "Computer Science Club",
        component: () => import("../views/GetInvolved/CSClub.vue"),
        meta: {
            title: "CS Club | FSC CS",
        },
    },
    {
        path: "/get-involved/programming-team",
        name: "Programming Team",
        component: () => import("../views/GetInvolved/ProgrammingTeam.vue"),
        meta: {
            title: "Programming Team | FSC CS",
        },
    },
    {
        path: "/get-involved/boardgame-lunch",
        name: "Boardgame Lunch",
        component: () => import("../views/GetInvolved/BoardgameLunch.vue"),
        meta: {
            title: "Boardgame Lunch | FSC CS",
        },
    },
    {
        path: "/resources/advising",
        name: "Advising",
        component: () => import("../views/Resources/Advising.vue"),
        meta: {
            title: "Advising | FSC CS",
        },
    },
    {
        path: "/resources/tutor-lab",
        name: "Tutor Lab",
        component: () => import("../views/Resources/TutorLab.vue"),
        meta: {
            title: "Tutor Lab | FSC CS",
        },
    },
    {
        path: "/resources/calendar",
        name: "Department Calendar",
        component: () => import("../views/Resources/Calendar.vue"),
        meta: {
            title: "Department Calendar | FSC CS",
        },
    },
    {
        path: "/virtual-tour",
        name: "Virtual Tour",
        component: Tour,
        meta: {
            title: "Virtual Tour | FSC CS",
        },
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            title: "Login | FSC CS",
            hideForAuth: true,
        },
    },
    {
        path: "/sign-up",
        name: "Sign Up",
        component: SignUp,
        meta: {
            title: "Sign Up | FSC CS",
            hideForAuth: true,
        },
    },
    {
        path: "/sign-up/finalize",
        name: "Sign Up Authorized",
        component: SignUpAuthorized,
        meta: {
            title: "Complete Registration | FSC CS",
            requiresAuth: true,
            requiresCompletion: true,
        },
    },
    {
        path: "/reset-password",
        name: "Reset Password",
        component: ResetPassword,
        meta: {
            title: "Reset Password | FSC CS",
            hideForAuth: true,
        },
    },
    {
        path: "/logout",
        name: "Logout",
        component: Logout,
        meta: {
            title: "Logout | FSC CS",
            requiresAuth: true
        },
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        meta: {
            title: "Profile | FSC CS",
            requiresAuth: true
        },
    },
    {
        path: "/auth",
        name: "Email Verified",
        component: EmailVerified,
        meta: {
            title: "Email Verified | FSC CS",
            requiresAuth: false
        },
    },
    {
        path: "/faculty",
        name: "Faculty",
        component: Faculty,
        children: [
            {
                path: ":name",
                component: Faculty,
                name: "Faculty",
            },
        ],
        meta: {
            title: "Faculty | FSC CS",
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior: (to, from, savedPosition) => {
        return { x: 0, y: 500 };
    },
});

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
        );
    });
};

router.beforeEach(async (to, from, next) => {
    window.document.title = to.meta && to.meta.title ? to.meta.title : "FSC CS";

    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (await getCurrentUser()) {
            if (to.matched.some((record) => record.meta.requiresCompletion)) {
                // Fetch the user's account
                const res = await getDoc(doc(db, "users", getAuth().currentUser.email));

                if (getAuth().currentUser.emailVerified && !res.data().registrationComplete) {
                    next();
                }
                else {
                    next("/");
                }
            }
            else {
                next();
            }
        } else {
            next("/login");
        }
    }
    else if (to.matched.some(record => record.meta.hideForAuth)) {
        if (await getCurrentUser()) {
            next("/");
        } else {
            next();
        }
    }
    else {
        next();
    }
});

export default router;
