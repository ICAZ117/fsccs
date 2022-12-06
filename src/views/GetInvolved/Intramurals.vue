<template>
	<!-- HERO -->
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/intramurals/BannerBlur.jpg')})`,
			'background-position': 'right',
			'background-size': 'cover',
			width: '55vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--blue-gradient-left)'"
		:height="500"
		:padding="'120px 0 60px 0'"
		class="red-section"
	>
		<template v-slot:left>
			<div class="center vertical-center">
				<h1 class="white">Intramural CS Domination</h1>
			</div>
		</template>
	</SkewBox>

	<!-- ABOUT IMS -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/intramurals/Cornhole.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.6"
		:overlayColor="'0, 0, 0'"
		class="red-section"
	>
		<div class="h-100">
			<center>
				<div class="m-auto container py-5 h-100">
					<div
						class="white"
						style="text-align: justify; line-height: 2 !important"
					>
						<h3 class="center white">
							Home of the 2021-2022 All-Sports Champions
						</h3>
						<p>
							Yes, you read that correctly! With Dr. Eicholtz
							leading the way and rallying students each and every
							week, the Computer Science Department won the
							2021-2022 All-Sports Championship for Intramural
							Sports here at FSC. Along with taking home the
							championship in several individual sports, including
							Bocce Ball, Bowling, eSports (Apex Legends),
							Swimming, Trivia, and more, the Computer Science
							Department beat out all other organizations,
							fraternities, and sororities, and earned the highest
							overall points over the 2021-2022 academic year.
						</p>
						<p>
							Our continued success is strictly conditional on
							YOUR participation and motivation. Join in the fun,
							and let's keep adding more and more Championship
							banners to be displayed in the Wellness Center!
						</p>
					</div>
				</div>
			</center>
		</div>
	</Parallax>

	<!-- GALLERY -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/BG7.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0"
		:overlayColor="'0, 0, 0'"
	>
		<div class="h-100 pb-2">
			<center>
				<div class="m-auto py-5 h-100 container">
					<h1 class="center mt-2 mb-4 pb-1">Gallery</h1>

					<div class="gallery">
						<Carousel :itemsToShow="1" :wrapAround="true">
							<Slide :key="0">
								<img
									src="@/assets/img/intramurals/im_bowling_2022.jpg"
									height="500"
									style="object-fit: cover"
								/>
							</Slide>
							<Slide :key="1">
								<img
									src="@/assets/img/intramurals/im_bouldering_2022.png"
									height="500"
									style="object-fit: cover"
								/>
							</Slide>
							<Slide :key="2">
								<img
									src="@/assets/img/intramurals/bowling-dept-2021.jpg"
									height="500"
									style="object-fit: cover"
								/>
							</Slide>
							<Slide :key="3">
								<img
									src="@/assets/img/intramurals/im_bouldering_2021.png"
									height="500"
									style="object-fit: cover"
								/>
							</Slide>
							<Slide :key="4">
								<img
									src="@/assets/img/intramurals/bowling-2021-mens-champions.jpg"
									height="500"
									style="object-fit: cover"
								/>
							</Slide>
							<Slide :key="5">
								<img
									src="@/assets/img/intramurals/im_softball_f21_03.jpg"
									height="500"
									style="object-fit: cover"
								/>
							</Slide>
							<Slide :key="6">
								<img
									src="@/assets/img/intramurals/OldChampPic.jpg"
									height="500"
									style="object-fit: cover"
								/>
							</Slide>
							<Slide :key="7">
								<img
									src="@/assets/img/intramurals/Bouldering3.png"
									height="500"
									style="object-fit: cover"
								/>
							</Slide>
							<Slide :key="8">
								<img
									src="@/assets/img/intramurals/IMG_0033.jpg"
									height="500"
									style="object-fit: cover"
								/>
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
	</Parallax>
</template>

<script>
import SkewBox from "@/components/SkewBox.vue";
import Parallax from "@/components/Parallax.vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
	components: {
		SkewBox,
		Parallax,
		Carousel,
		Slide,
		Pagination,
		Navigation,
	},
};
</script>

<style>
.gallery {
	margin: 0 7rem;
	padding: 0 5rem;
}
.gallery .carousel {
	text-align: left;
}

.gallery .carousel__pagination {
	margin-bottom: 0;
	padding-left: 0;
	transform: translateY(0px);
}

.gallery .carousel__pagination-button {
	height: calc(var(--vc-pgn-height) * 1.5) !important;
	width: calc(var(--vc-pgn-width) * 1.5) !important;
	background-color: darkgray;
}

.gallery .carousel__pagination-button--active {
	background-color: var(--FSCred) !important;
}

.gallery .carousel__icon {
	width: calc(var(--vc-icn-width) * 2) !important;
	height: calc(var(--vc-icn-width) * 2) !important;
}

.gallery .carousel__prev,
.gallery .carousel__next {
	/* box-sizing: content-box; */
	background-color: var(--FSCred);
	width: 50px !important;
	height: 50px !important;
	border-radius: 50% !important;
	color: white !important;
}

.gallery .carousel__prev {
	left: -80px !important;
}

.gallery .carousel__next {
	right: -80px !important;
}

.gallery .carousel__slide > .carousel__item {
	transform: scale(0.8);
	opacity: 0.5;
	transition: 0.5s;
}

.gallery .carousel__slide--next > .carousel__item {
	opacity: 0.9;
	transform: scale(0.9) translate(25px);
}

.gallery .carousel__slide--prev > .carousel__item {
	opacity: 0.9;
	transform: scale(0.9) translate(-25px);
}

.gallery .carousel__slide--active > .carousel__item {
	opacity: 1;
	transform: scale(1.1);
}
</style>