<template>
    <TextPage :title="'Meet the Faculty'" :heroImage="{
    	backgroundImage: `url(${require('@/assets/img/WCS3.jpg')})`,
    	'background-position': 'bottom',
    	'background-size': 'cover',
    }" :background="{
    	backgroundImage: `url(${require('@/assets/img/BG7.jpg')})`,
    	'background-position': 'center',
    }" :opacity="0.9">
        <!-- <p>
            The FSC Computer Science department currently has five faculty members on it's team:
            Dr. Kyle Burke, Dr. Johnathan Cazalas, Dr. Matthew Eicholtz, Dr. Jason Lewis, and
            Dr. Christian Roberson, the current Department Chair. Every professor cares about
            their students and the quality of their education. To learn more about each professor,
            please click on the corresponding button below!
        </p> -->

        <div id="professorList">
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
        </div>

    </TextPage>
</template>

<script>
import TextPage from "../../components/TextPage.vue";

export default {
    components: {
        TextPage,
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
#professorList>*:not(:last-child) {
    margin-bottom: 5rem;
}
</style>
