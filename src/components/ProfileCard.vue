<template>
	<div class="mx-auto team-member">
		<div class="team-member-img">
			<img :src="pfp" alt="" width="325" />
			<div
				class="social-icons"
				v-if="website || email || linkedin || github || discord"
			>
				<a
					v-if="website"
					target="_blank"
					:href="website"
					class="white no-decor"
				>
					<i class="fa-solid fa-globe"></i>
				</a>
				<a
					v-if="email"
					target="_blank"
					:href="'mailto:' + email"
					class="white no-decor"
				>
					<i class="fa-solid fa-envelope"></i>
				</a>
				<a
					v-if="linkedin"
					target="_blank"
					:href="linkedin"
					class="white no-decor"
				>
					<i class="fa-brands fa-linkedin"></i>
				</a>
				<a
					v-if="github"
					target="_blank"
					:href="github"
					class="white no-decor"
				>
					<i class="fa-brands fa-github"></i>
				</a>
				<a v-if="discord" @click="copyDiscord" class="white no-decor">
					<i class="fa-brands fa-discord"></i>
				</a>
			</div>
		</div>
		<div class="p-4 card-hover">
			<div class="vertical-center">
				<h4 class="title-sm mb-0">{{ name }}</h4>
				<small class=""><span v-if="role" v-html="role"></span></small>
			</div>
			<hr class="primary-hr mx-auto my-2" width="200px" />
			<div class="card-text" style="text-align: justify; hyphens: auto">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		pfp: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			required: false,
			default: "",
		},
		website: {
			type: String,
			required: false,
			default: "",
		},
		email: {
			type: String,
			required: false,
			default: "",
		},
		linkedin: {
			type: String,
			required: false,
			default: "",
		},
		github: {
			type: String,
			required: false,
			default: "",
		},
		discord: {
			type: String,
			required: false,
			default: "",
		},
	},
	data() {
		return {};
	},
	methods: {
		copyDiscord() {
			navigator.clipboard.writeText(this.discord);
			this.$notify({
				title: "Copied!",
				text: "Discord ID has been copied to your clipboard!",
				type: "success",
			});
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

.team-member {
	background-color: white;
	color: var(--FSCred);
	transition: all ease 0.5s;
	width: 325px;
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
