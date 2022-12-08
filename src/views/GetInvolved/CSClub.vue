<template>
    <!-- HERO -->
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/Department/csclub1.png')})`,
			'background-position': 'top',
			'background-size': 'cover',
			width: '54vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--FSCblue)'"
		:height="500"
		:padding="'120px 0 60px 0'"
        class="red-section hero"
	>
		<template v-slot:left>
			<div class="center vertical-center">
				<h1 class="white">Computer Science Club</h1>
			</div>
		</template>
	</SkewBox>

    <!-- OFFICERS -->
	<div class="center intro" :style="`background-image:url(${require('@/assets/img/BG7.jpg')}); background-repeat: no-repeat; background-size: cover;`">
		<h1 class="pt-5 pb-1">CS club: A place for everyone</h1>

		<h5
			style="
				margin-left: 10%;
				margin-right: 10%;
				padding-bottom: 30px;
				color: var(--FSClightblue);
				line-height: 1.5 !important;
			"
		>
			We offer a wide variety events from educational seminars in relation
			to the major, to lighthearted video game tournaments. There is
			something for anybody with an affinity for STEM related topics and
			hobbies! Feel free to stop by and hang out.
		</h5>

		<hr />
		<h2 class="py-2 intro-title" style="transform: translate(0, 10%)" >
			<strong>Meet the 2022-2023 Exec Members</strong>
		</h2>

		<div class="">
			<div class="cs-club cs-exec">
				<Carousel :itemsToShow="2.5" :wrapAround="true" class="car2">
					<Slide v-for="(officer, name) in officers" :key="name">
						<div class="exec">
							<ProfileCard
								:pfp="officer.picture"
								:name="officer.name"
								:role="officer.position"
							></ProfileCard>
						</div>
					</Slide>
					<template #addons>
						<Navigation />
						<Pagination class="show-576" />
					</template>
				</Carousel>
			</div>
		</div>
	</div>

	<!-- GALLERY -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/BG3.jpg')}`,
			'background-position': 'center',
		}"
		:height="'0'"
		:opacity="0"
		:overlayColor="'0, 0, 0'"
		class="gallery"
	>
		<div class="">
			<center>
				<div class="m-auto cs-club container">
					<div class="outside-car">
						<h1
							class="center white mt-2 mb-2 pb-1"
							style="font-weight: bold"
						>
							Peruse Past Events
						</h1>
						<hr class="primary-hr mb-4" style="width: 50%" />
						<Carousel
							class="carousel car"
							:wrap-around="true"
							:transition="600"
							:pauseAutoplayOnHover="true"
						>
							<Slide :key="0">
								<div class="pic2">
									<img src="@/assets/img/BGlunch.png" />
								</div>
							</Slide>
							<Slide :key="1">
								<div class="pic2">
									<img src="@/assets/img/BGlunch3.png" />
								</div>
							</Slide>
							<Slide :key="2">
								<div class="pic2">
									<img src="@/assets/img/BGlunch5-3.png" />
								</div>
							</Slide>
							<template #addons>
								<Navigation />
								<Pagination />
							</template>
						</Carousel>
					</div>
				</div>
			</center>
		</div>

		<!-- <div class="link center pt-4">
			<a
				style="color: white; text-decoration: none;"
				href="/resources/calendar"
			>
				Check out our department calendar for upcoming events!
			</a>
		</div> -->
	</Parallax>

	<!-- ABOUT CSC -->
	<SkewBox
		:leftBG="{
			backgroundImage: `url(${require('@/assets/img/CS_department_pic1.png')})`,
			'background-position': 'center',
			'background-size': 'cover',
			width: '54vw!important',
		}"
		:leftColor="'transparent'"
		:rightColor="'var(--FSCred)'"
		:height="500"
		:padding="'70px 0 60px 0'"
		:maintainSkewbox="false"
		:pictureSide="'left'"
		:invert="false"
		class="skew"
	>
		<template v-slot:right>
			<div
				class="cs-info"
				style="display: inline-block; transform: translate(0, -5%)"
			>
				<div class="white center">
					<em><h3>What does the CS club have to offer?</h3></em>
				</div>
				<div class="items center pt-2">
					<h4 class="item left col-10">Exploring engaging topics</h4>
					<div class="pb-1"></div>

					<h4 class="item right col-8">
						Spend time with other CS students
					</h4>
					<div class="pb-1"></div>

					<h4 class="item left col-10">
						Get to know your professors
					</h4>
					<div class="pb-1"></div>

					<h4 class="item right col-8">Enjoy fun events</h4>
				</div>
			</div>
		</template>
	</SkewBox>
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
		};
	},
	async beforeMount() {
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
.cs-club :deep(.carousel) {
	text-align: left;
}

.cs-club :deep(.carousel__pagination) {
	margin-bottom: 0;
	padding-left: 0;
	transform: translateY(0px);
}

.cs-club :deep(.carousel__pagination-button) {
	height: calc(var(--vc-pgn-height) * 1.5) !important;
	width: calc(var(--vc-pgn-width) * 1.5) !important;
	background-color: darkgray;
}

.cs-club :deep(.carousel__pagination-button--active) {
	background-color: white !important;
}

.cs-club :deep(.carousel__icon) {
	width: calc(var(--vc-icn-width) * 2) !important;
	height: calc(var(--vc-icn-width) * 2) !important;
}

.cs-club :deep(.carousel__pre)v,
.cs-club :deep(.carousel__next) {
	/* box-sizing: content-box; */
	background-color: var(--FSCred);
	width: 50px !important;
	height: 50px !important;
	border-radius: 50% !important;
	color: white !important;
}

.cs-club :deep(.carousel__prev) {
	left: -90px !important;
}

.cs-club :deep(.carousel__next) {
	right: -90px !important;
}

.cs-exec {
	margin-top: 3rem;
	margin-bottom: 3rem;
	margin-left: 3rem;
	margin-right: 3rem;
	padding-left: 3rem;
	padding-right: 3rem;
}

.item {
	border: 2px solid white;
	background-color: var(--FSClightblue);
	padding-top: 2px;
	padding-bottom: 2px;
	padding-left: 2px;
	padding-right: 2px;
}
.right {
	margin-left: 35%;
}
.left {
	/* margin-left: 8%; */
	color: white;
}
.pic {
	display: inline-block;
}
.primary-hr {
	width: 75%;
}
.exec {
	display: inline-block;
}
.items h4:hover {
	transition: all ease 0.5s;
	scale: 1.1;
	font-style: italic;
}
.items h4.left:hover {
	margin-left: 15%;
}
.items h4.right:hover {
	margin-left: 10%;
}
.items h4 {
	transition: all ease 0.5s;
}
.gallery {
	padding-left: 10%;
	padding-right: 10%;
	padding-bottom: 20px;
}

.car2 img {
	overflow: hidden !important;
}

.pic2 {
	object-fit: contain !important;
	overflow: hidden !important;
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
		height: calc(500px * 0.7) !important;
	}

	.car :deep(.carousel__prev) {
		left: 2px !important;
	}

	.car :deep(.carousel__next) {
		right: 2px !important;
	}

	.car2 .exec {
		scale: .8 ;
	}

	.cs-exec {
		margin-top: 0 !important;
	}

	.car2 {
		height: 500px !important;
	}

	.car2 :deep(.carousel__prev), .car2 :deep(.carousel__next), .car :deep(.carousel__prev), .car :deep(.carousel__next) {
		scale: .8 !important;
	}

	.gallery {
		padding-top: 20px !important;
		height: 600px !important;
	}

	.car h1 {
		font-size: 40px !important;
	}

	.car .carousel__slide {
		height: 400px !important;
	}

	.cs-info {
		margin-left: 18% !important;
	}


}

