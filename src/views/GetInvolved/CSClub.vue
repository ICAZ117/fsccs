<template>
	<!-- HERO -->
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/Department/csclub2.png')})`,
			'background-position': 'top',
			'background-size': 'cover',
			width: '54vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--blue-gradient-left)'"
		:height="500"
		:padding="'120px 0 60px 0'"
		class="red-section"
	>
		<template v-slot:left>
			<div class="center vertical-center">
				<h1 class="white">Computer Science Club</h1>
			</div>
		</template>
	</SkewBox>

	<!-- OFFICERS -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/BG7.jpg')}`,
			'background-position': 'center',
			'background-repeat': 'no-repeat',
			'background-size': 'cover',
		}"
		:height="'0'"
		:opacity="0"
		:overlayColor="'0, 0, 0'"
	>
		<div class="container py-5">
			<h3 class="center">CS club: A place for everyone</h3>

			<p class="justify-large">
				We offer a wide variety events from educational seminars in
				relation to the major, to lighthearted video game tournaments.
				There is something for anybody with an affinity for STEM related
				topics and hobbies! Feel free to stop by and hang out.
			</p>

			<hr />
			<h3 class="my-5 center">Meet the 2022-2023 Exec Members</h3>

			<div class="w-100">
				<div class="carousel-wrapper">
					<Carousel
						:itemsToShow="
							windowWidth >= 992
								? 2
								: windowWidth >= 768
								? 1.5
								: 1
						"
						:wrapAround="true"
						class="red-arrows"
					>
						<Slide v-for="(officer, name) in officers" :key="name">
							<div>
								<ProfileCard
									:pfp="officer.picture"
									:name="officer.name"
									:role="officer.position"
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

	<!-- GALLERY -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/BG3.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.3"
		:overlayColor="'0, 0, 0'"
	>
		<div class="container py-5">
			<h3 class="center white pb-1">Photo Gallery</h3>
			<hr class="primary-hr mx-auto" style="width: 80%" />
			<Carousel
				:wrapAround="true"
				:transition="600"
				:pauseAutoplayOnHover="true"
				class="red-arrows"
			>
				<Slide :key="0">
					<div class="gallery-pic">
						<img src="@/assets/img/cs-club/CSC1.png" />
					</div>
				</Slide>
				<Slide :key="1">
					<div class="gallery-pic">
						<img src="@/assets/img/cs-club/CSC2.jpg" />
					</div>
				</Slide>
				<Slide :key="2">
					<div class="gallery-pic">
						<img src="@/assets/img/cs-club/CSC3.jpg" />
					</div>
				</Slide>
				<Slide :key="3">
					<div class="gallery-pic">
						<img src="@/assets/img/cs-club/CSC4.png" />
					</div>
				</Slide>
				<Slide :key="4">
					<div class="gallery-pic">
						<img src="@/assets/img/cs-club/CSC5.png" />
					</div>
				</Slide>
				<Slide :key="5">
					<div class="gallery-pic">
						<img src="@/assets/img/cs-club/CSC6.png" />
					</div>
				</Slide>
				<Slide :key="6">
					<div class="gallery-pic">
						<img src="@/assets/img/cs-club/CSC7.png" />
					</div>
				</Slide>
				<Slide :key="7">
					<div class="gallery-pic">
						<img src="@/assets/img/cs-club/CSC8.png" />
					</div>
				</Slide>
				<Slide :key="8">
					<div class="gallery-pic">
						<img src="@/assets/img/cs-club/CSC9.jpg" />
					</div>
				</Slide>
				<Slide :key="9">
					<div class="gallery-pic">
						<img src="@/assets/img/cs-club/CSC10.jpg" />
					</div>
				</Slide>
				<Slide :key="10">
					<div class="gallery-pic">
						<img src="@/assets/img/cs-club/CSC11.jpg" />
					</div>
				</Slide>
				<Slide :key="11">
					<div class="gallery-pic">
						<img src="@/assets/img/cs-club/CSC12.jpg" />
					</div>
				</Slide>
				<template #addons>
					<Navigation />
					<Pagination />
				</template>
			</Carousel>
		</div>
	</Parallax>
</template>

<script>
import SkewBox from "@/components/SkewBox.vue";
import Parallax from "@/components/Parallax.vue";
import InfoCard from "@/components/InfoCard.vue";
import ProfileCard from "@/components/ProfileCard.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
	components: {
		SkewBox,
		Parallax,
		InfoCard,
		Carousel,
		Slide,
		Pagination,
		Navigation,
		ProfileCard,
	},
	data() {
		return {
			officers: {},
			windowHeight: 0,
			windowWidth: 0,
		};
	},
	methods: {
		getWindowSize() {
			this.windowHeight = window.innerHeight;
			this.windowWidth = window.innerWidth;
		},
	},
	created() {
		window.addEventListener("resize", this.getWindowSize);
	},
	destroyed() {
		window.removeEventListener("resize", this.getWindowSize);
	},
	async beforeMount() {
		this.getWindowSize();
		// Get all cs officers
		await this.$store.dispatch("fetchOfficers");

		// Retrieve the officers
		const res = this.$store.getters.getOfficers;

		// Push each officer's data to the array
		res.forEach((doc) => {
			this.officers[doc.id] = doc.data();
		});
	},
};
</script>

<style scoped>
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
