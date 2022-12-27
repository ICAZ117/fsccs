<template>
	<!-- HERO -->
	<SkewBox
		:leftBG="{
			backgroundImage: `url(${require('@/assets/img/Department/Advising-Roberson2.jpg')})`,
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
				<h1 class="white">Advising</h1>
			</div>
		</template>
	</SkewBox>

	<!-- WHAT IS ADVISING -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/BG7.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0"
		:overlayColor="'0, 0, 0'"
		class="red-section"
	>
		<div class="container py-5">
			<h3 class="center">What is Advising?</h3>
			<p class="mb-3 justify-large">
				When it's time to sign up for classes each semester, you will
				need to meet with your advisor! They will send you a message
				(either through email or Slack) and let you know when they are
				available. Once you have your meeting, you will be eligible to
				pick your classes.
			</p>
			<p class="justify-large">
				Look on portal to find your advisor, or find out how to connect
				<router-link to="/about/faculty" class="link">
					<strong>
						here
						<i class="ms-1 fa-solid fa-arrow-right"></i>
					</strong>
				</router-link>
			</p>
		</div>
	</Parallax>

	<!-- HOW TO PREPARE -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/Department/EicholtzWithStudents.jpg')}`,
			'background-position': 'top',
		}"
		:height="'0'"
		:opacity="0.7"
		:overlayColor="'0, 0, 0'"
		class="red-section"
	>
		<div class="container py-5">
			<h3 class="center primary">What should I do to prepare?</h3>
			<hr class="primary-hr mx-auto" style="width: 80%" />
			<Carousel
				:wrapAround="true"
				:transition="600"
				:pauseAutoplayOnHover="true"
			>
				<Slide :key="0">
					<div class="container white">
						<h3 class="center">Know who your advisor is</h3>
						<p class="mx-auto justify-large">
							Do you have multiple majors? Make sure you know who
							your advisor is for all of them
							<i>and</i> that you can contact them. Portal will
							have that information listed.<br /><br />If you
							don't know how to contact your CS advisor, check out
							their faculty page!
						</p>
					</div>
				</Slide>

				<Slide :key="1">
					<div class="container white">
						<h3 class="center">
							Schedule your advising appointments
						</h3>
						<p class="mx-auto justify-large">
							When your advisor reaches out, remember to schedule
							an appointment to meet with them to go over your
							schedule. Most professors will have a lot of
							advisees so make sure to make your appointment
							early!<br /><br />If you have multiple advisors,
							don't forget to schedule one for each advisor.
						</p>
					</div>
				</Slide>

				<Slide :key="2">
					<div class="container white">
						<h3 class="center">
							Start thinking about classes you need
						</h3>
						<p class="mx-auto justify-large">
							It's a good idea to know what you want to take
							before your appointment. If you can, look over the
							classes available the upcoming semester before you
							see your advisor so they know which ones you want.
							This will save time and help your advisor map those
							classes to your remaining requirements.
						</p>
					</div>
				</Slide>
				<template #addons>
					<Navigation />
					<Pagination />
				</template>
			</Carousel>
		</div>
	</Parallax>

	<!-- RESOURCES -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/Circuit1.jpg')}`,
			'background-position': 'left middle',
		}"
		:opacity="0.05"
		:overlayColor="'0, 0, 0'"
		class="red-section"
	>
		<div class="container py-5">
			<h3 class="center white">Important Advising Documents</h3>
			<div class="m-0 row g-5">
				<div
					class="col-lg-6 col-12"
					v-for="(resource, name) in advisingResources"
					:key="name"
				>
					<a :href="resource.link" class="card-link" target="_blank">
						<InfoCard :title="resource.name">
							<p class="center card_text">
								{{ resource.description }}
							</p>
							<p class="center card_text">
								View Document
								<i class="ms-2 fa-solid fa-arrow-right"></i>
							</p>
						</InfoCard>
					</a>
				</div>
			</div>
		</div>
	</Parallax>

	<!-- DEGREE AUDIT -->
	<Parallax
		:image="{
			backgroundImage: `url(https://drscdn.500px.org/photo/1057546414/m%3D900/v2?sig=987f4482e7d6e75bf9aac64fecdbff1d8ed5aef08bcb4ace40d353ef4802f078)`,
			'background-position': 'top',
		}"
		:opacity="0.5"
		:overlayColor="'0, 0, 0'"
		:height="'0'"
	>
		<div class="my-5 py-5">
			<div class="center vertical-center">
				<router-link
					to="/resources/degree-audit"
					class="no-decor link-box"
				>
					<h3 class="white bold">Go to Degree Audit</h3>
				</router-link>
			</div>
		</div>
	</Parallax>
</template>

<script>
import SkewBox from "@/components/SkewBox.vue";
import Parallax from "@/components/Parallax.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import InfoCard from "@/components/InfoCard.vue";

export default {
	components: {
		SkewBox,
		Parallax,
		Carousel,
		Slide,
		Pagination,
		Navigation,
		InfoCard,
	},
	data() {
		return {
			advisingResources: {},
		};
	},
	async beforeMount() {
		// Get all resources
		await this.$store.dispatch("fetchAdvisingResources");

		// Retrieve resources
		const res = this.$store.getters.getAdvisingResources;

		// Push each resource's data to the array
		res.forEach((doc) => {
			this.advisingResources[doc.id] = doc.data();
		});
	},
};
</script>

<style scoped>
.link-box {
	background-color: rgba(0, 0, 0, 0.7);
	padding: 3rem 2rem;
	margin: auto 2rem;
	border-radius: 2rem;
	min-width: 60%;
}

.card-link {
	text-decoration: none;
	color: black;
}

:deep(.carousel__prev) {
	left: -50px !important;
}

:deep(.carousel__next) {
	right: -50px !important;
}
</style>
