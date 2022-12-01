<template>
    <div class="outside">
        <div class="vertical-center">
            <img :src="professor.teachingimg" alt="" class="faculty_pic"> 
            <div :class="overlay"></div>
            <div class="card vertical-center" style="transform: scale(.8);">
                <div class="card-body" style="display: inline-block !important;">
                    <img :src="professor.pfp" alt="" style="float: left; border: 5px solid white; border-radius: 10px;" class="me-3" />
                    <h2 class="card-title primary bold">
                        {{ professor.name }}
                    </h2>
                    <h3 class="card-title primary mb-4" v-html="title"></h3>
                    <p class="card-title primary">
                        <i class="fa-solid fa-quote-left"></i> {{ quote }} <i class="fa-solid fa-quote-right"></i>
                    </p>
                    <div class="card-text" style="text-align: left">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
        <!-- <Parallax
            :image="{
                backgroundImage: `url(${professor.teachingimg})`,
                'background-position': 'left middle',
            }"
            :height="'0'"
            :opacity="0.7"
            :overlayColor="'0, 0, 0'"
        >
            <div class="card" style="transform: scale(.8);">
                <div class="card-body" style="display: inline-block;">
                    <img :src="professor.pfp" alt="" style="float: left; border: 3px solid var(--FSCred); border-radius: 5px;" class="me-3" />
                    <h2 class="card-title primary bold">
                        {{ professor.name }}
                    </h2>
                    <h3 class="card-title primary mb-4" v-html="title">
                        
                    </h3>
                    <p class="card-title primary">
                        <i class="fa-solid fa-quote-left"></i> {{ quote }} <i class="fa-solid fa-quote-right"></i>
                    </p>
                    <div class="card-text" style="text-align: left">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </Parallax> -->
    </div>
</template>

<script>
import Parallax from "../components/Parallax.vue";

export default {
	props: ["professor", "name", "title", "quote", "image", "overlay"],
    components: {
		Parallax,
	},
    data() {
			return {
				doRedirect: true,
			};
		},
		methods: {
			redirect() {
				setTimeout(() => {
					if (this.doRedirect) {
						this.$router.push("/faculty?name=" + this.name);
					}
				}, 50);
			},
			async disableRedirect() {
				this.doRedirect = false;
				setTimeout(() => {
					this.doRedirect = true;
				}, 100);
			},
		},
};
</script>

<style>
.outside {
    position: relative;
    object-position: center;
}

.faculty_pic {
    width: 100%;
	display: block;
}

.overlay1 {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    transition: all ease 0.5s;
}

.overlay2 {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    transition: all ease 0.5s;
}

.overlay1:hover {
    transition: all ease 0.5s;
    background-color: rgba(var(--FSCredRGB), 0.7);
}

.overlay2:hover {
    transition: all ease 0.5s;
    background-color: rgba(var(--FSCblueRGB), 0.7);
}

.card {
    left: 10%;
    right: 20%;
    width: 80%;
    height: auto !important;
    color: white !important;
    background-color: var(--FSCred);
    display: inline;
	position: absolute;
}

.card, .card .primary-hr, .card .card-title, .card a .card img{
    transition: all ease 0.5s;
    color: white;
}

.card:hover {
    color: white!important;
    background-color: white;
    transform: scale(.9) !important;
    transition: all ease 0.5s;
}

.card:hover img {
    border: 5px solid var(--FSCred) !important;
    border-radius: 10px;
    transition: all ease 0.5s;
}

.card:hover .card-title {
    color: var(--FSCred)!important;
}

.card .primary-hr {
    border-color: white!important;
}

.card a {
    background-color: white !important;
    color: var(--FSCred) !important;
    font-weight: bolder;
}

.card:hover a {
    color: white!important;
    background-color: var(--FSCred) !important;
    font-weight: bolder;
}

.card-title {
    position: relative;
    margin-bottom: 0;
}

.prof-img {
    max-width: 50%;
    height: 60px;
    background-color: var(--FSCblue);
    position: absolute;
    bottom: -60px;
    left: 0;
    align-items: center;
    justify-content: center;
    display: inline-block;
}


</style>