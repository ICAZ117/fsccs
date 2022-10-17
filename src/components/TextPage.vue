<template>
	<SkewBox
		:rightBG="heroImage"
		:rightColor="'transparent'"
		:leftColor="leftColor"
		:height="500"
		:padding="'70px 0 60px 0'"
	>
		<template v-slot:left>
			<div class="center vertical-center">
				<h1 :style="titleStyle">{{ title }}</h1>
			</div>
		</template>
	</SkewBox>
	<Parallax
		:image="background"
		:height="'0'"
		:opacity="opacity"
		:overlayColor="overlay"
	>
		<div class="container page-text blur py-5 px-5">
			<slot></slot>
		</div>
	</Parallax>
</template>

<script>
	import Parallax from "./Parallax.vue";
	import SkewBox from "./SkewBox.vue";

	export default {
		props: {
			title: {
				type: String,
				default: "TextPage",
			},
			titleStyle: {
				type: String,
				default: "color: white",
			},
			heroImage: {
				type: Object,
				default: {
					backgroundImage: `url(${require("@/assets/img/BG7.jpg")})`,
					"background-position": "top",
					"background-size": "cover",
				},
			},
			leftColor: {
				type: String,
				default: "rgba(10, 10, 10, 0.7);",
			},
			background: {
				type: Object,
				default: {
					backgroundImage: `url(${require("@/assets/img/BG4.jpg")})`,
					"background-position": "top",
					"background-size": "cover",
				},
			},
            opacity: {
                type: Number,
                default: 0
            },
            overlay: {
                type: String,
                default: "'0, 0, 0'"
            }
		},
		components: {
			Parallax,
			SkewBox,
		},
	};
</script>

<style>
    .page-text {
		background-color: rgba(0, 0, 0, 0.5);
        color: white;
	}
</style>
