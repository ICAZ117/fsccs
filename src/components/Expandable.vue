<template>
	<div
		class="expandable"
		:style="
			hideText && (windowWidth < breakpoint || alwaysCollapse)
				? `max-height: ${height}; overflow: hidden; -webkit-mask-image: linear-gradient(to bottom, white 50%, transparent 100%); mask-image: linear-gradient(to bottom, white 50%, transparent 100%);`
				: ''
		"
	>
		<div id="expandableContent">
			<slot @update="test()"></slot>
		</div>
	</div>
	<div style="display: flex">
		<div
			:class="
				'expandIcon mx-auto btn btn-primary btn-sm ' +
				(hideText ? '' : 'mt-3')
			"
			v-if="windowWidth < breakpoint || alwaysCollapse"
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
	props: {
		breakpoint: {
			type: Number,
			required: false,
			default: 768,
		},
		alwaysCollapse: {
			type: Boolean,
			required: false,
			default: false,
		},
		height: {
			type: String,
			required: false,
			default: "200px",
		},
	},
	watch: {
		"$refs.expandableContent": function (newVal, oldVal) {
			this.slotHeight = this.$refs.expandableContent.offsetHeight;
			console.log(this.slotHeight);
		},
	},
	data() {
		return {
			slotHeight: 0,
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