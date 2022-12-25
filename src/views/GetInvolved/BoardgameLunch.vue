<template>
	<!-- HERO -->
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/BoardGameLunch.png')})`,
			'background-position': 'center',
			'background-size': 'cover',
			width: '54vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--blue-gradient-left)'"
		:height="500"
		:padding="'120px 0 60px 0'"
		class="red-section hero"
	>
		<template v-slot:left>
			<div class="center vertical-center">
				<h1 class="white">Boardgame Lunch</h1>
			</div>
		</template>
	</SkewBox>

	<!-- WEEKLY  -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/BG2.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.3"
		:overlayColor="'0, 0, 0'"
		class="red-section"
	>
		<div class="h-100 pb-2 top">
			<center>
				<div class="container py-5 h-100">
					<h1 class="white mt-2 mb-2 pb-1" style="text-align: left">
						Once a week.
					</h1>
					<h1 class="center white mt-2 mb-2 pb-1">Every week.</h1>
					<h1
						class="right white mt-2 mb-2 pb-1"
						style="text-align: right"
					>
						All semester.
					</h1>
				</div>
			</center>
		</div>
	</Parallax>

	<!-- WHAT -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/BG7.jpg')}`,
			'background-position': 'top',
		}"
		:height="'0'"
		:opacity="0"
		:overlayColor="'0, 0, 0'"
		class="red-section"
	>
		<div class="h-100">
			<div class="container py-5">
				<h3 class="center mb-4">
					Take a break from your normal schedule and come play games!
				</h3>
				<div class="row">
					<div class="col-4">
						<h5
							class="info center white bold"
							style="
								background-color: rgba(var(--FSCredRGB), 0.75);
								box-shadow: 0px 0px 5px 5px rgba(var(--FSCredRGB), 0.75);
							"
						>
							The CS department hosts a weekly event where you are
							invited to play games with your faculty and peers!
						</h5>
					</div>
					<div class="col-4">
						<h5
							class="info center white bold"
							style="
								background-color: rgba(var(--FSCblueRGB), 0.75);
								box-shadow: 0px 0px 5px 5px rgba(var(--FSCblueRGB), 0.75);
							"
						>
							There are a plethora of games available to play!
							Feel free to come by and join the fun.
						</h5>
					</div>
					<div class="col-4">
						<h5
							class="info center white bold"
							style="
								background-color: rgba(var(--FSCgreyRGB), 0.75);
								box-shadow: 0px 0px 5px 5px rgba(var(--FSCgreyRGB), 0.75);
							"
						>
							Check out the department calendar to see when
							boardgame lunch is being held this semester!
						</h5>
					</div>
				</div>
			</div>
		</div>
	</Parallax>

	<!-- GAMES -->
	<SkewBox
		:leftBG="{
			backgroundImage: `url(${require('@/assets/img/Department/BoardGames.jpg')})`,
			'background-position': 'top',
			'background-size': 'cover',
			width: '54vw!important',
		}"
		:rightColor="'var(--FSCblue)'"
		:leftColor="'transparent'"
		:height="500"
		:padding="'0'"
		:maintainSkewbox="false"
		:pictureSide="'left'"
		:invert="false"
		class="red-section"
	>
		<template v-slot:right>
			<div class="center vertical-center my-xl-0 my-5">
				<h3 class="white">What kind of games are there?</h3>
				<p class="white mt-4">
					From <strong>One Night Ultimate Werewolf</strong>, to
					<strong>Go Fish</strong>, to <strong>Tetris Link</strong>,
					there's something for everyone at boardgame lunch. Check out
					a few of the ones available in the picture to the left. If
					the department doesn't own your favorite game (and it's
					school appropriate), feel free to bring yours from home!
				</p>
			</div>
		</template>
	</SkewBox>

    <!-- GALLERY -->
	<div v-if="false" class="gallery">
		<div class="col">
			<img
				src="@/assets/img/BGlunch.png"
				style="height: 300px; object-fit: cover"
			/>
		</div>
		<div class="col">
			<img
				src="@/assets/img/BGlunch3.png"
				style="height: 300px; object-fit: cover"
			/>
		</div>
		<div class="col">
			<img
				src="@/assets/img/BGlunch2.png"
				style="height: 300px; object-fit: cover"
			/>
		</div>
		<div class="col">
			<img
				src="@/assets/img/BGlunch6.jpg"
				style="height: 300px; object-fit: cover"
			/>
		</div>
		<div class="col">
			<img
				src="@/assets/img/BGlunch5-2.png"
				style="height: 300px; object-fit: cover"
			/>
		</div>
		<div class="col">
			<img
				src="@/assets/img/BGlunch7.jpg"
				style="height: 300px; object-fit: cover"
			/>
		</div>
		<div class="col">
			<img
				src="@/assets/img/BGlunch8.jpg"
				style="height: 300px; object-fit: cover"
			/>
		</div>
	</div>
	<div v-if="true" class="memory_wall">
		<Parallax
			:image="{
				backgroundImage: `url(${require('@/assets/img/BG3.jpg')}`,
				'background-position': 'left middle',
			}"
			:height="'0'"
			:opacity="0.3"
			:overlayColor="'0, 0, 0'"
		>
			<div class="container py-5">
				<h3 class="center white pb-1">Boardgame Lunch Memory Wall</h3>
				<hr class="primary-hr mx-auto" style="width: 80%" />
				<Carousel
					:wrapAround="true"
					:transition="600"
					:pauseAutoplayOnHover="true"
                    class="red-arrows"
				>
					<Slide :key="0">
						<div class="gallery-pic">
							<img src="@/assets/img/BGlunch.png" />
						</div>
					</Slide>
					<Slide :key="1">
						<div class="gallery-pic">
							<img src="@/assets/img/BGlunch3.png" />
						</div>
					</Slide>
					<Slide :key="2">
						<div class="gallery-pic">
							<img src="@/assets/img/BGlunch2.png" />
						</div>
					</Slide>
					<Slide :key="3">
						<div class="gallery-pic">
							<img src="@/assets/img/BGlunch6.jpg" />
						</div>
					</Slide>
					<Slide :key="4">
						<div class="gallery-pic">
							<img src="@/assets/img/BGlunch5-2.png" />
						</div>
					</Slide>
					<Slide :key="5">
						<div class="gallery-pic">
							<img src="@/assets/img/BGlunch7.jpg" />
						</div>
					</Slide>
					<Slide :key="6">
						<div class="gallery-pic">
							<img src="@/assets/img/BGlunch8.jpg" />
						</div>
					</Slide>
					<template #addons>
						<Navigation />
						<Pagination />
					</template>
				</Carousel>
			</div>
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

<style scoped>
.info {
	height: 150px;
	backdrop-filter: blur(5px);
	padding: 1rem;
	display: flex;
	align-items: center;
}
.memory_wall {
	overflow: hidden;
}

.row {
	margin: 0 !important;
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

@media (max-width: 767.9px) {
	.row {
		flex-direction: column;
		gap: 1rem;
		justify-content: center;
		width: 100% !important;
		padding: 0 2rem;
	}

	.col-4 {
		width: 100%;
	}
}
</style>
