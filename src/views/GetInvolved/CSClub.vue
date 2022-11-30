<template>
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/csclub1.png')})`,
			'background-position': 'top',
			'background-size': 'cover',
			width: '54vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--FSCblue)'"
		:height="500"
		:padding="'70px 0 60px 0'"
		class="section"
	>
		<template v-slot:left>
			<div class="center vertical-center">
				<h1 class="white">Computer Science Club</h1>
			</div>
		</template>
	</SkewBox>

	<div class="center"
		 style="background: lightcyan">
		<h1 class="pt-5 pb-1">CS club: A place for everyone</h1>
		
		<h5 style="margin-left: 10%; margin-right: 10%; padding-bottom: 30px; color: var(--FSClightblue); line-height: 1.5 !important;">
		We offer a wide variety events from educational seminars in relation to the 
		major, to lighthearted video game tournaments. There is something for anybody 
		with an affinity for STEM related topics and hobbies! Feel free to stop by and hang out.</h5>

		<hr>
		<h2 class="py-2">
			<strong>Meet the 2022-2023 Exec Members</strong>
		</h2>

		<!-- <div class="col-6 pic center">
			<img src="@/assets/img/CS_department_pic3.png">
		</div> -->
		
		<div class="py-4 row">
			<Carousel
				:itemsToShow="4"
				:wrapAround="true"
			>
				<Slide
					v-for="(officer, name) in officers" :key="name"
				>
					<div class="exec">
						<ProfileCard
						:pfp="officer.picture"
						:name="officer.name"
						:role="officer.position"
						></ProfileCard>
					</div>
				</Slide>
				<template #addons>
					<Navigation />
					<Pagination class="show-576" />
				</template>
			</Carousel>
			<!-- <div class="col-3" v-for="(officer, name) in officers" :key="name">
				<div class="exec">
					<ProfileCard
						:pfp="`${require('@/assets/img/People/Anonymous.png')}`"
						:name="officer.name"
						:role="officer.position"
					></ProfileCard>
				</div>
				<div class="exec">
					<h5>{{officer.position}}</h5>
					<center><hr class="primary-hr"/></center>
					<i><p>{{officer.name}}</p></i>
				</div>
			</div> -->
		</div>
		
		<!-- <div class="py-4">
			<div class="col-3 exec">
				<h5>President</h5>
				<center><hr class="primary-hr"/></center>
				<i><p>Nickolas Bonner</p></i>
			</div>
			<div class="col-3 exec">
				<h5>Vice President</h5>
				<center><hr class="primary-hr"/></center>
				<i><p>Johnathan Bailey</p></i>
			</div>
			<div class="col-3 exec">
				<h5>Treasurer</h5>
				<center><hr class="primary-hr"/></center>
				<i><p>Will Davidson</p></i>
			</div>
			<div class="col-3 exec">
				<h5>Secretary/Historian</h5>
				<center><hr class="primary-hr"/></center>
				<i><p>Chloe Hacker</p></i>
			</div>
		</div> -->

	</div>

	<!-- Carosel of pictures of club events -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/Circuit6.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.6"
		:overlayColor="'0, 0, 0'"
		class="section"
	>
		<div class="h-100 pb-2">
			<center>
				<div class="m-auto faculty container py-5 h-75">
					<h1 class="center white mt-2 mb-4 pb-1"
						style="font-weight: bold">
						Peruse Past Events
					</h1>
					<hr class="primary-hr" style="width: 50%" />
					<Carousel
						class="carousel"
						:wrap-around="true"
						:transition="600"
						:pauseAutoplayOnHover="true"
					>
						<Slide :key="0">
							<div class="w-100">
								<img src="@/assets/img/Matrix2.jpg">
							</div>
						</Slide>
						<Slide :key="1">
							<div class="w-100">
								<img src="@/assets/img/WCS.jpg">
							</div>
						</Slide>
						<Slide :key="2">
							<div class="w-100">
								<img src="@/assets/img/Matrix1.jpg">
							</div>
						</Slide>
						<template #addons>
							<Navigation />
							<Pagination />
						</template>
					</Carousel>
				</div>
			</center>
		</div>
		
		<div class="link center mb-4">
			<a style="color: white; text-decoration: none;" 
				href="/resources/calendar">
			Check out our department calendar for upcoming events!
			</a>
		</div>
	</Parallax>

	<!-- List of cool things about the club -->
	<div class="pb-2" style="background-color: var(--FSCred); display: flex; align-items: center;">
		<div class="text col-6" style="display: inline-block;">
			<div class="top pt-3 px-5">
				<em><h1>What does the CS club have to offer?</h1></em>
			</div>
			<div class="items center py-2">
				<h4 class="item left col-7">Exploring engaging topics</h4>
				<div class="pb-2"></div>

				<h4 class="item right col-7">Spend time with other CS students</h4>
				<div class="pb-2"></div>

				<h4 class="item left col-8">Get to know your professors</h4>
				<div class="pb-2"></div>

				<h4 class="item right col-5">Enjoy fun events</h4>
			</div>
		</div>
		<div class="pic col-6 center">
			<img src="@/assets/img/CS_department_pic1.png">
		</div>
	</div>

</template>

<script>
	import SkewBox from "@/components/SkewBox.vue";
	import Parallax from "@/components/Parallax.vue";
	import InfoCard from "@/components/InfoCard.vue";
	import "vue3-carousel/dist/carousel.css";
	import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
	import ProfileCard from "../../components/ProfileCard.vue";
	
	export default {
		components: {
			SkewBox,
			Parallax,
			InfoCard,
			Carousel,
			Slide,
			Pagination,
			Navigation,
			ProfileCard,
		},
		data() {
			return {
				officers: {},
			};
		},
		async beforeMount() {
			// Get all cs officers
			await this.$store.dispatch("fetchOfficers")

			// Retrieve the officers 
			const res = this.$store.getters.getOfficers;

			// Push each officer's data to the array
			res.forEach((doc) => {
				this.officers[doc.id] = doc.data();
			});
		},
	};
</script>

<style scoped>
.item {
	border: 2px solid white; 
	background-color: var(--FSClightblue);
	padding-top: 2px;
	padding-bottom: 2px;
	padding-left: 2px;
	padding-right: 2px;
}
.right {
	margin-left: 40%;
}
.left {
	margin-left: 8%;
	color: white;
}
.pic {
	display: inline-block;
}
.primary-hr {
	width: 75%;
}
.exec {
	display: inline-block;
}

</style>
