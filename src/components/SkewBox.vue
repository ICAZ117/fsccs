<template>
	<div :style="'height: ' + cssHeight + '!important; overflow: hidden!important;'">
		<div class="bgs">
			<div class="bg" :style="leftBG"></div>
			<div class="bg" :style="rightBG" style="right: 0 !important"></div>
		</div>
		<div class="poly--holder">
			<div class="poly-item" :style="'background: ' + leftColor">
				<div class="poly-content poly-left">
					<slot name="left"></slot>
				</div>
			</div>
			<div class="poly-item" :style="'background: ' + rightColor">
				<div class="poly-content poly-right">
					<slot name="right"></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			leftColor: {
				type: String,
				required: false,
				default: "var(--FSCred)",
			},
			rightColor: {
				type: String,
				required: false,
				default: "var(--FSCblue)",
			},
			leftBG: {
				type: Object,
				required: false,
				default: {},
			},
			rightBG: {
				type: Object,
				required: false,
				default: {},
			},
			divisionPosition: {
				type: Number,
				required: false,
				default: 50,
			},
			height: {
				type: Number,
				required: false,
				default: 500,
			},
			padding: {
				type: String,
				required: false,
				default: "60px 0 60px 0",
			},
			opacity: {
				type: Number,
				default: 0,
				required: false,
			},
			overlayColor: {
				type: String,
				default: "0, 0, 0",
				required: false,
			},
		},

		data() {
			return {
				x: 0,
				cssHeight: "",
				windowHeight: "",
			};
		},
		beforeMount() {
			this.windowHeight = window.innerHeight;
		},
		mounted() {
			this.x = Math.tan((10 * Math.PI) / 180) * (this.height / 2) + "px";
			this.cssHeight = this.height + "px";
		},
	};
</script>

<style scoped>
	.poly--holder {
		overflow: hidden !important;
		height: v-bind(cssHeight) !important;
		transform: translateY(calc(-1 * v-bind(cssHeight)));
		--left: calc(-1% * (100 - v-bind(divisionPosition)));
		--right: calc(1% * v-bind(divisionPosition));
		--leftWidth: calc(1vw * (v-bind(divisionPosition) - 10));
		--rightWidth: calc(1vw * ((100 - v-bind(divisionPosition)) - 10));
	}

	.poly--holder .poly-item {
		box-sizing: border-box;
		margin: 0;
		transform: skewX(-10deg) translateX(10px);
		-moz-transform: skewX(-10deg);
		-webkit-transform: skewX(-10deg);
		width: 100vw !important;
		height: v-bind(cssHeight) !important;
		padding: v-bind(padding);
		z-index: 50;
	}

	.poly--holder .poly-item:nth-of-type(1) {
		margin: 0;
		transform: translateX(var(--left)) skewX(-10deg);
	}

	.poly--holder .poly-item:nth-of-type(2) {
		margin: 0;
		transform: translateX(var(--right)) translateY(calc(-1 * v-bind(cssHeight)))
			skewX(-10deg);
	}

	.bgs {
		z-index: -10 !important;
		height: v-bind(cssHeight);
		overflow-y: hidden;
	}
	.bg {
		width: 100% !important;
		height: v-bind(cssHeight);
		box-shadow: inset 0 0 0 2000px rgba(v-bind(overlayColor), v-bind(opacity));
	}

	.bgs .bg:nth-of-type(2) {
		transform: translateY(calc(-1 * v-bind(cssHeight)));
		float: right;
	}

	.poly-content {
		transform: skewX(10deg);
		padding: 1rem;
		margin-left: 2rem;
		overflow: hidden;
		height: 100%;
	}

	.poly-left {
		width: var(--leftWidth) !important;
		float: right;
		margin-right: calc(v-bind(x));
	}

	.poly-right {
		width: var(--rightWidth) !important;
		margin-left: calc(v-bind(x));
	}

	.row.poly--holder {
		margin: 0 !important;
	}
</style>
