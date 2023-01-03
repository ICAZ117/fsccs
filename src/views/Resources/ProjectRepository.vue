<template>
	<!-- HERO -->
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/ProjectRepo.jpg')})`,
			'background-position': 'bottom',
			'background-size': 'cover',
			width: '54vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--grey-gradient-left)'"
		:height="500"
		:padding="'60px 0 0 0'"
		class="red-section hero"
	>
		<template v-slot:left>
			<div class="center vertical-center">
				<h1 class="white">Project Repository</h1>
			</div>
		</template>
	</SkewBox>

	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/BG7.jpg')}`,
			'background-position': 'center',
		}"
		:height="'0'"
		:opacity="0.05"
		:overlayColor="'0, 0, 0'"
		class="red-section"
	>
		<div class="container my-5">
			<h3 class="center">Student Research</h3>
			<Expandable>
				<p class="justify-large">
					Meaningful projects are an integral part of your
					development, and certainly resume, as you prepare for a
					career in computer science. You will fully develop several
					projects throughout your undergraduate career here at
					Florida Southern College, starting with your very first
					computer science class, CSC 2280 (Introduction to Computer
					Science), throughout your chosen concentration, as well as
					with Software Engineering, and then culminating with your
					Capstone Senior Project. Below is a sampling of some of the
					more recent final projects from CSC 2280, as well as a
					sampling of completed Capstone Senior Projects. These
					exemplar projects provide insight into the types of projects
					students have completed, as well as their rigor and the
					expectations from faculty.
				</p>
			</Expandable>
		</div>
	</Parallax>

	<!-- 2280 PROJETS -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/Matrix6.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.05"
		:overlayColor="'0, 0, 0'"
		class="red-section"
	>
		<div class="m-auto container py-5 h-100">
			<h3 class="center white">CSC 2280 Projects</h3>
			<div class="m-0 row g-xl-5 g-3">
				<div
					class="col-lg-6 col-12"
					v-for="studentProject in studentProjects"
					v-show="studentProject.is2280"
					:key="studentProject"
				>
					<InfoCard :title="studentProject.title" :hover="false">
						<Expandable :alwaysCollapse="true">
							<div id="description">
								<h6 class="bold">Description:</h6>
								<Expandable :alwaysCollapse="true">
									<p class="justify-large">
										{{ studentProject.description }}
									</p>
								</Expandable>
							</div>

							<div id="students">
								<h6 class="mt-3 bold">Student(s):</h6>
								<p class="justify-large">
									{{ studentProject.students }}
								</p>
							</div>

							<div id="github" v-if="studentProject.github">
								<h6 class="mt-3 bold">Github Repository</h6>
								<a
									:href="studentProject.github"
									target="_blank"
								>
									{{ studentProject.github }}
								</a>
							</div>
						</Expandable>
					</InfoCard>
				</div>
			</div>
		</div>
	</Parallax>

	<!-- OTHER PROJETS -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/Matrix8.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.05"
		:overlayColor="'0, 0, 0'"
	>
		<div class="m-auto container py-5 h-100">
			<h3 class="center white">Senior Capstone Projects</h3>
			<div class="m-0 row g-xl-5 g-3">
				<div
					class="col-lg-6 col-12"
					v-for="studentProject in studentProjects"
					v-show="!studentProject.is2280"
					:key="studentProject"
				>
					<InfoCard :title="studentProject.title" :hover="false">
						<Expandable :alwaysCollapse="true">
							<div id="description">
								<h6 class="bold">Description:</h6>
								<Expandable :alwaysCollapse="true">
									<p class="justify-large">
										{{ studentProject.description }}
									</p>
								</Expandable>
							</div>

							<div id="students">
								<h6 class="mt-3 bold">Student(s):</h6>
								<p class="justify-large">
									{{ studentProject.students }}
								</p>
							</div>

							<div id="github" v-if="studentProject.github">
								<h6 class="mt-3 bold">Github Repository</h6>
								<a
									:href="studentProject.github"
									target="_blank"
								>
									{{ studentProject.github }}
								</a>
							</div>
						</Expandable>
					</InfoCard>
				</div>
			</div>
		</div>
	</Parallax>
</template>

<script>
import SkewBox from "@/components/SkewBox.vue";
import Parallax from "@/components/Parallax.vue";
import InfoCard from "@/components/InfoCard.vue";
import Expandable from "@/components/Expandable.vue";
export default {
	components: {
		SkewBox,
		Parallax,
		InfoCard,
		Expandable,
	},
	data() {
		return {
			studentProjects: {},
		};
	},
	async beforeMount() {
		await this.$store.dispatch("fetchStudentProjects");

		const storeStudentProjects = this.$store.getters.getStudentProjects;

		// Push each professor's data to the professors array
		storeStudentProjects.forEach((doc) => {
			this.studentProjects[doc.id] = doc.data();
		});

		console.log("STUDENT PROJECTS", this.studentProjects);
	},
};
</script>

<style scoped>
</style>