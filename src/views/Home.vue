<template>
	<!-- Start Hero Section -->
	<div class="hero red-section">
		<Carousel
			class="carousel"
			:wrap-around="true"
			:autoplay="5000"
			:transition="1500"
			:pauseAutoplayOnHover="true"
			:key="reloadHero"
		>
			<Slide :key="0">
				<SkewBox
					:rightBG="{
						backgroundImage: `url(${require('@/assets/img/cube-pics/DSC00017a.jpg')})`,
						'background-position': 'left',
						'background-size': 'cover',
						'background-repeat': 'none',
					}"
					:rightColor="'rgba(var(--FSCredRGB), 0.7); backdrop-filter: blur(5px);'"
					:leftColor="'transparent'"
					:height="500"
					:padding="'60px 0 0 0'"
				>
					<template v-slot:right>
						<div class="center vertical-center">
							<h4 class="white">Welcome to the</h4>
							<h1 class="white">Florida Southern College</h1>
							<h4 class="white">
								Department of Computer Science
							</h4>
						</div>
					</template>
				</SkewBox>
			</Slide>
			<Slide :key="1">
				<SkewBox
					:rightBG="{
						backgroundImage: `url(${require('@/assets/img/intramurals/BannerBlur.jpg')})`,
						width: '55vw!important',
						'background-position': 'center',
						'background-size': 'cover',
						'background-repeat': 'none',
					}"
					:leftColor="'var(--blue-gradient-left)'"
					:rightColor="'transparent'"
					:height="500"
					:padding="'60px 0 0 0'"
				>
					<template v-slot:left>
						<div class="vertical-center">
							<h1 style="color: white">
								Home of the 2021-2022 All-Sports Champions
							</h1>
						</div>
					</template>
				</SkewBox>
			</Slide>
			<Slide :key="2">
				<SkewBox
					:leftBG="{
						backgroundImage: `url(${require('@/assets/img/BGlunch6.jpg')})`,
						width: '55vw!important',
						'background-position': 'center',
						'background-size': 'cover',
						'background-repeat': 'none',
					}"
					:rightColor="'var(--grey-gradient-right)'"
					:leftColor="'transparent'"
					:height="500"
					:padding="'60px 0 0 0'"
				>
					<template v-slot:right>
						<div class="vertical-center">
							<h1 style="color: white">
								The BEST Department on Campus
							</h1>
						</div>
					</template>
				</SkewBox>
			</Slide>

			<template #addons>
				<Navigation />
				<Pagination />
			</template>
		</Carousel>
	</div>
	<!-- End Hero Section -->

	<!-- Start Announcements Section -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/backgrounds/RedCircuit4.jpg')})`,
			'background-position': 'center',
		}"
		:height="'70vh'"
		:opacity="0.5"
		:overlayColor="'0, 0, 0'"
		class="red-section"
	>
		<div class="h-100">
			<div class="announcements container py-5 h-100">
				<h1 class="center primary mt-2 pb-1 bold">Announcements</h1>

				<Carousel
					class="carousel"
					:wrap-around="true"
					:transition="600"
					:pauseAutoplayOnHover="true"
				>
					<template #slides>
						<Slide
							v-for="announcement in announcements"
							:key="announcement"
						>
							<Announcement
								:pfp="announcement.pfp"
								:name="announcement.name"
								:date="announcement.date"
								class="announcementComponent"
							>
								<Markdown
									:source="announcement.content"
									:breaks="true"
								/>
							</Announcement>
						</Slide>
					</template>
					<template #addons>
						<Navigation />
						<Pagination />
					</template>
				</Carousel>
			</div>
		</div>
	</Parallax>
	<!-- End Announcements Section -->

	<!-- Start Events Section -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/backgrounds/BlueMatrix2.jpg')})`,
			'background-position': 'left bottom',
		}"
		:height="'0'"
		:opacity="0.2"
		:overlayColor="'0, 0, 0'"
		class="red-section"
	>
		<div class="h-100 pb-2">
			<div class="container-xl py-5 h-100">
				<h1 class="center white mt-2 mb-4 pb-1 bold">Events</h1>
				<div class="events white-scroll-bar">
					<div v-if="windowWidth >= 1200">
						<Event
							v-for="(event, i) in events"
							:key="i"
							:title="event.title"
							:icon="event.icon"
							:location="event.location"
							:date="event.date"
							:time="event.time"
							:hasDescription="event.description"
							class="mx-auto"
						>
							{{ event.description }}
						</Event>
					</div>
					<div v-if="windowWidth < 1200">
						<Carousel
							class="carousel"
							:wrap-around="true"
							:transition="600"
							:pauseAutoplayOnHover="true"
							:itemsToShow="1"
						>
							<template #slides>
								<Slide v-for="(event, i) in events" :key="i">
									<Event
										:title="event.title"
										:icon="event.icon"
										:location="event.location"
										:date="event.date"
										:time="event.time"
										:hasDescription="event.description"
										class="mx-auto"
									>
										{{ event.description }}
									</Event>
								</Slide>
							</template>
							<template #addons>
								<Navigation />
								<Pagination />
							</template>
						</Carousel>
					</div>
				</div>
			</div>
		</div>
	</Parallax>
	<!-- End Events Section -->

	<!-- Start Faculty Section -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/BG4.jpg')}`,
			'background-position': 'top',
		}"
		:height="'0'"
		:opacity="0.2"
		:overlayColor="'0, 0, 0'"
		class="red-section"
		:key="mountReload"
	>
		<div class="h-100 pb-2">
			<center>
				<div class="m-auto faculty container py-5 h-100">
					<h1 class="center FSCred mt-2 mb-4 pb-1 bold">
						Meet the Faculty
					</h1>
					<Carousel
						:itemsToShow="numVisibleProfessors"
						:wrapAround="true"
					>
						<Slide
							v-for="(professor, name) in professors"
							:key="name"
						>
							<div class="carousel__item my-5">
								<FacultyCard
									:professor="professor"
									:name="name"
								></FacultyCard>
							</div>
						</Slide>
						<template #addons>
							<Navigation />
							<Pagination class="show-576" />
						</template>
					</Carousel>
				</div>
			</center>
		</div>
	</Parallax>
	<!-- End Faculty Section -->

	<!-- Start Tour Section -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/virtual-tour/Tour1.jpg')}`,
			'background-position': 'top',
		}"
		:height="'0'"
		:opacity="0.4"
		:overlayColor="'0, 0, 0'"
		class=""
	>
		<div class="container py-5 my-2" style="height: 70vh !important">
			<div class="center vertical-center">
				<router-link to="/virutal-tour" class="no-decor link-box">
					<h1 class="white bold tour-link">Take a Virtual Tour</h1>
				</router-link>
			</div>
		</div>
	</Parallax>
	<!-- End Tour Section -->
