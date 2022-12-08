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
import NotFound from "../views/NotFound.vue";

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
            title: "Home - The Cube Life",
        },
    },
    {
        path: "/about/department",
        name: "About the Department",
        component: () => import("../views/About/Department.vue"),
        meta: {
            title: "About the Department - The Cube Life",
        },
    },
    {
        path: "/about/faculty",
        name: "Meet the Faculty",
        component: () => import("../views/About/Faculty.vue"),
        meta: {
            title: "Meet the Faculty - The Cube Life",
        },
    },
    {
        path: "/about/degree-and-concentrations",
        name: "Degree & Concentrations",
        component: () => import("../views/About/Degree.vue"),
        meta: {
            title: "Degree & Concentrations - The Cube Life",
        },
    },
    {
        path: "/about/cs-building",
        name: "About the CS Building",
        component: () => import("../views/About/Building.vue"),
        meta: {
            title: "About the CS Building - The Cube Life",
        },
    },
    {
        path: "/about/cube-life",
        name: "About the Cube Life",
        component: () => import("../views/About/CubeLife.vue"),
        meta: {
            title: "About the Cube Life - The Cube Life",
        },
    },
    {
        path: "/get-involved/cs-club",
        name: "Computer Science Club",
        component: () => import("../views/GetInvolved/CSClub.vue"),
        meta: {
            title: "CS Club - The Cube Life",
        },
    },
    {
        path: "/get-involved/programming-team",
        name: "Programming Team",
        component: () => import("../views/GetInvolved/ProgrammingTeam.vue"),
        meta: {
            title: "Programming Team - The Cube Life",
        },
    },
    {
        path: "/get-involved/boardgame-lunch",
        name: "Boardgame Lunch",
        component: () => import("../views/GetInvolved/BoardgameLunch.vue"),
        meta: {
            title: "Boardgame Lunch - The Cube Life",
        },
    },
    {
        path: "/get-involved/intramurals",
        name: "Intramurals",
        component: () => import("../views/GetInvolved/Intramurals.vue"),
        meta: {
            title: "Intramural Sports - The Cube Life",
        },
    },
    {
        path: "/resources/advising",
        name: "Advising",
        component: () => import("../views/Resources/Advising.vue"),
        meta: {
            title: "Advising - The Cube Life",
        },
    },
    {
        path: "/resources/tutor-lab",
        name: "Tutor Lab",
        component: () => import("../views/Resources/TutorLab.vue"),
        meta: {
            title: "Tutor Lab - The Cube Life",
        },
    },
    {
        path: "/resources/calendar",
        name: "Department Calendar",
        component: () => import("../views/Resources/Calendar.vue"),
        meta: {
            title: "Department Calendar - The Cube Life",
        },
    },
    {
        path: "/manage-courses",
        name: "Manage Courses",
        component: () => import("../views/DegreeAudit/ManageCourses.vue"),
        meta: {
            title: "Manage Courses - The Cube Life",
            requiresAuth: true,
            requiresCompletion: true,
            requiresAdmin: true,
        },
    },
    {
        path: "/resources/degree-audit",
        name: "Degree Audit",
        component: () => import("../views/DegreeAudit/DegreeAudit.vue"),
        meta: {
            title: "Degree Audit - The Cube Life",
            requiresAuth: true,
            requiresCompletion: true,
        },
    },
    {
        path: "/virtual-tour",
        name: "Virtual Tour",
        component: Tour,
        meta: {
            title: "Virtual Tour - The Cube Life",
        },
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            title: "Login - The Cube Life",
            hideForAuth: true,
        },
    },
    {
        path: "/sign-up",
        name: "Sign Up",
        component: SignUp,
        meta: {
            title: "Sign Up - The Cube Life",
            hideForAuth: true,
        },
    },
    {
        path: "/sign-up/finalize",
        name: "Sign Up Authorized",
        component: SignUpAuthorized,
        meta: {
            title: "Complete Registration - The Cube Life",
            requiresAuth: true,
            requiresIncompletion: true,
        },
    },
    {
        path: "/reset-password",
        name: "Reset Password",
        component: ResetPassword,
        meta: {
            title: "Reset Password - The Cube Life",
            hideForAuth: true,
        },
    },
    {
        path: "/logout",
        name: "Logout",
        component: Logout,
        meta: {
            title: "Logout - The Cube Life",
        },
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        meta: {
            title: "Profile - The Cube Life",
            requiresAuth: true
        },
    },
    {
        path: "/admin",
        name: "Admin",
        component: () => import("../views/Admin.vue"),
        meta: {
            title: "Admin - The Cube Life",
            requiresAuth: true,
            requiresCompletion: true,
            requiresAdmin: true,
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
            title: "Faculty - The Cube Life",
        },
    },
    {
        path: '/:pathMatch(.*)',
        name: '404',
        component: NotFound,
        meta: {
            title: "Page Not Found - The Cube Life",
        },
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior: function (to, _from, savedPosition) {
        const layoutId = document.getElementById('THIS_IS_THE_ROOT_OF_THE_PAGE');

        if (layoutId) {
            layoutId.scrollTop = 0;
        }
    }
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
    window.document.title = to.meta && to.meta.title ? to.meta.title : "The Cube Life";

    // IF THE ROUTE REQUIRES AUTH
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        // IF THE USER IS LOGGED IN AND THEIR EMAIL IS VERIFIED
        if (await getCurrentUser() && getAuth().currentUser.emailVerified) {
            // Fetch the user's account
            const res = await getDoc(doc(db, "users", getAuth().currentUser.email));

            // IF THE ROUTE REQUIRES A FINALIZED ACCOUNT
            if (to.matched.some((record) => record.meta.requiresCompletion)) {
                // IF THE USER'S ACCOUNT IS FINALIZED
                if (res.data().registrationComplete) {
                    // IF THE ROUTE REQUIRES ADMIN
                    if (to.matched.some((record) => record.meta.requiresAdmin)) {
                        // IF THE USER'S ACCOUNT HAS ADMIN PERMS
                        if (res.data().privilege == 4) {
                            next();
                        }
                        else {
                            next("/");
                        }
                    }
                    else {
                        next();
                    }
                }
                else {
                    next("/sign-up/finalize");
                }
            }
            // ELSE IF THE ROUTE REQUIRES AN UNFINALIZED ACCOUNT
            else if (to.matched.some((record) => record.meta.requiresIncompletion)) {
                // IF THE USER'S ACCOUNT IS NOT FINALIZED
                if (!res.data().registrationComplete) {
                    next();
                }
                else {
                    next("/");
                }
            }
            else {
                next();
            }
        }
        else {
            next("/login");
        }
    }
    // ELSE, THE ROUTE IS PUBLIC
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
