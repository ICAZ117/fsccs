<template>
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/cube-pics/Cube1.jpg')})`,
			'background-position': 'left',
			'background-size': 'cover',
			width: '55vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--red-gradient-left)'"
		:height="500"
		:padding="'120px 0 60px 0'"
		class="red-section"
	>
		<template v-slot:left>
			<div class="center vertical-center">
				<h1 class="white">Meet the Faculty</h1>
			</div>
		</template>
	</SkewBox>
	<!-- <p>
        The FSC Computer Science department currently has five faculty members on it's team:
        Dr. Kyle Burke, Dr. Johnathan Cazalas, Dr. Matthew Eicholtz, Dr. Jason Lewis, and
        Dr. Christian Roberson, the current Department Chair. Every professor cares about
        their students and the quality of their education. To learn more about each professor,
        please click on the corresponding button below!
    </p> -->

	<div class="">
		<div id="professorList">
			<div
				class="prof"
				v-for="(professor, name, index) in professors"
				:key="index"
			>
				<HorizontalFacultyCard
					:professor="professor"
					:name="name"
					:overlay="
						index % 2 == 0
							? 'rgba(var(--FSCblueRGB), 0.7)'
							: 'rgba(var(--FSCredRGB), 0.7)'
					"
					:cardColor="
						index % 2 == 0 ? 'var(--FSCblue)' : 'var(--FSCred)'
					"
					:class="
						index % 2 == 0 &&
						index != Object.keys(professors).length - 1
							? 'blue-section'
							: index != Object.keys(professors).length - 1
							? 'red-section'
							: ''
					"
				/>
			</div>
		</div>
	</div>

	<!-- <div id="professorList">
        <div v-for="(professor, name) in professors" :key="name">
            <div>
                <img :src="professor.pfp" width="200"
                    style="float: left; border: 3px solid var(--FSCred); border-radius: 5px;" class="me-3">
                <h2 class="white">{{ professor.name }}</h2>
                <hr class="primary-hr">
                <div v-html="professor.bio"></div>
                <a :href="`/faculty?id=${name}`" class="btn btn-primary btn-md">Learn more<i class="ms-2 fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </div> -->
</template>

<script>
import HorizontalFacultyCard from "@/components/HorizontalFacultyCard.vue";
import Parallax from "../../components/Parallax.vue";
import SkewBox from "@/components/SkewBox.vue";

export default {
	components: {
		HorizontalFacultyCard,
		Parallax,
		SkewBox,
	},
	data() {
		return {
			professors: {},
			index: 0,
		};
	},
	async beforeMount() {
		// Get all faculty members in DB
		await this.$store.dispatch("fetchFaculty");

		// Get faculty members from store
		const res = this.$store.getters.getFaculty;

		// Push each professor's data to the professors array
		res.forEach((doc) => {
			this.professors[doc.id] = doc.data();
		});
	},
};
</script>

<style scoped>
/* #professorList>*:not(:last-child) {
    margin-bottom: 1rem;
} */
.background {
	background-color: var(--FSCred) !important;
}
.link {
	background-color: white;
	color: var(--FSCred);
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
	.hero {
		height: calc(500px * 0.7) !important;
	}
}

@media (max-width: 991.9px) {
	.link {
		transform: scale(0.9) !important;
		margin-top: 0 !important;
	}
}

@media (max-width: 767.9px) {
}

@media (max-width: 575.9px) {
	.hero {
		height: calc(500px * 0.5) !important;
	}
	.link {
		transform: scale(0.8) !important;
		position: relative;
		left: -15px;
		top: 10px;
	}
}

@media (max-width: 399.9px) {
}
</style>