</template>

<script>
import Parallax from "../components/Parallax.vue";
import SkewBox from "../components/SkewBox.vue";
import Announcement from "../components/Announcement.vue";
import FacultyCard from "../components/FacultyCard.vue";
import Event from "../components/Event.vue";
import "vue3-carousel/dist/carousel.css";
import Markdown from "vue3-markdown-it";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import axios from "axios";

export default {
	components: {
		Parallax,
		SkewBox,
		Announcement,
		Event,
		FacultyCard,
		Carousel,
		Slide,
		Pagination,
		Navigation,
		Markdown,
	},
	data() {
		return {
			userInput: "",
			announcementReload: 0,
			windowHeight: 0,
			windowWidth: 0,
			initHeight: 0,
			allEvents: [],
			professors: {},
			announcements: [],
			reloadHero: 0,
			mountReload: 0,
		};
	},
	methods: {
		async getUser(userID) {
			var qs = require("qs");
			var data = qs.stringify({
				token: process.env.VUE_APP_SLACK_TOKEN,
			});
			var config = {
				method: "post",
				url: "https://slack.com/api/users.profile.get?user=" + userID,
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				data: data,
			};

			const res = await axios(config);

			return res.data.profile;
		},
		getWindowSize() {
			this.windowHeight = window.innerHeight;
			this.windowWidth = window.innerWidth;
			this.reloadHero++;
		},
	},
	computed: {
		events() {
			return this.windowWidth >= 1200
				? this.allEvents.slice(0, 20)
				: this.allEvents.slice(0, 10);
		},
		numVisibleProfessors() {
			// xs: 0px
			// sm: 576px
			// md: 768px
			// lg: 992px
			// xl: 1200px
			// xxl: 1400px

			if (this.windowWidth > 1399.9) {
				return 3.7;
			} else if (this.windowWidth > 1199.9) {
				return 3.5;
			} else if (this.windowWidth > 991.9) {
				return 3;
			} else if (this.windowWidth > 767.9) {
				return 2;
			} else if (this.windowWidth > 575.9) {
				return 1.5;
			} else {
				return 1;
			}
		},
	},
	created() {
		window.addEventListener("resize", this.getWindowSize);
	},
	destroyed() {
		window.removeEventListener("resize", this.getWindowSize);
	},
	mounted() {
		document.onreadystatechange = () => {
			if (document.readyState === "complete") {
				setTimeout(() => {
					this.mountReload++;
				}, 500);
			}
		};
	},
	async beforeMount() {
		// Get window height
		this.getWindowSize();
		this.initHeight = window.innerHeight;

		this.allEvents = this.$store.getters.getEvents;

		// Fetch all slack announcements from API
		await this.$store.dispatch("fetchAnnouncements");

		// Get announcements from store
		const storeAnnouncements = this.$store.getters.getAnnouncements;
		var filteredAnnouncements = [];

		// Filter out select announcements to be displayed
		for (let i = 0; i < 20; i++) {
			if (
				storeAnnouncements[i].text.includes("<!channel>") &&
				storeAnnouncements[i].text.length > 11
			) {
				const user = await this.getUser(storeAnnouncements[i].user);
				const dateTime = new Date(
					parseInt(storeAnnouncements[i].ts * 1000)
				);
				filteredAnnouncements.push({
					pfp: user.image_1024,
					name: user.display_name
						? user.display_name
						: user.real_name,
					content: storeAnnouncements[i].text
						.replace("<!channel>", "")
						.trim(),
					date:
						dateTime.toLocaleDateString() +
						", " +
						((dateTime.getHours() + 12) % 12) +
						":" +
						dateTime.getMinutes() +
						" " +
						dateTime.toLocaleTimeString().split(" ")[1],
				});
			}
		}

		// Display filtered announcements
		this.announcements = filteredAnnouncements.splice(0, 5);

		// Get all faculty members in DB
		await this.$store.dispatch("fetchFaculty");

		// Get faculty members from store
		const storeFaculty = this.$store.getters.getFaculty;

		// Push each professor's data to the professors array
		storeFaculty.forEach((doc) => {
			this.professors[doc.id] = doc.data();
		});

		this.professors = Object.fromEntries(
			Object.entries(this.professors).sort(
				([, a], [, b]) => Math.random() - 0.5
			)
		);
		this.professors = Object.fromEntries(
			Object.entries(this.professors).sort(
				([, a], [, b]) => Math.random() - 0.5
			)
		);
		this.professors = Object.fromEntries(
			Object.entries(this.professors).sort(
				([, a], [, b]) => Math.random() - 0.5
			)
		);
	},
};
</script>