@media (max-width: 991.9px) {
	.car2 .exec {
		scale: .7 ;
	}

	.cs-info {
		margin-left: 12% !important;
	}

	.car :deep(.carousel__prev) {
		left: -60px !important;
	}

	.car :deep(.carousel__next) {
		right: -60px !important;
	}

}

@media (max-width: 767.9px) {
	.intro h1 {
		font-size: 28px !important;
	}

	.carousel__prev,
	.carousel__next {
		scale: 0.65;
	}

	.car :deep(.carousel__prev) {
		left: -60px !important;
	}

	.car :deep(.carousel__next) {
		right: -60px !important;
	}

	.gallery {
		height: 330px !important;
	}

	.gallery h1 {
		font-size: 25px !important;
	}

	.pic2 {
		max-height: 100% !important;
	}

	.car .carousel__slide {
		height: 200px !important;
	}

	.car {
		height: 100% !important;
	}

	.intro .intro-title {
		padding-top: 20px !important;
	}

	.car2 {
		height: 230px !important;
	}

	.car2 .carousel__slide {
		height: 230px !important;
	}

	.car2 .exec {
		scale: .4 ;
	}

	.cs-info {
		margin-left: 8% !important;
	}

}

@media (max-width: 575.9px) {
	.hero {
		height: calc(500px * 0.5) !important;
	}

	h1 {
		font-size: 20px !important;
	}

	.carousel__prev,
	.carousel__next {
		display: none;
	}

	.gallery {
		height: 350px !important;
	}

	.gallery h1 {
		font-size: 20px !important;
	}

	/* .pic2 {
		margin-top: 10px;
		margin-left:0;
		margin-right:0;
		margin-bottom: 0;
		max-height: 100% !important;
		max-width: 85% !important;
		padding: 5px;
	} */

	.car .carousel__slide {
		height: 220px !important;
	}

	.show-576 {
		display: flex;
	}

	.intro .intro-title {
		padding-top: 5px !important;
	}

	.car2 {
		height: 250px !important;
	}

	.cs-exec {
		margin: 0 !important;
		padding: 20px !important;
		scale: 1;
		width: 100%;
		transform: translate(0, -20px);
	}

	.cs-info {
		margin-left: 20% !important;
		margin-right: 20% !important;
		font-size: smaller !important;
	}

	.cs-info h3 {
		font-size: 20px !important;
		margin-bottom: 2rem !important;
	}

	.intro h5 {
		font-size: 15px !important;
	}


}

@media (max-width: 399.9px) {
}


</style>
