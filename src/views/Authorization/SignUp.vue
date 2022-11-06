<template>
	<!-- Create login page -->
	<div class="sign-up" v-if="!showCheckEmail">
		<div class="sign-up-container">
			<div class="sign-up-header center">
				<h1>Sign Up</h1>
			</div>
			<div class="sign-up-body">
				<form @submit.prevent="signUp">
					<div class="form-group">
						<label for="email">Email</label>
						<input
							type="text"
							name="email"
							id="email"
							class="form-control"
							placeholder="Email"
							v-model="email"
							autocomplete
							required
						/>
					</div>
					<br />
					<div class="form-group">
						<label for="password">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							class="form-control"
							placeholder="Password"
							v-model="password"
							autocomplete
							required
						/>
					</div>
					<br />
					<div class="form-group">
						<label for="password">Confirm Password</label>
						<input
							type="password"
							name="confirm"
							id="confirm"
							class="form-control"
							placeholder="Confirm Password"
							v-model="confirm"
							autocomplete
							required
						/>
					</div>
					<br />
					<div class="form-group">
						<button
							type="submit"
							class="btn btn-primary submitButton"
						>
							Sign Up
						</button>
					</div>
					<div class="form-group mt-3">
						<center>
							Already have an account?
							<router-link to="/login" class="primary link"
								>Log in!</router-link
							>
						</center>
					</div>
				</form>
			</div>
		</div>
	</div>

	<div class="check-email" v-else>
		<div class="check-email-container">
			<h3>Check your email!</h3>
			<p class="fs-5 lh-lg center">
				Thank's for signing up! We've sent a link confirm your email
				address. If you don't see the email at first, please check your
				spam box!
			</p>
		</div>
	</div>
</template>

<script>
import {
	getAuth,
	createUserWithEmailAndPassword,
	sendEmailVerification,
	signOut,
} from "firebase/auth";

export default {
	data() {
		return {
			email: "",
			password: "",
			confirm: "",
			showCheckEmail: false,
		};
	},
	methods: {
		signUp() {
			if (this.password != this.confirm) {
				this.$notify({
					type: "error",
					title: "Error",
					text: "Passwords do not match",
				});
			} else {
				this.createUser();
			}
		},

		// method to create user
		async createUser() {
			await createUserWithEmailAndPassword(
				getAuth(),
				this.email,
				this.password
			)
				.then(async () => {
					this.$store.commit("setEmail", this.email);
					await this.$store.dispatch("initUser");

					var actionCodeSettings = {
						url: "https://www.thecube.life/",
					};

					await sendEmailVerification(
						getAuth().currentUser,
						actionCodeSettings
					)
						.then(async () => {
							await signOut(getAuth()).then(() => {
								this.showCheckEmail = true;
							});
						})
						.catch((error) => {
							console.log("EMAIL ERROR", error);
						});
				})
				.catch((error) => {
					console.log("SIGN UP ERROR", error);
					this.$notify({
						title: "Error",
						text: "An account with that email address already exists!",
						type: "error",
					});
				});
		},
	},
};
</script>

<style scoped>
.check-email {
	width: calc(100vw - 5px);
	height: 100vh;
	background-color: rgb(55, 55, 60);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: white;
}

.check-email .btn:hover {
	background-color: var(--primary-dark);
}

.check-email-container {
	width: 550px;
	height: 350px;
	padding: 30px;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 5px solid var(--FSCred);
	box-shadow: 0 0 20px var(--FSCred);
	background-color: rgb(55, 55, 62);
	animation: expand 1s;
}

@keyframes expand {
	0% {
		width: 350px;
		height: 525px;
		color: transparent;
	}

	50% {
		color: transparent;
	}

	100% {
		width: 550px;
		height: 350px;
	}
}

.sign-up {
	width: calc(100vw - 5px);
	height: 100vh;
	background-color: rgb(55, 55, 60);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: white;
}

.sign-up .btn:hover {
	background-color: var(--primary-dark);
}

.sign-up-container {
	width: 350px !important;
	height: 525px;
	padding: 30px;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 5px solid var(--FSCred);
	box-shadow: 0 0 20px var(--FSCred);
	background-color: rgb(55, 55, 62);
}
.sign-up-body {
	width: 100%;
}

.submitButton {
	width: 100%;
	font-size: 1.2rem !important;
}

.form-control:focus {
	border-color: var(--FSCred) !important;
	box-shadow: 0 0 0 0.25rem #d31f31c2 !important;
}
</style>
