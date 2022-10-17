<template>
	<Parallax
		:image="{
			'background-color': 'rgb(50, 50, 50)',
		}"
		:height="'100vh'"
		:opacity="0"
		:overlayColor="'25, 25, 25'"
	>
		<form @submit.prevent autocomplete="off" id="main-form"></form>
		<form @submit.prevent autocomplete="off" id="change-password-form"></form>
		<div class="row nav-pad my-5">
			<div class="col-4 ps-5">
				<!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -->
				<!-- <<<<< START LEFT SECTION <<<<< -->
				<!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -->
				<div class="largePic mb-3">
					<img
						:src="
							authUser.pfp
								? authUser.pfp
								: 'https://www.knack.com/images/about/default-profile.png'
						"
						alt="Profile Picture"
						class="largePic"
					/>
				</div>
				<div class="w-100 px-4">
					<div class="mb-3">
						<div class="form-floating mb-3">
							<input
								type="text"
								class="form-control"
								id="changePFP"
								v-model="authUser.pfp"
								form="main-form"
							/>
							<label for="changePFP">Profile Picture URL</label>
						</div>
					</div>
				</div>
				<hr class="primary-hr" />
				<div class="px-4"></div>
				<!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<< -->
				<!-- <<<<< END LEFT SECTION <<<<< -->
				<!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<< -->
			</div>

			<div class="col-8 px-4 ps-5">
				<!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
				<!-- >>>>> START RIGHT SECTION >>>>> -->
				<!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->

				<!-- PROFILE SETTINGS -->
				<h2 class="white">Profile Settings</h2>
				<hr class="primary-hr" />
				<div class="px-3 row g-5 white block-center">
					<div class="col-6 px-4">
						<div class="form-floating mb-3">
							<input
								type="text"
								class="form-control"
								id="username"
								v-model="authUser.username"
								form="main-form"
							/>
							<label for="username">Username</label>
						</div>
					</div>
					<div class="col-6 px-4">
						<div class="form-floating mb-3">
							<input
								type="text"
								class="form-control"
								id="id"
								v-model="authUser.id"
								disabled
								form="main-form"
							/>
							<label for="id">Student ID</label>
						</div>
					</div>
					<div class="col-6 px-4">
						<div class="form-floating mb-3">
							<input
								type="text"
								class="form-control"
								id="fname"
								v-model="authUser.fname"
								form="main-form"
							/>
							<label for="fname">First Name</label>
						</div>
					</div>
					<div class="col-6 px-4">
						<div class="form-floating mb-3">
							<input
								type="text"
								class="form-control"
								id="lname"
								v-model="authUser.lname"
								form="main-form"
							/>
							<label for="lname">Last Name</label>
						</div>
					</div>
				</div>

				<!-- SECURITY SETTINGS -->
				<h2 class="white mt-5">Security Settings</h2>
				<hr class="primary-hr" />
				<div class="px-3 row g-5 white block-center">
					<div class="col-6 px-4">
						<div class="sub-form">
							<div class="form-floating mb-3">
								<input
									type="password"
									class="form-control"
									id="currentPassword"
									autocomplete="new-password"
									form="change-password-form"
								/>
								<label for="currentPassword">Current Password</label>
							</div>
							<div class="form-floating mb-3">
								<input
									type="password"
									class="form-control"
									id="newPassword"
									autocomplete="new-password"
									form="change-password-form"
								/>
								<label for="newPassword">New Password</label>
							</div>
							<div class="form-floating mb-3">
								<input
									type="password"
									class="form-control"
									id="repeatPassword"
									autocomplete="new-password"
									form="change-password-form"
								/>
								<label for="repeatPassword">Repeat New Password</label>
							</div>
							<button class="btn btn-primary btn-md w-100">Submit</button>
						</div>
					</div>
				</div>
				<!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
				<!-- >>>>> END RIGHT SECTION >>>>> -->
				<!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
			</div>
		</div>
	</Parallax>
</template>

<script>
	import Parallax from "../components/Parallax.vue";
	import SkewBox from "../components/SkewBox.vue";
	import { getAuth, onAuthStateChanged } from "firebase/auth";

	export default {
		components: {
			Parallax,
			SkewBox,
		},
		data() {
			return {
				authUser: {},
			};
		},
		beforeMount() {
			onAuthStateChanged(getAuth(), async (user) => {
				console.log("AUTH STATE CHANGED");
				if (user) {
					this.$store.commit("setEmail", user.email);
					await this.$store.dispatch("fetchUser");
					this.authUser = { ...this.$store.getters.getUser };
					console.log("AUTH USER", temp);
				} else {
					this.authUser = {};
				}
			});
		},
	};
</script>

<style scoped>
	.sub-form {
		border: 2px solid var(--FSCgrey);
		padding: 2rem;
		border-radius: 1rem;
	}
	.form-floating > .form-control:focus,
	.form-floating > .form-control:not(:placeholder-shown) {
		padding-top: 2rem !important;
	}

	.form-control {
		background-color: transparent;
		border: none;
		color: white;
	}

	:focus-visible {
		outline: none !important;
	}

	/* Change the white to any color */
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		transition: all ease 0s;
		-webkit-box-shadow: 0 0 0 30px rgb(50, 50, 50) inset !important;
	}

	input:-webkit-autofill,
	input:-webkit-autofill::first-line {
		-webkit-text-fill-color: white !important;
		font-family: "Montserrat" !important;
	}

	input,
	input:focus,
	input:active {
		outline: none;
		border-bottom: 3px solid darkgray !important;
		border-radius: 0;
		width: 100% !important;
	}

	.form-control:focus {
		border: none;
		box-shadow: none !important;
	}

	label {
		font-size: 110%;
		margin-right: 0.5rem;
		color: white;
		float: left;
		white-space: nowrap;
	}

	.largePic {
		height: 300px;
		width: 300px;
		background-color: var(--FSCgrey);
		border-radius: 50%;
		margin: auto;
	}

	img.largePic {
		border: 5px solid var(--FSCred);
	}

	.title {
		display: inline-block;
		font-size: 2rem;
		color: blue;
		padding-left: 10%;
		width: 60%;
		/* margin-right: 10%; */
		padding-top: 10%;
	}
	.secondary {
		display: inline-block;
		font-size: 1.6rem;
		color: blue;
		padding-left: 50px;
		width: 10em;
		margin-right: 10%;
	}
	.picture {
		display: inline-block;
		border-radius: 10px;
	}
</style>
