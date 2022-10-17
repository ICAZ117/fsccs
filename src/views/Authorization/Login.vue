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
						<button type="submit" class="btn btn-primary submitButton">Login</button>
					</div>
					<div class="form-group mt-3">
						<center>
							Don't have an account?
							<router-link to="/sign-up" class="primary link">Sign Up!</router-link>
						</center>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

	export default {
		components: {},
		data() {
			return {
				email: "",
				password: "",
			};
		},
		methods: {
			async signIn() {
				await signInWithEmailAndPassword(getAuth(), this.email, this.password)
					.then(() => {
						// Set the user's email in the store
						this.$store.commit("setEmail", this.email);

						// Get the user's username from the database
						this.$store.dispatch("fetchUser");

						this.$router.push("/");
					})
					.catch((error) => {
						let message = "";

						switch (error.code) {
							case "auth/invlid-email":
								message = "Invalid email address";
								break;
							case "auth/user-not-found":
								message = "No account exists with that email address";
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
		height: 425px;
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
