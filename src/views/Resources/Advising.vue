<template>
	<!-- HERO -->
	<SkewBox
		:leftBG="{
			backgroundImage: `url(${require('@/assets/img/Department/Advising-Roberson2.jpg')})`,
			'background-position': 'top left',
			'background-size': 'cover',
			width: '54vw!important',
		}"
		:leftColor="'transparent'"
		:rightColor="'var(--grey-gradient-right)'"
		:height="500"
		:padding="'120px 0 60px 0'"
		class="red-section"
	>
		<template v-slot:right>
			<div class="center vertical-center">
				<h1 class="white">Advising in the CS department</h1>
			</div>
		</template>
	</SkewBox>

	<!-- WHAT IS ADVISING -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/Matrix2.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.5"
		:overlayColor="'0, 0, 0'"
		class="red-section"
	>
		<div class="h-100 pb-2">
			<center>
				<div class="container py-5 h-100">
					<h1 class="white mt-2 mb-2 pb-1 bold">
						Advising...what does that mean?
					</h1>
					<h5
						class="white mt-4 mb-2 pb-1 mx-3"
						style="line-height: 2 !important"
					>
						When it's time to sign up for classes each semester, you
						will need to meet with your advisor! They will send you
						a message (either through email or Slack) and let you
						know when they are available. Once you have your
						meeting, you will be eligible to pick your classes.
					</h5>
					<p class="white mt-4 mx-3">
						Look on portal to find your advisor, or find out how to
						connect
						<a href="/about/faculty" class="faculty_link"
							><strong
								>here<i
									class="ms-1 fa-solid fa-arrow-right"
								></i></strong
						></a>
					</p>
				</div>
			</center>
		</div>
	</Parallax>

	<!-- HOW TO PREPARE -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/cube-pics/DSC00038.jpg')}`,
			'background-position': 'top',
		}"
		:height="'0'"
		:opacity="0.7"
		:overlayColor="'0, 0, 0'"
		class="red-section"
	>
		<div class="pb-2">
			<center>
				<div class="faculty container py-3">
					<h1 class="center FSCred mt-2 pb-1 bold">
						What should I do to prepare?
					</h1>
					<hr class="primary-hr mb-2" style="width: 80%" />
					<Carousel
						:wrapAround="true"
						:transition="600"
						:pauseAutoplayOnHover="true"
					>
						<Slide :key="0">
							<div class="w-50 mb-4 white">
								<h3 class="center bold pt-4 pb-1">
									Know who your advisor is
								</h3>
								<center>
									<h5
										class="py-2"
										style="line-height: 1.5 !important"
									>
										Do you have multiple majors? Make sure
										you know who your advisor is for all of
										them <i>and</i> that you can contact
										them. Portal will have that information
										listed.<br /><br />If you don't know how
										to contact your CS advisor, check out
										their faculty page!
									</h5>
								</center>
							</div>
						</Slide>
						<Slide :key="1">
							<div class="w-50 mb-4 white">
								<h3 class="center bold pt-4 pb-1">
									Schedule your advising appointments
								</h3>
								<center>
									<h5
										class="py-2"
										style="line-height: 1.5 !important"
									>
										When your advisor reaches out, remember
										to schedule an appointment to meet with
										them to go over your schedule. Most
										professors will have a lot of advisees
										so make sure to make your appointment
										early!<br /><br />If you have multiple
										advisors, don't forget to schedule one
										for each advisor.
									</h5>
								</center>
							</div>
						</Slide>
						<Slide :key="2">
							<div class="w-50 mb-4 white">
								<h3 class="center bold pt-4 pb-1">
									Start thinking about classes you need
								</h3>
								<center>
									<h5
										class="py-2"
										style="line-height: 1.5 !important"
									>
										It's a good idea to know what you want
										to take before your appointment. If you
										can, look over the classes available the
										upcoming semester before you see your
										advisor so they know which ones you
										want. This will save time and help your
										advisor map those classes to your
										remaining requirements.
									</h5>
								</center>
							</div>
						</Slide>
						<template #addons>
							<Navigation />
							<Pagination />
						</template>
					</Carousel>
				</div>
			</center>
		</div>
	</Parallax>

	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/Circuit1.jpg')}`,
			'background-position': 'left middle',
		}"
		:opacity="0.05"
		:overlayColor="'0, 0, 0'"
		class="red-section"
	>
		<div class="h-100 pb-2">
			<center>
				<div class="m-auto container py-5 h-100">
					<h1 class="center mt-2" style="color: white">
						Important Advising Documents
					</h1>
					<div class="m-0 row g-5">
						<div
							class="col-6"
							v-for="(resource, name) in advisingresources"
							:key="name"
						>
							<a
								:href="resource.link"
								style="text-decoration: none !important"
								target="_blank"
							>
								<InfoCard :title="resource.name">
									<p class="center card_text">
										{{ resource.description }}
									</p>
									<p class="center card_text">
										Click here to view the document<i
											class="ms-2 fa-solid fa-arrow-right"
										></i>
									</p>
								</InfoCard>
							</a>
						</div>
					</div>
				</div>
			</center>
		</div>
	</Parallax>

	<Parallax
		:image="{
			backgroundImage: `url(https://drscdn.500px.org/photo/1057546414/m%3D900/v2?sig=987f4482e7d6e75bf9aac64fecdbff1d8ed5aef08bcb4ace40d353ef4802f078)`,
			'background-position': 'top',
		}"
		:opacity="0.5"
		:overlayColor="'0, 0, 0'"
		:height="'70vh'"
	>
		<div style="height: 70vh !important">
			<div class="center vertical-center">
				<router-link
					to="/resources/degree-audit"
					class="no-decor link-box"
				>
					<h3 class="white bold tour-link">
						Explore the department degree audit tool
					</h3>
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
			advisingresources: {},
		};
	},
	async beforeMount() {
		// Get all resources
		await this.$store.dispatch("fetchAdvisingResources");

		// Retrieve resources
		const res = this.$store.getters.getAdvisingResources;

		// Push each resource's data to the array
		res.forEach((doc) => {
			this.advisingresources[doc.id] = doc.data();
		});
	},
};
</script>

<style>
a,
a:visited,
a:hover,
a:active,
a:focus {
	color: black;
}
.faculty_link {
	color: white !important;
}
.faculty_link:hover {
	color: var(--FSCred) !important;
}
.doc_card {
	display: inline-block;
}
.audit_section {
	position: relative;
	overflow: hidden;
	height: 500px;
}
.audit_pic {
	width: 100%;
	display: block;
}
.inner_square {
	transition: all ease 0.5s;
	background-color: rgba(186, 12, 47, 0.701);
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	/* color: white; */
	text-align: center;
	display: inline;
	position: absolute;
	padding: 2%;
	font-weight: bolder;
	color: black;
	border: 4px solid black;
}
.inner_square:hover {
	transition: all ease 0.5s;
	background-color: rgba(255, 255, 255, 0.826);
	color: var(--FSCred);
	border: 4px solid var(--FSCred);
}
</style>
