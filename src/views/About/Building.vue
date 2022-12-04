<template>
	<!-- HERO -->
	<SkewBox
		:leftBG="{
			backgroundImage: `url(${require('@/assets/img/WCS3.jpg')})`,
			'background-position': 'left',
			'background-size': 'cover',
			width: '53vw!important',
		}"
		:leftColor="'transparent'"
		:rightColor="'var(--red-gradient-right)'"
		:height="500"
		:padding="'120px 0 60px 0'"
		class="red-section"
	>
		<template v-slot:right>
			<div class="center vertical-center">
				<h1 class="white">About the CS Building</h1>
			</div>
		</template>
	</SkewBox>

	<!-- SUMMARY -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/cube-pics/DSC00018b.jpg')}`,
			'background-position': 'top middle',
		}"
		:height="'0'"
		:opacity="0.7"
		:overlayColor="'0, 0, 0'"
		class="red-section"
	>
		<div class="intro col-10 my-5 center">
			<p>
				The Weinstein Computer Sciences Center was completed in spring
				of 2020 and was named for FSC Trustee Carole and Marcus
				Weinstein of Richmond, Va. On top of being a cohesive learning
				environment, CS students can find all of their professors'
				offices convinently located just feet away from the classrooms.
				The building also includes an area of seating for students to do
				homework, chat with professors, and get to know other CS majors.
				The dramatically distinctive structure was designed by architect
				and Frank Lloyd Wright scholar Jeffrey Baker of the firm Mesick
				Cohen Wilson Baker of Albany, N.Y. In addition to cutting-edge
				classrooms and collaborative learning spaces, the new building
				houses a Cybersecurity and Informatics Learning Lab, a Logistics
				Center Suite, an AI/Robotics research lab, a cyber range, an
				auditorium, a maker space, and conference rooms.
			</p>
		</div>
	</Parallax>

	<!-- CAROUSEL -->
	<div class="red-section">
		<Carousel
			:wrapAround="true"
			:transition="600"
			:pauseAutoplayOnHover="true"
			class="history"
		>
			<Slide :key="1">
				<Parallax
					:image="{
						backgroundImage: `url(${require('@/assets/img/cube-pics/BuildingWCS3.jpg')}`,
						'background-position': 'top middle',
					}"
					:height="'0'"
					:opacity="0"
					:overlayColor="'255, 255, 255'"
					style="width: 100%; height: 100%; object-fit: cover"
					class="center vertical-center"
				>
					<p
						class="mx-4 my-3 firsttext"
						style="
							font-size: larger;
							text-align: justify;
							line-height: 1.85;
							margin-left: 10% !important;
							margin-right: 10% !important;
							font-weight: bold;
						"
					>
						Shortly after the widely acclaimed success of the nearby
						France Family Admissions Center, completed in 2017,
						Florida Southern College retained Mesick Cohen Wilson
						Baker Architects to develop an exciting and dynamic
						design for the new Weinstein Computer Center. Once
						again, MCWB was expected to develop a design that would
						embody the “feel” of the overall campus. This smaller
						scaled building is intended to be a jewel, capturing the
						exciting, electrifying and ever-evolving nature of the
						computer sciences, yet respecting the Stern and Frank
						Lloyd Wright-designed buildings found elsewhere on
						campus.
					</p>
				</Parallax>
			</Slide>

			<Slide :key="0">
				<SkewBox
					:leftBG="{
						backgroundImage: `url(${require('@/assets/img/Weinstein-Groundbreaking.jpg')})`,
						'background-position': 'top',
						'background-size': 'cover',
						width: '54vw!important',
					}"
					:leftColor="'transparent'"
					:rightColor="'var(--blue-gradient-right)'"
					:height="500"
					:padding="'70px 0 60px 0'"
					class=""
				>
					<template v-slot:right>
						<div class="vertical-center">
							<h1 class="white center">
								Groundbreaking Weinstein
							</h1>
						</div>
					</template>
				</SkewBox>
			</Slide>

			<Slide :key="2">
				<Parallax
					:image="{
						backgroundImage: `url(${require('@/assets/img/cube-pics/BuildingWCS2.jpg')}`,
						'background-position': 'top middle',
					}"
					:height="'0'"
					:opacity="0.5"
					:overlayColor="'0, 0, 0'"
					style="width: 100%; height: 100%; object-fit: cover"
					class="center vertical-center white"
				>
					<div
						style="
							margin-left: 10% !important;
							margin-right: 10% !important;
						"
					>
						<div class="quote col-9 mb-2">
							<p>
								<i>" </i>Florida Southern has been steadily
								expanding its computer science program over the
								past few years, with concentrations in web and
								cloud computing, AI and machine learning, and
								cybersecurity. The generous gift from Dr. and
								Mrs. Weinstein will help meet the needs of this
								growth, allow us to grow the program further,
								and prepare students for high-demand areas that
								require the expertise that they develop through
								our program.<i> "</i>
							</p>
							<p class="speaker">
								<i
									>— Dr. Brad Hollingshead, Dean of Arts and
									Sciences</i
								>
							</p>
						</div>

						<p
							class="mx-4 mt-4"
							style="
								font-size: larger;
								text-align: justify;
								line-height: 1.75;
								font-weight: bold;
							"
						>
							Dr. Hollingshead stressed the importance of creating
							a “new home” for students in the computer science
							department, an academic environment that “will
							inspire, stimulate, and bring out the best in our
							students,” he said. “It is being designed, in the
							end, to empower them.”
						</p>
					</div>
				</Parallax>
			</Slide>

			<Slide :key="3">
				<Parallax
					:image="{
						backgroundImage: `url(${require('@/assets/img/cube-pics/BuildingWCS1.jpg')}`,
						'background-position': 'center bottom',
					}"
					:height="'0'"
					:opacity="0.4"
					:overlayColor="'0, 0, 0'"
					style="width: 100%; height: 100%; object-fit: cover"
					class="center vertical-center"
				>
					<div
						style="
							margin-left: 10% !important;
							margin-right: 10% !important;
						"
					>
						<p
							class="mx-4 my-4 col-6 white"
							style="
								font-size: larger;
								text-align: justify;
								line-height: 1.75;
								font-weight: bold;
							"
						>
							The process took a few years, but the Weinstien
							building is complete and students will be able to
							use it for many years to come.
						</p>

						<div class="second-quote" style="position: relative">
							<!-- <div class="col-6 second-pic">
							<img src="@/assets/img/makingWCS.jpg">
						</div> -->

							<div class="quote2 col-6 mb-4">
								<p>
									<i>" </i>We are really excited for the new
									space. It will give us room to continue to
									grow the program and have the space to
									provide students with more hands-on learning
									opportunities and chances to get involved in
									undergraduate research.<i> "</i>
								</p>
								<p class="speaker">
									<i
										>— Dr. Christian Roberson, the
										Department Chair of Computer Science</i
									>
								</p>
							</div>
						</div>
					</div>
				</Parallax>
			</Slide>

			<template #addons>
				<Navigation />
				<Pagination style="transform: translateY(-40px)" />
			</template>
		</Carousel>
	</div>

	<!-- AI LAB -->
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/insideWCS3.jpg')})`,
			'background-position': 'right top',
			'background-size': 'cover',
			width: '54vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--red-gradient-left)'"
		:height="500"
		:padding="'70px 0 60px 0'"
	>
		<template v-slot:left>
			<div class="vertical-center">
				<h1 class="white">AI Lab</h1>
			</div>
		</template>
	</SkewBox>

	<!-- CYBER RANGE -->
	<SkewBox
		:leftBG="{
			backgroundImage: `url(${require('@/assets/img/insideWCS2.jpg')})`,
			'background-position': 'right top',
			'background-size': 'cover',
			width: '54vw!important',
			transform: 'scaleY(-1)',
		}"
		:leftColor="'transparent'"
		:rightColor="'var(--blue-gradient-right)'"
		:height="500"
		:padding="'70px 0 60px 0'"
		style="transform: scaleY(-1)"
	>
		<template v-slot:right>
			<div
				class="vertical-center"
				style="transform: scaleY(-1); text-align: justify !important"
			>
				<h1 class="white">Cyber Range</h1>
			</div>
		</template>
	</SkewBox>

	<!-- MAKER'S SPACE -->
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/insideWCS5.jpg')})`,
			'background-position': 'right top',
			'background-size': 'cover',
			width: '54vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--grey-gradient-left)'"
		:height="500"
		:padding="'70px 0 60px 0'"
	>
		<template v-slot:left>
			<div class="vertical-center">
				<h1 class="white">Maker Space</h1>
			</div>
		</template>
	</SkewBox>

	<!-- COMPUTING LAB -->
	<SkewBox
		:leftBG="{
			backgroundImage: `url(${require('@/assets/img/insideWCS1.jpg')})`,
			'background-position': 'right top',
			'background-size': 'cover',
			width: '54vw!important',
			transform: 'scaleY(-1)',
		}"
		:leftColor="'transparent'"
		:rightColor="'var(--red-gradient-right)'"
		:height="500"
		:padding="'70px 0 60px 0'"
		style="transform: scaleY(-1)"
	>
		<template v-slot:right>
			<div
				class="vertical-center"
				style="transform: scaleY(-1); text-align: center"
			>
				<h1 class="white">Advanced Computing Lab</h1>
			</div>
		</template>
	</SkewBox>

	<!-- GARAGE -->
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/insideWCS2.jpg')})`,
			'background-position': 'right top',
			'background-size': 'cover',
			width: '54vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--blue-gradient-left)'"
		:height="500"
		:padding="'70px 0 60px 0'"
	>
		<template v-slot:left>
			<div class="vertical-center white">
				<h1 class="">Garage</h1>
			</div>
		</template>
	</SkewBox>

	<!-- FRESH TWIST -->
	<div class="red-section">
		<SkewBox
			:leftBG="{
				backgroundImage: `url(${require('@/assets/img/FreshTwist.png')})`,
				'background-position': 'left',
				'background-size': 'cover',
				width: '54vw!important',
				transform: 'scaleY(-1)',
			}"
			:leftColor="'transparent'"
			:rightColor="'var(--grey-gradient-right)'"
			:height="500"
			:padding="'70px 0 60px 0'"
			style="transform: scaleY(-1)"
		>
			<template v-slot:right>
				<div
					class="vertical-center"
					style="
						transform: scaleY(-1);
						text-align: justify !important;
					"
				>
					<h1 class="white">Fresh Twist</h1>
				</div>
			</template>
		</SkewBox>
	</div>

	<!-- TOUR -->
	<div class="tour_section">
		<img
			src="@/assets/img/virtual-tour/Tour1.jpg"
			alt=""
			class="tour_pic"
		/>
		<a href="/virtual-tour"
			><h2 class="inner_square col-5 bold">
				Explore Weinstein<br />for yourself!
			</h2></a
		>
	</div>
