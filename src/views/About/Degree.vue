<template>
	<!-- HERO -->
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/backgrounds/walkway.jpg')})`,
			'background-position': 'left',
			'background-size': 'cover',
			width: '55vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--red-gradient-left)'"
		:height="500"
		:padding="'120px 0 60px 0'"
		:maintainSkewbox="true"
		:pictureSide="'right'"
		:invert="false"
		class="red-section hero"
	>
		<template v-slot:left>
			<div class="center vertical-center">
				<h1 class="white">Degree & Concentrations</h1>
			</div>
		</template>
	</SkewBox>

	<!-- ABOUT THE DEGREE -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/backgrounds/Graduation.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.8"
		:overlayColor="'0, 0, 0'"
		class="red-section"
	>
		<div class="h-100">
			<center>
				<div class="mx-auto my-5 faculty container h-100 ">
					<h1 class="center white">
						Bachelors of Computer Science
					</h1>
					<p class="white page-text">
						Computer science provides you with a sound theoretical
						background and the opportunities for individual and
						collaborative exploration of real-world computing
						problems. Whether you choose to pursue a B.S. or a B.A.
						in Computer Science, you'll find yourself working in
						state-of-the-art labs while mastering programming
						languages like Python and Java. Once you've built a
						foundation, your coursework will center on creating
						solutions. You'll develop robotics applications, create
						websites, and engineer software. You'll also take
						courses in a specific niche preparing you for more
						specialized opportunities when you graduate. The
						Computer Science Department at Florida Southern College
						offers a wide variety of classes for students to take.
						Core classes are required for every student, but a large
						portion of the major is comprised of electives. The CS
						faculty have a passion for making their classes
						engaging, and this is especially true for electives,
						since professors are able to infuse their specific
						interests into the curriculum. For a detailed list of
						the classes in the CS major, please check out
						<a
							class="link"
							value="Catalog Link"
							href="https://www.flsouthern.edu/about/academics/catalog.aspx"
							target="_blank"
						>
							FSC's Academic Catalog</a
						>.
					</p>

					<p
						class="white"
						style="text-align: justify; line-height: 2 !important"
					>
						In this department, there are three possible
						concentrations for students to choose from. Each track
						includes three different classes in rising difficulty
						that allows those who take them to gain a basis of
						knowledge in that field. All have their benefits and
						allow students to pursue an education they are
						passionate about. If all are too enticing, students are
						able to choose more than one, or pick up classes from
						any concentration to fulfil their degree, allowing them
						to tailor their schedule to their interests.
					</p>
				</div>
			</center>
		</div>
	</Parallax>

	<!-- CONCENTRATIONS -->
	<!-- :autoplay="5000" -->
	<Carousel
		class="carousel concentrations car"
		:wrap-around="true"
		:transition="1500"
		:pauseAutoplayOnHover="true"
	>
		<Slide :key="0">
			<SkewBox
				:rightBG="{
					backgroundImage: `url(${require('@/assets/img/Web.png')})`,
					'background-color': 'darkgrey',
					'background-position': 'left',
					'background-size': 'cover',
					width: '55vw!important',
				}"
				:leftColor="'var(--FSCred)'"
				:rightColor="'transparent'"
				:height="600"
				:maintainSkewbox="false"
				:pictureSide="'right'"
				:invert="false"
				:mobileColor="'266, 70%, 30%, 0.6'"
				class="skew"
			>
				<template v-slot:left>
					<div
						style="display: flex; align-items: center; height: 100%"
					>
						<div class="white" style="text-align: left">
							<h1 class="white center">Web & Cloud Computing</h1>
							<p class="white page-text">
								In-depth examination of a current topic in web
								development and cloud computing, such as web
								security, user experience, mobile app
								development, and web engineering. In this
								concentration, you'll explore the basic
								principles of web development, dynamic and
								responsive page design, development of SPA's
								through the usage of frameworks, elementary
								database management, development of a backend
								API, and more!
							</p>
							<b>Concentration specific classes:</b>
							<ul class="white">
								<li>Introduction to Web Development</li>
								<li>Web Application Architectures</li>
								<li>Advanced Topics in Web Development</li>
							</ul>
						</div>
					</div>
				</template>
			</SkewBox>
		</Slide>

		<Slide :key="1">
			<SkewBox
				:rightBG="{
					backgroundImage: `url(${require('@/assets/img/ai.jpg')})`,
					'background-position': 'center',
					'background-size': 'cover',
					width: '55vw!important',
				}"
				:leftColor="'var(--FSCgrey)'"
				:rightColor="'transparent'"
				:height="600"
				:maintainSkewbox="false"
				:pictureSide="'right'"
				:invert="false"
				:mobileColor="'205, 70%, 30%, 0.6'"
				class="skew"
			>
				<template v-slot:left>
					<div
						style="display: flex; align-items: center; height: 100%"
					>
						<div class="white" style="text-align: left">
							<h1 class="white center">AI & Machine Learning</h1>
							<p class="white page-text">
								In this concentration, you'll investigate
								concepts and techniques related to artificial
								intelligence such as evolutionary computation,
								artificial neural networks, planning, gaming,
								and more. Students will explore a broad range of
								topics, such as representation, heuristic
								search, machine learning, genetic algorithms,
								etc. to develop advanced algorithms and powerful
								AIs.
							</p>
							<b>Concentration specific classes:</b>
							<ul class="white">
								<li>Introduction to Artificial Intelligence</li>
								<li>Machine Learning</li>
								<li>
									Advanced Topics in Artificial Intelligence
								</li>
							</ul>
						</div>
					</div>
				</template>
			</SkewBox>
		</Slide>

		<Slide :key="2">
			<SkewBox
				:rightBG="{
					backgroundImage: `url(${require('@/assets/img/CySec.jpg')})`,
					'background-position': 'center',
					'background-size': 'cover',
					width: '55vw!important',
				}"
				:leftColor="'var(--FSCblue)'"
				:rightColor="'transparent'"
				:height="600"
				:maintainSkewbox="false"
				:pictureSide="'right'"
				:invert="false"
				:mobileColor="'176, 80%, 30%, 0.6'"
				class="skew skew-cyber"
			>
				<template v-slot:left>
					<div
						style="display: flex; align-items: center; height: 100%"
					>
						<div class="white" style="text-align: left">
							<h1 class="white center">Cyber Security</h1>
							<p class="white page-text">
								Cybersecurity analysts plan and carry out
								security measures to protect an organization's
								computer networks and systems. One of the
								fastest-growing fields within information
								technology, the Bureau of Labor Statistics
								projects the number of jobs in Cyber Security to
								grow by 33 percent before 2030. As a CySec
								student, you can learn to help make the internet
								a safer place. Information is just as important
								as the lives it represents. By protecting this
								information you protect the livelihoods,
								productivity, privacy, and even sometimes the
								physical safety of the denizens of the internet.
							</p>
							<b>Concentration specific classes:</b>
							<ul class="white">
								<li>Principles of Computer Networking</li>
								<li>Penetration Testing</li>
								<li>Threat Detection Engineering</li>
							</ul>
						</div>
					</div>
				</template>
			</SkewBox>
		</Slide>

		<template #addons>
			<Navigation />
		</template>
	</Carousel>
