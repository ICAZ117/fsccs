<template>
	<iframe src="https://fsc-virtual-tour.web.app/" class="tour" v-if="(windowWidth >= 1200)"></iframe>
	<div class="tour" v-if="(windowWidth < 1200)">
		Sorry, the virtual tour is only available on desktop devices!
	</div>
</template>

<script>
export default {
	data() {
		return {
            windowWidth: 0,
        };
	},
	methods: {
		getWindowSize() {
			this.windowWidth = window.innerWidth;
		},
	},
	created() {
		window.addEventListener("resize", this.getWindowSize);
	},
	destroyed() {
		window.removeEventListener("resize", this.getWindowSize);
	},
    beforeMount() {
        this.windowWidth = window.innerWidth;
    }
};
</script>

<style scoped>
.tour {
	height: 100vh;
	width: 100vw;
	padding-top: 80px;
}
</style>
