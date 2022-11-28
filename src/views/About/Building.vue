<template>
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/WCS3.jpg')})`,
			'background-position': 'right',
			'background-size': 'cover',
			width: '53vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--FSCgrey)'"
		:height="500"
		:padding="'70px 0 60px 0'"
	>
		<template v-slot:left>
			<div class="center vertical-center">
				<h1 class="white">About the CS building</h1>
			</div>
		</template>
	</SkewBox>

	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/Circuit1.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.7"
		:overlayColor="'0, 0, 0'"
	>
		<div class="intro col-10 my-5 center">
			<p>
				The Weinstein Computer Sciences Center is located between the Sharon and Jim France 
				Admissions Center and the Becker Business Building, was completed in spring 2020.
				Named for FSC Trustee Carole and Marcus Weinstein of Richmond, Va., the 
				Weinstein building provides approximately 10,000 square feet of academic space, 
				with an additional 3,000-square-foot auditorium and food venue. On top of being 
				a cohesive learning environment, CS students can find all of their professors' 
				offices convinently located just feet away from the classrooms. If 7that isn't 
				enough, the building also includes an area of seating for students to do 
				homework, chat with professors, and get to know other CS majors.
			</p>
			<p>
				The dramatically distinctive structure, designed by architect and Frank Lloyd 
				Wright scholar Jeffrey Baker of the firm Mesick Cohen Wilson Baker of Albany, 
				N.Y., overlooks Lake Hollingsworth. In addition to cutting-edge classrooms 
				and collaborative learning spaces, the new building houses a Cybersecurity 
				and Informatics Learning Lab, a Logistics Center Suite, an AI or Robotics 
				research lab, a cyber range, an auditorium, a maker space and conference rooms.
			</p>
		</div>
	</Parallax>
		<div class="Title">
			<h2>History</h2>
		</div>
		<SkewBox
			:leftBG="{
				backgroundImage: `url(${require('@/assets/img/Weinstein-Groundbreaking.jpg')})`,
				'background-position': 'top',
				'background-size': 'cover',
				width: '54vw!important',
			}"
			:leftColor="'transparent'"
			:rightColor="'var(--FSCblue)'"
			:height="500"
			:padding="'70px 0 60px 0'"
			class="section"
		>
			<template v-slot:right>
				<div class="vertical-center">
					<h1 class="white">Groundbreaking Weinstein</h1>
				</div>
			</template>
		</SkewBox>
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/BG3.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.4"
		:overlayColor="'0, 0, 0'"
	> 
		<div class="col-10 middle white">
		<p class="mx-4 my-3" style="font-size: larger; text-align: justify; line-height: 1.75;">
			Shortly after the widely acclaimed success of the nearby France Family Admissions 
			Center, completed in 2017, Florida Southern College retained Mesick Cohen Wilson 
			Baker Architects to develop an exciting and dynamic design for the new Weinstein 
			Computer Center. Once again, MCWB was expected to develop a design that would 
			embody the “feel” of the overall campus. Using materials similar to the nearby 
			Admissions Center and the adjacent Robert A.M. Stern-designed Becker Business 
			Building, this smaller scaled building is intended to be a jewel…capturing the 
			exciting, electrifying and ever-evolving nature of the computer sciences, yet 
			respecting the Stern and Frank Lloyd Wright-designed buildings found elsewhere 
			on campus.
		</p>

		<div class="quote col-9 mb-2">
			<p>
				<i>" </i>Florida Southern has been steadily expanding its computer science program over 
				the past few years, with concentrations in web and cloud computing, AI and machine 
				learning, and cybersecurity. The generous gift from Dr. and Mrs. Weinstein 
				will help meet the needs of this growth, allow us to grow the 
				program further, and prepare students for high-demand areas that require the 
				expertise that they develop through our program.<i> "</i>
			</p>
			<p class="speaker"><i>— Dr. Brad Hollingshead, Dean of Arts and Sciences</i></p>
		</div>

		<p class="mx-4 mt-4" style="font-size: larger; text-align: justify; line-height: 1.75;">
			Dr. Hollingshead stressed the importance of 
			creating a “new home” for students in the computer science department, an 
			academic environment that “will inspire, stimulate, and bring out the best in 
			our students,” he said. “It is being designed, in the end, to empower them.”
		</p>

		<p class="mx-4 my-4" style="font-size: larger; text-align: justify; line-height: 1.75;">
			The process took a few years, but the Weinstien building is complete and students 
			will be able to use it for many years to come.
		</p>

		<div class="second-quote" style="position: relative;">
			<div class="col-6 second-pic">
				<img src="@/assets/img/CS_department_pic2.png">
			</div>

			<div class="quote2 col-6 mb-2">
				<p>
					<i>" </i>We are really excited for the new space. It will give us room to 
					continue to grow the program and have the space to provide students with 
					more hands-on learning opportunities and chances to get involved in 
					undergraduate research.<i> "</i>
				</p>
				<p class="speaker"><i>— Dr. Christian Roberson, the Department Chair of Computer Science</i></p>
			</div>
		</div>
		</div>
	</Parallax>

		<div class="Title2">
			<h2>Features</h2>
		</div>
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/BG7.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.2"
		:overlayColor="'0, 0, 0'"
	> 
		<!-- <div class="features my-4">
			<div class="feature col-4">
			<center>
				<h1 class="small_pic"><i class="fa-solid fa-cube"></i></h1>
				<h3>Distinct Cube<br>Structure</h3>
			</center>
			</div>
			<div class="feature col-4">
			<center>
				<h1 class="small_pic"><i class="fa-solid fa-bullhorn"></i></h1>
				<h3>CS-specific<br>Auditorium</h3>
			</center>
			</div>
			<div class="feature col-4">
			<center>
				<h1 class="small_pic"><i class="fa-solid fa-utensils"></i></h1>
				<h3>Pretzel<br>Restraunt</h3>
			</center>
			</div>
		</div> -->
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/WCS2.jpg')})`,
			'background-position': 'right top',
			'background-size': 'cover',
			width: '54vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--FSCred)'"
		:height="500"
		:padding="'70px 0 60px 0'"
	>
		<template v-slot:left>
			<div class="vertical-center">
				<h1 class="">AI Lab</h1>
			</div>
		</template>
	</SkewBox>
	<SkewBox
		:leftBG="{
			backgroundImage: `url(https://th.bing.com/th/id/OIP.udrE6z4jI5Vdb3_VZo0l5QHaEK?w=274&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7)`,
			'background-position': 'right top',
			'background-size': 'cover',
			width: '54vw!important',
			transform: 'scaleY(-1)',
		}"
		:leftColor="'transparent'"
		:rightColor="'rgb(225,128,0)'"
		:height="500"
		:padding="'70px 0 60px 0'"
		style="transform: scaleY(-1)"
	>
		<template v-slot:right>
			<div class="vertical-center" style="transform: scaleY(-1); text-align: justify !important">
				<h1 class="white">Cyber Range</h1>
			</div>
		</template>
	</SkewBox>
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/WCS2.jpg')})`,
			'background-position': 'right top',
			'background-size': 'cover',
			width: '54vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'yellow'"
		:height="500"
		:padding="'70px 0 60px 0'"
	>
		<template v-slot:left>
			<div class="vertical-center">
				<h1 class="">Maker Space</h1>
			</div>
		</template>
	</SkewBox>
	<SkewBox
		:leftBG="{
			backgroundImage: `url(https://th.bing.com/th/id/OIP.udrE6z4jI5Vdb3_VZo0l5QHaEK?w=274&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7)`,
			'background-position': 'right top',
			'background-size': 'cover',
			width: '54vw!important',
			transform: 'scaleY(-1)',
		}"
		:leftColor="'transparent'"
		:rightColor="'green'"
		:height="500"
		:padding="'70px 0 60px 0'"
		style="transform: scaleY(-1)"
	>
		<template v-slot:right>
			<div class="vertical-center" style="transform: scaleY(-1); text-align: center;">
				<h1 class="white">Advanced Computing Lab</h1>
			</div>
		</template>
	</SkewBox>
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/WCS2.jpg')})`,
			'background-position': 'right top',
			'background-size': 'cover',
			width: '54vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--FSCblue)'"
		:height="500"
		:padding="'70px 0 60px 0'"
	>
		<template v-slot:left>
			<div class="vertical-center">
				<h1 class="">Garage</h1>
			</div>
		</template>
	</SkewBox>
	<SkewBox
		:leftBG="{
			backgroundImage: `url(${require('@/assets/img/FreshTwist.png')})`,
			'background-position': 'left',
			'background-size': 'cover',
			width: '54vw!important',
			transform: 'scaleY(-1)',
		}"
		:leftColor="'transparent'"
		:rightColor="'purple'"
		:height="500"
		:padding="'70px 0 60px 0'"
		style="transform: scaleY(-1)"
	>
		<template v-slot:right>
			<div class="vertical-center" style="transform: scaleY(-1); text-align: justify !important">
				<h1 class="white">Fresh Twist</h1>
			</div>
		</template>
	</SkewBox>
	</Parallax>

	<div class="Title">
		<h2>Take a Virtual Tour</h2>
	</div>

	<div class="tour_section">
		<img src="@/assets/img/explore.jpg" alt="" class="tour_pic">
		<a href="/virtual-tour"><h2 class="inner_square col-5">Explore Weinstein<br>for yourself!</h2></a>
	</div>
	<div class="py-1"></div>
