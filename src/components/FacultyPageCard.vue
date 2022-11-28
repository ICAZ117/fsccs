<template>
    <div class="outside">
        <Parallax
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
        </Parallax>
    </div>
</template>

<script>
import Parallax from "../components/Parallax.vue";

export default {
	props: ["professor", "name", "title", "quote", "image"],
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
.card, .card .primary-hr, .card .card-title, .card a {
    transition: all ease 0.5s;
}

.card:hover {
    color: white!important;
    background-color: white;
    transform: scale(1.05);
}

.card:hover .card-title {
    color: var(--FSCred)!important;
}

.card .primary-hr {
    border-color: white!important;
}

.card:hover a {
    color: white!important;
}

.card-title {
    position: relative;
    margin-bottom: 0;
}

.card {
    margin-left: 10rem;
    margin-right: 10rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
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