<template>
	<div :key="forceReloadPage">
        <!-- MAIN SECTION -->
		<Parallax
			:image="{
				backgroundImage: `url(${require('@/assets/img/WCS.jpg')})`,
				'background-position': 'center',
			}"
			:height="'100vh'"
			:opacity="0.7"
			:overlayColor="'25, 25, 25'"
            class="red-section"
		>
			<div class="blur">
				<SkewBox
					:height="windowHeight * 0.7"
					:padding="'80px 0 0 0'"
					:divisionPosition="35"
					:leftColor="'linear-gradient(to bottom, var(--FSCred), rgba(var(--FSCredRGB), 0.5) 60%, transparent)'"
					:rightColor="'transparent'"
				>
					<template v-slot:left>
						<div class="facultyPic mb-3">
							<img
								:src="professor.pfp"
								alt=""
								class="facultyPic"
							/>
						</div>
						<div class="w-100">
							<center>
								<h3 class="white">{{ professor.name }}</h3>
								<h6
									style="color: lightgray"
									v-html="professor.title"
								></h6>
							</center>
						</div>
						<hr class="white-hr" />
						<div class="contact-info row">
							<h5 class="col-1">
								<i class="fa-solid fa-envelope"></i>
							</h5>
							<h5 class="col-11">
								&nbsp;&nbsp;&nbsp;<a
									:href="'mailto:' + professor.email"
									class="white"
									>{{ professor.email }}</a
								>
							</h5>

							<h5 class="col-1">
								<i class="fa-solid fa-phone"></i>
							</h5>
							<h5 class="col-11">
								&nbsp;&nbsp;&nbsp;{{ professor.phone }}
							</h5>

							<h5 class="col-1">
								<i class="fa-solid fa-location-dot"></i>
							</h5>
							<h5 class="col-11">
								&nbsp;&nbsp;&nbsp;{{ professor.office }}
							</h5>
						</div>
					</template>
					<template v-slot:right>
						<div
							class="vertical-center"
							style="transform: translateY(-2rem)"
						>
							<Quote :author="'- ' + professor.name">{{
								professor.quote
							}}</Quote>
						</div>
					</template>
				</SkewBox>

				<div class="professor mx-5 py-5">
					<div class="container white">
						<tabs
							:key="forceReload + forceReloadPage"
							:options="{
								useUrlFragment: false,
								defaultTabHash: 'bio',
							}"
							nav-class="m-0 px-0 row tab-headers"
							nav-item-class="col p-0"
							nav-item-link-class="tab-header vertical-center white no-decor"
							panels-wrapper-class="tab-panels p-3"
							cache-lifetime="0"
						>
							<tab
								v-if="professor.bio"
								id="bio"
								name="Biography"
								v-html="professor.bio"
								:key="forceReload + forceReloadPage"
							></tab>
							<tab
								v-if="professor.interests"
								name="Interests"
								v-html="professor.interests"
								:key="forceReload + forceReloadPage"
							></tab>
							<tab
								v-if="professor.education"
								name="Education"
								v-html="professor.education"
								:key="forceReload + forceReloadPage"
							></tab>
							<tab
								v-if="professor.awards"
								name="Honors/Awards"
								v-html="professor.awards"
								:key="forceReload + forceReloadPage"
							></tab>
							<tab
								v-if="professor.publications"
								name="Publications"
								v-html="professor.publications"
								:key="forceReload + forceReloadPage"
							></tab>
						</tabs>
					</div>
				</div>
			</div>
		</Parallax>

        <!-- CAROUSEL -->
		<Parallax
			:image="{
				backgroundImage: `url(${require('@/assets/img/BG4.jpg')}`,
				'background-position': 'left middle',
			}"
			:height="'0'"
			:opacity="0.2"
			:overlayColor="'0, 0, 0'"
			class=""
		>
			<div class="h-100 pb-2">
				<div class="faculty container py-5 h-100">
					<h1 class="center FSCred mt-2 mb-4 pb-1 bold">
						Meet the Faculty
					</h1>
					<Carousel :itemsToShow="3.5" :wrapAround="true">
						<Slide
							v-for="(professor, name) in professors"
							:key="name"
						>
							<div class="carousel__item my-5">
								<FacultyCard
									:professor="professor"
									:name="name"
									@redirectPage="forceReloadPage++"
								></FacultyCard>
							</div>
						</Slide>
						<template #addons>
							<Navigation />
						</template>
					</Carousel>
				</div>
			</div>
		</Parallax>
	</div>
</template>

<script>
import Parallax from "../components/Parallax.vue";
import SkewBox from "../components/SkewBox.vue";
import Quote from "../components/Quote.vue";
import "vue3-carousel/dist/carousel.css";
import { Tabs, Tab } from "vue3-tabs-component";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import FacultyCard from "../components/FacultyCard.vue";

export default {
	components: {
		Parallax,
		SkewBox,
		Quote,
		FacultyCard,
		Carousel,
		Slide,
		Pagination,
		Navigation,
		Tabs,
		Tab,
	},
	data() {
		return {
			professor: "",
			name: "",
			windowHeight: 0,
			facultyList: {},
			professors: {},
			forceReload: 0,
			forceReloadPage: 0,
		};
	},
	async beforeMount() {
		// Get name from URL param
		this.name = this.$route.query.id;

		// Get window height
		this.windowHeight = window.innerHeight;

		// Get all faculty members in DB
		await this.$store.dispatch("fetchFaculty");

		// Get faculty members from store
		this.facultyList = this.$store.getters.getFaculty;

		// Save the appropriate professor into the professor object
		this.facultyList.forEach((doc) => {
			if (doc.id == this.name) {
				this.professor = doc.data();
			}
			this.professors[doc.id] = doc.data();
		});

		// Redirect to home page if
		if (!this.professor) {
			this.$router.push("/");
		}

		this.professors = Object.fromEntries(
			Object.entries(this.professors).sort(
				([, a], [, b]) => Math.random() - 0.5
			)
		);

		this.forceReload++;
	},
};
</script>

<style>
.tab-headers {
	border-radius: 10px 10px 0 0;
	overflow: hidden;
	/* gap: 10px; */
}

.tab-headers > *:not(:last-child) {
	border-right: 1px solid gray;
}

.tab-headers li {
	text-decoration: none;
	list-style-type: none;
}

.tab-header {
	display: flex;
	background-color: var(--FSCgrey);
	height: 50px;
	justify-content: center;
	transition: all ease 0.3s;
}

.tab-header:hover {
	background-color: gray;
}

.tab-header.is-active {
	background-color: var(--FSCred);
}

.tab-panels {
	background-color: rgba(0, 0, 0, 0.6);
	border-radius: 0 0 10px 10px;
}

.facultyPic {
	height: 250px;
	width: 250px;
	background-color: white;
	border-radius: 50%;
	margin: auto;
}

img.facultyPic {
	border: 5px solid var(--FSCgrey);
}

.contact-info {
	color: white;
	margin: 1rem;
}

.title {
	display: inline-block;
	font-size: 2rem;
	color: blue;
	padding-left: 10%;
	width: 60%;
	/* margin-right: 10%; */
	padding-top: 10%;
}

.secondary {
	display: inline-block;
	font-size: 1.6rem;
	color: blue;
	padding-left: 50px;
	width: 10em;
	margin-right: 10%;
}

.picture {
	display: inline-block;
	border-radius: 10px;
}

.biotext {
	display: inline-block;
	font-size: 1rem;
	color: darkslategray;
	/* width: 48%; */
}
</style>