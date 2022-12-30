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
				<h1 class="white">Collaborative Research</h1>
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
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Veritatis aperiam fuga numquam rerum? Pariatur dignissimos,
				aspernatur ipsa nemo cum excepturi natus ducimus perferendis
				rerum deserunt facilis hic eaque voluptatum perspiciatis! Lorem
				ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
				quisquam dolores neque voluptate aliquid temporibus quas odio
				eligendi placeat ex eum pariatur, ullam dicta ad aperiam ut iste
				qui mollitia. Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Nesciunt officiis, facilis consectetur doloremque eaque
				ullam. Quas consequatur ad, ipsam autem nam sapiente consectetur
				eius, tempore perspiciatis, iste beatae minima eaque. Lorem
				ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea
				corrupti error ducimus enim officiis exercitationem laborum
				deserunt, obcaecati iusto laboriosam. Ab, excepturi earum
				architecto dolore impedit facilis velit dicta!
			</p>
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
					<InfoCard :title="researchProject.title">
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
								<span
									v-for="name in researchProject.students"
									:key="name"
									class="researchStudent"
									>{{ name }}</span
								>
							</div>

							<div id="faculty">
								<h6 class="mt-3 bold">Faculty:</h6>
								<span
									v-for="name in researchProject.faculty"
									:key="name"
									class="researchFaculty"
									>{{ name }}</span
								>
							</div>

							<div
								id="publications"
								v-if="researchProject.publications"
							>
								<h6 class="mt-3 bold">Publications:</h6>
								<Expandable :alwaysCollapse="true" :height="'100px'">
									<p
										class="mb-3"
										v-for="publication in researchProject.publications"
										:key="publication"
									>
										{{ publication }}
									</p>
								</Expandable>
							</div>

							<div id="github" v-if="researchProject.github">
								<h6 class="mt-3 bold">Github Repository</h6>
								<a
									:href="researchProject.github"
									target="_blank"
									>{{ researchProject.github }}</a
								>
							</div>

							<div id="poster">
								<h6 class="mt-3 bold">Poster</h6>
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
.researchStudent ~ .researchStudent::before,
.researchFaculty ~ .researchFaculty::before {
	content: ", ";
}
</style>