<template>
	<div class="outside" @mouseenter="playAudio()" @mouseleave="stopAudio()">
		<div class="vertical-center">
			<img :src="professor.teachingimg" alt="" class="faculty_pic" />
			<div :class="overlay"></div>
			<div class="card vertical-center" style="transform: scale(0.8)">
				<div
					class="card-body col-12"
					style="display: inline-block !important"
				>
					<CubeImage
						:pic="professor.pfp"
						style="
							float: left;
							border: 5px solid white;
							border-radius: 10px;
						"
						class="me-3"
					></CubeImage>
					<h2 class="card-title primary bold">
						{{ professor.name }}
					</h2>
					<h3 class="card-title primary mb-4" v-html="title"></h3>
					<p class="card-title primary quote">
						<i class="fa-solid fa-quote-left"></i> {{ quote }}
						<i class="fa-solid fa-quote-right"></i>
					</p>
					<div class="card-text" style="text-align: left">
						<slot></slot>
					</div>
				</div>
			</div>
		</div>
		<!-- <Parallax
            :image="{
                backgroundImage: `url(${professor.teachingimg})`,
                'background-position': 'left middle',
            }"
            :height="'0'"
            :opacity="0.7"
            :overlayColor="'0, 0, 0'"
        >
            <div class="card" style="transform: scale(.8);">
                <div class="card-body" style="display: inline-block;">
                    <img :src="professor.pfp" alt="" style="float: left; border: 3px solid var(--FSCred); border-radius: 5px;" class="me-3" />
                    <h2 class="card-title primary bold">
                        {{ professor.name }}
                    </h2>
                    <h3 class="card-title primary mb-4" v-html="title">
                        
                    </h3>
                    <p class="card-title primary">
                        <i class="fa-solid fa-quote-left"></i> {{ quote }} <i class="fa-solid fa-quote-right"></i>
                    </p>
                    <div class="card-text" style="text-align: left">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </Parallax> -->
	</div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import audio1 from "@/assets/audio/Thug-Life-basic.mp3";
import audio2 from "@/assets/audio/Thug-Life-DrDre.mp3";
import audio3 from "@/assets/audio/Thug-Life-GTA.mp3";
import audio4 from "@/assets/audio/Thug-Life-Snoop.mp3";
import Parallax from "../components/Parallax.vue";

export default {
	props: ["professor", "name", "title", "quote", "image", "overlay"],
	components: {
		Parallax,
		CubeImage: defineAsyncComponent(() =>
			import("@/components/CubeImage.vue")
		),
	},
	data() {
		return {
			doRedirect: true,
			audioFiles: [],
			cubeLifeMode: false,
		};
	},
	methods: {
		playAudio() {
			if (this.cubeLifeMode) {
				var idx = Math.floor(Math.random() * 6);
				this.audioFiles[idx].play();
				this.audioFiles[idx].loop = true;
			}
		},
		stopAudio() {
			this.audioFiles[0].pause();
			this.audioFiles[0].currentTime = 0;
			this.audioFiles[1].pause();
			this.audioFiles[1].currentTime = 0;
			this.audioFiles[2].pause();
			this.audioFiles[2].currentTime = 0;
			this.audioFiles[3].pause();
			this.audioFiles[3].currentTime = 0;
			this.audioFiles[4].pause();
			this.audioFiles[4].currentTime = 0;
			this.audioFiles[5].pause();
			this.audioFiles[5].currentTime = 0;
		},
		redirect() {
			setTimeout(() => {
				if (this.doRedirect) {
					this.$router.push("/faculty?id=" + this.name);
				}
			}, 50);
		},
		async disableRedirect() {
			this.doRedirect = false;
			setTimeout(() => {
				this.doRedirect = true;
			}, 100);
		},
	},
	async mounted() {
		this.cubeLifeMode = this.$store.getters.getCubeLifeMode;
		this.audioFiles.push(new Audio(audio1));
		this.audioFiles.push(new Audio(audio2));
		this.audioFiles.push(new Audio(audio3));
		this.audioFiles.push(new Audio(audio3));
		this.audioFiles.push(new Audio(audio3));
		this.audioFiles.push(new Audio(audio4));
	},
};
</script>

<style scoped>
.outside {
	position: relative;
	object-position: center;
}

.outside:hover .card {
	color: white !important;
	background-color: white;
	transform: scale(0.9) !important;
	transition: all ease 0.5s;
}

.faculty_pic {
	width: 100%;
	display: block;
}

.overlay1,
.overlay2 {
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	position: absolute;
	top: 0;
	left: 0;
	transition: all ease 0.5s;
}

.outside:hover .overlay1 {
	transition: all ease 0.5s;
	background-color: rgba(var(--FSCredRGB), 0.7);
}

.outside:hover .overlay2 {
	transition: all ease 0.5s;
	background-color: rgba(var(--FSCblueRGB), 0.7);
}

.card {
	left: 10%;
	right: 20%;
	width: 80%;
	height: auto !important;
	color: white !important;
	background-color: var(--FSCred);
	display: inline;
	position: absolute;
	border-radius: 25px;
}

.card,
.card .primary-hr,
.card .card-title,
.card a,
.card img {
	transition: all ease 0.5s;
	color: white;
}

.outside:hover .card img {
	transition: all ease 0.5s;
	border: 5px solid var(--FSCred) !important;
	border-radius: 10px;
}

.outside:hover .card-title {
	color: var(--FSCred) !important;
}

.card .primary-hr {
	border-color: white !important;
}

.card a {
	background-color: white !important;
	color: var(--FSCred) !important;
	font-weight: bolder;
}

.outside:hover .card a {
	color: white !important;
	background-color: var(--FSCred) !important;
	font-weight: bolder;
}

.card-title {
	position: relative;
	margin-bottom: 0;
}

.prof-img {
	max-width: 50%;
	height: 60px;
	background-color: var(--FSCblue);
	position: absolute;
	bottom: -60px;
	left: 0;
	align-items: center;
	justify-content: center;
	display: inline-block;
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
	.card {
		height: calc(500px * 0.6) !important;
	}

	.card img {
		height: 250px !important;
		width: 250px !important;
	}

	.card h2 {
		font-size: 30px !important;
	}

	.card h3 {
		font-size: 25px !important;
	}

	.card p {
		font-size: 13px !important;
		top: -10px;
	}
}

@media (max-width: 991.9px) {
	.card {
		height: calc(500px * 0.48) !important;
	}

	.card img {
		height: 190px !important;
		width: 190px !important;
	}

	.card h2 {
		font-size: 23px !important;
	}

	.card h3 {
		font-size: 19px !important;
	}

	.card p {
		font-size: 10px !important;
		top: -10px !important;
	}
}

@media (max-width: 767.9px) {
	.card {
		height: calc(500px * 0.4) !important;
	}

	.card img {
		height: 150px !important;
		width: 150px !important;
	}

	.card h2 {
		font-size: 25px !important;
	}

	.card h3 {
		font-size: 20px !important;
	}

	.card p {
		display: none !important;
		visibility: hidden !important;
	}
}

@media (max-width: 575.9px) {
	.card {
		height: calc(500px * 0.3) !important;
	}

	.card img {
		height: 120px !important;
		width: 120px !important;
		margin-bottom: 1rem;
	}

	.card h2 {
		font-size: 20px !important;
	}

	.card h3 {
		font-size: 15px !important;
		margin-bottom: 0 !important;
	}

	.card p {
		display: none !important;
		visibility: hidden !important;
	}
}

@media (max-width: 399.9px) {
}
</style>