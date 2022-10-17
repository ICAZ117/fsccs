<template>
	<TextPage
		:title="'Meet the Faculty'"
		:heroImage="{
			backgroundImage: `url(${require('@/assets/img/WCS3.jpg')})`,
			'background-position': 'bottom',
			'background-size': 'cover',
		}"
		:background="{
			backgroundImage: `url(${require('@/assets/img/BG7.jpg')})`,
			'background-position': 'center',
		}"
        :opacity="0.9"
	>
		<div class="overview_section">
			<img src="@/assets/img/CS_department_pic3.png" alt="" class="overview_pic">
		</div>
		<div class="py-3"></div>

		<p>
			The FSC Computer Science department currently has five faculty members on it's team: 
			Dr. Kyle Burke, Dr. Johnathan Cazalas, Dr. Matthew Eicholtz, Dr. Jason Lewis, and 
			Dr. Christian Roberson, the current Department Chair. Every professor cares about 
			their students and the quality of their education. To learn more about each professor, 
			please click on the corresponding button below!
		</p>

		<div class="h-100 pb-2">
			<div class="faculty container h-100">
					<div v-for="(professor, name) in professors" :key="name">
						<div class="prof my-5 col-6">
							<FacultyCard :professor="professor" :name="name"></FacultyCard>
						</div>
					</div>
			</div>
		</div>

	</TextPage>
</template>

<script>
	import TextPage from "../../components/TextPage.vue";
	import FacultyCard from "../../components/FacultyCard.vue";

	export default {
		components: {
			TextPage,
			FacultyCard,
		},
		data() {
			return {
				windowHeight: 0,
				allEvents: [],
				professors: {},
			};
		},
		async beforeMount() {
			// Get window height
			this.windowHeight = window.innerHeight;

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

<style>
	.overview_section{
		position: relative;
	}
	.overview_pic{
		width: 100%;
		display: block;
	}
	.faculty{
		display: inline-block;
	}
</style>
