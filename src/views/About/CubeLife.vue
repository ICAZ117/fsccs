<template>
	<!-- HERO -->
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/cube-pics/DSC00062.jpg')})`,
			'background-position': 'center',
			'background-size': 'cover',
			width: '55vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--red-gradient-left)'"
		:height="500"
		:padding="'60px 0 0 0'"
		class="red-section hero"
	>
		<template v-slot:left>
			<div class="h-100">
				<div class="center vertical-center">
					<h1 class="white">About The Cube Life</h1>
				</div>
			</div>
		</template>
	</SkewBox>

	<!-- ABOUT THE CUBE LIFE -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/WCS.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.8"
		:overlayColor="'0, 0, 0'"
		class="red-section intro"
	>
		<div class="h-100 pb-2">
			<center>
				<div class="m-auto container py-5 h-100">
					<div class="white">
						<p class="justify-large mb-3">
							Since its inception (and in fact since the initial
							building plans and mockups were shown to students),
							the Weinstein Computer Sciences Center was
							affectionately, and appropriately, coined "The
							Cube." Visible even from across Lake Hollingsworth,
							The Cube is a Lakeland icon, and its bold, inspiring
							stature is a quintessential representation of both
							our amazing students, as well as the unique, engaged
							learning experience you find here at Florida
							Southern College.
						</p>

						<h4 class="center white">
							Why "The Cube Life" (thecube.life)?
						</h4>

						<p class="justify-large mb-3">
							Life as a Moc is an incredible experience of
							personal growth and development. Life in The Cube,
							however, takes it to another level completely: CS
							Club meetups and parties, the ever-popular weekly
							board game lunches with social-deduction gaming
							marathons, where you are calling both your peers and
							professors filthy liars, intramural All-Sports
							domination, bowling and movie nights, annual Chili
							Contests, and even our Annual Non-Denominational
							Holiday Fun-Time Extravaganza<sup>TM</sup>. In
							short, Life in The Cube is fun, is stressful at
							times, but most of all, is an incredibly gratifying
							experience.
						</p>

						<h4 class="center white">
							So once more, why The Cube Life?
						</h4>

						<p class="center mb-3">
							As the saying goes, you don't choose The Cube Life,
							The Cube Life chooses you!
						</p>
						<div class="center">
							<button
								class="btn btn-md btn-primary"
								@click="toggleCubeLife"
							>
								{{
									$store.getters.getCubeLifeMode
										? "Disable"
										: "Enable"
								}}
								Cube Life Mode!
							</button>
						</div>
					</div>
				</div>
			</center>
		</div>
	</Parallax>

	<!-- MEET THE DEVELOPERS -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/Matrix6.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0"
		:overlayColor="'0, 0, 0'"
		class="red-section developers"
	>
		<div class="h-100 pb-2">
			<center>
				<div class="m-auto container py-5 h-100">
					<h3 class="center white mt-2 mb-4 pb-1">
						Meet the Developers
					</h3>

					<!-- LARGE -->
					<div
						v-if="windowWidth >= 1200"
						class="mx-auto p-0 row block-center"
					>
						<div class="p-0 col-4 info-card">
							<ProfileCard
								:pfp="`${require('@/assets/img/People/IbraheemCazalas.png')}`"
								:name="'Ibraheem Cazalas'"
								:role="'Full Stack Developer'"
								:website="'http://icaz117.web.app'"
								:email="'ibraheemcazalas@gmail.com'"
								:linkedin="'https://www.linkedin.com/in/ibraheem-cazalas-761684161/'"
								:github="'https://github.com/ICAZ117'"
								:discord="'ICAZ117#4716'"
							>
								I am a Computer Science major on the pre-med
								track with plans to pursue a career in medicine.
								I have experience in software, full stack, and
								VR development.
							</ProfileCard>
						</div>
						<div class="p-0 col-4 info-card">
							<ProfileCard
								:pfp="`${require('@/assets/img/People/KiraFreijo.jpg')}`"
								:name="'Kira Freijo'"
								:role="'Full Stack Developer'"
								:email="'kirafreijo@yahoo.com'"
								:linkedin="'https://www.linkedin.com/in/kira-freijo-4a1789162/'"
								:github="'https://github.com/kfreijo'"
								:discord="'wanderingstardust#6926'"
							>
								I am a Computer Science, Psy-chology, and
								Criminology triple major with experience in
								software development, VR, machine lear-ning, and
								now full stack. I would love to develop
								interesting AIs in the future.
							</ProfileCard>
						</div>
						<div class="p-0 col-4 info-card">
							<ProfileCard
								:pfp="`${require('@/assets/img/People/IsaacGaray.jpg')}`"
								:name="'Isaac Garay'"
								:role="'Game Developer'"
								:email="'isaac.garay.006@gmail.com'"
								:linkedin="'https://www.linkedin.com/in/isaac-garay-b783a0228/'"
								:github="'https://github.com/RockDevelop'"
							>
								I am a Computer Science major as well as an
								Interactive and Game Design major. I have
								experience in Unreal and AI.
							</ProfileCard>
						</div>
					</div>

					<!-- SMALL -->
					<div v-else class="w-100">
						<div class="carousel-wrapper">
							<Carousel
								:itemsToShow="
									windowWidth >= 992
										? 2
										: windowWidth >= 768
										? 1.5
										: 1
								"
								:wrapAround="true"
								class="red-arrows"
							>
								<Slide :key="0">
									<div class="">
										<ProfileCard
											:pfp="`${require('@/assets/img/People/IbraheemCazalas.png')}`"
											:name="'Ibraheem Cazalas'"
											:role="'Full Stack Developer'"
											:website="'http://icaz117.web.app'"
											:email="'ibraheemcazalas@gmail.com'"
											:linkedin="'https://www.linkedin.com/in/ibraheem-cazalas-761684161/'"
											:github="'https://github.com/ICAZ117'"
											:discord="'ICAZ117#4716'"
										>
											I am a Computer Science major on the
											pre-med track with plans to pursue a
											career in medicine. I have
											experience in software, full stack,
											and VR development.
										</ProfileCard>
									</div>
								</Slide>

								<Slide :key="1">
									<div class="">
										<ProfileCard
											:pfp="`${require('@/assets/img/People/KiraFreijo.jpg')}`"
											:name="'Kira Freijo'"
											:role="'Full Stack Developer'"
											:email="'kirafreijo@yahoo.com'"
											:linkedin="'https://www.linkedin.com/in/kira-freijo-4a1789162/'"
											:github="'https://github.com/kfreijo'"
											:discord="'wanderingstardust#6926'"
										>
											I am a Computer Science, Psychology,
											and Criminology triple major with
											experience in software development,
											VR, machine learning, and now full
											stack. I would love to develop
											interesting AIs in the future.
										</ProfileCard>
									</div>
								</Slide>
								<Slide :key="2">
									<div class="">
										<ProfileCard
											:pfp="`${require('@/assets/img/People/IsaacGaray.jpg')}`"
											:name="'Isaac Garay'"
											:role="'Game Developer'"
											:email="'isaac.garay.006@gmail.com'"
											:linkedin="'https://www.linkedin.com/in/isaac-garay-b783a0228/'"
											:github="'https://github.com/RockDevelop'"
										>
											I am a Computer Science major as
											well as an Interactive and Game
											Design major. I have experience in
											Unreal and AI.
										</ProfileCard>
									</div>
								</Slide>

								<template #addons>
									<Navigation />
									<Pagination />
								</template>
							</Carousel>
						</div>
					</div>
				</div>
			</center>
		</div>
	</Parallax>

	<!-- INSPIRATION -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/BG7.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0"
		:overlayColor="'0, 0, 0'"
		class="red-section"
	>
		<div class="h-100 pb-2">
			<center>
				<div class="m-auto py-5 h-100 container">
					<h3 class="center mt-2">Inspiration</h3>
					<p style="text-align: justify; line-height: 2 !important">
						A group of four talented students, now alumni, first
						tackled this project in 2021 and made great headway,
						leaving big shoes to fill. During their final
						presentation, they expressed a hope that another group
						would take up the reigns, add more functionality to the
						project, and provide both a usable and sustainable web
						application for the department. We are grateful for
						their efforts and feel privileged to continue
						development of this project.
					</p>
					<div class="carousel-wrapper">
						<Carousel
							:itemsToShow="
								windowWidth >= 1200
									? 2.5
									: windowWidth >= 992
									? 2
									: windowWidth >= 768
									? 1.5
									: 1
							"
							:wrapAround="true"
							class="red-arrows"
						>
							<Slide :key="1">
								<ProfileCard
									:pfp="`${require('@/assets/img/People/ChrisHaynes.jpg')}`"
									:name="'Chris Haynes'"
									:role="'Full Stack Developer'"
									:linkedin="'https://www.linkedin.com/in/christophernicolashaynes/'"
								></ProfileCard>
							</Slide>
							<Slide :key="2">
								<ProfileCard
									:pfp="`${require('@/assets/img/People/JosephSaba.png')}`"
									:name="'Joseph Saba'"
									:role="'Full Stack Developer'"
									:linkedin="'https://www.linkedin.com/in/joseph-saba-1b685320a/'"
								></ProfileCard>
							</Slide>
							<Slide :key="3">
								<ProfileCard
									:pfp="`${require('@/assets/img/People/EmmaStoverink.jpg')}`"
									:name="'Emma Stoverink'"
									:role="'Full Stack Developer'"
									:linkedin="'https://www.linkedin.com/in/emmastoverink/'"
									:github="'https://github.com/emmajs16'"
								></ProfileCard>
							</Slide>
							<Slide :key="4">
								<ProfileCard
									:pfp="`${require('@/assets/img/People/MatthewWilliams.jpg')}`"
									:name="'Matthew Williams'"
									:role="'Full Stack Developer'"
									:linkedin="'https://www.linkedin.com/in/matthew-williams-5842b6229/'"
								></ProfileCard>
							</Slide>

							<template #addons>
								<Navigation />
								<Pagination />
							</template>
						</Carousel>
					</div>
				</div>
			</center>
		</div>
	</Parallax>

	<!-- VUE -->
	<SkewBox
		:leftBG="{
			backgroundImage: `url(https://embed-ssl.wistia.com/deliveries/7123a1a21a10e8de4f492041e5ffda60b3649b30.jpg)`,
			width: '55vw!important',
			transform: 'scaleY(-1)',
			'background-position': 'center',
			'background-size': 'cover',
		}"
		:leftColor="'transparent'"
		:rightColor="'linear-gradient(to right, #42b883, #35495e 45%)'"
		:height="550"
		:maintainSkewbox="false"
		:pictureSide="'left'"
		:invert="true"
		:mobileColor="'hsla(153, 70%, 30%, 0.6)'"
		style="transform: scaleY(-1)"
	>
		<template v-slot:right>
			<div
				class="py-5 py-xl-0 ps-xl-5 vertical-center white justify-large"
				style="transform: scaleY(-1)"
			>
				<h3>Tech Stack</h3>
				<Expandable>
					<p>
						The Cube Life uses a wide variety of modern technologies
						and frameworks to produce a responsive and dynamic
						experience to the user. We developed our frontend using
						<a
							href="https://vuejs.org/"
							target="_blank"
							class="white link"
							>Vue 3</a
						>, a javascript framework that allowed us to develop a
						<b>Single-Page Application (SPA)</b> with minimal
						package size. This means that the entire website is
						delivered to the frontend on the very first request.
						Routing and navigation is handled on the frontend by
						intercepting all navigation requests and modifying the
						DOM directly using JavaScript. This imporves UX, as
						users no longer need to wait for each page to load, and
						it reduces API load, as the API needs to deal with fewer
						requests. The only downside is that the initial loading
						time of the page is slightly increased, as the user is
						recieving the entire website all at once, rather than an
						individual page.
					</p>
				</Expandable>
			</div>
		</template>
	</SkewBox>

	<!-- BOOTSTRAP -->
	<SkewBox
		:rightBG="{
			backgroundImage: `url(https://user-images.githubusercontent.com/2327532/39481401-fa7d2992-4d30-11e8-886d-c4a3ee88147f.png)`,
			width: '50vw!important',
			'background-position': 'center',
			'background-size': 'cover',
		}"
		:rightColor="'transparent'"
		:leftColor="'linear-gradient(to left, #7e49cb, #4b1d8a 35%)'"
		:height="550"
		:maintainSkewbox="false"
		:pictureSide="'right'"
		:invert="false"
		:mobileColor="'hsla(264, 100%, 10%, 0.7)'"
		class="skew"
	>
		<template v-slot:left>
			<div
				class="py-5 py-xl-0 pe-xl-5 vertical-center white"
				style="text-align: justify !important"
			>
				<Expandable>
					<p>
						For page design, we used
						<a
							href="https://getbootstrap.com"
							target="_blank"
							class="white link"
							>Bootstrap 5</a
						>
						through their CDN, as there is unfortunately no native
						integration for Bootstrap 5 in Vue. Bootstrap is a
						library of commonly-used CSS classes that allow
						developers to reduce time spent on page design.
						Additionally, several external Vue components were
						imported, such as the Carousel and Tab components found
						on certain pages of the website. Other components were
						designed in-house (such as the SkewBox, Parallax,
						Profile Cards, etc.), and then reused around the page,
						which saved us from writing a plethora of duplicate
						code.
					</p>
				</Expandable>
			</div>
		</template>
	</SkewBox>

	<!-- FIREBASE -->
	<SkewBox
		:leftBG="{
			backgroundImage: `url(https://webartdevelopers.com/blog/wp-content/uploads/2020/10/firebase-logo.png)`,
			'background-color': '#039be6',
			width: '55vw!important',
			transform: 'scaleY(-1)',
			'background-position': 'center',
			'background-size': 'cover',
			'background-repeat': 'no-repeat',
		}"
		:leftColor="'transparent'"
		:rightColor="'linear-gradient(to right, #ffa715, #f48310 30%)'"
		:height="550"
		:maintainSkewbox="false"
		:pictureSide="'left'"
		:invert="true"
		:mobileColor="'hsla(37, 100%, 50%, 0.7)'"
		style="transform: scaleY(-1)"
		class="skew"
	>
		<template v-slot:right>
			<div
				class="py-5 py-xl-0 ps-xl-5 vertical-center white"
				style="transform: scaleY(-1); text-align: justify !important"
			>
				<Expandable>
					<p>
						Our backend is powered fully through the use of
						<a
							href="https://firebase.google.com/"
							target="_blank"
							class="white link"
							>Firebase</a
						>. Developed by Google, Firebase is an all-in-one API
						and database solution that supplies free hosting and
						storage to developers. It integrates very well with Vue,
						and provides us with a high-speed NoSQL database
						(FireStore) that ports directly into the Vuex Store, as
						well as multi-platform authentication using Firebase
						Auth. The only downside to Firebase is, since it comes
						with it's own API, cross-origin requests to other
						external APIs (such as the Google Calendar API and the
						Slack Web API) has to be made through the frontend.
					</p>
				</Expandable>
			</div>
		</template>
	</SkewBox>

	<!-- UNREAL -->
	<SkewBox
		:rightBG="{
			backgroundImage: `url(https://n8t8d9t2.rocketcdn.me/wp-content/uploads/2021/08/3645785.jpg)`,
			width: '55vw!important',
			'background-position': 'center',
			'background-size': 'cover',
		}"
		:rightColor="'transparent'"
		:leftColor="'linear-gradient(to left, #202337, #000 80%)'"
		:height="550"
		:maintainSkewbox="false"
		:pictureSide="'right'"
		:invert="false"
		:mobileColor="'hsla(232, 26%, 10%, 0.85)'"
		class="skew"
	>
		<template v-slot:left>
			<div
				class="py-5 py-xl-0 pe-xl-5 vertical-center white"
				style="text-align: justify !important"
			>
				<Expandable>
					<p>
						Lastly, the virtual tour (<router-link
							to="/virtual-tour"
							class="white link"
							>check it out if you haven't already!</router-link
						>) was made possible through the use of
						<a
							href="https://www.unrealengine.com/"
							target="_blank"
							class="white link"
							>Unreal Engine 4</a
						>. Although UE5 has already come out, the ability to
						build a project using WebGL (which is necessary to host
						the project on a standard HTTP server such as Firebase)
						was removed in UE5. This forced us to use UE4 for the
						project. The building model is a to-scale (according to
						the official building blueprints) model of the Weinstein
						Computer Science Building, designed in Maya. The
						textures and objects were provided through a combination
						of in-house modelling, and a few external models. Once
						the project was done, it was built into a WebGL project,
						and deployed on an isolated Firebase server (to limit
						package side). It was then displayed on the website
						through an iframe.
					</p>
				</Expandable>
			</div>
		</template>
	</SkewBox>
