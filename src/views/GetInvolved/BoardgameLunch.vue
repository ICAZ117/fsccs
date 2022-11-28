<template>
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/BoardGameLunch.png')})`,
			'background-position': 'center',
			'background-size': 'cover',
			width: '54vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'grey'"
		:height="500"
		:padding="'70px 0 60px 0'"
		class="section"
	>
		<template v-slot:left>
			<div class="center vertical-center">
				<h1 class="white">Boardgame Lunch</h1>
			</div>
		</template>
	</SkewBox>

	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/BG2.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.3"
		:overlayColor="'0, 0, 0'"
		class="section"
	>
		<div class="h-100 pb-2">
			<center>
				<div class="container py-5 h-100">
					<h1 class="white mt-2 mb-2 pb-1" style="text-align: left">
						Once a week.
					</h1>
					<h1 class="center white mt-2 mb-2 pb-1">
						Every week.
					</h1>
					<h1 class="right white mt-2 mb-2 pb-1" style="text-align: right">
						All semester.
					</h1>
				</div>
			</center>
		</div>
	</Parallax>

	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/Circuit3.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.7"
		:overlayColor="'0, 0, 0'"
		class="section"
	>
		<div class="h-100 pb-2">
			<center>
				<div class="container py-5">
					<h2 class="center white mt-2 mb-4 pb-1 col-9">
						Take a break from your normal schedule and come play games!
					</h2>
					<div class="center mt-3 mb-3 pb-1 mx-2">
						<h5 class="info col-3 mx-4 my-2" style="transform: translate(-2%)">
							The CS department hosts a weekly event where 
							you are invited to play games with your faculty and peers!
						</h5>
						<h5 class="info col-3 mx-4 my-2" style="transform: translate(0, 10%)">
							There are a plethora of games available to play! Feel free to come by and join the fun.
						</h5>
						<h5 class="info col-3 mx-4 my-2" style="transform: translate(2%)">
							Check out the department calendar to see when boardgame lunch 
							is being held this semester!
						</h5>
					</div>
				</div>
			</center>
		</div>
	</Parallax>

	<SkewBox
		:leftBG="{
			backgroundImage: `url(${require('@/assets/img/BGlunch4.png')})`,
			'background-position': 'top',
			'background-size': 'cover',
			width: '54vw!important',
		}"
		:rightColor="'var(--FSCblue)'"
		:leftColor="'transparent'"
		:height="500"
		:padding="'70px 0 60px 0'"
		class="section"
	>
		<template v-slot:right>
			<div class="center vertical-center">
				<h2 class="white">What kind of games are there?</h2>
				<p class="white mt-4">
					From <strong>One Night Ultimate Werewolf</strong>, to <strong>Go Fish</strong>, 
					to <strong>Tetris Link</strong>, there's something for everyone at boardgame lunch. 
					Check out a few of the ones available in the picture to the left. If 
					the department doesn't own your favorite game (and it's school appropriate), 
					feel free to bring yours from home!
				</p>
			</div>
		</template>
	</SkewBox>

	<div class="memory_wall">
		<Parallax
			:image="{
				backgroundImage: `url(${require('@/assets/img/BG3.jpg')}`,
				'background-position': 'left middle',
			}"
			:height="'0'"
			:opacity="0.3"
			:overlayColor="'0, 0, 0'"
		>
			<center>
				<div class="m-auto faculty container py-4">
					<h1 class="center white pb-1 bold">
						Boardgame Lunch Memory Wall
					</h1>
					<hr class="primary-hr" style="width: 80%;" />
					<Carousel
						:wrapAround="true"
						:transition="600"
						:pauseAutoplayOnHover="true"
						style="transform: translate(0, -10%);"
					>
					<Slide :key="0">
						<div class="pic2">
							<img src="@/assets/img/BGlunch.png">
						</div>
					</Slide>
					<Slide :key="1">
						<div class="pic2">
							<img src="@/assets/img/BGlunch3.png">
						</div>
					</Slide>
					<Slide :key="2">
						<div class="pic2">
							<img src="@/assets/img/BGlunch2.png">
						</div>
					</Slide>
					<Slide :key="3">
						<div class="pic2">
							<img src="@/assets/img/BGlunch6.jpg">
						</div>
					</Slide>
					<Slide :key="4">
						<div class="pic2">
							<img src="@/assets/img/BGlunch5-2.png">
						</div>
					</Slide>
					<Slide :key="5">
						<div class="pic2">
							<img src="@/assets/img/BGlunch7.jpg">
						</div>
					</Slide>
					<Slide :key="6">
						<div class="pic2">
							<img src="@/assets/img/BGlunch8.jpg">
						</div>
					</Slide>
						<template #addons>
							<Navigation />
                            <Pagination />
						</template>
					</Carousel>
				</div>
			</center>
		
		<!-- <div class="row">
			<div class="col-4 pic" style="transform: scale(.7)">
				<img src="@/assets/img/BGlunch.png" style="transform: translate(-12%, -20%)">
			</div>
			<div class="col-4 pic" style="transform: scale(.75)">
				<img src="@/assets/img/BGlunch3.png" style="transform: translate(-30%, 5%)">
			</div>
			<div class="col-4 pic" style="transform: scale(.8)">
				<img src="@/assets/img/BGlunch2.png" style="transform: translate(0%, -20%)">
			</div>
		</div>
		<div class="row">
			<div class="col-4 pic" style="transform: scale(.20)">
				<img src="@/assets/img/BGlunch6.jpg" style="transform: translate(-30%, -50%);">
			</div>
			<div class="col-4 pic_text center" style="transform: translate(0%, -5%);">
				<h3 class="background"><strong>Boardgame Lunch<br>Memory Wall</strong></h3>
			</div>
			<div class="col-4 pic" style="transform: translate(0%, -10%);">
				<img src="@/assets/img/BGlunch5-3.png">
			</div>
		</div>
		<div class="row">
			<div class="col-4 pic" style="transform: scale(.17)">
				<img src="@/assets/img/BGlunch7.jpg" style="transform: translate(-35%, -8%);">
			</div>
			<div class="col-4 pic">
				<img src="@/assets/img/EngagedLearning2-2.png" style="transform: translate(-35%, -45%);">
			</div>
			<div class="col-4 pic" style="transform: scale(.17)">
				<img src="@/assets/img/BGlunch8.jpg" style="transform: translate(-55%, -70%);">
			</div>
		</div> -->
		</Parallax>
	</div>

</template>

<script>
	import SkewBox from "@/components/SkewBox.vue";
	import Parallax from "@/components/Parallax.vue";
	import "vue3-carousel/dist/carousel.css";
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

<style>
.info {
	display: inline-block;
	border: 2px solid white;
	background-color: rgba(62, 61, 61, 0.444);
	font-weight: bold;
	line-height: 1.5 !important;
	color: var(--FSCred);
	padding: 1rem;
}
.pic {
	display: inline-block;
	height: 500px;
	max-width: 100%;
	width: 33%;
}
.pic_text {
	display: inline-block;
	text-align: center;
}
.background {
	border: 2px solid black;
	background-color: rgba(255, 255, 255, 0.968);
}
.memory_wall {
	overflow: hidden;
}

.pic2 {
	overflow: hidden;
	margin-top: 0;
	margin-bottom: 0;
	margin-left: 10%;
	margin-right: 10%;
	max-height: 75%;
}

.pic2 img {
	width: 100%;
	height: 100%;
}


</style>
