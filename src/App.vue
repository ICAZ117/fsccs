<template>
	<Navbar></Navbar>
	<div class="applicationDisplay dark-scroll-bar">
		<router-view v-slot="{ Component, route }">
			<div :key="route.name" id="routerView">
				<component :is="Component"></component>
			</div>
		</router-view>
		<notifications position="bottom right" />
		<Footer></Footer>
	</div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
	components: {
		Navbar,
		Footer,
	},
	async beforeMount() {
		await this.$store.dispatch("fetchEvents");

		// this.$store.commit("setPayload", {
		// 	title: "Board Game Lunch",
		// 	icon: "fa-solid fa-chess-knight",
		// 	location: "CS Club Room",
		// 	date: "09/26/2022",
		// 	time: "11:00 AM",
		// 	description:
		// 		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nisi officia cumque, minima possimus enim obcaecati quaerat omnis quia dicta quas beatae, tenetur expedita illo quo numquam esse nihil autem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa ratione exercitationem minima natus inventore quas minus deserunt sapiente, cupiditate neque impedit recusandae id? Amet dignissimos adipisciest cum harum velit?",
		// });
		// this.$store.commit("setPayload", {
		//     pfp: "http://kyleburke.info/DB/KyleInSuit.jpg",
		//     name: "Kyle Burke",
		//     title: "Assistant Professor",
		//     office: "Weinstein 115",
		//     phone: "863 680 1234",
		//     email: "kburke@flsouthern.edu",
		// });
		// await this.$store.dispatch("addFaculty", "burke");
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Rajdhani:wght@300;400;500;600;700&display=swap");
:root {
	--navbar-height: 60px;

	--FSCred: #ba0c2f;
	--FSCblue: #0060a9 !important;
	--FSClightblue: #0096db !important;
	--FSCgrey: #646464 !important;

	--FSCredRGB: 186, 12, 47 !important;
	--FSCblueRGB: 0, 96, 169 !important;
	--FSClightblueRGB: 0, 150, 219 !important;
	--FSCgreyRGB: 100, 100, 100 !important;

	--primary: var(--FSCred);
	--secondary: var(--FSCgrey);
	--primary-dark: rgb(128, 8, 32) !important;

	--red-gradient: linear-gradient(to left, var(--primary), var(--primary-dark) 45%);

	--off-white: #fafafa;
}

body {
	background-color: var(--off-white);
	color: rgb(20, 20, 20);
	font-family: "Montserrat", sans-serif;
}

.cube {
	filter: invert(11%) sepia(73%) saturate(5399%) hue-rotate(340deg)
		brightness(98%) contrast(99%);
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: "Rajdhani", sans-serif;
}

h1 {
	font-size: 350%;
}

h2 {
	font-size: 300%;
}

h3 {
	font-size: 250%;
}

h4 {
	font-size: 200%;
}

h5 {
	font-size: 150%;
}

h6 {
	font-size: 130%;
}

/* /* html {
		width: 100vw;
		overflow-x: hidden !important;
	} */

.applicationDisplay {
	top: 0;
	height: 100vh;
	overflow-y: scroll;
	overflow-x: hidden;
}
.dark-scroll-bar {
	scrollbar-width: thin !important;
	scrollbar-color: var(--red) transparent !important;
	overflow-y: auto !important;
	/* margin-right: 5px !important; */
}

.success {
	transform: translateX(-10px);
}

/* Works on Chrome, Edge, and Safari */
::-webkit-scrollbar {
	width: 10px !important;
}

::-webkit-scrollbar-track {
	background: rgb(8, 8, 8) !important;
}

::-webkit-scrollbar-thumb {
	background-color: var(--FSCred) !important;
	border-radius: 100px !important;
	width: 4px !important;
	border: 3px solid var(--FSCred) !important;
}

.white-scroll-bar::-webkit-scrollbar,
.white-scroll-bar ::-webkit-scrollbar {
	width: 10px !important;
}

.white-scroll-bar::-webkit-scrollbar-track,
.white-scroll-bar ::-webkit-scrollbar-track {
	background: transparent !important;
}

.white-scroll-bar::-webkit-scrollbar-thumb,
.white-scroll-bar ::-webkit-scrollbar-thumb {
	background-color: white !important;
	border-radius: 100px !important;
	width: 4px !important;
	border: 3px solid white !important;
}

.page-container {
	margin-top: 80px;
}
</style>
