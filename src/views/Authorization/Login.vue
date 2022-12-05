<template>
	<!-- Create login page -->
	<div class="login">
		<div class="login-container">
			<div class="login-header">
				<h1>Login</h1>
			</div>
			<div class="login-body">
				<form @submit.prevent="signIn">
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
						<button
							type="submit"
							class="btn btn-primary submitButton"
						>
							Login
						</button>
					</div>
					<div v-if="showVerificationBtn">
						<br />
						<div class="form-group">
							<a
								@click="resend"
								class="btn btn-primary submitButton"
							>
								Resend Verification Email
							</a>
						</div>
					</div>
					<div class="form-group mt-3">
						<div style="display: flex; justify-content: center">
							<router-link to="/sign-up" class="me-5 primary link"
								>Sign Up!</router-link
							>
							<router-link
								to="/reset-password"
								class="primary link"
								>Forgot Password</router-link
							>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import {
	getAuth,
	setPersistence,
	browserLocalPersistence,
	signInWithEmailAndPassword,
	sendEmailVerification,
	signOut,
} from "firebase/auth";

export default {
	data() {
		return {
			email: "",
			password: "",
			auth: "",
			showVerificationBtn: false,
			height: "425px",
		};
	},
	methods: {
		async signIn() {
			await setPersistence(getAuth(), browserLocalPersistence).then(
				async () => {
					return await signInWithEmailAndPassword(
						getAuth(),
						this.email,
						this.password
					)
						.then(async () => {
							// Set the user's email in the store
							this.$store.commit("setEmail", this.email);

							// Fetch the user's account into the store
							await this.$store.dispatch("fetchUser");

							// Grab the user's account from the store
							this.auth = this.$store.getters.getUser;

							// If the user has already registered...
							if (this.auth.registrationComplete) {
								this.$router.push("/");
							} else {
								if (getAuth().currentUser.emailVerified) {
									this.$router.push("/sign-up/finalize");
								} else {
									this.$notify({
										title: "Error",
										text: "Email not yet verified!",
										type: "error",
										duration: 5000,
									});
									signOut(getAuth());
									this.showVerificationBtn = true;
									this.height = "500px";
								}
							}
						})
						.catch((error) => {
							let message = "";

							switch (error.code) {
								case "auth/invlid-email":
									message = "Invalid email address";
									break;
								case "auth/user-not-found":
									message =
										"No account exists with that email address";
									break;
								case "auth/wrong-password":
									message = "Invalid password";
									break;
								case "auth/user-disabled":
									message = "Your account has been disabled";
									break;
								default:
									message = "Something went wrong";
							}

							this.$notify({
								title: "Error",
								text: message,
								type: "error",
							});
						});
				}
			)
            .catch((error) => {
                console.log("PERSISTENCE_ERROR: " + error.message);
            });
		},

		async resend() {
			await signInWithEmailAndPassword(
				getAuth(),
				this.email,
				this.password
			)
				.then(async () => {
					var actionCodeSettings = {
						url: "https://www.thecube.life/",
					};

					await sendEmailVerification(
						getAuth().currentUser,
						actionCodeSettings
					)
						.then(async () => {
							await signOut(getAuth()).then(() => {
								this.$notify({
									title: "Email Sent!",
									text: "Please check your email for a verification link. It may be in your spam folder!",
									type: "success",
								});
							});
						})
						.catch((error) => {
							console.error("EMAIL_VERIFICATION_ERROR", error);
						});
					signOut(getAuth());
				})
				.catch((error) => {
					let message = "";

					switch (error.code) {
						case "auth/invlid-email":
							message = "Invalid email address";
							break;
						case "auth/user-not-found":
							message =
								"No account exists with that email address";
							break;
						case "auth/wrong-password":
							message = "Invalid password";
							break;
						case "auth/user-disabled":
							message = "Your account has been disabled";
							break;
						default:
							message = "Something went wrong";
					}

					this.$notify({
						title: "Error",
						text: message,
						type: "error",
					});
				});
		},
		test() {
			console.log("IT HAS BEEN CLICKKED");
		},
	},
};
</script>

<style>
.login {
	width: calc(100vw - 5px);
	height: 100vh;
	background-color: rgb(55, 55, 60);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: white;
}

.login .btn:hover {
	background-color: var(--primary-dark);
}

.login-container {
	width: 350px !important;
	height: v-bind(height);
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
.login-body {
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
