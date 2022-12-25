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
		:padding="'60px 0 0 0'"
		class="red-section hero"
	>
		<template v-slot:left>
			<div class="h-100">
				<div class="center vertical-center">
					<h1 class="white">Intramural CS Domination</h1>
				</div>
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
					>
						<h3 class="center">
							Home of the 2021-2022 All-Sports Champions
						</h3>
						<p class="mb-3 justify-large">
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
						<p class="justify-large">
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
		<div class="container py-5">
			<h3 class="center black pb-1">Photo Gallery</h3>
			<hr class="primary-hr mx-auto" style="width: 80%" />
			<Carousel
				:wrapAround="true"
				:transition="600"
				:pauseAutoplayOnHover="true"
				class="red-arrows"
			>
				<Slide :key="0">
					<div class="gallery-pic">
						<img
							src="@/assets/img/intramurals/im_bowling_2022.jpg"
						/>
					</div>
				</Slide>
				<Slide :key="1">
					<div class="gallery-pic">
						<img
							src="@/assets/img/intramurals/im_bouldering_2022.png"
						/>
					</div>
				</Slide>
				<Slide :key="2">
					<div class="gallery-pic">
						<img
							src="@/assets/img/intramurals/bowling-dept-2021.jpg"
						/>
					</div>
				</Slide>
				<Slide :key="3">
					<div class="gallery-pic">
						<img
							src="@/assets/img/intramurals/im_bouldering_2021.png"
						/>
					</div>
				</Slide>
				<Slide :key="4">
					<div class="gallery-pic">
						<img
							src="@/assets/img/intramurals/bowling-2021-mens-champions.jpg"
						/>
					</div>
				</Slide>
				<Slide :key="5">
					<div class="gallery-pic">
						<img
							src="@/assets/img/intramurals/im_softball_f21_03.jpg"
						/>
					</div>
				</Slide>
				<Slide :key="6">
					<div class="gallery-pic">
						<img src="@/assets/img/intramurals/OldChampPic.jpg" />
					</div>
				</Slide>
				<Slide :key="7">
					<div class="gallery-pic">
						<img src="@/assets/img/intramurals/Bouldering3.png" />
					</div>
				</Slide>
				<Slide :key="8">
					<div class="gallery-pic">
						<img src="@/assets/img/intramurals/IMG_0033.jpg" />
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

<style scoped>
</style>