</template>

<script>
import SkewBox from "@/components/SkewBox.vue";
import Parallax from "@/components/Parallax.vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
	components: {
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
.concentrations .carousel__prev,
.concentrations .carousel__next {
	box-sizing: content-box;
	background-color: transparent;
	width: calc(var(--vc-nav-width) * 2) !important;
	height: calc(var(--vc-nav-height) * 2) !important;
	color: white !important;
	scale: 1.5;
}

.concentrations .carousel__prev {
	left: 30px !important;
}

.concentrations .carousel__next {
	right: 30px !important;
}

.intro {
	margin-top: 3rem;
	margin-bottom: 3rem;
}

.intro a {
	font-weight: bold;
}

.intro a:hover {
	color: white;
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
	.hero, .car {
		height: calc(500px * 0.7) !important;
	}

	.intro {
		margin-top: 2rem !important;
		margin-bottom: 2rem !important;
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

	.car .carousel__prev {
		left: -15px !important;
	}

	.car .carousel__next {
		right: -15px !important;
	}

}

@media (max-width: 767.9px) {

	.car {
		height: calc(500px * 0.5) !important;
	}

	.intro p {
		font-size: small !important;
	}

	.intro {
		padding: 0;
	}

	.skew {
		height: 100% !important;
	}


	/* .skew h1 {
		font-size: medium;
	}
	.skew p {
		font-size: small;
		line-height: 1.8;
	}
	.skew-cyber p {
		margin-bottom: .5rem;
		line-height: 1.6 !important;
	}
	.skew li {
		font-size: small;
	} */
	
}

@media (max-width: 575.9px) {
	.hero {
		height: calc(500px * 0.6) !important;
	}

	/* .community {
		
	} */

	.intro p {
		font-size: x-small !important;
		margin-left: 25px !important;
		margin-right: 25px !important;
	}

	.intro h1 {
		font-size: large !important;
		margin-bottom: 10px !important;
	}

	.intro {
		margin-bottom: 0 !important;
	}

	.hero {
		font-size: 15px !important;
	}

	.carousel__prev,
	.carousel__next {
		display: none;
	}

	.show-576 {
		display: flex;
	}

	.skew {
		height: auto;
	}

	.skew h1 {
		font-size: x-large;
	}

	.skew p {
		font-size: small;
		padding: 25px !important;
		padding-bottom: 10px !important;
	}
	
	.skew b {
		font-size: small;
		padding-left: 25px !important;
		padding-right: 25px !important;
	}
	
	.skew li {
		font-size: small;
		margin-left: 20px;
	}

}

@media (max-width: 399.9px) {
}

</style>
