<template>
	<div v-if="!firestoreAdmin">
		<div
			class="applicationDisplay dark-scroll-bar"
			id="THIS_IS_THE_ROOT_OF_THE_PAGE"
			v-show="pageLoaded && !$store.state.showLoader"
		>
			<Navbar :authUser="authUser"></Navbar>
			<router-view v-slot="{ Component, route }">
				<div
					:key="route.name + pageLoaded + $route.fullPath"
					id="routerView"
				>
					<component :is="Component"></component>
				</div>
			</router-view>
			<notifications position="bottom right" />
			<Footer></Footer>
		</div>
		<div id="loadingScreen" v-show="!pageLoaded || $store.state.showLoader">
			<Loader style="scale: 2"></Loader>
		</div>
		<div class="small-screen">
			Why yo screen so smol??????
			<img src="./assets/img/SmallScreen.gif" style="width: 100%" />
			Fr tho, your screen has to be at least 350px wide in order for us to
			display the website :/
		</div>
	</div>
	<button
		v-if="firestoreAdmin"
		@click="execute"
		class="btn btn-primary btn-lg"
	>
		Execute
	</button>
</template>

<script>
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Loader from "./components/Loader.vue";

export default {
	components: {
		Navbar,
		Footer,
		Loader,
	},
	data() {
		return {
			firestoreAdmin: false, // SET TO TRUE TO DISPLAY EXECUTE BUTTON
			pageLoaded: false, // SET TO FALSE TO DISPLAY LOADER
			authUser: null,
		};
	},
	methods: {
		async execute() {
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
		},
	},
	async mounted() {
		// document.onreadystatechange = () => {
		// 	if (document.readyState === "complete") {
		// 		this.pageLoaded = true;
		// 	}
		// };
		let stateCheck = setInterval(() => {
			if (document.readyState === "complete") {
				clearInterval(stateCheck);
				this.pageLoaded = true;
			}
		}, 100);

		onAuthStateChanged(getAuth(), async (user) => {
			if (user) {
				console.log("LOGGED IN: " + user.email);
				this.$store.commit("setEmail", user.email);
				await this.$store.dispatch("fetchUser");
				this.$store.commit("setEmail", user.email);
				this.authUser = this.$store.getters.getUser;
				console.log("STORE USER HAS EMAIL:", this.authUser.email);
			} else {
				console.log("LOGGED OUT");
				this.$store.commit("resetAuth");
				this.authUser = null;
			}
		});
	},
	async beforeMount() {
		await this.$store.dispatch("fetchEvents");
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Rajdhani:wght@300;400;500;600;700&display=swap");

/* 
██████   ██████   ██████  ████████ 
██   ██ ██    ██ ██    ██    ██    
██████  ██    ██ ██    ██    ██    
██   ██ ██    ██ ██    ██    ██    
██   ██  ██████   ██████     ██    
*/
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
	--secondary: var(--FSCblue);
	--primary-dark: #800820 !important;
    --secondary-dark: hsl(206, 100%, 25%) !important;

	--red-gradient-left: linear-gradient(
		to left,
		var(--primary),
		var(--primary-dark) 45%
	);

	--red-gradient-right: linear-gradient(
		to right,
		var(--primary),
		var(--primary-dark) 45%
	);

	--blue-gradient-left: linear-gradient(to left, var(--FSCblue), #004377 45%);

	--blue-gradient-right: linear-gradient(
		to right,
		var(--FSCblue),
		#004377 45%
	);

	--grey-gradient-left: linear-gradient(to left, var(--FSCgrey), #353535 45%);

	--grey-gradient-right: linear-gradient(
		to right,
		var(--FSCgrey),
		#353535 45%
	);

	--off-white: #fafafa;
}

body {
	background-color: var(--off-white);
	color: rgb(20, 20, 20);
	font-family: "Montserrat", sans-serif;
	line-height: 1.75;
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

/* 
███████  ██████ ██████   ██████  ██      ██      ██████   █████  ██████  
██      ██      ██   ██ ██    ██ ██      ██      ██   ██ ██   ██ ██   ██ 
███████ ██      ██████  ██    ██ ██      ██      ██████  ███████ ██████  
     ██ ██      ██   ██ ██    ██ ██      ██      ██   ██ ██   ██ ██   ██ 
███████  ██████ ██   ██  ██████  ███████ ███████ ██████  ██   ██ ██   ██ 
*/
.dark-scroll-bar {
	scrollbar-width: thin !important;
	scrollbar-color: var(--red) transparent !important;
	overflow-y: auto !important;
	/* margin-right: 5px !important; */
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

/*
 ██████  █████  ██████   ██████  ██    ██ ███████ ███████ ██      ███████ 
██      ██   ██ ██   ██ ██    ██ ██    ██ ██      ██      ██      ██      
██      ███████ ██████  ██    ██ ██    ██ ███████ █████   ██      ███████ 
██      ██   ██ ██   ██ ██    ██ ██    ██      ██ ██      ██           ██ 
 ██████ ██   ██ ██   ██  ██████   ██████  ███████ ███████ ███████ ███████  
 */
.carousel__pagination-button {
	height: calc(var(--vc-pgn-height) * 1.5) !important;
	width: calc(var(--vc-pgn-width) * 1.5) !important;
}

.carousel__pagination-button--active {
	background-color: white !important;
	box-shadow: 0px 0px 1px 1px var(--FSCgrey);
}

.carousel__pagination {
    padding: 0!important;
}

.carousel__icon {
	width: calc(var(--vc-icn-width) * 2) !important;
	height: calc(var(--vc-icn-width) * 2) !important;
}

.carousel__prev,
.carousel__next {
	box-sizing: content-box;
	background-color: transparent;
	width: calc(var(--vc-nav-width) * 2) !important;
	height: calc(var(--vc-nav-height) * 2) !important;
	color: white !important;
}

.carousel__prev {
	left: 30px !important;
}

.carousel__next {
	right: 30px !important;
}

.red-arrows .carousel__prev,
.red-arrows .carousel__next {
	/* box-sizing: content-box; */
	background-color: var(--FSCred);
	width: 50px !important;
	height: 50px !important;
	border-radius: 50% !important;
	color: white !important;
}

/* 
███████  ██████  █████  ██      ███████      ██████  █████  ██████   ██████  ██    ██ ███████ ███████ ██      
██      ██      ██   ██ ██      ██          ██      ██   ██ ██   ██ ██    ██ ██    ██ ██      ██      ██      
███████ ██      ███████ ██      █████       ██      ███████ ██████  ██    ██ ██    ██ ███████ █████   ██      
     ██ ██      ██   ██ ██      ██          ██      ██   ██ ██   ██ ██    ██ ██    ██      ██ ██      ██      
███████  ██████ ██   ██ ███████ ███████      ██████ ██   ██ ██   ██  ██████   ██████  ███████ ███████ ███████ 
*/
.scale-carousel .carousel__slide > .carousel__item {
	transform: scale(0.8);
	opacity: 0.5;
	transition: 0.5s;
}

.scale-carousel .carousel__slide--next > .carousel__item {
	opacity: 0.9;
	transform: scale(0.9) translate(25px);
}

.scale-carousel .carousel__slide--prev > .carousel__item {
	opacity: 0.9;
	transform: scale(0.9) translate(-25px);
}

.scale-carousel .carousel__slide--active > .carousel__item {
	opacity: 1;
	transform: scale(1.1);
}

/* 
 ██████  ███████ ███    ██ ███████ ██████   █████  ██      
██       ██      ████   ██ ██      ██   ██ ██   ██ ██      
██   ███ █████   ██ ██  ██ █████   ██████  ███████ ██      
██    ██ ██      ██  ██ ██ ██      ██   ██ ██   ██ ██      
 ██████  ███████ ██   ████ ███████ ██   ██ ██   ██ ███████ 
*/
.applicationDisplay {
	top: 0;
	height: 100vh;
	overflow-y: scroll;
	overflow-x: hidden;
}

#loadingScreen {
	height: 100vh;
	width: 100vw;
	overflow: hidden;
}

.small-screen {
	display: none;
}

.cube {
	filter: invert(11%) sepia(73%) saturate(5399%) hue-rotate(340deg)
		brightness(98%) contrast(99%);
}

.justify-large {
	hyphens: auto;
	text-align: justify;
	text-justify: distribute;
	text-align-last: left;  
}

p {
    margin: 0!important;
}

.page-text {
	text-align: justify;
	line-height: 2;
}

.success {
	transform: translateX(-10px);
}

.page-container {
	margin-top: 80px;
}

.btn-primary,
.btn-primary:visited,
.btn-primary:active,
.btn-primary:focus,
.btn-primary:active:focus {
	background-color: var(--primary);
	color: rgb(255, 255, 255);
	border: none;
	outline: none;
	box-shadow: none;
	transition: all 0.25s ease-in-out;
}

.btn-primary:hover {
	background-color: var(--primary-dark)!important;
}

.btn-secondary,
.btn-secondary:visited,
.btn-secondary:active,
.btn-secondary:focus,
.btn-secondary:active:focus {
	background-color: var(--secondary);
	color: rgb(255, 255, 255);
	border: none;
	outline: none;
	box-shadow: none;
	transition: all 0.25s ease-in-out;
}

.btn-secondary:hover {
	background-color: var(--secondary-dark)!important;
}

.red-section {
	border-bottom: 5px solid var(--FSCred);
}

.blue-section {
	border-bottom: 5px solid var(--FSCblue);
}

.grey-section {
	border-bottom: 5px solid var(--FSCgrey);
}

.large {
	font-size: 3.5rem;
}

p.large {
	font-size: 1.3rem;
}

.normal {
	font-weight: normal;
}

.center {
	text-align: center;
}

.italicized {
	font-style: italic;
}

.primary {
	color: var(--primary);
}

.secondary {
	color: var(--secondary);
}

.white,
.white:hover,
.white:active,
.white:active:focus,
.white:focus,
.white:visited {
	color: white !important;
}

.FSCred {
	color: var(--FSCred);
}

.FSCblue {
	color: var(--FSCblue);
}

.FSClightblue {
	color: var(--FSClightblue);
}

.FSCgrey {
	color: var(--FSCgrey);
}

hr.FSCred {
	margin: 0 0 15px 0;
	border-bottom: 4px solid var(--FSCred);
	border-radius: 20px;
	opacity: 1;
}

hr.FSCblue {
	margin: 0 0 15px 0;
	border-bottom: 4px solid var(--FSCblue);
	border-radius: 20px;
	opacity: 1;
}

hr.FSClightblue {
	margin: 0 0 15px 0;
	border-bottom: 4px solid var(--FSClightblue);
	border-radius: 20px;
	opacity: 1;
}

.no-decor,
.no-decor:hover,
.no-decor:focus,
.no-decor:active,
.no-decor:visited {
	text-decoration: none;
	color: var(--primary);
}

.white-shadow {
	text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #fff, 0 0 4px #fff,
		0 0 5px #fff, 0 0 6px #fff, 0 0 7px #fff;
}

.black-shadow {
	text-shadow: 0 0 5px #000;
}

.link,
.link:focus,
.link:active,
.link:visited {
	color: var(--primary);
	font-weight: 500;
}

.link:hover {
	color: var(--primary-dark);
}

.primary-hr {
	margin: 0 0 15px 0;
	border-bottom: 4px solid var(--primary);
	border-radius: 20px;
	opacity: 1;
}

.white-hr {
	margin: 0 0 15px 0;
	border-bottom: 4px solid white;
	border-radius: 20px;
	opacity: 1;
}

.row.block-center {
	width: unset !important;
}

.nav-pad {
	padding-top: 60px;
}

.vertical-center {
	display: flex;
	align-items: center;
	height: 100%;
	width: 100%;
	justify-content: center;
	flex-direction: column;
}

.mb-sm-4 {
	margin-bottom: 0 !important;
}

.bold {
	font-weight: bold;
}

.blur {
	backdrop-filter: blur(5px);
}

.strong-blur {
	backdrop-filter: blur(10px);
}

/*
███    ███ ███████ ██████  ██  █████       ██████  ██    ██ ███████ ██████  ██ ███████ ███████ 
████  ████ ██      ██   ██ ██ ██   ██     ██    ██ ██    ██ ██      ██   ██ ██ ██      ██      
██ ████ ██ █████   ██   ██ ██ ███████     ██    ██ ██    ██ █████   ██████  ██ █████   ███████ 
██  ██  ██ ██      ██   ██ ██ ██   ██     ██ ▄▄ ██ ██    ██ ██      ██   ██ ██ ██           ██ 
██      ██ ███████ ██████  ██ ██   ██      ██████   ██████  ███████ ██   ██ ██ ███████ ███████ 
*/
/* 
BOOTSTRAP BREAKPOINTS:
  xs: 475px
  sm: 576px
  md: 768px
  lg: 992px
  xl: 1200px
  xxl: 1400px
*/
@media (max-width: 1199.9px) {
	h1 {
		font-size: 300%;
	}

	h2 {
		font-size: 250%;
	}

	h3 {
		font-size: 200%;
	}

	h4 {
		font-size: 175%;
	}

	h5 {
		font-size: 125%;
	}

	h6 {
		font-size: 100%;
	}
}

@media (max-width: 991.9px) {
	h1 {
		font-size: 250%;
	}

	h2 {
		font-size: 200%;
	}

	h3 {
		font-size: 175%;
	}

	h4 {
		font-size: 150%;
	}

	h5 {
		font-size: 125%;
	}

	h6 {
		font-size: 100%;
	}
}

@media (max-width: 767.9px) {
	h1 {
		font-size: 220%;
	}

	h2 {
		font-size: 180%;
	}

	h3 {
		font-size: 160%;
	}

	h4 {
		font-size: 140%;
	}

	h5 {
		font-size: 120%;
	}

	h6 {
		font-size: 100%;
	}
}

@media (max-width: 474.9px) {
	body {
		font-size: 10pt;
	}

    .justify-large {
        text-align: left;
    }
}

@media (max-width: 349.9px) {
	.applicationDisplay {
		display: none;
	}

	.small-screen {
		display: unset;
	}
}
</style>
