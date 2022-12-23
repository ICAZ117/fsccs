<template>
	<div
		class="teachingBG"
		:style="`background-image: url(${professor.teachingimg}); background-size: cover; background-repeat: no-repeat; background-position: ${backgroundPosition};`"
	>
		<div class="teachingBGOverlay">
			<div class="horizontal-card">
				<div class="facultyImage">
					<CubeImage
						:pic="professor.pfp"
						class="h-100 cubePicSize"
					></CubeImage>
				</div>
				<div class="horizontal-card-content">
					<h2
						class="bold mb-0"
						style="line-height: 1; margin-top: -4px"
					>
						{{ professor.name }}
					</h2>

					<h5 v-html="professor.title"></h5>

					<p class="quote">
						<i class="fa-solid fa-quote-left" />
						{{ professor.quote }}
						<i class="fa-solid fa-quote-right" />
					</p>

					<a :href="`/faculty?id=${name}`" class="btn btn-xs-md btn-sm">
						Learn more
						<i class="ms-2 fa-solid fa-arrow-right" />
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CubeImage from "@/components/CubeImage.vue";
export default {
	props: ["professor", "name", "overlay", "cardColor", "backgroundPosition"],
	components: {
		CubeImage,
	},
};
</script>

<style scoped>
.teachingBG {
	height: 500px;
	width: 100%;
}

.teachingBGOverlay {
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all ease 0.5s;
}

.teachingBGOverlay:hover {
	background-color: v-bind(overlay);
}

.horizontal-card {
	min-height: 300px;
	width: 70%;
	background-color: v-bind(cardColor);
	border-radius: 2rem;
	overflow: hidden;
	display: flex;
	flex-direction: row;
	transition: all ease 0.5s;
}

.facultyImage {
	display: inline-block;
	margin-right: 3rem;
	transition: all ease 0.5s;
	overflow: hidden;
	min-width: min-content !important;
}

.cubePicSize {
	width: 300px;
	object-fit: cover;
}

.horizontal-card-content {
	color: white;

	padding: 1.5rem 1.5rem 1.5rem 0;
	transition: all ease 0.5s;
}

.quote {
	max-height: 120px;
	-webkit-mask-image: linear-gradient(to bottom, white 50%, transparent 100%);
	mask-image: linear-gradient(to bottom, white 50%, transparent 100%);
	overflow: hidden;
}

.btn {
	background-color: white;
	color: v-bind(cardColor);
	transition: all ease 0.5s;
}

.teachingBGOverlay:hover .horizontal-card {
	background-color: white;
	scale: 1.05;
}

.teachingBGOverlay:hover .horizontal-card-content {
	color: v-bind(cardColor);
}

.teachingBGOverlay:hover .btn {
	background-color: v-bind(cardColor);
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
@media (max-width: 991.9px) {
	.facultyImage {
		scale: 0.8;
		margin-right: 0;
		border-radius: 2rem;
		border: 5px solid white;
	}

	.horizontal-card,
	.teachingBGOverlay:hover .horizontal-card {
		background-color: transparent;
		width: 70%;
	}

	.horizontal-card-content {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		flex-direction: column;
		text-align: center;
	}
	.quote {
		display: none;
	}

	.btn {
		background-color: v-bind(cardColor);
		color: white;
	}

	.teachingBGOverlay:hover .horizontal-card-content {
		color: white;
	}

	.teachingBGOverlay:hover .btn {
		background-color: white;
		color: v-bind(cardColor);
	}
}

@media (max-width: 767.9px) {
	.facultyImage {
		scale: 0.7;
	}

	.horizontal-card,
	.teachingBGOverlay:hover .horizontal-card {
		width: 80%;
	}
}

@media (max-width: 607.9px) {
	.facultyImage {
		scale: 0.7;
	}

	.horizontal-card,
	.teachingBGOverlay:hover .horizontal-card {
		width: 90%;
	}
}

@media (max-width: 575.9px) {
	.teachingBG {
		height: 400px;
	}

	.facultyImage {
		scale: 1;
		display: flex;
		justify-content: center;
	}

	.cubePicSize {
		width: 100%;
	}

	.horizontal-card,
	.teachingBGOverlay:hover .horizontal-card {
		width: 90%;
		min-height: unset !important;
	}

    .horizontal-card-content {
        padding: 0;
    }
}

@media (max-width: 474.9px) {
	.teachingBG {
		height: 300px;
	}

	.facultyImage {
		scale: 0.8;
		display: flex;
		justify-content: center;
        border-width: 3px;
	}

	.cubePicSize {
		width: 100%;
	}

	.horizontal-card,
	.teachingBGOverlay:hover .horizontal-card {
		width: 85%;
		min-height: unset !important;
	}

    .horizontal-card-content {
        scale: 0.8;
    }
}
</style>    