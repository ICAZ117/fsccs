<template>
	<TextPage
		:title="'About the CS Building'"
		:heroImage="{
			backgroundImage: `url(${require('@/assets/img/WCS3.jpg')})`,
			'background-position': 'bottom',
			'background-size': 'cover',
		}"
		:background="{
			backgroundImage: `url(${require('@/assets/img/BG7.jpg')})`,
			'background-position': 'center',
		}"
        :opacity="0.9"
	>
		<div class="intro">
			<p>
				The Weinstein Computer Sciences Center is located between the Sharon and Jim France 
				Admissions Center and the Becker Business Building, was completed in spring 2020.
				Named for FSC Trustee Carole and Marcus Weinstein of Richmond, Va., the 
				Weinstein building provides approximately 10,000 square feet of academic space, 
				with an additional 3,000-square-foot auditorium and food venue. On top of being 
				a cohesive learning environment, CS students can find all of their professors' 
				offices convinently located just feet away from the classrooms. If that isn't 
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
		<div class="Title">
			<h2>History</h2>
		</div>
		<div class="py-2"></div>
		<p>
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

		<p>
			Dean of Arts and Sciences, Dr. Brad Hollingshead, stressed the importance of 
			creating a “new home” for students in the computer science department, an 
			academic environment that “will inspire, stimulate, and bring out the best in 
			our students,” he said. “It is being designed, in the end, to empower them.”
		</p>

		<p>
			Florida Southern has been steadily expanding its computer science program over 
			the past few years, with concentrations in web and cloud computing, AI and machine 
			learning, and cybersecurity,” said Dr. Hollingshead. “The generous gift from Dr. 
			and Mrs. Weinstein will help meet the needs of this growth, allow us to grow the 
			program further, and prepare students for high-demand areas that require the 
			expertise that they develop through our program.”
		</p>

		<p>
			“We are really excited for the new space. It will give us room to continue to 
			grow the program and have the space to provide students with more hands-on 
			learning opportunities and chances to get involved in undergraduate research,” 
			Dr. Christian Roberson, the Department Chair of Computer Science, stated. 
		</p>

		<p>
			The process took a few years, but the Weinstien building is complete and students 
			will be able to use it for many years to come.
		</p>

		<div class="Title">
			<h2>Features</h2>
		</div>
		<div class="py-2"></div>
		<div class="features">
			<div class="feature col-4">
				<h1 class="small_pic"><i class="fa-solid fa-cube"></i></h1>
				<h3>Distinct Cube Structure</h3>
			</div>
			<div class="feature col-4">
				<h1 class="small_pic"><i class="fa-solid fa-bullhorn"></i></h1>
				<h3>Personal Auditorium</h3>
			</div>
			<div class="feature col-4">
				<h1 class="small_pic"><i class="fa-solid fa-utensils"></i></h1>
				<h3>Pretzel<br>Restraunt</h3>
			</div>
		</div>
		<div class="py-4"></div>
		<div class="Title">
			<h2>Take a Virtual Tour</h2>
		</div>

	</TextPage>
	<div class="tour_section">
		<img src="@/assets/img/explore.jpg" alt="" class="tour_pic">
		<a href="/virtual-tour"><h2 class="inner_square col-5">Explore Weinstein<br>for yourself!</h2></a>
	</div>
	<div class="py-1"></div>
</template>

<script>
	import TextPage from "../../components/TextPage.vue";

	export default {
		components: {
			TextPage,
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
</style>
