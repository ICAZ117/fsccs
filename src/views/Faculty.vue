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
					:height="Math.max(windowHeight, 600)"
					:padding="'60px 0 0 0'"
					:divisionPosition="40"
					:leftColor="'linear-gradient(to bottom, var(--FSCred), rgba(var(--FSCredRGB), 0.5) 60%, transparent)'"
					:rightColor="'transparent'"
					:maintainSkewbox="false"
					:pictureSide="'right'"
					:mobileColor="'linear-gradient(to bottom, var(--FSCred), rgba(var(--FSCredRGB), 0.5) 60%, transparent)'"
				>
					<template v-slot:left>
						<div class="pt-5 pt-xl-0">
							<div class="facultyPic mb-3 mt-5 mt-xl-3">
								<img
									:src="professor.pfp"
									alt=""
									class="facultyPic"
								/>
							</div>
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
						<div class="white">
							<div class="customRow">
								<h5>
									<i class="fa-solid fa-envelope"></i>
								</h5>
								<h5>
									&nbsp;&nbsp;&nbsp;<a
										:href="'mailto:' + professor.email"
										class="white"
										>{{ professor.email }}</a
									>
								</h5>
							</div>
							<div class="customRow">
								<h5>
									<i class="fa-solid fa-phone"></i>
								</h5>
								<h5>&nbsp;&nbsp;&nbsp;{{ professor.phone }}</h5>
							</div>

							<div class="customRow">
								<h5>
									<i class="fa-solid fa-location-dot"></i>
								</h5>
								<h5>
									&nbsp;&nbsp;&nbsp;&nbsp;{{
										professor.office
									}}
								</h5>
							</div>
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

				<!-- TABS -->
				<div class="professor mx-s-5 py-5">
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
								:key="forceReload + forceReloadPage"
							>
								<Expandable>
									<div
										v-html="professor.bio"
										class="justify-large"
									></div>
								</Expandable>
							</tab>
							<tab
								v-if="professor.interests"
								name="Interests"
								:key="forceReload + forceReloadPage"
							>
								<Expandable>
									<div
										v-html="professor.interests"
										class="justify-large"
									></div>
								</Expandable>
							</tab>
							<tab
								v-if="professor.education"
								name="Education"
								:key="forceReload + forceReloadPage"
							>
								<Expandable>
									<div
										v-html="professor.education"
										class="justify-large"
									></div>
								</Expandable>
							</tab>
							<tab
								v-if="professor.awards"
								name="Honors/Awards"
								:key="forceReload + forceReloadPage"
							>
								<Expandable>
									<div
										v-html="professor.awards"
										class="justify-large"
									></div>
								</Expandable>
							</tab>
							<tab
								v-if="professor.publications"
								name="Publications"
								:key="forceReload + forceReloadPage"
							>
								<Expandable>
									<div
										v-html="professor.publications"
										class="justify-large"
									></div>
								</Expandable>
							</tab>
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
				<div class="container py-5 h-100">
					<h1 class="primary center mt-2 bold">Meet the Faculty</h1>
					<Carousel
						:itemsToShow="numVisibleProfessors"
						:wrapAround="true"
						class="red-arrows scale-carousel"
					>
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
							<Pagination />
						</template>
					</Carousel>
				</div>
			</div>
		</Parallax>
	</div>
</template>

<script>
import Expandable from "@/components/Expandable.vue";
import Parallax from "../components/Parallax.vue";
import SkewBox from "../components/SkewBox.vue";
import Quote from "../components/Quote.vue";
import "vue3-carousel/dist/carousel.css";
import { Tabs, Tab } from "vue3-tabs-component";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import FacultyCard from "../components/FacultyCard.vue";

export default {
	components: {
		Expandable,
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
			windowWidth: 0,
			facultyList: {},
			professors: {},
			forceReload: 0,
			forceReloadPage: 0,
		};
	},
	methods: {
		getWindowSize() {
			this.windowHeight = window.innerHeight;
			this.windowWidth = window.innerWidth;
		},
	},
	computed: {
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
	async beforeMount() {
		// Get name from URL param
		this.name = this.$route.query.id;

		// Get window height
		this.getWindowSize();
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

<style scoped>
.customRow {
	display: flex;
	flex-direction: row;
	margin: auto;
}

.customRow .left {
	width: fit-content !important;
}

:deep(.tab-headers) {
	border-radius: 10px 10px 0 0;
	overflow: hidden;
}

:deep(.tab-headers > *:not(:last-child)) {
	border-right: 1px solid gray;
}

:deep(.tab-headers li) {
	text-decoration: none;
	list-style-type: none;
}

:deep(.tab-header) {
	display: flex;
	background-color: var(--FSCgrey);
	height: 50px;
	justify-content: center;
	transition: all ease 0.3s;
    padding: 1rem;
}

:deep(.tab-header:hover) {
	background-color: gray;
}

:deep(.tab-header.is-active) {
	background-color: var(--FSCred);
}

:deep(.tab-panels) {
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