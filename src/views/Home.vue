<template>
    <!-- Start Hero Section -->
    <div class="hero" style="width: width 100vw !important; overflow: hidden !important">
        <div class="" :style="'height: ' + 0.7 * windowHeight + 'px !important'">
            <Carousel class="carousel" :wrap-around="true" :autoplay="5000000000" :transition="1500"
                :pauseAutoplayOnHover="true">
                <Slide :key="0">
                    <SkewBox :rightBG="{
                    	backgroundImage: `url(${require('@/assets/img/WCS.jpg')})`,
                    	'background-position': 'center',
                    }" :rightColor="'transparent'" :leftColor="'rgba(var(--FSCredRGB), 0.7); backdrop-filter: blur(5px);'"
                        :height="windowHeight * 0.7" :padding="'70px 0 60px 0'">
                        <template v-slot:left>
                            <div class="center vertical-center">
                                <h4 class="white">Welcome to the</h4>
                                <h1 class="white">Florida Southern College</h1>
                                <h4 class="white">Department of Computer Science</h4>
                            </div>
                        </template>
                    </SkewBox>
                </Slide>
                <Slide :key="1">
                    <SkewBox :leftBG="{
                    	backgroundImage: `url(${require('@/assets/img/WCS.jpg')})`,
                    	'background-position': 'center',
                    }" :leftColor="'transparent'" :rightColor="'rgba(var(--FSCblueRGB), 0.7); backdrop-filter: blur(5px);'"
                        :height="windowHeight * 0.7" :padding="'70px 0 60px 0'">
                        <template v-slot:left></template>
                        <template v-slot:right>
                            <h1 style="color: white">Content on the right side</h1>
                        </template>
                    </SkewBox>
                </Slide>
                <Slide :key="2">
                    <SkewBox :height="windowHeight * 0.7" :padding="'70px 0 60px 0'">
                        <template v-slot:left>
                            <h1 style="color: white">Content on the left side</h1>
                        </template>
                        <template v-slot:right>
                            <h1 style="color: white">Content on the right side</h1>
                        </template>
                    </SkewBox>
                </Slide>

                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
            </Carousel>
        </div>
        <!-- End SkewBox Carousel -->
    </div>
    <!-- End Hero Section -->

    <!-- Start Announcements Section -->
    <Parallax :image="{
    	backgroundImage: `url(${require('@/assets/img/BG6.jpg')})`,
    	'background-position': 'left top',
    }" :height="'70vh'" :opacity="0.3" :overlayColor="'0, 0, 0'" class="">
        <div class="strong-blur h-100">
            <div class="announcements container py-5 h-100">
                <h1 class="center primary mt-2 mb-4 pb-1 bold">Announcements</h1>

                <Carousel class="carousel" :wrap-around="true" :transition="600" :pauseAutoplayOnHover="true">
                    <template #slides>
                        <Slide :key="0">
                            <Announcement :pfp="'https://www.knack.com/images/about/default-profile.png'"
                                :name="'John Doe'">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
                                    facilis ad veritatis inventore cumque eaque ratione recusandae, beatae
                                    earum repudiandae ab quaerat ullam est, ipsa dolorem soluta possimus
                                    velit vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Ullam temporibus tenetur, alias vero aspernatur atque inventore
                                    dignissimos quia rerum debitis aperiam quibusdam veritatis beatae. Aut
                                    repellendus expedita esse porro illum. Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Tempore nesciunt ratione totam dolores
                                    quia voluptatibus officia, in illum maiores sunt, aliquid a doloremque
                                    adipisci commodi accusantium omnis odit, delectus saepe.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
                                    facilis ad veritatis inventore cumque eaque ratione recusandae, beatae
                                    earum repudiandae ab quaerat ullam est, ipsa dolorem soluta possimus
                                    velit vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Ullam temporibus tenetur, alias vero aspernatur atque inventore
                                    dignissimos quia rerum debitis aperiam quibusdam veritatis beatae. Aut
                                    repellendus expedita esse porro illum. Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Tempore nesciunt ratione totam dolores
                                    quia voluptatibus officia, in illum maiores sunt, aliquid a doloremque
                                    adipisci commodi accusantium omnis odit, delectus saepe.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
                                    facilis ad veritatis inventore cumque eaque ratione recusandae, beatae
                                    earum repudiandae ab quaerat ullam est, ipsa dolorem soluta possimus
                                    velit vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Ullam temporibus tenetur, alias vero aspernatur atque inventore
                                    dignissimos quia rerum debitis aperiam quibusdam veritatis beatae. Aut
                                    repellendus expedita esse porro illum. Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Tempore nesciunt ratione totam dolores
                                    quia voluptatibus officia, in illum maiores sunt, aliquid a doloremque
                                    adipisci commodi accusantium omnis odit, delectus saepe.
                                </p>
                            </Announcement>
                        </Slide>
                        <Slide :key="1">
                            <Announcement :pfp="'https://www.knack.com/images/about/default-profile.png'"
                                :name="'John Doe'">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
                                    facilis ad veritatis inventore cumque eaque ratione recusandae, beatae
                                    earum repudiandae ab quaerat ullam est, ipsa dolorem soluta possimus
                                    velit vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Ullam temporibus tenetur, alias vero aspernatur atque inventore
                                    dignissimos quia rerum debitis aperiam quibusdam veritatis beatae. Aut
                                    repellendus expedita esse porro illum. Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Tempore nesciunt ratione totam dolores
                                    quia voluptatibus officia, in illum maiores sunt, aliquid a doloremque
                                    adipisci commodi accusantium omnis odit, delectus saepe.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
                                    facilis ad veritatis inventore cumque eaque ratione recusandae, beatae
                                    earum repudiandae ab quaerat ullam est, ipsa dolorem soluta possimus
                                    velit vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Ullam temporibus tenetur, alias vero aspernatur atque inventore
                                    dignissimos quia rerum debitis aperiam quibusdam veritatis beatae.
                                </p>
                            </Announcement>
                        </Slide>
                        <Slide :key="2">
                            <Announcement :pfp="'https://www.knack.com/images/about/default-profile.png'"
                                :name="'John Doe'">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
                                    facilis ad veritatis inventore cumque eaque ratione recusandae, beatae
                                    earum repudiandae ab quaerat ullam est, ipsa dolorem soluta possimus
                                    velit vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Ullam temporibus tenetur, alias vero aspernatur atque inventore
                                    dignissimos quia rerum debitis aperiam quibusdam veritatis beatae. Aut
                                    repellendus expedita esse porro illum. Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Tempore nesciunt ratione totam dolores
                                    quia voluptatibus officia, in illum maiores sunt, aliquid a doloremque
                                    adipisci commodi accusantium omnis odit, delectus saepe.
                                </p>
                            </Announcement>
                        </Slide>
                    </template>
                    <template #addons>
                        <Navigation />
                        <Pagination />
                    </template>
                </Carousel>
            </div>
        </div>
    </Parallax>
    <!-- End Announcements Section -->

    <!-- Start Events Section -->
    <Parallax :image="{
    	backgroundImage: `url(https://www.capgemini.com/dk-en/wp-content/uploads/sites/42/2019/06/Blockchain-2.gif)`,
    	'background-position': 'left bottom',
    }" :height="'0'" :opacity="0.5" :overlayColor="'0, 20, 30'" class="">
        <div class="blur h-100 pb-2">
            <div class="announcements container py-5 h-100">
                <h1 class="center FSClightblue mt-2 mb-4 pb-1 bold">Events</h1>
                <div class="events white-scroll-bar"
                    style="max-height: 65vh !important; overflow-y: auto; width: 75%; margin: auto">
                    <Event v-for="(event, i) in events" :key="i" :title="event.title" :icon="event.icon"
                        :location="event.location" :date="event.date" :time="event.time">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, a
                        praesentium, fugit beatae nihil similique impedit debitis harum architecto,
                        quis odit voluptatem necessitatibus. Aliquam alias cum sit nisi enim
                        voluptates.
                    </Event>
                </div>
            </div>
        </div>
    </Parallax>
    <!-- End Events Section -->

    <!-- Start Faculty Section -->
    <Parallax :image="{
    	backgroundImage: `url(${require('@/assets/img/BG4.jpg')}`,
    	'background-position': 'left middle',
    }" :height="'0'" :opacity="0.2" :overlayColor="'0, 0, 0'" class="">
        <div class="h-100 pb-2">
            <div class="faculty container py-5 h-100">
                <h1 class="center FSCred mt-2 mb-4 pb-1 bold">Meet the Faculty</h1>
                <Carousel :itemsToShow="3.5" :wrapAround="true">
                    <Slide v-for="(professor, name) in professors" :key="name">
                        <div class="carousel__item my-5">
                            <FacultyCard :professor="professor" :name="name"></FacultyCard>
                        </div>
                    </Slide>
                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>
            </div>
        </div>
    </Parallax>
    <!-- End Faculty Section -->

    <!-- Start Tour Section -->
    <Parallax :image="{
    	background: 'var(--FSCgrey)',
    	'background-position': 'left middle',
    }" :height="'70vh'" :opacity="0.2" :overlayColor="'0, 0, 0'" class="">
        <div class="container py-5 my-2" style="height: 70vh !important">
            <div class="center vertical-center">
                <router-link to="/virutal-tour" class="no-decor">
                    <h1 class="bold tour-link">Take a Virtual Tour</h1>
                </router-link>
            </div>
        </div>
    </Parallax>
    <!-- End Tour Section -->
