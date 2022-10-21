<template>
	<!-- HERO -->
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/WCS3.jpg')})`,
			'background-position': 'bottom',
			'background-size': 'cover',
		}"
		:rightColor="'transparent'"
		:leftColor="'rgba(10, 10, 10, 0.7)'"
		:height="500"
		:padding="'70px 0 60px 0'"
        class="section"
	>
		<template v-slot:left>
			<div class="center vertical-center">
				<h1 class="white">Programming Team</h1>
			</div>
		</template>
	</SkewBox>

	<!-- ABOUT THE CUBE LIFE -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/Matrix6.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.6"
		:overlayColor="'0, 0, 0'"
        class="section"
	>
		<div class="h-100 pb-2">
			<center>
				<div class="m-auto faculty container py-5 h-100">
					<h1 class="center white mt-2 mb-4 pb-1">
						What is the Programming Team?
					</h1>
					<p
						class="white"
						style="text-align: justify; line-height: 2 !important"
					>
						First bg
					</p>
				</div>
			</center>
		</div>
	</Parallax>

    <!-- ABOUT THE CUBE LIFE -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/Matrix6.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.6"
		:overlayColor="'0, 0, 0'"
        class="section"
	>
		<div class="h-100 pb-2">
			<center>
				<div class="m-auto faculty container py-5 h-100">
					<h1 class="center white mt-2 mb-4 pb-1">
						ACM ICPC
					</h1>
					<p
						class="white"
						style="text-align: justify; line-height: 2 !important"
					>
						Dinner pic, skewbox
					</p>
				</div>
			</center>
		</div>
	</Parallax>
    
    <!-- ABOUT THE CUBE LIFE -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/Matrix6.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.6"
		:overlayColor="'0, 0, 0'"
        class="section"
	>
		<div class="h-100 pb-2">
			<center>
				<div class="m-auto faculty container py-5 h-100">
					<h1 class="center white mt-2 mb-4 pb-1">
						How to prepare
					</h1>
					<p
						class="white"
						style="text-align: justify; line-height: 2 !important"
					>
						drawing pic, button layout from fsc cs page
					</p>
				</div>
			</center>
		</div>
	</Parallax>
</template>

<script>
import SkewBox from "@/components/SkewBox.vue";
import Parallax from "@/components/Parallax.vue";

export default {
	components: {
		SkewBox,
		Parallax,
	},
};
</script>

<style></style>