<style>
.carousel__pagination-button::after {
	content: none !important;
}

.carousel__pagination-button {
	background-color: darkgray;
	margin: 0 5px;
	border-radius: 10px;
}

.show-576 {
	display: none;
}

/*
██   ██ ███████ ██████   ██████  
██   ██ ██      ██   ██ ██    ██ 
███████ █████   ██████  ██    ██ 
██   ██ ██      ██   ██ ██    ██ 
██   ██ ███████ ██   ██  ██████  
*/
.hero {
	width: width 100vw !important;
	overflow: hidden !important;
	height: 500px;
}

.hero .carousel__pagination {
	margin-bottom: 0;
	padding-left: 0;
	transform: translateY(-30px);
}

.hero .carousel__pagination-button {
	height: calc(var(--vc-pgn-height) * 1.5) !important;
	width: calc(var(--vc-pgn-width) * 1.5) !important;
}

.hero .carousel__pagination-button--active {
	background-color: white !important;
}

.hero .carousel__icon {
	width: calc(var(--vc-icn-width) * 2) !important;
	height: calc(var(--vc-icn-width) * 2) !important;
}

.hero .carousel__prev,
.hero .carousel__next {
	box-sizing: content-box;
	background-color: transparent;
	width: calc(var(--vc-nav-width) * 2) !important;
	height: calc(var(--vc-nav-height) * 2) !important;
	color: white !important;
}

