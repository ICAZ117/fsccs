<template>
	<!-- HERO -->
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/Department/SIGCSE.jpg')})`,
			'background-position': 'center',
			'background-size': 'cover',
			width: '54vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--blue-gradient-left)'"
		:height="500"
		:padding="'60px 0 0 0'"
		class="red-section hero"
	>
		<template v-slot:left>
			<div class="center vertical-center">
				<h1 class="white customSizing">Collaborative Research</h1>
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
			<h3 class="center">What is Collaborative Research?</h3>
			<Expandable>
				<p class="justify-large">
					Faculty/student collaborative research can be an incredibly
					rewarding experience during one’s undergraduate career.
					Working closely with a faculty member, students develop
					critical thinking, creativity, problem-solving, and
					intellectual independence, all while engaging in a fun
					opportunity that increases both career and graduate-school
					preparation. If you are up for the challenge and are looking
					to invest a summer conducting semi-independent research,
					reach out to one of the faculty members to see what
					opportunities are available. Below is a sampling of some of
					the more recent faculty/student summer collaborations.
				</p>
			</Expandable>
		</div>
	</Parallax>

	<!-- PROJETS -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/Matrix6.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.05"
		:overlayColor="'0, 0, 0'"
	>
		<div class="m-auto container py-5 h-100">
			<h3 class="center white">Projects</h3>
			<div class="m-0 row g-xl-5 g-3">
				<div
					class="col-lg-6 col-12"
					v-for="researchProject in researchProjects"
					:key="researchProject"
				>
					<InfoCard :title="researchProject.title" :hover="false">
						<Expandable :alwaysCollapse="true">
							<!-- Abstract -->
							<div id="abstract">
								<h6 class="bold">Abstract:</h6>
								<Expandable :alwaysCollapse="true">
									<p class="justify-large">
										{{ researchProject.abstract }}
									</p>
								</Expandable>
							</div>

							<div id="students">
								<h6 class="mt-3 bold">Students:</h6>
								<p class="justify-large">
									{{ researchProject.students }}
								</p>
							</div>

							<div id="faculty">
								<h6 class="mt-3 bold">Faculty:</h6>
								<p class="justify-large">
									{{ researchProject.faculty }}
								</p>
							</div>

							<div
								id="publications"
								v-if="researchProject.publications"
							>
								<h6 class="mt-3 bold">Publications:</h6>
								<Expandable
									:alwaysCollapse="true"
									:height="'100px'"
								>
									<p
										class="justify-large"
										v-html="researchProject.publications"
									></p>
								</Expandable>
							</div>

							<div id="github" v-if="researchProject.github">
								<h6 class="mt-3 bold">Github Repository:</h6>
								<a
									:href="researchProject.github"
									target="_blank"
									>{{ researchProject.github }}</a
								>
							</div>

							<div id="poster">
								<h6 class="mt-3 bold">Poster:</h6>
								<a
									:href="researchProject.poster"
									target="_blank"
								>
									<img
										:src="researchProject.poster"
										style="width: 100%"
									/>
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
			researchProjects: {},
		};
	},
	methods: {
		convertGoogleDriveLink(driveLink) {
			const fileID = driveLink.match(/d\/([A-Za-z0-9\-]+)/);
			return "https://drive.google.com/uc?export=view&id=" + fileID[1];
		},
	},
	async beforeMount() {
		await this.$store.dispatch("fetchResearchProjects");

		const storeResearchProjects = this.$store.getters.getResearchProjects;

		// Push each professor's data to the professors array
		storeResearchProjects.forEach((doc) => {
			this.researchProjects[doc.id] = doc.data();
			this.researchProjects[doc.id].poster = this.convertGoogleDriveLink(
				doc.data().poster
			);
		});

		console.log("RESEARCH PROJECTS", this.researchProjects);
	},
};
</script>

<style scoped>
@media (max-width: 474.9px) {
	.customSizing {
		font-size: 20pt !important;
	}
}
</style>