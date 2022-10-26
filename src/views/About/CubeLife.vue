<template>
	<!-- HERO -->
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/WCS3.jpg')})`,
			'background-position': 'left',
			'background-size': 'cover',
			width: '55vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--red-gradient)'"
		:height="500"
		:padding="'70px 0 60px 0'"
		class="section"
	>
		<template v-slot:left>
			<div class="center vertical-center">
				<h1 class="white">About The Cube Life</h1>
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
		class="section"
	>
		<div class="h-100 pb-2">
			<center>
				<div class="m-auto faculty container py-5 h-100">
					<h1 class="center white mt-2 mb-4 pb-1">
						Why thecube.life?
					</h1>
					<p
						class="white"
						style="text-align: justify; line-height: 2 !important"
					>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Laudantium, assumenda eaque nobis fugit nisi
						debitis adipisci. Voluptatem nemo nam, ut blanditiis
						quaerat accusamus modi iure debitis sit qui itaque
						officiis? Lorem ipsum dolor sit, amet consectetur
						adipisicing elit. Laudantium, assumenda eaque nobis
						fugit nisi debitis adipisci. Voluptatem nemo nam, ut
						blanditiis quaerat accusamus modi iure debitis sit qui
						itaque officiis? Lorem ipsum dolor sit, amet consectetur
						adipisicing elit. Laudantium, assumenda eaque nobis
						fugit nisi debitis adipisci. Voluptatem nemo nam, ut
						blanditiis quaerat accusamus modi iure debitis sit qui
						itaque officiis? Lorem ipsum dolor sit, amet consectetur
						adipisicing elit. Laudantium, assumenda eaque nobis
						fugit nisi debitis adipisci. Voluptatem nemo nam, ut
						blanditiis quaerat accusamus modi iure debitis sit qui
						itaque officiis? Lorem ipsum dolor sit, amet consectetur
						adipisicing elit. Laudantium, assumenda eaque nobis
						fugit nisi debitis adipisci. Voluptatem nemo nam, ut
						blanditiis quaerat accusamus modi iure debitis sit qui
						itaque officiis?
					</p>
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
		class="section"
	>
		<div class="h-100 pb-2">
			<center>
				<div class="m-auto faculty container py-5 h-100">
					<h1 class="center white mt-2 mb-4 pb-1">
						Meet the Developers
					</h1>
					<div class="mx-auto p-0 row block-center">
						<div class="p-0 col-4">
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
						<div class="p-0 col-4">
							<ProfileCard
								:pfp="`${require('@/assets/img/People/KiraFreijo.jpg')}`"
								:name="'Kira Freijo'"
								:role="'Full Stack Developer'"
                                :email="'kirafreijo@yahoo.com'"
								:linkedin="'https://www.linkedin.com/in/kira-freijo-4a1789162/'"
								:github="'https://github.com/kfreijo'"
                                :discord="'wanderingstardust#6926'"
							>
								I am a Computer Science, Psychology, and
								Criminology triple major with experience
								development in software, VR, machine learning,
								and now full stack. I would love to develop
								interesting AIs in the future.
							</ProfileCard>
						</div>
						<div class="p-0 col-4">
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
		class="section"
	>
		<div class="h-100 pb-2">
			<center>
				<div class="m-auto faculty py-5 h-100">
					<h1 class="center mt-2 mb-4 pb-1">Inspiration</h1>
					<p
						class="container"
						style="text-align: justify; line-height: 2 !important"
					>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Laudantium, assumenda eaque nobis fugit nisi
						debitis adipisci. Voluptatem nemo nam, ut blanditiis
						quaerat accusamus modi iure debitis sit qui itaque
						officiis? Lorem ipsum dolor sit, amet consectetur
						adipisicing elit. Laudantium, assumenda eaque nobis
						fugit nisi debitis adipisci. Voluptatem nemo nam, ut
						blanditiis quaerat accusamus modi iure debitis sit qui
						itaque officiis?
					</p>
					<div class="mx-auto p-0 inspiration row block-center">
						<div class="p-0 col-3">
							<ProfileCard
								:pfp="`${require('@/assets/img/People/ChrisHaynes.jpg')}`"
								:name="'Chris Haynes'"
								:role="'Full Stack Developer'"
								:linkedin="'https://www.linkedin.com/in/christophernicolashaynes/'"
							></ProfileCard>
						</div>
						<div class="p-0 col-3">
							<ProfileCard
								:pfp="`${require('@/assets/img/People/Anonymous.png')}`"
								:name="'Joseph Saba'"
								:role="'Full Stack Developer'"
								:linkedin="'https://www.linkedin.com/in/joseph-saba-1b685320a/'"
							></ProfileCard>
						</div>
						<div class="p-0 col-3">
							<ProfileCard
								:pfp="`${require('@/assets/img/People/EmmaStoverink.jpg')}`"
								:name="'Emma Stoverink'"
								:role="'Full Stack Developer'"
								:linkedin="'https://www.linkedin.com/in/emmastoverink/'"
								:github="'https://github.com/emmajs16'"
							></ProfileCard>
						</div>
						<div class="p-0 col-3">
							<ProfileCard
								:pfp="`${require('@/assets/img/People/MatthewWilliams.jpg')}`"
								:name="'Matthew Williams'"
								:role="'Full Stack Developer'"
								:linkedin="'https://www.linkedin.com/in/matthew-williams-5842b6229/'"
							></ProfileCard>
						</div>
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
		style="transform: scaleY(-1)"
	>
		<template v-slot:right>
			<div
				class="ps-5 vertical-center white"
				style="transform: scaleY(-1); text-align: justify !important"
			>
				<h2>Tech Stack</h2>
				<p>
					The Cube Life uses a wide variety of modern technologies and
					frameworks to produce a responsive and dynamic experience to
					the user. We developed our frontend using
					<a
						href="https://vuejs.org/"
						target="_blank"
						class="white link"
						>Vue 3</a
					>, a javascript framework that allowed us to develop a
					<b>Single-Page Application (SPA)</b> with minimal package
					size. This means that the entire website is delivered to the
					frontend on the very first request. Routing and navigation
					is handled on the frontend by intercepting all navigation
					requests and modifying the DOM directly using JavaScript.
					This imporves UX, as users no longer need to wait for each
					page to load, and it reduces API load, as the API needs to
					deal with fewer requests. The only downside is that the
					initial loading time of the page is slightly increased, as
					the user is recieving the entire website all at once, rather
					than an individual page.
				</p>
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
	>
		<template v-slot:left>
			<div
				class="pe-5 vertical-center white"
				style="text-align: justify !important"
			>
				<p>
					For page design, we used
					<a
						href="https://getbootstrap.com"
						target="_blank"
						class="white link"
						>Bootstrap 5</a
					>
					through their CDN, as there is unfortunately no native
					integration for Bootstrap 5 in Vue. Bootstrap is a library
					of commonly-used CSS classes that allow developers to reduce
					time spent on page design. Additionally, several external
					Vue components were imported, such as the Carousel and Tab
					components found on certain pages of the website. Other
					components were designed in-house (such as the SkewBox,
					Parallax, Profile Cards, etc.), and then reused around the
					page, which saved us from writing a plethora of duplicate
					code.
				</p>
			</div>
		</template>
	</SkewBox>

	<!-- FIREBASE -->
	<SkewBox
		:leftBG="{
			backgroundImage: `url(https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png)`,
			'background-color': '#039be6',
			width: '55vw!important',
			transform: 'scaleY(-1)',
			'background-position': 'center',
			'background-size': 'contain',
			'background-repeat': 'no-repeat',
		}"
		:leftColor="'transparent'"
		:rightColor="'linear-gradient(to right, #ffa715, #f48310 35%)'"
		:height="550"
		style="transform: scaleY(-1)"
	>
		<template v-slot:right>
			<div
				class="ps-5 vertical-center white"
				style="transform: scaleY(-1); text-align: justify !important"
			>
				<p>
					Our backend is powered fully through the use of
					<a
						href="https://firebase.google.com/"
						target="_blank"
						class="white link"
						>Firebase</a
					>. Developed by Google, Firebase is an all-in-one API and
					database solution that supplies free hosting and storage to
					developers. It integrates very well with Vue, and provides
					us with a high-speed NoSQL database (FireStore) that ports
					directly into the Vuex Store, as well as multi-platform
					authentication using Firebase Auth. The only downside to
					Firebase is, since it comes with it's own API, cross-origin
					requests to other external APIs (such as the Google Calendar
					API and the Slack Web API) has to be made through the
					frontend.
				</p>
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
	>
		<template v-slot:left>
			<div
				class="pe-5 vertical-center white"
				style="text-align: justify !important"
			>
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
					>. Although UE5 has already come out, the ability to build a
					project using WebGL (which is necessary to host the project
					on a standard HTTP server such as Firebase) was removed in
					UE5. This forced us to use UE4 for the project. The building
					model is a to-scale (according to the official building
					blueprints) model of the Weinstein Computer Science
					Building, designed in Maya. The textures and objects were
					provided through a combination of in-house modelling, and a
					few external models. Once the project was done, it was built
					into a WebGL project, and deployed on an isolated Firebase
					server (to limit package side). It was then displayed on the
					website through an iframe.
				</p>
			</div>
		</template>
	</SkewBox>
</template>

<script>
import SkewBox from "@/components/SkewBox.vue";
import Parallax from "@/components/Parallax.vue";
import ProfileCard from "../../components/ProfileCard.vue";

export default {
	components: {
		SkewBox,
		Parallax,
		ProfileCard,
	},
};
</script>

<style scoped>
.inspiration {
	width: 1400px !important;
}
</style>