.hero .carousel__prev {
	left: 30px !important;
}

.hero .carousel__next {
	right: 30px !important;
}

/*
█████   ███    ██ ███    ██  ██████  ██    ██ ███    ██  ██████ ███████ ███    ███ ███████ ███    ██ ████████ ███████ 
██   ██ ████   ██ ████   ██ ██    ██ ██    ██ ████   ██ ██      ██      ████  ████ ██      ████   ██    ██    ██      
███████ ██ ██  ██ ██ ██  ██ ██    ██ ██    ██ ██ ██  ██ ██      █████   ██ ████ ██ █████   ██ ██  ██    ██    ███████ 
██   ██ ██  ██ ██ ██  ██ ██ ██    ██ ██    ██ ██  ██ ██ ██      ██      ██  ██  ██ ██      ██  ██ ██    ██         ██ 
██   ██ ██   ████ ██   ████  ██████   ██████  ██   ████  ██████ ███████ ██      ██ ███████ ██   ████    ██    ███████ 
*/
.announcements .carousel {
	text-align: left;
	max-width: 1000px;
	margin: auto;
}

.announcements .carousel__pagination {
	margin-bottom: 0;
	padding-left: 0;
	transform: translateY(0px);
}

.announcements .carousel__pagination-button {
	height: calc(var(--vc-pgn-height) * 1.5) !important;
	width: calc(var(--vc-pgn-width) * 1.5) !important;
	background-color: darkgray;
}

.announcements .carousel__pagination-button--active {
	background-color: white !important;
}

.announcements .carousel__icon {
	width: calc(var(--vc-icn-width) * 2) !important;
	height: calc(var(--vc-icn-width) * 2) !important;
}

.announcements .carousel__prev,
.announcements .carousel__next {
	/* box-sizing: content-box; */
	background-color: transparent;
	width: calc(var(--vc-nav-width) * 2) !important;
	height: calc(var(--vc-nav-height) * 2) !important;
	color: white !important;
}

.announcements .carousel__prev {
	left: -60px !important;
}

.announcements .carousel__next {
	right: -60px !important;
}

.announcementComponent {
	width: 90% !important;
}

/*
███████  █████   ██████ ██    ██ ██      ████████ ██    ██ 
██      ██   ██ ██      ██    ██ ██         ██     ██  ██  
█████   ███████ ██      ██    ██ ██         ██      ████   
██      ██   ██ ██      ██    ██ ██         ██       ██    
██      ██   ██  ██████  ██████  ███████    ██       ██    
*/
.faculty .carousel {
	text-align: left;
}

.faculty .carousel__pagination {
	margin-bottom: 0;
	padding-left: 0;
	transform: translateY(0px);
}

.faculty .carousel__pagination-button {
	height: calc(var(--vc-pgn-height) * 1.5) !important;
	width: calc(var(--vc-pgn-width) * 1.5) !important;
	background-color: darkgray;
}

.faculty .carousel__pagination-button--active {
	background-color: white !important;
}

.faculty .carousel__icon {
	width: calc(var(--vc-icn-width) * 2) !important;
	height: calc(var(--vc-icn-width) * 2) !important;
}

.faculty .carousel__prev,
.faculty .carousel__next {
	/* box-sizing: content-box; */
	background-color: var(--FSCred);
	width: 50px !important;
	height: 50px !important;
	border-radius: 50% !important;
	color: white !important;
}

.faculty .carousel__prev {
	left: 30px !important;
}

.faculty .carousel__next {
	right: 30px !important;
}

.faculty .carousel__slide > .carousel__item {
	transform: scale(0.8);
	opacity: 0.5;
	transition: 0.5s;
}