</template>

<script>
import Parallax from "../components/Parallax.vue";
import SkewBox from "../components/SkewBox.vue";
import Announcement from "../components/Announcement.vue";
import FacultyCard from "../components/FacultyCard.vue";
import Event from "../components/Event.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import axios from "axios";

export default {
    components: {
        Parallax,
        SkewBox,
        Announcement,
        Event,
        FacultyCard,
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data() {
        return {
            userInput: "",
            announcementReload: 0,
            windowHeight: 0,
            allEvents: [],
            professors: {},
        };
    },
    methods: {
        async getProfile() {

        }
    },
    computed: {
        events() {
            return this.allEvents.slice(0, 20);
        },
    },
    async beforeMount() {
        // Get window height
        this.windowHeight = window.innerHeight;

        this.allEvents = this.$store.getters.getEvents;

        // Fetch all slack announcements from API
        await this.$store.dispatch("fetchAnnouncements");

        // Get announcements from store
        const storeAnnouncements = this.$store.getters.getAnnouncements;

        // Loop over announcements
        storeAnnouncements.messages.forEach((message) => {
            // console.log(message);
        });

        // Get all faculty members in DB
        await this.$store.dispatch("fetchFaculty");

        // Get faculty members from store
        const storeFaculty = this.$store.getters.getFaculty;

        // Push each professor's data to the professors array
        storeFaculty.forEach((doc) => {
            this.professors[doc.id] = doc.data();
        });

        this.professors = Object.fromEntries(
            Object.entries(this.professors).sort(([, a], [, b]) => Math.random() - 0.5)
        );
        this.professors = Object.fromEntries(
            Object.entries(this.professors).sort(([, a], [, b]) => Math.random() - 0.5)
        );
        this.professors = Object.fromEntries(
            Object.entries(this.professors).sort(([, a], [, b]) => Math.random() - 0.5)
        );
    },
};
</script>

<style>
.carousel__pagination-button::after {
    content: none!important;
}

.carousel__pagination-button {
    background-color: darkgray;
    margin: 0 5px;
    border-radius: 10px;
}

/* HERO Carousel */
.hero .carousel__pagination {
    margin-bottom: 0;
    padding-left: 0;
    transform: translateY(-30px);
}

.hero .carousel__pagination-button {
    height: calc(var(--vc-pgn-height) * 1.5) !important;
    width: calc(var(--vc-pgn-width) * 1.5) !important;
    
}

.hero .carousel__pagination-button--active {
    background-color: white !important;
}

.hero .carousel__icon {
    width: calc(var(--vc-icn-width) * 2) !important;
    height: calc(var(--vc-icn-width) * 2) !important;
}

.hero .carousel__prev,
.hero .carousel__next {
    box-sizing: content-box;
    background-color: transparent;
    width: calc(var(--vc-nav-width) * 2) !important;
    height: calc(var(--vc-nav-height) * 2) !important;
    color: white!important;
}

.hero .carousel__prev {
    left: 30px !important;
}

.hero .carousel__next {
    right: 30px !important;
}

/* ANNOUNCEMENT Carousel */
.announcements .carousel {
    text-align: left;
}

.announcements .carousel__pagination {
    margin-bottom: 0;
    padding-left: 0;
    transform: translateY(0px);
}

.announcements .carousel__pagination-button {
    height: calc(var(--vc-pgn-height) * 1.5) !important;
    width: calc(var(--vc-pgn-width) * 1.5) !important;
    background-color: darkgray;
}

.announcements .carousel__pagination-button--active {
    background-color: white !important;
}

.announcements .carousel__icon {
    width: calc(var(--vc-icn-width) * 2) !important;
    height: calc(var(--vc-icn-width) * 2) !important;
}

.announcements .carousel__prev,
.announcements .carousel__next {
    /* box-sizing: content-box; */
    background-color: transparent;
    width: calc(var(--vc-nav-width) * 2) !important;
    height: calc(var(--vc-nav-height) * 2) !important;
    color: white!important;
}

.announcements .carousel__prev {
    left: 30px !important;
}

.announcements .carousel__next {
    right: 30px !important;
}

/* FACULTY Carousel */
.faculty .carousel {
    text-align: left;
}

.faculty .carousel__pagination {
    margin-bottom: 0;
    padding-left: 0;
    transform: translateY(0px);
}

.faculty .carousel__pagination-button {
    height: calc(var(--vc-pgn-height) * 1.5) !important;
    width: calc(var(--vc-pgn-width) * 1.5) !important;
    background-color: darkgray;
}

.faculty .carousel__pagination-button--active {
    background-color: white !important;
}

.faculty .carousel__icon {
    width: calc(var(--vc-icn-width) * 2) !important;
    height: calc(var(--vc-icn-width) * 2) !important;
}

.faculty .carousel__prev,
.faculty .carousel__next {
    /* box-sizing: content-box; */
    background-color: var(--FSCred);
    width: 50px !important;
    height: 50px !important;
    border-radius: 50% !important;
    color: white!important;
}

.faculty .carousel__prev {
    left: 30px !important;
}

.faculty .carousel__next {
    right: 30px !important;
}

.faculty .carousel__slide>.carousel__item {
    transform: scale(1);
    opacity: 0.5;
    transition: 0.5s;
}

.faculty .carousel__slide--visible>.carousel__item {
    opacity: 1;
    transform: rotateY(0);
}

.faculty .carousel__slide--next>.carousel__item {
    transform: scale(0.9) translate(-10px);
}

.faculty .carousel__slide--prev>.carousel__item {
    transform: scale(0.9) translate(10px);
}

.faculty .carousel__slide--active>.carousel__item {
    transform: scale(1.1);
}

.events .event-body {
    margin: 3rem auto !important;
}

.events .event-body:nth-of-type(1) {
    margin: 1rem auto 3rem !important;
}

.events .event-body:nth-last-of-type(1) {
    margin: 0 auto 1rem !important;
}

.tour-link {
    color: white;
    transition: all 0.2s ease-in-out;
}

.tour-link:hover {
    transform: scale(1.1);
}

.btn-primary,
.btn-primary:visited,
.btn-primary:active,
.btn-primary:focus,
.btn-primary:active:focus {
    background-color: var(--primary);
    color: rgb(255, 255, 255);
    border: none;
    outline: none;
    box-shadow: none;
    transition: all 0.25s ease-in-out;
}

.btn-primary:hover {
    background-color: var(--secondary);
}

.section {
    border-bottom: 5px solid var(--primary);
}

.large {
    font-size: 3.5rem;
}

p.large {
    font-size: 1.3rem;
}

.normal {
    font-weight: normal;
}

.center {
    text-align: center;
}

.italicized {
    font-style: italic;
}

.primary {
    color: var(--primary);
}

.secondary {
    color: var(--secondary);
}

.white,
.white:hover,
.white:active,
.white:active:focus,
.white:focus,
.white:visited {
    color: white !important;
}

.FSCred {
    color: var(--FSCred);
}

.FSCblue {
    color: var(--FSCblue);
}

.FSClightblue {
    color: var(--FSClightblue);
}

.FSCgrey {
    color: var(--FSCgrey);
}

hr.FSCred {
    margin: 0 0 15px 0;
    border-bottom: 4px solid var(--FSCred);
    border-radius: 20px;
    opacity: 1;
}

hr.FSCblue {
    margin: 0 0 15px 0;
    border-bottom: 4px solid var(--FSCblue);
    border-radius: 20px;
    opacity: 1;
}

hr.FSClightblue {
    margin: 0 0 15px 0;
    border-bottom: 4px solid var(--FSClightblue);
    border-radius: 20px;
    opacity: 1;
}

.no-decor,
.no-decor:hover,
.no-decor:focus,
.no-decor:active,
.no-decor:visited {
    text-decoration: none;
    color: var(--primary);
}

.white-shadow {
    text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #fff, 0 0 4px #fff, 0 0 5px #fff,
        0 0 6px #fff, 0 0 7px #fff;
}

.black-shadow {
    text-shadow: 0 0 5px #000;
}

.link,
.link:focus,
.link:active,
.link:visited {
    color: var(--primary);
    font-weight: 500;
}

.link:hover {
    color: var(--primary-dark);
}

.primary-hr {
    margin: 0 0 15px 0;
    border-bottom: 4px solid var(--primary);
    border-radius: 20px;
    opacity: 1;
}

.white-hr {
    margin: 0 0 15px 0;
    border-bottom: 4px solid white;
    border-radius: 20px;
    opacity: 1;
}

.row.block-center {
    width: unset !important;
}

.nav-pad {
    padding-top: 60px;
}

.vertical-center {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    justify-content: center;
    flex-direction: column;
}

.mb-sm-4 {
    margin-bottom: 0 !important;
}

.bold {
    font-weight: bold;
}

.blur {
    backdrop-filter: blur(5px);
}

.strong-blur {
    backdrop-filter: blur(10px);
}

@media (max-width: 1199.98px) {
    .large {
        font-size: 2.5rem;
    }

    p.large {
        font-size: 2.5vh !important;
    }
}
</style>
