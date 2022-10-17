import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Home from "../views/Home.vue";
import Faculty from "../views/Faculty.vue";
import Tour from "../views/Tour.vue";
import Login from "../views/Authorization/Login.vue";
import SignUp from "../views/Authorization/SignUp.vue";
import SignUpAuthorized from "../views/Authorization/SignUpAuthorized.vue";
import Logout from "../views/Authorization/Logout.vue";
import Profile from "../views/Profile.vue";

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
		path: "/get-involved/ctf-team",
		name: "CTF Team",
		component: () => import("../views/GetInvolved/CTFTeam.vue"),
		meta: {
			title: "CTF Team | FSC CS",
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
		component: SignUpAuthorized,
		meta: {
			title: "Sign Up | FSC CS",
            hideForAuth: true,
		},
	},
    // {
	// 	path: "/sign-up",
	// 	name: "Sign Up",
	// 	component: SignUp,
    //     children: [
	// 		{
	// 			path: ":email",
	// 			component: SignUpAuthorized,
	// 			name: "Sign Up Authorized",
	// 		},
	// 	],
	// 	meta: {
	// 		title: "Sign Up | FSC CS",
    //         hideForAuth: true,
	// 	},
	// },
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
			next();
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