</template>

<script>
	import TextPage from "../../components/TextPage.vue";
	import SkewBox from "@/components/SkewBox.vue";
	import Parallax from "@/components/Parallax.vue";

	export default {
		components: {
			TextPage,
			SkewBox,
			Parallax,
		},
	};
</script>

<style>
	.Title{
		background-color: var(--FSCred);
		margin-left: 0;
		margin-right: 0;
		height: 60px;
		text-align: center;
	}
	.Title2{
		background-color: var(--FSCblue);
		margin-left: 0;
		margin-right: 0;
		height: 60px;
		text-align: center;
		color: white
	}
	.small_pic{
		display: inline-block;
		align-content: center;
	}
	.feature{
		margin-right: 0 !important;
		display: inline-block;
		margin: 0 auto;
	}
	.features{
		display: flex;
		justify-content: center;
	}
	.tour_section{
		position: relative;
	}
	.tour_pic{
		width: 100%;
		display: block;
	}
	.inner_square{
		background-color: rgba(47, 79, 79, 0.63);
		left: 50%;
		top: 50%;
		height: 115px;
		color: white;
		text-align: center;
		display: inline;
		position: absolute;
		transform: translate(-50%, -50%);
	}
	.inner_square:hover{
		background-color: rgba(255, 255, 255, 0.826);
		color: var(--FSCred)
	}
	.quote {
		font-weight: bolder;
		background-color: var(--FSCblue);
		padding: 2%;
		padding-bottom: .5% !important;
		transform: translate(-10%);
		color: black;
	}
	.speaker {
		text-align: right;
	}
	.quote2 {
		font-weight: bolder;
		background-color: var(--FSCblue);
		padding: 2%;
		padding-bottom: .5% !important;
		transform: translate(15%);
		display: inline-block;
		color: black;
	}
	.second-pic {
		display: inline-block;
		margin-bottom: 5%
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
		color:white;
	}
</style>
