<template>
	<!-- Create login page -->
	<div class="sign-up">
		<div class="sign-up-container">
			<div class="sign-up-header">
				<h1>Sign Up</h1>
			</div>
			<div class="sign-up-body">
				<form @submit.prevent="initSignUp">
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
						<button type="submit" class="btn btn-primary submitButton">Sign Up</button>
					</div>
					<div class="form-group mt-3">
						<center>
							Already have an account?
							<router-link to="/login" class="primary link">Log in!</router-link>
						</center>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

	export default {
		data() {
			return {
				email: "",
			};
		},
		methods: {
			initSignUp() {
				var actionCodeSettings = {
					url: "https://www.example.com/?email=" + firebase.auth().currentUser.email,
					handleCodeInApp: true,
					// When multiple custom dynamic link domains are defined, specify which
					// one to use.
				};
			},
		},
	};
</script>

<style scoped>
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
