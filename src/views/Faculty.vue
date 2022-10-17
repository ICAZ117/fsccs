<template>
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/WCS.jpg')})`,
			'background-position': 'center',
		}"
		:height="'100vh'"
		:opacity="0.7"
		:overlayColor="'25, 25, 25'"
	>
		<div class="blur">
			<SkewBox
				:height="windowHeight - 1"
				:padding="'80px 0 0 0'"
				:divisionPosition="35"
				:leftColor="'linear-gradient(to bottom, var(--FSCred), transparent)'"
				:rightColor="'transparent'"
			>
				<template v-slot:left>
					<div class="facultyPic mb-3">
						<img :src="professor.pfp" alt="" class="facultyPic" />
					</div>
					<div class="w-100">
						<center>
							<h3 class="white">{{ professor.name }}</h3>
							<h6 style="color: lightgray">{{ professor.title }}</h6>
						</center>
					</div>
					<hr class="white-hr" />
					<div class="contact-info row">
						<h5 class="col-1"><i class="fa-solid fa-envelope"></i></h5>
						<h5 class="col-11">
							&nbsp;&nbsp;&nbsp;<a :href="'mailto:' + professor.email" class="white">{{
								professor.email
							}}</a>
						</h5>

						<h5 class="col-1"><i class="fa-solid fa-phone"></i></h5>
						<h5 class="col-11">&nbsp;&nbsp;&nbsp;{{ professor.phone }}</h5>

						<h5 class="col-1"><i class="fa-solid fa-location-dot"></i></h5>
						<h5 class="col-11">&nbsp;&nbsp;&nbsp;{{ professor.office }}</h5>
					</div>
				</template>
				<template v-slot:right>
					<div class="vertical-center" style="transform: translateY(-2rem)">
						<Quote :author="'- ' + professor.name">{{ professor.quote }}</Quote>
					</div>
				</template>
			</SkewBox>

			<div class="professor mx-5">
				<h1 class="white center">Biography</h1>
				<hr class="white-hr" />
				<div class="white" v-html="professor.bio"></div>
				
				<center>
				<div class="row g-5 my-3">
					<div class="col-4">
						<h3 class="white">Interests</h3>
						<hr class="white-hr" />
						<div class="white">
							<p>{{ professor.interests }}</p>
						</div>
					</div>
					<div class="col-4">
						<h3 class="white">Education</h3>
						<hr class="white-hr" />
						<div class="white" v-html="professor.education"></div>
					</div>
					<div class="col-4">
						<h3 class="white">Honors & Awards</h3>
						<hr class="white-hr" />
						<div class="white" v-html="professor.awards"></div>
					</div>
				</div>
				</center>
				<h1 class="white">Publications</h1>
				<hr class="white-hr" />
				<div class="white" v-html="professor.publications"></div>
			</div>
		</div>
	</Parallax>

	<!-- Start Faculty Section -->
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
				<h1 class="center FSCred mt-2 mb-4 pb-1 bold">Meet the Faculty</h1>
				<Carousel :itemsToShow="3.5" :wrapAround="true">
					<Slide v-for="(professor, name) in professors" :key="name">
						<div class="carousel__item my-5">
							<FacultyCard :professor="professor" :name="name"></FacultyCard>
						</div>
					</Slide>
					<template #addons>
						<Navigation />
					</template>
				</Carousel>
			</div>
		</div>
	</Parallax>
	<!-- End Faculty Section -->
</template>

<script>
	import Parallax from "../components/Parallax.vue";
	import SkewBox from "../components/SkewBox.vue";
	import Quote from "../components/Quote.vue";
	import "vue3-carousel/dist/carousel.css";
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
		},
		data() {
			return {
				professor: "",
				name: "",
				windowHeight: 0,
				facultyList: {},
				professors: {},
			};
		},
		async beforeMount() {
			// Get name from URL param
			this.name = this.$route.query.name;

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
			if (this.professor == "") {
				// this.$router.push("/");
			} else {
				console.log(this.professor);
			}

			this.professors = Object.fromEntries(
				Object.entries(this.professors).sort(([, a], [, b]) => Math.random() - 0.5)
			);
		},
	};
</script>

<style>
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
