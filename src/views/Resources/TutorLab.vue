<template>
	<!-- HERO -->
	<SkewBox
		:leftBG="{
			backgroundImage: `url(${require('@/assets/img/Department/Tutoring1.jpg')}`,
			'background-position': 'top',
			'background-size': 'cover',
			width: '54vw!important',
		}"
		:leftColor="'transparent'"
		:rightColor="'var(--grey-gradient-right)'"
		:height="500"
		:padding="'120px 0 60px 0'"
		class="red-section hero"
	>
		<template v-slot:right>
			<div class="center vertical-center">
				<h1 class="white">CS Department Tutoring</h1>
			</div>
		</template>
	</SkewBox>

	<!-- SECTION -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/BG7.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.2"
		:overlayColor="'0, 0, 0'"
		class="red-section intro"
	>
		<div class="h-100 pb-4 pt-4">
			<center>
				<div class="container h-100">
					<div class="col-9 topbackground">
						<h1 class="white mt-2 mb-2">
							Need help with your classes?
						</h1>
						<h2 class="white mt-2 mb-2 pb-1 bold">
							Ask a peer tutor!
						</h2>
						<h5
							class="mt-4 mb-2 bold white"
							style="line-height: 2 !important"
						>
							The CS department offers a <i>free</i> tutoring
							service that you can take advantage of! Peer tutors
							are available to help with a variety of classes,
							especially intro classes like CSC 2280 and CSC 2290.
							This is a great resource to utilize!
						</h5>
					</div>
				</div>
			</center>
		</div>
	</Parallax>

	<!-- TUTORS -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/backgrounds/RedCircuit.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.4"
		:overlayColor="'0, 0, 0'"
	>
		<div class="h-100 pb-2">
			<center>
				<div class="container py-5">
					<h1 class="mt-2 mb-4 bold white">This Semester's Tutors</h1>
					<div
						class="col-5 tutorbackground info-card"
						style="display:inline-block; margin: 1rem; border-radius: 15px;"
						v-for="tutor in tutors"
						:key="tutor"
					>
						<ProfileCard
							:pfp="tutor.picture"
							:name="tutor.name"
							class="col-6 tutor"
						></ProfileCard>
						<!-- <img
							:src="tutor.picture"
							class="col-6"
							style="display: inline-block"
						/>
						<h4
							class="white mt-2 mb-2 col-6"
							style="display: inline-block"
						>
							{{ tutor.name }}
						</h4> -->
					</div>
				</div>
			</center>
		</div>
	</Parallax>

	<!-- WHERE-->
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/Department/meeting.jpg')})`,
			'background-position': 'left top',
			'background-size': 'cover',
			width: '54vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--FSCblue)'"
		:height="500"
		:padding="'70px 0 60px 0'"
		:maintainSkewbox="false"
		:pictureSide="'right'"
		:invert="false"
		class="skew"
	>
		<template v-slot:left>
			<div class="vertical-center">
				<h1 class="white">Where?</h1>
				<h5 class="white">Weinstein 120, the conference room</h5>
			</div>
		</template>
	</SkewBox>

	<!-- WHAT -->
	<SkewBox
		:leftBG="{
			backgroundImage: `url(${require('@/assets/img/Department/PythonCode.jpg')})`,
			'background-position': 'right top',
			'background-size': 'cover',
			width: '54vw!important',
			transform: 'scaleY(-1)',
		}"
		:leftColor="'transparent'"
		:rightColor="'var(--FSCred)'"
		:height="500"
		:padding="'70px 0 60px 0'"
		:maintainSkewbox="false"
		:pictureSide="'left'"
		:invert="true"
		style="transform: scaleY(-1)"
		class="skew"
	>
		<template v-slot:right>
			<div
				class="vertical-center"
				style="transform: scaleY(-1); text-align: justify !important"
			>
				<h1 class="white">What?</h1>
				<h5 class="white">The classes offered this semester are:</h5>
				<div v-for="course in tutorInfo.courses" :key="course">
					<h5 class="white">{{ course }}</h5>
				</div>
			</div>
		</template>
	</SkewBox>

    <!-- WHEN -->
	<SkewBox
		:rightBG="{
			backgroundImage: `url(https://th.bing.com/th/id/OIP.qeZXtdLfFZVtRdY6shWwawHaEL?w=333&h=187&c=7&r=0&o=5&dpr=1.25&pid=1.7)`,
			'background-position': 'top',
			'background-size': 'cover',
			width: '54vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--FSCgrey)'"
		:height="500"
		:padding="'70px 0 60px 0'"
		:maintainSkewbox="false"
		:pictureSide="'right'"
		:invert="false"
		class="skew"
	>
		<template v-slot:left>
			<div class="vertical-center">
				<h1 class="white">When?</h1>
				<div v-for="day in tutorInfo.times" :key="day">
					<h5 class="white">{{ day.day }}: {{ day.time }}</h5>
				</div>
			</div>
		</template>
	</SkewBox>
	<SkewBox
		:leftBG="{
			backgroundImage: `url(${require('@/assets/img/Department/Tutoring2.jpg')}`,
			'background-position': 'top',
			'background-size': 'cover',
			width: '54vw!important',
			transform: 'scaleY(-1)',
		}"
		:leftColor="'transparent'"
		:rightColor="'var(--FSCblue)'"
		:height="500"
		:padding="'70px 0 60px 0'"
		:maintainSkewbox="false"
		:pictureSide="'left'"
		:invert="true"
		style="transform: scaleY(-1)"
		class="skew"
	>
		<template v-slot:right>
			<div
				class="vertical-center"
				style="transform: scaleY(-1); text-align: justify !important"
			>
				<h1 class="white">Who?</h1>
				<h5 class="white">
					<i><strong>You!</strong></i> If you need help, come get it.
				</h5>
				<h5 class="white">#CSCARES</h5>
			</div>
		</template>
	</SkewBox>
