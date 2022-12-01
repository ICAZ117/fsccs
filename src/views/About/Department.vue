<template>
	
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/WCS3.jpg')})`,
			'background-position': 'left',
			'background-size': 'cover',
			width: '53vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--red-gradient-left)'"
		:height="500"
		:padding="'70px 0 60px 0'"
	>
		<template v-slot:left>
			<div class="center vertical-center">
				<h1 class="white">About the Department</h1>
			</div>
		</template>
	</SkewBox>

	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/Circuit6.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.7"
		:overlayColor="'0, 0, 0'"
	>
		<div class="h-100 pb-2 white">
			<center>
				<div class="container py-5 h-100">
					<div class="topbackground">
						<p class="col-9 text_block" >
							Computer science provides you with a sound theoretical background and 
							the opportunities for individual and collaborative exploration of real-world 
							computing problems. Whether you choose to pursue a B.S. or a B.A. in Computer 
							Science, you'll find yourself working in state-of-the-art labs while mastering 
							programming languages like Python and Java. Once you've built a foundation, 
							your coursework will center on creating solutions. You'll develop robotics 
							applications, create websites, and engineer software. You'll also take courses 
							in a specific niche preparing you for more specialized opportunities when you 
							graduate.
						</p>
						<i class="fa-solid fa-computer col-3" style="font-size: 60px; margin:1rem; margin-bottom: 2rem"></i>
						<i class="fa-solid fa-book-open col-3" style="font-size: 60px; margin:1rem; margin-bottom: 2rem"></i>
						<p class="col-9 text_block" >
							The program gives students the opportunity for hands-on experience while they 
							explore and apply the theoretical underpinnings of the discipline. Students have 
							the option to choose from three different concentrations: <b>AI and Machine 
							Learning</b>, <b>Cybersecurity</b>, and <b>Web & Cloud Computing</b>. Choosing 
							a concentration allows students to get a more specialized look into their interests. 
							Those with extra time in their schedule can pick up more than one for a broader view 
							of what the Computer Science department has to offer!
						</p>
						
					</div>
				</div>
			</center>
		</div>
	</Parallax>


	<!-- Carosel of community events?
		Talk about why the community is so important
		cards for: profs that care, engaging classes, convinent workspaces, active community-->

	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/BG5.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.3"
		:overlayColor="'0, 0, 0'"
		class="section"
	>
		<h1 class="my-3" style="color:white; text-align:center">A Community That Cares</h1>
		<div class="community-pic-holder py-4">
			<img src="@/assets/img/gaming_at_party2.png" class="community-pic" style="">
		</div>
		<div>
			<h5 class="community-text">The CS department strives to be a welcoming and inclusive environment for 
				students, both inside and outside of class. More than just a major, the 
				department works hard to create an atmosphere that allows students to 
				connect with each other and the material, as well as build skills that can 
				be directly translated into the work force.</h5>
		</div>

	</Parallax>

	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/BG2.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.05"
		:overlayColor="'0, 0, 0'"
	>
		<div class="h-100 pb-2">
			<center>
				<div class="m-auto container py-5 h-100">
					<h1 class="center mt-2" style="color:white">What Makes Our Department Great</h1>
					<div class="row">
						<div class="col-6 mb-4">
							<a href="/about/faculty" style="text-decoration: none !important;">
								<InfoCard
									:title="'Professors that care'"
								>
								<p class="center card_text">Every professor in the CS department is responsive, thoughtful, and cares about their students.</p>
								<p class="center card_text">Meet the CS professors<i class="ms-2 fa-solid fa-arrow-right"></i></p>
								</InfoCard>
							</a>
						</div>
						<div class="col-6">
							<a href="/about/degree-and-concentrations" style="text-decoration: none;">
								<InfoCard
									:title="'Engaging classes'"
								>
								<p class="center card_text">Classes in this department are exciting and capture your attention from start to finish.</p>
								<p class="center card_text">Look over the course requirements<i class="ms-2 fa-solid fa-arrow-right"></i></p>
								</InfoCard>
							</a>
						</div>
						<div class="col-6">
							<a href="/virtual-tour" style="text-decoration: none;">
								<InfoCard
									:title="'Convinient workspaces'"
								>
								<p class="center card_text">The CS building features a large work area directly next to the professor's offices, which makes asking questions quick and easy for all of your assignments.</p>
								<p class="center card_text">Explore Weinstien<i class="ms-2 fa-solid fa-arrow-right"></i></p>
								</InfoCard>
							</a>
						</div>
						<div class="col-6">
							<a href="/get-involved/cs-club" style="text-decoration: none;">
								<InfoCard
									:title="'Active community'"
								>
								<p class="center card_text">With programming team, CS club, boardgame lunch, and intramural activites, there are tons of opporunities to get involved in the department.</p>
								<p class="center card_text">Get involved<i class="ms-2 fa-solid fa-arrow-right"></i></p>
								</InfoCard>
							</a>
						</div>
					</div>
				</div>
			</center>
		</div>
	</Parallax>


</template>

<script>
	import TextPage from "../../components/TextPage.vue";
	import Parallax from "@/components/Parallax.vue";
	import InfoCard from "@/components/InfoCard.vue";
	import SkewBox from "@/components/SkewBox.vue";

	export default {
		components: {
			TextPage,
			Parallax,
			InfoCard,
			SkewBox,
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
	.text_block{
		display: inline-block;
		line-height: 2;
		text-align: justify;
		font-size: larger;
	}
	.small_pic{
		display: inline-block;
	}
	.degree_square{
		background-color: var(--FSCred);
		margin-left: 0;
		margin-right: 0;
		height: 375px;
		position: relative;
	}
	.inner_square{
		background-color: rgba(58, 64, 64, 0.63);
		height: 300px;
		display: inline;
		position: absolute;
		top: 10%;
	}
	.sm_inner_square{
		background-color: rgba(121, 108, 108, 0.904) !important;
		height: 80px;
		width: 275px;
		color: white;
		text-align: center;
		display: inline;
		position: absolute;
		transform: translate(-70%, -70%);
		
	}
	.sm_inner_square:hover{
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
		color:white;
		text-align:center;
		margin-left: 20%;
		margin-right: 20%;
		margin-bottom: 2rem;
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
	a, a:visited, a:hover, a:active, a:focus {
		color: black;
	}
</style>