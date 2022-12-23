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
		:maintainSkewbox="true"
		:pictureSide="'left'"
		:invert="false"
		class="hero red-section"
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
			backgroundImage: `url(${require('@/assets/img/cube-pics/SidePic.jpg')}`,
			'background-position': 'center',
		}"
		:height="'0'"
		:opacity="0.7"
		:overlayColor="'0, 0, 0'"
		class="red-section"
	>
		<div class="container py-5 vertical-center">
			<h3 class="white center">
				Carol &amp; Marcus Weinstein Computer Sciences Center
			</h3>
			<Expandable>
				<p class="white justify-large">
					The Weinstein Computer Sciences Center was completed in
					spring of 2020 and was named for FSC Trustee Carole and
					Marcus Weinstein of Richmond, Va. On top of being a cohesive
					learning environment, CS students can find all of their
					professors' offices convinently located just feet away from
					the classrooms. The building also includes an area of
					seating for students to do homework, chat with professors,
					and get to know other CS majors. The dramatically
					distinctive structure was designed by architect and Frank
					Lloyd Wright scholar Jeffrey Baker of the firm Mesick Cohen
					Wilson Baker of Albany, N.Y. In addition to cutting-edge
					classrooms and collaborative learning spaces, the new
					building houses a Cybersecurity and Informatics Learning
					Lab, a Logistics Center Suite, an AI/Robotics research lab,
					a cyber range, an auditorium, a maker space, and conference
					rooms.
				</p>
			</Expandable>
		</div>
	</Parallax>

	<!-- CAROUSEL -->
	<Carousel :wrapAround="true" :transition="600" class="red-section">
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
				:padding="'0'"
				:maintainSkewbox="true"
				:pictureSide="'left'"
				:invert="false"
				class="skew"
			>
				<template v-slot:right>
					<div class="vertical-center">
						<h3 class="white center">Groundbreaking Weinstein</h3>
					</div>
				</template>
			</SkewBox>
		</Slide>

		<Slide :key="1">
			<div
				class="history"
				:style="`background-image: url(${require('@/assets/img/cube-pics/Construction1.jpg')}); background-position: center`"
			>
				<div class="container textbox justify-large">
					<Expandable>
						<p>
							Shortly after the widely acclaimed success of the
							nearby France Family Admissions Center, completed in
							2017, Florida Southern College retained Mesick Cohen
							Wilson Baker Architects to develop an exciting and
							dynamic design for the new Weinstein Computer
							Center. Once again, MCWB was expected to develop a
							design that would embody the “feel” of the overall
							campus. This smaller scaled building is intended to
							be a jewel, capturing the exciting, electrifying and
							ever-evolving nature of the computer sciences, yet
							respecting the Stern and Frank Lloyd Wright-designed
							buildings found elsewhere on campus.
						</p>
					</Expandable>
				</div>
			</div>
		</Slide>

		<Slide :key="2">
			<div
				class="history"
				:style="`background-image: url(${require('@/assets/img/cube-pics/Construction2.jpg')}); background-position: center`"
			>
				<div class="container textbox">
					<Expandable>
						<p class="justify-large">
							Dr. Hollingshead stressed the importance of creating
							a “new home” for students in the computer science
							department, an academic environment that “will
							inspire, stimulate, and bring out the best in our
							students,” he said. “It is being designed, in the
							end, to empower them.”
						</p>
						<br />
						<p>
							"Florida Southern has been steadily expanding its
							computer science program over the past few years,
							with concentrations in web and cloud computing, AI
							and machine learning, and cybersecurity. The
							generous gift from Dr. and Mrs. Weinstein will help
							meet the needs of this growth, allow us to grow the
							program further, and prepare students for
							high-demand areas that require the expertise that
							they develop through our program."
							<br />
							<i>
								— Dr. Brad Hollingshead, Dean of Arts and
								Sciences
							</i>
						</p>
					</Expandable>
				</div>
			</div>
		</Slide>

		<Slide :key="3">
			<div
				class="history"
				:style="`background-image: url(${require('@/assets/img/cube-pics/Construction3.jpg')}); background-position: center`"
			>
				<div class="container textbox">
					<Expandable>
						<p>
							The process took a few years, but the Weinstien
							building is complete and students will be able to
							use it for many years to come.
						</p>
						<br />
						<p>
							"We are really excited for the new space. It will
							give us room to continue to grow the program and
							have the space to provide students with more
							hands-on learning opportunities and chances to get
							involved in undergraduate research."
							<br />
							<i>
								— Dr. Christian Roberson, the Department Chair
								of Computer Science
							</i>
						</p>
					</Expandable>
				</div>
			</div>
		</Slide>

		<template #addons>
			<Navigation />
			<Pagination />
		</template>
	</Carousel>

	<div>
		<!-- AI LAB -->
		<SkewBox
			:rightBG="{
				backgroundImage: `url(${require('@/assets/img/insideWCS3.jpg')})`,
				'background-position': 'right top',
				'background-size': 'cover',
				width: '58vw!important',
			}"
			:rightColor="'transparent'"
			:leftColor="'var(--red-gradient-left)'"
			:height="500"
			:padding="'70px 0 60px 0'"
			:maintainSkewbox="true"
			:pictureSide="'right'"
			:invert="false"
			class="skew"
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
				'background-position': 'top',
				'background-size': 'cover',
				width: '58vw!important',
				transform: 'scaleY(-1)',
			}"
			:leftColor="'transparent'"
			:rightColor="'var(--blue-gradient-right)'"
			:height="500"
			:padding="'70px 0 60px 0'"
			:maintainSkewbox="true"
			:pictureSide="'left'"
			:invert="true"
			style="transform: scaleY(-1)"
			class="skew"
		>
			<template v-slot:right>
				<div
					class="vertical-center"
					style="
						transform: scaleY(-1);
						text-align: justify !important;
					"
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
				width: '58vw!important',
			}"
			:rightColor="'transparent'"
			:leftColor="'var(--grey-gradient-left)'"
			:height="500"
			:padding="'70px 0 60px 0'"
			:maintainSkewbox="true"
			:pictureSide="'right'"
			:invert="false"
			class="skew"
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
				'background-position': 'top',
				'background-size': 'cover',
				width: '58vw!important',
				transform: 'scaleY(-1)',
			}"
			:leftColor="'transparent'"
			:rightColor="'var(--red-gradient-right)'"
			:height="500"
			:padding="'70px 0 60px 0'"
			:maintainSkewbox="true"
			:pictureSide="'left top'"
			:invert="true"
			style="transform: scaleY(-1)"
			class="skew"
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
				backgroundImage: `url(${require('@/assets/img/Department/Garage.jpg')})`,
				'background-position': 'top',
				'background-size': 'cover',
				width: '58vw!important',
			}"
			:rightColor="'transparent'"
			:leftColor="'var(--blue-gradient-left)'"
			:height="500"
			:padding="'70px 0 60px 0'"
			:maintainSkewbox="true"
			:pictureSide="'right'"
			:invert="false"
			class="skew"
		>
			<template v-slot:left>
				<div class="vertical-center white">
					<h1 class="">Garage</h1>
				</div>
			</template>
		</SkewBox>

		<!-- FRESH TWIST -->
		<SkewBox
			:leftBG="{
				backgroundImage: `url(${require('@/assets/img/FreshTwist.png')})`,
				'background-position': 'left',
				'background-size': 'cover',
				width: '58vw!important',
				transform: 'scaleY(-1)',
			}"
			:leftColor="'transparent'"
			:rightColor="'var(--grey-gradient-right)'"
			:height="500"
			:padding="'70px 0 60px 0'"
			:maintainSkewbox="true"
			:pictureSide="'left'"
			:invert="true"
			style="transform: scaleY(-1)"
			class="skew"
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
</template>

