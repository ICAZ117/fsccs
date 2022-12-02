<template>
	<!-- HERO -->
	<SkewBox
		:leftBG="{
			backgroundImage: `url(https://www.nsu.edu/NSU/media/Photos/2017/09/Miscellaneous/IMG_4608-C_1.jpg)`,
			'background-position': 'top',
			'background-size': 'cover',
			width: '54vw!important',
		}"
		:leftColor="'transparent'"
		:rightColor="'var(--blue-gradient-right)'"
		:height="500"
		:padding="'70px 0 60px 0'"
		class="section"
	>
		<template v-slot:right>
			<div class="center vertical-center">
				<h1 class="white">CS Department Tutoring</h1>
			</div>
		</template>
	</SkewBox>

	<!-- SECTION -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/WCS.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.2"
		:overlayColor="'0, 0, 0'"
		class="section"
	>
		<div class="h-100 pb-2">
			<center>
				<div class="container py-5 h-100">
					<div class="col-9 topbackground">
						<h1 class="white mt-2 mb-2">
							Need help with your classes?
						</h1>
						<h2 class="white mt-2 mb-2 pb-1 bold">
							Ask a peer tutor!
						</h2>
						<h5
							class="white mt-4 mb-2"
							style="line-height: 2 !important"
						>
							The CS department offers a <i>free</i> tutoring
							service that you can take advantage of! Peer tutors
							are available to help with a variety of classes,
							especially intro classes like CSC 2280 and CSC 2290.
							This is a great resource to utilize!
						</h5>
					</div>
				</div>
			</center>
		</div>
	</Parallax>

	<!-- TUTORS -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/BG7.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.2"
		:overlayColor="'0, 0, 0'"
		class="section"
	>
		<div class="h-100 pb-2">
			<center>
				<div class="container py-5">
					<h1 class="mt-2 mb-4 bold">This Semester's Tutors</h1>
					<div
						class="col-5 tutorbackground"
						v-for="tutor in tutors"
						:key="tutor"
					>
						<img
							:src="tutor.picture"
							class="col-6"
							style="display: inline-block"
						/>
						<h4
							class="white mt-2 mb-2 col-6"
							style="display: inline-block"
						>
							{{ tutor.name }}
						</h4>
					</div>
				</div>
			</center>
		</div>
	</Parallax>

	<!-- WHERE-->
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/WCS2.jpg')})`,
			'background-position': 'right top',
			'background-size': 'cover',
			width: '54vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--FSCblue)'"
		:height="500"
		:padding="'70px 0 60px 0'"
	>
		<template v-slot:left>
			<div class="vertical-center">
				<h1 class="white">Where?</h1>
				<h5 class="white">Weinstein 120, the conference room</h5>
			</div>
		</template>
	</SkewBox>

	<!-- WHAT -->
	<SkewBox
		:leftBG="{
			backgroundImage: `url(https://th.bing.com/th/id/OIP.udrE6z4jI5Vdb3_VZo0l5QHaEK?w=274&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7)`,
			'background-position': 'right top',
			'background-size': 'cover',
			width: '54vw!important',
			transform: 'scaleY(-1)',
		}"
		:leftColor="'transparent'"
		:rightColor="'var(--FSCred)'"
		:height="500"
		:padding="'70px 0 60px 0'"
		style="transform: scaleY(-1)"
	>
		<template v-slot:right>
			<div
				class="vertical-center"
				style="transform: scaleY(-1); text-align: justify !important"
			>
				<h1 class="white">What?</h1>
				<h5 class="white">The classes offered this semester are:</h5>
				<div v-for="course in tutorInfo.courses" :key="course">
					<h5 class="white">{{ course }}</h5>
				</div>
			</div>
		</template>
	</SkewBox>

    <!-- WHEN -->
	<SkewBox
		:rightBG="{
			backgroundImage: `url(https://th.bing.com/th/id/OIP.qeZXtdLfFZVtRdY6shWwawHaEL?w=333&h=187&c=7&r=0&o=5&dpr=1.25&pid=1.7)`,
			'background-position': 'top',
			'background-size': 'cover',
			width: '54vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--FSCgrey)'"
		:height="500"
		:padding="'70px 0 60px 0'"
	>
		<template v-slot:left>
			<div class="vertical-center">
				<h1 class="white">When?</h1>
				<div v-for="day in tutorInfo.times" :key="day">
					<h5 class="white">{{ day.day }}: {{ day.time }}</h5>
				</div>
			</div>
		</template>
	</SkewBox>
	<SkewBox
		:leftBG="{
			backgroundImage: `url(https://akkadian.co.ke/wp-content/uploads/2018/05/Happy-people-Akkadian-800x533.jpg)`,
			'background-position': 'top',
			'background-size': 'cover',
			width: '54vw!important',
			transform: 'scaleY(-1)',
		}"
		:leftColor="'transparent'"
		:rightColor="'var(--FSCblue)'"
		:height="500"
		:padding="'70px 0 60px 0'"
		style="transform: scaleY(-1)"
	>
		<template v-slot:right>
			<div
				class="vertical-center"
				style="transform: scaleY(-1); text-align: justify !important"
			>
				<h1 class="white">Who?</h1>
				<h5 class="white">
					<i><strong>You!</strong></i> If you need help, come get it.
				</h5>
				<h5 class="white">#CSCARES</h5>
			</div>
		</template>
	</SkewBox>
</template>

<script>
import SkewBox from "@/components/SkewBox.vue";
import Parallax from "@/components/Parallax.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
	components: {
		SkewBox,
		Parallax,
		Carousel,
		Slide,
		Pagination,
		Navigation,
	},
	data() {
		return {
			tutors: {},
			tutorInfo: {},
		};
	},
	async beforeMount() {
		//GET TUTORS SECTION
		await this.$store.dispatch("fetchTutors");

		// Retrieve tutors
		const res = this.$store.getters.getTutors;

		// Push each tutors's data to the array
		res.forEach((doc) => {
			this.tutors[doc.id] = doc.data();
		});

		//GET COURSES SECTION
		await this.$store.dispatch("fetchTutorInfo");

		// Retrieve courses
		this.tutorInfo = this.$store.getters.getTutorInfo;
	},
};
</script>

<style>
.topbackground {
	background-color: rgba(0, 0, 0, 0.773);
	padding: 1rem;
}
.tutorbackground {
	background-color: rgba(0, 0, 0, 0.308);
	padding: 1rem;
	outline: 4px solid var(--FSCblue);
	display: inline-block;
	margin: 1rem;
}
</style>