</template>

<script>
import TextPage from "../../components/TextPage.vue";
import SkewBox from "@/components/SkewBox.vue";
import Parallax from "@/components/Parallax.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
	components: {
		TextPage,
		SkewBox,
		Parallax,
		Carousel,
		Slide,
		Pagination,
		Navigation,
	},
};
</script>

<style scoped>
.history {
	height: 499px;
	overflow: hidden;
}

.history :deep(.carousel) {
	text-align: left;
}

.history :deep(.carousel__pagination) {
	margin-bottom: 0;
	padding-left: 0;
	transform: translateY(0px);
}

.history :deep(.carousel__pagination-button) {
	height: calc(var(--vc-pgn-height) * 1.5) !important;
	width: calc(var(--vc-pgn-width) * 1.5) !important;
	background-color: darkgray;
}

.history :deep(.carousel__pagination-button--active) {
	background-color: white !important;
}

.history :deep(.carousel__icon) {
	width: calc(var(--vc-icn-width) * 2) !important;
	height: calc(var(--vc-icn-width) * 2) !important;
}

.history :deep(.carousel__pre)v,
.history :deep(.carousel__next) {
	/* box-sizing: content-box; */
	width: 50px !important;
	height: 50px !important;
	border-radius: 50% !important;
	color: white !important;
}

