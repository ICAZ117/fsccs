<template>
	<TextPage
		:title="'About the Department'"
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
		<div class="wrapper_div" style="position: relative;">
		<h1 class="col-2 small_pic center"><i class="fa-solid fa-computer"></i></h1>
		<p class="col-10 text_block" >
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
		</div>
		<div class="py-2"></div>

		<div class="wrapper_div">
		<p class="col-9 text_block" >
			The program gives students the opportunity for hands-on experience while they 
			explore and apply the theoretical underpinnings of the discipline. Students have 
			the option to choose from three different concentrations: <b>AI and Machine 
			Learning</b>, <b>Cybersecurity</b>, and <b>Web & Cloud Computing</b>. Choosing 
			a concentration allows students to get a more specialized look into their interests. 
			Those with extra time in their schedule can pick up more than one for a broader view 
			of what the Computer Science department has to offer!
		</p>
		<h1 class="col-3 small_pic center"><i class="fa-solid fa-book-open"></i></h1>
		</div>
	</TextPage>

	<!-- Carosel of community events?
		Talk about why the community is so important
		cards for: profs that care, engaging classes, convinent workspaces, active community-->

	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/Circuit7.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.3"
		:overlayColor="'0, 0, 0'"
		class="section"
	>
		<h1 class="my-3" style="color:white; text-align:center">A Community That Cares</h1>
		<div class="community-pic-holder py-4">
			<img src="@/assets/img/gaming_at_party.jpg" class="community-pic">
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
					<div class="m-0 row g-5">
						<div class="col-6">
							<InfoCard
								:title="'Professors that care'"
							>
							<p class="center">Meet the CS professors -></p>
							</InfoCard>
						</div>
						<div class="col-6">
							<InfoCard
								:title="'Engaging classes'"
							>
							<p class="center">Look over the course requirements -></p>
							</InfoCard>
						</div>
						<div class="col-6">
							<InfoCard
								:title="'Convinient workspaces'"
							>
							<p class="center">Explore Weinstien -></p>
							</InfoCard>
						</div>
						<div class="col-6">
							<InfoCard
								:title="'Active Community'"
							>
							<p class="center">Get involved -></p>
							</InfoCard>
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

	export default {
		components: {
			TextPage,
			Parallax,
			InfoCard,
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
		width: 70%;
		display: block;
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
	/* .inner_square{
		background-color: rgba(47, 79, 79, 0.515);
		margin-left: 20%;
		margin-right: 20%;
		height: 300px;
		padding-top: 1rem;
	}
	.inner_square.text{
		position: absolute;
		background-color: rgba(81, 65, 65, 0.884) !important;
		color: white !important;
		bottom: 15px;
		height: 100px !important;
		width: 260px;
		margin-left: 1rem !important;
		margin-bottom: 1rem;
	} */
	
	.degree_pic{
		display: block;
		width: 85%;
  		margin-left: auto;
  		margin-right: auto;
		transform: translate(5%, 5%);
	}
	.textandimg{
		position: relative;
  		text-align: center;
	}
</style>