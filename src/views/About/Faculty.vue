<template>
    <SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/WCS3.jpg')})`,
			'background-position': 'left',
			'background-size': 'cover',
			width: '55vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--FSCblue)'"
		:height="500"
		:padding="'70px 0 60px 0'"
        class="section"
	>
		<template v-slot:left>
			<div class="center vertical-center">
				<h1 class="white">About the Faculty</h1>
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
        <div v-for="(professor, name) in professors" :key="name">
            <FacultyPageCard
            :professor="professor"
            :name="name"
            :title="professor.title"
            :quote="professor.quote"
            :image="professor.teachingimg"
            class="section"
            >
                <a :href="`/faculty?name=${name}`" class="btn btn-primary btn-md mt-2">Learn more<i class="ms-2 fa-solid fa-arrow-right"></i></a>
            </FacultyPageCard>
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
                <a :href="`/faculty?name=${name}`" class="btn btn-primary btn-md">Learn more<i class="ms-2 fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </div> -->

    
</template>

<script>
import TextPage from "../../components/TextPage.vue";
import FacultyPageCard from "../../components/FacultyPageCard.vue";
import Parallax from "../../components/Parallax.vue";
import SkewBox from "@/components/SkewBox.vue";

export default {
    components: {
        TextPage,
        FacultyPageCard,
        Parallax,
        SkewBox,
    },
    data() {
        return {
            professors: {},
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


</style>