.history :deep(.carousel__prev) {
	left: 30px !important;
}

.history :deep(.carousel__next) {
	right: 30px !important;
}
.small_pic {
	display: inline-block;
	align-content: center;
}
.feature {
	margin-right: 0 !important;
	display: inline-block;
	margin: 0 auto;
}
.features {
	display: flex;
	justify-content: center;
}
.tour_section {
	position: relative;
}
.tour_pic {
	width: 100%;
	height: 60vh;
	object-fit: cover;
	display: block;
}
.inner_square {
	background-color: rgba(47, 79, 79, 0.63);
	left: 50%;
	top: 50%;
	color: white;
	text-align: center;
	display: inline;
	position: absolute;
	transform: translate(-50%, -50%);
	padding-top: 2%;
	padding-bottom: 2%;
}
.inner_square:hover {
	background-color: rgba(255, 255, 255, 0.826);
	color: var(--FSCred);
}
.quote {
	font-weight: bolder;
	background-color: var(--FSCblue);
	padding: 2%;
	padding-bottom: 0.5% !important;
	transform: translate(-10%);
	color: black;
	text-align: left;
}
.speaker {
	text-align: right;
}
.quote2 {
	font-weight: bolder;
	background-color: var(--FSCblue);
	padding: 2%;
	padding-bottom: 0.5% !important;
	transform: translate(35%);
	display: inline-block;
	color: black;
}
.firsttext {
	background-color: var(--FSCblue);
	padding: 1.5%;
	padding-top: 1%;
	padding-bottom: 1%;
	transform: translate(0, 20%);
}
.second-pic {
	display: inline-block;
	margin-top: 0;
	margin-bottom: 0;
	max-height: 75%;
	overflow: hidden;
}
.second-pic img {
	width: 100%;
	height: 100%;
}

.middle {
	margin-left: auto;
	margin-right: auto;
}
.intro {
	margin-left: auto;
	margin-right: auto;
	font-size: larger;
	text-align: justify;
	line-height: 1.75;
	color: white;
}
</style>
