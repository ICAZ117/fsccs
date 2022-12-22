<template>
	<div
		class="expandable"
		:style="
			hideText && windowWidth < 768
				? 'max-height: 200px; overflow: hidden; -webkit-mask-image: linear-gradient(to bottom, white 50%, transparent 100%); mask-image: linear-gradient(to bottom, white 50%, transparent 100%);'
				: ''
		"
	>
		<slot></slot>
	</div>
	<div style="display: flex">
		<div
			class="expandIcon mx-auto btn btn-primary btn-sm"
			v-if="windowWidth < 768"
			@click="hideText = !hideText"
		>
			<span v-if="hideText">
				Read More<i class="ms-2 ps-1 fas fa-chevron-down"></i>
			</span>
			<span v-else>
				Read Less<i class="ms-2 ps-1 fas fa-chevron-up"></i>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			windowHeight: 0,
			windowWidth: 0,
			hideText: true,
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
	beforeMount() {
		this.getWindowSize();
	},
};
</script>

<style scoped>
.expandable {
	width: 100%;
}

.expandIcon {
	transition: all 0.3s ease-in-out;
}

.expandIcon:hover {
	scale: 1.1;
}

/* @media (max-width: 767.9px) {
	.expandable {
		max-height: 200px !important;
	}
} */
</style>