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
			<!-- CALENDAR CONFIGURATION - DO NOT DELETE!!!! -->
			<!-- https://open-web-calendar.herokuapp.com/ -->
			<!-- 
                ICAL: https://calendar.google.com/calendar/ical/cc30htqt39ddepsbm0e5358qgo%40group.calendar.google.com/public/basic.ics
                TITLE: Department Calendar
                LANGUAGE: English
                SKIN: Material
                CSS1: rgba(20, 20, 20, 0.3); color: white;
                CSS2: #ba0c2f
                CSS3: #eee; color: black;
                CSS4: rgba(20, 20, 20, 0.3); color: white;
                CSS5: rgba(70, 70, 70, 0.3); color: white;
                EXTRA CSS:
                    .dhx_cal_date {
                        color: white!important;
                    }

                    .dhx_cal_prev_button, .dhx_cal_next_button {
                        filter: brightness(0) saturate(100%) invert(13%) sepia(92%) saturate(4490%) hue-rotate(340deg) brightness(77%) contrast(99%);
                    }

                    .event {
                        color: white; background-color: transparent!important;
                    }

                    .dhx_body, .dhx_event_move.dhx_title, .dhx_cal_event .dhx_body {
                        background-color: #ba0c2f;
                        overflow-y: hidden;
                    }

                    .dhx_scale_holder .dhx_cal_event .dhx_body {
                        overflow: hidden;
                    }
                    table, .dhx_month_head, .dhx_month_body {
                        border-color: #ba0c2f;
                    }
                LOADING ANIMATION: no loader
                VIEWS: Month, Week, Day, Next, Previous, Today, Date
             -->
			<center>
				<iframe
					id="open-web-calendar"
					src="https://open-web-calendar.herokuapp.com/calendar.html?url=https%3A%2F%2Fcalendar.google.com%2Fcalendar%2Fical%2Fcc30htqt39ddepsbm0e5358qgo%2540group.calendar.google.com%2Fpublic%2Fbasic.ics&amp;title=Department%20Calendar&amp;css=.dhx_cal_navline%2C%20.dhx_scale_bar%2C%20.dhx_cal_container%2C%20.dhx_cal_header%20%7Bbackground-color%3A%20rgba(20%2C%2020%2C%2020%2C%200.3)%3B%20color%3A%20white%3B%3B%7D%0A.event%2C%20.dhx_cal_tab.active%2C%20.dhx_cal_tab.active%3Ahover%20%7Bbackground-color%3A%20%23ba0c2f%3B%7D%20.dhx_month_head%2C%20.dhx_cal_tab%2C%20.dhx_cal_today_button%20%7Bcolor%3A%20%23ba0c2f%3B%7D%20.dhx_cal_tab%2C%20.dhx_cal_tab.active%20%7Bborder-color%3A%20%23ba0c2f%3B%7D%0A.dhx_scale_holder_now%2C%20.dhx_now%20.dhx_month_head%2C%20.dhx_now%20.dhx_month_body%20%7B%20background-color%3A%20%23eee%3B%20color%3A%20black%3B%3B%7D%0A.dhx_month_body%2C%20.dhx_month_head%2C%20.dhx_cal_container%20%7B%20background-color%3A%20rgba(20%2C%2020%2C%2020%2C%200.3)%3B%20color%3A%20white%3B%3B%20%7D%0A.dhx_after%20.dhx_month_body%2C%20.dhx_before%20.dhx_month_body%2C%20.dhx_after%20.dhx_month_head%2C%20.dhx_before%20.dhx_month_head%20%7B%20background-color%3A%20rgba(70%2C%2070%2C%2070%2C%200.3)%3B%20color%3A%20white%3B%3B%20%7D%0A.dhx_cal_date%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20white!important%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20.dhx_cal_prev_button%2C%20.dhx_cal_next_button%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20filter%3A%20brightness(0)%20saturate(100%25)%20invert(13%25)%20sepia(92%25)%20saturate(4490%25)%20hue-rotate(340deg)%20brightness(77%25)%20contrast(99%25)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20.event%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20white%3B%20background-color%3A%20transparent!important%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20.dhx_body%2C%20.dhx_event_move.dhx_title%2C%20.dhx_cal_event%20.dhx_body%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20background-color%3A%20%23ba0c2f%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20overflow-y%3A%20hidden%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20.dhx_scale_holder%20.dhx_cal_event%20.dhx_body%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0Atable%2C%20.dhx_month_head%2C%20.dhx_month_body%20%7B%0Aborder-color%3A%20%23ba0c2f%3B%0A%7D&amp;target=_blank&amp;loader="
					sandbox="allow-scripts allow-same-origin allow-popups"
					allowTransparency="true"
					scrolling="no"
					frameborder="0"
					style="height: 100vh"
					width="90%"
				></iframe>
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
