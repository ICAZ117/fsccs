<template>
	<!-- HERO -->
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/cube-pics/CubeBallsRed.jpg')})`,
			'background-position': 'bottom left',
			'background-size': 'cover',
			width: '58vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--red-gradient-left)'"
		:height="500"
		:padding="'60px 0 0 0'"
		:maintainSkewbox="true"
		:pictureSide="'right'"
		:invert="false"
		class="red-section"
	>
		<template v-slot:left>
			<div class="h-100">
				<div class="center vertical-center">
					<h1 class="white">About the Department</h1>
				</div>
			</div>
		</template>
	</SkewBox>

	<!-- SUMMARY -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/cube-pics/DSC00031.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.7"
		:overlayColor="'0, 0, 0'"
		class="red-section intro"
	>
		<div class="h-100">
			<center>
				<div class="my-xl-5 py-5 h-100">
					<div class="container">
						<h3 class="white">What We Have to Offer</h3>

						<Expandable>
							<p class="white justify-large">
								Computer science provides you with a sound
								theoretical background and the opportunities for
								individual and collaborative exploration of
								real-world computing problems. The program gives
								students the opportunity for hands-on experience
								while they explore and apply the theoretical
								underpinnings of the discipline. Students have
								the option to choose from three different
								concentrations: <b>AI and Machine Learning</b>,
								<b>Cybersecurity</b>, and
								<b>Web & Cloud Computing</b>. Choosing a
								concentration allows students to get a more
								specialized look into their interests. In
								addition to being committed to providing a
								quality education, the CS department is a place
								for all students to belong, as you can explore
								below!
							</p>
						</Expandable>
					</div>
				</div>
			</center>
		</div>
	</Parallax>

	<!-- COMMUNITY THAT CARES -->
	<SkewBox
		:leftBG="{
			backgroundImage: `url(${require('@/assets/img/gaming_at_party2.png')})`,
			'background-position': 'right',
			'background-size': 'cover',
			width: '58vw!important',
		}"
		:leftColor="'transparent'"
		:rightColor="'var(--blue-gradient-right)'"
		:height="500"
		:padding="'0'"
		:maintainSkewbox="false"
		:pictureSide="'left'"
		:invert="false"
		class="red-section w-100"
	>
		<template v-slot:right>
			<div class="my-xl-0 my-5 vertical-center">
				<div class="center white">
					<h3>A Community That Cares</h3>
				</div>
				<div>
					<p class="center white mb-0">
						The CS department strives to be a welcoming and
						inclusive environment for students, both inside and
						outside of class. More than just a major, the department
						works hard to create an atmosphere that allows students
						to connect with each other and the material, as well as
						build skills that can be directly translated into the
						work force.
					</p>
				</div>
			</div>
		</template>
	</SkewBox>

	<!-- CARDS -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/BG2.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.05"
		:overlayColor="'0, 0, 0'"
		class="red-section"
	>
		<div class="h-100">
			<center>
				<div class="m-auto container py-5 h-100 great-dep">
					<h3 class="center my-3" style="color: white">
						What Makes Our Department Great
					</h3>
					<div class="row">
						<div class="col-6 mb-4 info-card">
							<a
								href="/about/faculty"
								style="text-decoration: none !important"
							>
								<InfoCard :title="'Professors that care'">
									<p class="center card_text">
										Every professor in the CS department is
										responsive, thoughtful, and cares about
										their students.
									</p>
									<p class="center card_text">
										Meet the CS professors<i
											class="ms-2 fa-solid fa-arrow-right"
										></i>
									</p>
								</InfoCard>
							</a>
						</div>
						<div class="col-6 mb-4 info-card">
							<a
								href="/about/degree-and-concentrations"
								style="text-decoration: none"
							>
								<InfoCard :title="'Engaging classes'">
									<p class="center card_text">
										Classes in this department are exciting
										and capture your attention from start to
										finish.
									</p>
									<p class="center card_text">
										Look over the course requirements<i
											class="ms-2 fa-solid fa-arrow-right"
										></i>
									</p>
								</InfoCard>
							</a>
						</div>
						<div class="col-6 mb-4 info-card">
							<a
								href="/virtual-tour"
								style="text-decoration: none"
							>
								<InfoCard :title="'Convinient workspaces'">
									<p class="center card_text">
										The CS building features a large work
										area directly next to the professor's
										offices, which makes asking questions
										quick and easy for all of your
										assignments.
									</p>
									<p class="center card_text">
										Explore Weinstien<i
											class="ms-2 fa-solid fa-arrow-right"
										></i>
									</p>
								</InfoCard>
							</a>
						</div>
						<div class="col-6 mb-4 info-card">
							<a
								href="/get-involved/cs-club"
								style="text-decoration: none"
							>
								<InfoCard :title="'Active community'">
									<p class="center card_text">
										With programming team, CS club,
										boardgame lunch, and intramural
										activites, there are tons of
										opporunities to get involved in the
										department.
									</p>
									<p class="center card_text">
										Get involved<i
											class="ms-2 fa-solid fa-arrow-right"
										></i>
									</p>
								</InfoCard>
							</a>
						</div>
					</div>
				</div>
			</center>
		</div>
	</Parallax>

	<!-- CAROUSEL-->
	<Carousel
		:wrapAround="true"
		:transition="600"
		:pauseAutoplayOnHover="true"
		style="height: 499px; overflow: hidden"
		class="car red-arrows"
	>
		<Slide key="0">
			<div
				class="h-100 w-100"
				:style="`background-image: url(${require('@/assets/img/BG7.jpg')}); background-size: cover; background-repeat: no-repeat`"
			>
				<div class="vertical-center">
					<h1 class="primary">Why We Are Awesome</h1>
				</div>
			</div>
		</Slide>

		<Slide :key="1">
			<SkewBox
				:leftBG="{
					backgroundImage: `url(${require('@/assets/img/Department/Bowling_Fall18.jpg')})`,
					'background-position': 'right top',
					'background-size': 'cover',
					width: '58vw!important',
					transform: 'scaleY(-1)',
				}"
				:leftColor="'transparent'"
				:rightColor="'var(--red-gradient-right)'"
				:height="500"
				:padding="'0'"
				:maintainSkewbox="true"
				:pictureSide="'left'"
				:invert="true"
				style="transform: scaleY(-1)"
			>
				<template v-slot:right>
					<div
						class="vertical-center"
						style="transform: scaleY(-1); text-align: center"
					>
						<h3 class="white">The department bowling team</h3>
					</div>
				</template>
			</SkewBox>
		</Slide>

		<Slide :key="2">
			<SkewBox
				:rightBG="{
					backgroundImage: `url(${require('@/assets/img/Department/ChiliContest.png')})`,
					'background-position': 'center',
					'background-size': 'contain',
					'background-repeat': 'no-repeat',
					'background-color': 'var(--FSCgrey)',
					width: '58vw!important',
				}"
				:rightColor="'transparent'"
				:leftColor="'var(--blue-gradient-left)'"
				:height="500"
				:maintainSkewbox="true"
				:pictureSide="'right'"
				:invert="false"
				:padding="'0'"
			>
				<template v-slot:left>
					<div class="vertical-center white">
						<h3 class="">Cool events, like this chili contest</h3>
					</div>
				</template>
			</SkewBox>
		</Slide>

		<Slide :key="3">
			<SkewBox
				:leftBG="{
					backgroundImage: `url(${require('@/assets/img/EngagedLearning2.jpg')})`,
					'background-position': 'right center',
					'background-size': 'cover',
					width: '58vw!important',
					transform: 'scaleY(-1)',
				}"
				:leftColor="'transparent'"
				:rightColor="'var(--FSCgrey)'"
				:height="500"
				:padding="'0'"
				:maintainSkewbox="true"
				:pictureSide="'left'"
				:invert="true"
				style="transform: scaleY(-1)"
			>
				<template v-slot:right>
					<div
						class="vertical-center"
						style="transform: scaleY(-1); text-align: center"
					>
						<h3 class="white">
							Engaged learning, which makes classes interesting!
						</h3>
					</div>
				</template>
			</SkewBox>
		</Slide>

		<Slide :key="4">
			<SkewBox
				:rightBG="{
					backgroundImage: `url(${require('@/assets/img/BoardGameLunch.png')})`,
					'background-position': 'center',
					'background-size': 'cover',
					width: '58vw!important',
				}"
				:rightColor="'transparent'"
				:leftColor="'var(--red-gradient-left)'"
				:height="500"
				:padding="'0'"
				:maintainSkewbox="true"
				:pictureSide="'right'"
				:invert="false"
			>
				<template v-slot:left>
					<div class="vertical-center white">
						<h3 class="">Weekly boardgame lunches</h3>
					</div>
				</template>
			</SkewBox>
		</Slide>

		<Slide :key="5">
			<SkewBox
				:leftBG="{
					backgroundImage: `url(${require('@/assets/img/Department/EicholtzGaming.jpg')})`,
					'background-position': 'right top',
					'background-size': 'cover',
					width: '58vw!important',
					transform: 'scaleY(-1)',
				}"
				:leftColor="'transparent'"
				:rightColor="'var(--blue-gradient-right)'"
				:height="500"
				:padding="'0'"
				:maintainSkewbox="true"
				:pictureSide="'left'"
				:invert="true"
				style="transform: scaleY(-1)"
			>
				<template v-slot:right>
					<div
						class="vertical-center"
						style="transform: scaleY(-1); text-align: center"
					>
						<h3 class="white">Everyone has fun!</h3>
					</div>
				</template>
			</SkewBox>
		</Slide>
		<template #addons>
			<Navigation />
			<Pagination style="transform: translateY(-40px)" />
		</template>
	</Carousel>
