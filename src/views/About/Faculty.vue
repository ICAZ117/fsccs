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
					:backgroundPosition="index % 2 == 0 ? 'right' : 'left'"
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
.background {
	background-color: var(--FSCred) !important;
}
.link {
	background-color: white;
	color: var(--FSCred);
}
</style>
