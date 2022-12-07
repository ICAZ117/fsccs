<template>
	<div class="team-member" @click="redirect">
		<div class="team-member-img">
			<CubeImage :pic="professor.pfp" style="width: 100%"></CubeImage>
			<div class="social-icons">
				<a
					@click="disableRedirect()"
					target="_blank"
					:href="'mailto:' + professor.email"
					class="white no-decor"
				>
					<i class="fa-solid fa-envelope"></i>
				</a>
				<a
					@click="disableRedirect()"
					target="_blank"
					:href="professor.linkedin"
					class="white no-decor"
				>
					<i class="fa-brands fa-linkedin"></i>
				</a>
				<a
					@click="disableRedirect()"
					target="_blank"
					:href="professor.github"
					class="white no-decor"
				>
					<i class="fa-brands fa-github"></i>
				</a>
				<a
					@click="disableRedirect()"
					target="_blank"
					:href="
						'https://flsouthern-cs.slack.com/team/' +
						professor.slack
					"
					class="white no-decor"
				>
					<i class="fa-brands fa-slack"></i>
				</a>
			</div>
		</div>
		<div class="p-4 card-hover">
			<div class="prof-name vertical-center">
				<h5 class="title-sm mb-0">{{ professor.name }}</h5>
				<small class=""><span v-html="professor.title"></span></small>
			</div>
			<hr class="primary-hr w-50 m-auto mb-3" />
			<div
				class="card-contacts ms-0 row block-center"
				style="width: 170px !important; margin: auto !important"
			>
				<h5 class="col-1"><i class="fa-solid fa-phone"></i></h5>
				<div
					class="col-11 ps-5"
					style="padding-left: 0.5rem !important"
				>
					&nbsp;&nbsp;&nbsp;{{ professor.phone }}
				</div>

				<h5 class="col-1"><i class="fa-solid fa-location-dot"></i></h5>
				<div
					class="col-11 ps-5"
					style="padding-left: 0.5rem !important"
				>
					&nbsp;&nbsp;&nbsp;{{ professor.office }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import audio1 from "@/assets/audio/Thug-Life-basic.mp3";
import audio2 from "@/assets/audio/Thug-Life-DrDre.mp3";
import audio3 from "@/assets/audio/Thug-Life-GTA.mp3";
import audio4 from "@/assets/audio/Thug-Life-Snoop.mp3";

export default {
	props: ["professor", "name"],
    components: {
		CubeImage: defineAsyncComponent(() =>
			import("@/components/CubeImage.vue")
		),
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
					this.$router.push("/faculty?id=" + this.name);
					this.$emit("redirectPage");
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

<style scoped>
.team-member .primary-hr {
	transition: all ease 0.5s;
}

.team-member:hover .primary-hr {
	margin: 0 0 15px 0;
	border-bottom: 4px solid white;
	border-radius: 20px;
	opacity: 1;
}

.card-contacts {
	transform: translateX(15px);
}

.card-contacts i {
	font-size: 14pt;
}

.prof-name {
	height: 80px;
}

.team-member {
	background-color: white;
	color: var(--FSCred);
	transition: all ease 0.5s;
	width: 90vw;
	max-width: 325px !important;
}

.team-member:hover {
	background-color: var(--FSCred);
	color: white !important;
}

.team-member .hline {
	width: 70px;
	height: 2px;
	margin: 16px auto;
	background-color: rgba(255, 255, 255, 0.445);
}

.team-member .team-member-img img,
.team-member .team-member-img .social-icons {
	transition: all 0.4s ease;
}

.team-member .team-member-img {
	position: relative;
	overflow: hidden;
}

.team-member .team-member-img .social-icons {
	width: 100%;
	height: 60px;
	background-color: var(--FSCblue);
	position: absolute;
	bottom: -60px;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
}

.team-member .team-member-img .social-icons a {
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid rgba(255, 255, 255, 0.5);
	font-size: 24px;
	color: #fff;
	border-radius: 100px;
	margin-left: 4px;
	margin-right: 4px;
	transition: all ease 0.3s;
}

.team-member .team-member-img .social-icons a:hover {
	background-color: var(--FSClightblue);
}

.team-member:hover .team-member-img .social-icons {
	bottom: 0;
}

/* .team-member:hover img {
		transform: translateY(-60px);
	} */

.card-contacts.row > * {
	padding-left: 0 !important;
}
</style>