</template>

<script>
import Expandable from "@/components/Expandable.vue";
import Parallax from "@/components/Parallax.vue";
import InfoCard from "@/components/InfoCard.vue";
import SkewBox from "@/components/SkewBox.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
	components: {
		Expandable,
		Parallax,
		InfoCard,
		SkewBox,
		Carousel,
		Slide,
		Pagination,
		Navigation,
	},
	data() {
		return {
			windowHeight: 0,
			windowWidth: 0,
		};
	},
	async beforeMount() {
		// Get window height
		this.windowHeight = window.innerHeight;
		this.windowWidth = window.innerWidth;
	},
};
</script>

<style>
.text_block {
	display: inline-block;
	line-height: 2;
	text-align: justify;
	font-size: x-large;
}
.small_pic {
	display: inline-block;
}
.degree_square {
	background-color: var(--FSCred);
	margin-left: 0;
	margin-right: 0;
	height: 375px;
	position: relative;
}
.inner_square {
	background-color: rgba(58, 64, 64, 0.63);
	height: 300px;
	display: inline;
	position: absolute;
	top: 10%;
}
.sm_inner_square {
	background-color: rgba(121, 108, 108, 0.904) !important;
	height: 80px;
	width: 275px;
	color: white;
	text-align: center;
	display: inline;
	position: absolute;
	transform: translate(-70%, -70%);
}
.sm_inner_square:hover {
	background-color: rgb(254, 254, 254) !important;
	color: var(--FSCred) !important;
}
.community-pic {
	width: 50%;
	display: block;
	transform: scale(1) !important;
	margin: auto;
}
.community-pic-holder {
	position: relative;
}
.community-text {
	color: white;
	text-align: center;
	line-height: 1.5 !important;
}