</template>

<script>
import Expandable from "@/components/Expandable.vue";
import SkewBox from "@/components/SkewBox.vue";
import Parallax from "@/components/Parallax.vue";
import ProfileCard from "@/components/ProfileCard.vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
	components: {
		Expandable,
		SkewBox,
		Parallax,
		ProfileCard,
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
	methods: {
		getWindowSize() {
			this.windowHeight = window.innerHeight;
			this.windowWidth = window.innerWidth;
		},
		toggleCubeLife() {
			this.$store.commit("toggleCubeLife");
			const cubeLifeMode = this.$store.getters.getCubeLifeMode;

			if (cubeLifeMode) {
				this.$notify({
					title: "Cube Life Mode Activated!",
					text: "Can you find all of the easter eggs?",
					type: "success",
				});
			} else {
				this.$notify({
					title: "Cube Life Mode Disabled!",
					type: "success",
				});
			}
			this.$router.push("/");
		},
	},
	created() {
		window.addEventListener("resize", this.getWindowSize);
	},
	destroyed() {
		window.removeEventListener("resize", this.getWindowSize);
	},
	beforeMount() {
		this.getWindowSize();
	},
};
</script>

<style scoped>
.carousel-wrapper {
	margin: 0 7rem;
	padding: 0 5rem;
}

.carousel-wrapper :deep(.carousel__prev) {
	left: -80px !important;
}

.carousel-wrapper :deep(.carousel__next) {
	right: -80px !important;
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
@media (max-width: 1399.9px) {
	.carousel-wrapper {
		padding: 0;
	}
}

@media (max-width: 1199.9px) {
	.carousel-wrapper {
		margin: 0 5rem;
	}
}

@media (max-width: 575.9px) {
	.carousel-wrapper {
		margin: 0;
	}
}
</style>