<template>
	<!-- HERO -->
	<SkewBox
		:leftBG="{
			backgroundImage: `url(${require('@/assets/img/Department/Tutoring1.jpg')}`,
			'background-position': 'top',
			'background-size': 'cover',
			width: '54vw!important',
		}"
		:leftColor="'transparent'"
		:rightColor="'var(--grey-gradient-right)'"
		:height="500"
		:padding="'60px 0 0 0'"
		class="red-section"
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
			backgroundImage: `url(${require('@/assets/img/BG7.jpg')}`,
			'background-position': 'center',
		}"
		:height="'0'"
		:opacity="0"
		:overlayColor="'0, 0, 0'"
		class="red-section"
	>
		<div class="container py-5">
			<div class="mx-auto blackBox p-4 white">
				<h3 class="center">
					Need help with your classes? Ask a peer tutor!
				</h3>
				<p class="justify-large">
					The CS department offers a <i>free</i> tutoring service that
					you can take advantage of! Peer tutors are available to help
					with a variety of classes, especially intro classes like CSC
					2280 and CSC 2290. This is a great resource to utilize!
				</p>
			</div>
		</div>
	</Parallax>

	<!-- TUTORS -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/Matrix6.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0"
		:overlayColor="'0, 0, 0'"
	>
		<div class="py-5">
			<h3 class="white center">This Semester's Tutors</h3>
			<div class="w-100">
				<div class="carousel-wrapper">
					<Carousel
						:itemsToShow="1"
						:wrapAround="true"
						autoplay="5000"
						class="red-arrows"
					>
						<Slide v-for="tutor in tutors" :key="tutor">
							<div>
								<ProfileCard
									:pfp="tutor.picture"
									:name="tutor.name"
									class="h-100"
								></ProfileCard>
							</div>
						</Slide>

						<template #addons>
							<Navigation />
							<Pagination />
						</template>
					</Carousel>
				</div>
			</div>
		</div>
	</Parallax>

	<!-- WHERE-->
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/Department/meeting.jpg')})`,
			'background-position': 'center',
			'background-size': 'cover',
			width: '58vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--red-gradient-left)'"
		:height="450"
		:padding="'0'"
		:maintainSkewbox="true"
		:pictureSide="'right'"
		:invert="false"
	>
		<template v-slot:left>
			<div class="vertical-center">
				<h3 class="white">Where?</h3>
				<p class="white center">
					Weinstein 120/121, the conference room
				</p>
			</div>
		</template>
	</SkewBox>

	<!-- WHAT -->
	<SkewBox
		:leftBG="{
			backgroundImage: `url(${require('@/assets/img/Department/PythonCode.jpg')})`,
			'background-position': 'center',
			'background-size': 'cover',
			width: '58vw!important',
			transform: 'scaleY(-1)',
		}"
		:leftColor="'transparent'"
		:rightColor="'var(--blue-gradient-right)'"
		:height="450"
		:padding="'0'"
		:maintainSkewbox="true"
		:pictureSide="'left'"
		:invert="true"
		style="transform: scaleY(-1)"
	>
		<template v-slot:right>
			<div
				class="vertical-center center white"
				style="transform: scaleY(-1); padding: 0 0 0 1rem"
			>
				<h3>What?</h3>
				<p>The classes offered this semester are:</p>
				<div style="display: inline-block">
					<span
						v-for="course in tutorInfo.courses"
						:key="course"
						class="course"
					>
						{{ course }}
					</span>
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
			width: '58vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--red-gradient-left)'"
		:height="450"
		:padding="'0'"
		:maintainSkewbox="true"
		:pictureSide="'right'"
		:invert="false"
	>
		<template v-slot:left>
			<div class="vertical-center white">
				<h3>When?</h3>
				<div class="justify-large">
					<p v-for="day in tutorInfo.times" :key="day">
						{{ day.day }}: {{ day.time }}
					</p>
				</div>
			</div>
		</template>
	</SkewBox>

	<!-- WHO -->
	<SkewBox
		:leftBG="{
			backgroundImage: `url(${require('@/assets/img/Department/Tutoring2.jpg')}`,
			'background-position': 'top',
			'background-size': 'cover',
			width: '58vw!important',
			transform: 'scaleY(-1)',
		}"
		:leftColor="'transparent'"
		:rightColor="'var(--blue-gradient-right)'"
		:height="450"
		:padding="'0'"
		:maintainSkewbox="true"
		:pictureSide="'left'"
		:invert="true"
		style="transform: scaleY(-1)"
	>
		<template v-slot:right>
			<div class="vertical-center white" style="transform: scaleY(-1)">
				<h3>Who?</h3>
				<p class="center">
					<i><strong>You!</strong></i> If you need help, come get it.
				</p>
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
import ProfileCard from "@/components/ProfileCard.vue";

export default {
	components: {
		SkewBox,
		Parallax,
		Carousel,
		Slide,
		Pagination,
		Navigation,
		ProfileCard,
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
.course {
	flex: 1;
}
.course ~ .course::before {
	content: ", ";
}
.blackBox {
	background-color: rgba(0, 0, 0, 0.7);
	border-radius: 1rem;
}

.carousel-wrapper {
	margin: 0 7rem;
	padding: 0 5rem;
}

.carousel-wrapper :deep(.carousel__prev) {
	left: -80px !important;
}

.carousel-wrapper :deep(.carousel__next) {
	right: -80px !important;
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
@media (max-width: 1399.9px) {
	.carousel-wrapper {
		padding: 0;
	}
}

@media (max-width: 1199.9px) {
	.carousel-wrapper {
		margin: 0 5rem;
	}
}

@media (max-width: 575.9px) {
	.carousel-wrapper {
		margin: 0;
	}
}
</style>