<script>
import Expandable from "@/components/Expandable.vue";
import SkewBox from "@/components/SkewBox.vue";
import Parallax from "@/components/Parallax.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
	components: {
		Expandable,
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
	height: 500px;
	width: 100%;
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	align-items: center;
}

.textbox {
	background-color: rgba(var(--FSCblueRGB), 0.6);
	backdrop-filter: blur(5px);
	padding: 2rem;
	margin: auto 7rem;
	border-radius: 2rem;
	color: white;
}

:deep(.carousel__pagination) {
	position: absolute;
	left: 50%;
	transform: translateX(-50%) translateY(-30px);
}

/*
███    ███ ███████ ██████  ██  █████       ██████  ██    ██ ███████ ██████  ██ ███████ ███████ 
████  ████ ██      ██   ██ ██ ██   ██     ██    ██ ██    ██ ██      ██   ██ ██ ██      ██      
██ ████ ██ █████   ██   ██ ██ ███████     ██    ██ ██    ██ █████   ██████  ██ █████   ███████ 
██  ██  ██ ██      ██   ██ ██ ██   ██     ██ ▄▄ ██ ██    ██ ██      ██   ██ ██ ██           ██ 
██      ██ ███████ ██████  ██ ██   ██      ██████   ██████  ███████ ██   ██ ██ ███████ ███████ 
*/
@media (max-width: 1199.9px) {
	.history {
		height: 350px;
	}
}

@media (max-width: 575.9px) {
	.history {
		height: 300px;
	}
}
</style>
