<template>
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/WCS3.jpg')})`,
			'background-position': 'top',
			'background-size': 'cover',
			width: '54vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--grey-gradient-left)'"
		:height="500"
		:padding="'120px 0 60px 0'"
		class="red-section"
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
					<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%234285F4&ctz=America%2FLos_Angeles&src=Y2MzMGh0cXQzOWRkZXBzYm0wZTUzNThxZ29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23616161" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>
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
