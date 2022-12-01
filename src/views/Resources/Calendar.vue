<template>
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
	>
		<template v-slot:left>
			<div class="center vertical-center">
				<h1 style="color: white">Events Calendar</h1>
			</div>
		</template>
	</SkewBox>
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/BG3.jpg')})`,
			'background-position': 'right top',
		}"
		:opacity="0.4"
		:overlayColor="'0, 0, 0'"
	>
		<div
			class="container px-0"
			style="
				display: flex;
				justify-content: flex-end;
				transform: translateX(-3px);
			"
			v-show="!showCalendar"
		>
			<button
				class="btn btn-md btn-primary my-4"
				@click="showCalendar = !showCalendar"
			>
				Toggle Calendar View
			</button>
		</div>

		<div
			class="px-0"
			style="
				display: flex;
				justify-content: flex-end;
				width: 90%;
				margin: auto;
			"
			v-show="showCalendar"
		>
			<button
				class="btn btn-md btn-primary my-4"
				@click="showCalendar = !showCalendar"
			>
				Toggle Calendar View
			</button>
		</div>

		<div class="container py-4" v-show="!showCalendar">
			<div class="row g-5 block-center">
				<div
					class="
						five-col
						col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12
					"
					v-for="(event, i) in events"
					:key="i"
				>
					<CalendarCard
						class="mx-auto"
						:event="event"
						:color="colors[i % colors.length]"
					></CalendarCard>
				</div>
			</div>
		</div>
		<div v-show="showCalendar" class="pb-4">
			<center>
				<div class="mx-4">
					<div
						data-tockify-component="calendar"
						data-tockify-calendar="thecubelife"
					></div>
				</div>
			</center>
		</div>
	</Parallax>
</template>

<script>
import Parallax from "../../components/Parallax.vue";
import CalendarCard from "../../components/CalendarCard.vue";
import SkewBox from "../../components/SkewBox.vue";

export default {
	components: {
		Parallax,
		CalendarCard,
		SkewBox,
	},
	data() {
		return {
			allEvents: [],
			colors: [
				"#d60000",
				"#4643fa",
				"#f6c026",
				"#f5511d",
				"#039be5",
				"#6e24aa",
			],
			showCalendar: false,
		};
	},
	computed: {
		events() {
			return this.allEvents.slice(0, 20);
		},
	},
	async beforeMount() {
		this.allEvents = this.$store.getters.getEvents;
	},
};
</script>

<style scoped>
.st-bg-td-last {
	background: red;
}

.row > * {
	padding: 0;
}

@media (min-width: 1400px) {
	.five-col {
		flex: 0 0 auto;
		width: 20%;
	}
}
</style>