.faculty .carousel__slide--next > .carousel__item {
	opacity: 0.9;
	transform: scale(0.9) translate(25px);
}

.faculty .carousel__slide--prev > .carousel__item {
	opacity: 0.9;
	transform: scale(0.9) translate(-25px);
}

.faculty .carousel__slide--active > .carousel__item {
	opacity: 1;
	transform: scale(1.1);
}

/*
███████ ██    ██ ███████ ███    ██ ████████ ███████ 
██      ██    ██ ██      ████   ██    ██    ██      
█████   ██    ██ █████   ██ ██  ██    ██    ███████ 
██       ██  ██  ██      ██  ██ ██    ██         ██ 
███████   ████   ███████ ██   ████    ██    ███████ 
*/
.events {
	max-height: 65vh !important;
	overflow-y: auto;
	width: 75%;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
}

.events .event-body {
	margin: 3rem auto !important;
}

.events .event-body:nth-of-type(1) {
	margin: 1rem auto 3rem !important;
}

.events .event-body:nth-last-of-type(1) {
	margin: 0 auto 1rem !important;
}

.events .carousel {
	text-align: left;
	width: 100vw;
	max-width: 500px;
	margin: auto;
}

.events .carousel__pagination {
	margin-bottom: 0;
	padding-left: 0;
	transform: translateY(0px);
}

.events .carousel__viewport {
	padding: 1.5rem 0;
}

.events .carousel__pagination-button {
	height: calc(var(--vc-pgn-height) * 1.5) !important;
	width: calc(var(--vc-pgn-width) * 1.5) !important;
	background-color: darkgray;
}

.events .carousel__pagination-button--active {
	background-color: white !important;
}

.events .carousel__icon {
	width: calc(var(--vc-icn-width) * 2) !important;
	height: calc(var(--vc-icn-width) * 2) !important;
}

.events .carousel__prev,
.events .carousel__next {
	/* box-sizing: content-box; */
	background-color: transparent;
	width: calc(var(--vc-nav-width) * 2) !important;
	height: calc(var(--vc-nav-height) * 2) !important;
	color: white !important;
}

.events .carousel__prev {
	left: -20px !important;
}

.events .carousel__next {
	right: -20px !important;
}

/*
████████  ██████  ██    ██ ██████  
   ██    ██    ██ ██    ██ ██   ██ 
   ██    ██    ██ ██    ██ ██████  
   ██    ██    ██ ██    ██ ██   ██ 
   ██     ██████   ██████  ██   ██ 
*/
.tour-link {
	transition: all 0.2s ease-in-out;
	background-color: rgba(0, 0, 0, 0.5);
	padding: 50px;
	border-radius: 20px;
}

.tour-link:hover {
	transform: scale(1.1);
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
	.hero {
		height: calc(500px * 0.7);
	}

	.hero .carousel__prev,
	.hero .carousel__next {
		scale: 0.85;
	}

	.hero .carousel__prev {
		left: -10px !important;
	}

	.hero .carousel__next {
		right: -10px !important;
	}

	.announcements .carousel__prev {
		left: -30px !important;
	}

	.announcements .carousel__next {
		right: -30px !important;
	}

	.events {
		width: 100%;
		overflow: hidden;
		max-height: unset !important;
	}
}

@media (max-width: 991.9px) {
	.announcements .carousel__prev {
		left: -40px !important;
	}

	.announcements .carousel__next {
		right: -40px !important;
	}
}

@media (max-width: 767.9px) {
	.announcements.container {
		width: 100vw !important;
	}

	.announcements .carousel__prev {
		left: -20px !important;
	}

	.announcements .carousel__next {
		right: -20px !important;
	}

	.announcementComponent {
		width: 80% !important;
	}
}

@media (max-width: 575.9px) {
	.hero {
		height: calc(500px * 0.6);
	}

	.carousel__prev,
	.carousel__next {
		display: none;
	}

	.show-576 {
		display: flex;
	}

	.announcementComponent {
		width: 100% !important;
	}
}

@media (max-width: 399.9px) {
}
</style>