</template>

<script>
import SkewBox from "@/components/SkewBox.vue";
import Parallax from "@/components/Parallax.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import ProfileCard from "@/components/ProfileCard.vue";

export default {
	components: {
		SkewBox,
		Parallax,
		Carousel,
		Slide,
		Pagination,
		Navigation,
		ProfileCard
	},
	data() {
		return {
			tutors: {},
			tutorInfo: {},
		};
	},
	async beforeMount() {
		//GET TUTORS SECTION
		await this.$store.dispatch("fetchTutors");

		// Retrieve tutors
		const res = this.$store.getters.getTutors;

		// Push each tutors's data to the array
		res.forEach((doc) => {
			this.tutors[doc.id] = doc.data();
		});

		//GET COURSES SECTION
		await this.$store.dispatch("fetchTutorInfo");

		// Retrieve courses
		this.tutorInfo = this.$store.getters.getTutorInfo;
	},
};
</script>

<style>
.topbackground {
	background-color: rgba(20, 2, 139, 0.54);
	padding: 2rem;
	border-radius: 15px;
}
.tutor img {
	border-top-left-radius: 15px !important;
	border-top-right-radius: 15px !important;
}
.tutor {
	transition: all ease 0.5s;
	border-radius: 15px !important;
}

.tutor:hover {
	transition: all ease 0.5s;
	transform: scale(1.1);
}

/* .tutorbackground {
	background-color: rgba(0, 0, 0, 0.308);
	padding: 1rem;
	outline: 4px solid var(--FSCblue);
	display: inline-block;
	margin: 1rem;
} */


/*
███    ███ ███████ ██████  ██  █████       ██████  ██    ██ ███████ ██████  ██ ███████ ███████ 
████  ████ ██      ██   ██ ██ ██   ██     ██    ██ ██    ██ ██      ██   ██ ██ ██      ██      
██ ████ ██ █████   ██   ██ ██ ███████     ██    ██ ██    ██ █████   ██████  ██ █████   ███████ 
██  ██  ██ ██      ██   ██ ██ ██   ██     ██ ▄▄ ██ ██    ██ ██      ██   ██ ██ ██           ██ 
██      ██ ███████ ██████  ██ ██   ██      ██████   ██████  ███████ ██   ██ ██ ███████ ███████ 
*/
/* 
BOOTSTRAP BREAKPOINTS:
  xs: 475px
  sm: 576px
  md: 768px
  lg: 992px
  xl: 1200px
  xxl: 1400px
*/
@media (max-width: 1199.9px) {
	.hero {
		height: calc(500px * 0.7) !important;
	}

}

@media (max-width: 991.9px) {
	.intro .intro-text {
		font-size: medium;
	}

	.community .community-text {
		font-size: medium;
	}
	.community .com-title {
		font-size: small;
		margin: 0 !important;
	}
}

@media (max-width: 767.9px) {
	.intro .intro-text {
		font-size: medium !important;
	}

	.community .community-text {
		font-size: small;
	}
	.community .com-title {
		font-size: medium;
		margin: 0 !important;
	}

	.info-card {
		width: 100%;
	}
}

@media (max-width: 575.9px) {
	.hero {
		height: calc(500px * 0.6) !important;
	}

	.intro .topbackground {
		margin: 15px !important;
		padding: 5px !important;
	}

	.skew {
		font-size: 15px;
	}

	.show-576 {
		display: flex;
	}

	.info-card {
		margin-left: 0 !important;
	}

}

@media (max-width: 399.9px) {
}

</style>