.degree_pic {
	display: block;
	width: 85%;
	margin-left: auto;
	margin-right: auto;
	transform: translate(5%, 5%);
}
.textandimg {
	position: relative;
	text-align: center;
}
a,
a:visited,
a:hover,
a:active,
a:focus {
	color: black;
}
.carouseltitle {
	background-color: var(--FSCblue) !important;
	margin-left: 0;
	margin-right: 0;
	height: 60px;
	text-align: center;
	color: white;
	border: 4px solid var(--FSClightblue);
}
.topbackground2 {
	background-color: rgba(21, 127, 143, 0);
	padding: 1rem;
	/* margin-left: 5%;
		margin-right: 5%; */
}

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
	.car {
		height: calc(500px * 0.7) !important;
	}

	.car .carousel__prev,
	.car .carousel__next {
		scale: 0.85;
	}

	.car .carousel__prev {
		left: 10px !important;
	}

	.car .carousel__next {
		right: 10px !important;
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

	.car .carousel__prev,
	.car .carousel__next {
		scale: 0.65;
	}

	.car .carousel__prev {
		left: -10px !important;
	}

	.car .carousel__next {
		right: -10px !important;
	}

	.great-dep .info-card {
		width: 100%;
	}
}

@media (max-width: 575.9px) {
	.car {
		height: calc(500px * 0.6) !important;
	}

	/* .community {
		
	} */

	.intro .intro-text {
		font-size: small !important;
	}

	.car .skew {
		font-size: 15px;
	}

	.carousel__prev,
	.carousel__next {
		display: none;
	}

	.show-576 {
		display: flex;
	}

	.great-dep .info-card p {
		font-size: smaller;
	}
}

@media (max-width: 399.9px) {
}
</style>