<template>
	<div
		style="background-color: rgb(50, 50, 50); min-height: 100vh"
		class="nav-pad"
	>
		<form @submit.prevent autocomplete="off" id="main-form"></form>
		<form
			@submit.prevent="changePassword"
			autocomplete="off"
			id="change-password-form"
		></form>
		<div class="row py-5">
			<div
				class="col-xl-4 col-lg-5 col-md-6 col-12 ps-5"
				id="profile-left-section"
			>
				<!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -->
				<!-- <<<<< START LEFT SECTION <<<<< -->
				<!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -->
				<div>
					<div class="largePic mb-3">
						<CubeImage
							:pic="
								authUser.pfp
									? authUser.pfp
									: 'https://www.knack.com/images/about/default-profile.png'
							"
							class="largePic"
						></CubeImage>
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
								<label for="changePFP"
									>Profile Picture URL</label
								>
							</div>
						</div>
					</div>
					<hr class="primary-hr" />
				</div>
				<div class="px-4  mb-md-2 mb-4">
					<button
						class="btn btn-md btn-primary w-100"
						@click="updateProfile"
					>
						Save
					</button>
				</div>
				<!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<< -->
				<!-- <<<<< END LEFT SECTION <<<<< -->
				<!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<< -->
			</div>

			<div
				class="col-xl-8 col-lg-7 col-md-6 col-12 px-4 ps-5 pt-md-0 pt-4"
			>
				<!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
				<!-- >>>>> START RIGHT SECTION >>>>> -->
				<!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->

				<!-- PROFILE SETTINGS -->
				<h2 class="white">Profile Settings</h2>
				<hr class="primary-hr" />
				<div class="px-3 row g-5 white block-center pt-xl-0 pt-4">
					<div class="col-xl-6 col-12 px-4 mt-xl-5 mt-4">
						<div class="form-floating mb-xl-3">
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
					<div class="col-xl-6 col-12 px-4 mt-xl-5 mt-4">
						<div class="form-floating mb-xl-3">
							<input
								type="text"
								class="form-control"
								id="id"
								v-model="authUser.email"
								disabled
								form="main-form"
							/>
							<label for="id">Email</label>
						</div>
					</div>
					<div class="col-xl-6 col-12 px-4 mt-xl-5 mt-4">
						<div class="form-floating mb-xl-3">
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
					<div class="col-xl-6 col-12 px-4 mt-xl-5 mt-4">
						<div class="form-floating mb-xl-3">
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
					<div class="col-xl-6 col-lg-8 col-12 px-4">
						<div class="sub-form p-xl-5 p-4">
							<div class="form-floating mb-3">
								<input
									type="password"
									class="form-control"
									id="currentPassword"
									autocomplete="new-password"
									required
									form="change-password-form"
									v-model="oldPassword"
								/>
								<label for="currentPassword"
									>Current Password</label
								>
							</div>
							<div class="form-floating mb-3">
								<input
									type="password"
									class="form-control"
									id="newPassword"
									autocomplete="new-password"
									required
									form="change-password-form"
									v-model="newPassword"
								/>
								<label for="newPassword">New Password</label>
							</div>
							<div class="form-floating mb-3">
								<input
									type="password"
									class="form-control"
									id="repeatPassword"
									autocomplete="new-password"
									required
									form="change-password-form"
									v-model="confirmPassword"
								/>
								<label for="repeatPassword"
									>Repeat New Password</label
								>
							</div>
							<button
								class="btn btn-primary btn-md w-100"
								type="submit"
								form="change-password-form"
							>
								Submit
							</button>
						</div>
					</div>
				</div>
				<!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
				<!-- >>>>> END RIGHT SECTION >>>>> -->
				<!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
			</div>
		</div>
	</div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import SkewBox from "../components/SkewBox.vue";
import {
	getAuth,
	onAuthStateChanged,
	EmailAuthProvider,
	updatePassword,
	reauthenticateWithCredential,
} from "firebase/auth";

export default {
	components: {
		SkewBox,
		CubeImage: defineAsyncComponent(() =>
			import("@/components/CubeImage.vue")
		),
	},
	watch: {
		authUser: {
			handler(newValue, oldValue) {
				if (
					!(
						this.authUser.email ==
							this.$store.getters.getUser.email &&
						this.authUser.username ==
							this.$store.getters.getUser.username &&
						this.authUser.fname ==
							this.$store.getters.getUser.fname &&
						this.authUser.lname ==
							this.$store.getters.getUser.lname &&
						this.authUser.pfp == this.$store.getters.getUser.pfp
					)
				) {
					this.unsavedChanges = true;
					console.log("YOU GOT UNSAVED CHANGES", this.unsavedChanges);
				}
			},
			deep: true,
		},
	},
	data() {
		return {
			authUser: {},
			oldPassword: "",
			newPassword: "",
			confirmPassword: "",
			unsavedChanges: false,
		};
	},
	methods: {
		async updateProfile() {
			this.$store.commit("setAuth", this.authUser);
			this.$store.dispatch("updateUser");
			this.unsavedChanges = false;
			this.$notify({
				title: "Success!",
				text: "Your information has been updated",
				type: "success",
			});
		},
		async changePassword() {
			if (this.newPassword !== this.confirmPassword) {
				this.$notify({
					title: "Error!",
					text: "Passwords do not match.",
					type: "error",
				});
			} else {
				reauthenticateWithCredential(
					getAuth().currentUser,
					EmailAuthProvider.credential(
						getAuth().currentUser.email,
						this.oldPassword
					)
				)
					.then(() => {
						updatePassword(getAuth().currentUser, this.newPassword)
							.then(() => {
								this.$notify({
									title: "Success!",
									text: "Password changed successfully.",
									type: "success",
								});
							})
							.catch((error) => {
								console.error("UPDATE_PASSWORD_ERROR", error);
								this.$notify({
									title: "Error!",
									text: "We're encountering a server error. Please try again later.",
									type: "error",
								});
							});
					})
					.catch((error) => {
						console.error("REAUTHENTICATION_ERROR", error);
						this.$notify({
							title: "Error!",
							text: "Incorrect password.",
							type: "error",
						});
					});
			}
		},
	},
	beforeMount() {
		this.authUser = { ...this.$store.getters.getUser };
	},
	beforeRouteLeave(to, from, next) {
		if (this.unsavedChanges) {
			const answer = window.confirm(
				"Do you really want to leave? You have unsaved changes!"
			);

			if (answer) {
				next();
			} else {
				next(false);
			}
		} else {
			next();
		}
	},
};
</script>

<style scoped>
.sub-form {
	border: 2px solid var(--FSCgrey);
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
	max-width: 300px;
	max-height: 300px;
	width: 100%;
	height: auto;
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

@media (max-width: 767.9px) {
	#profile-left-section {
		display: flex;
		flex-direction: column-reverse;
	}
}
</style>
