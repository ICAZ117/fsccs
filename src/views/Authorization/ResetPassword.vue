<template>
	<!-- Create passreset page -->
	<div class="passreset">
		<div class="passreset-container">
			<div class="passreset-header">
				<h3>Reset Password</h3>
			</div>
			<div class="passreset-body">
				<form @submit.prevent="resetPassword">
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
						<button
							type="submit"
							class="btn btn-primary submitButton"
						>
							Send Reset Link
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default {
	data() {
		return {
			email: "",
		};
	},

	methods: {
		resetPassword() {
			var actionCodeSettings = {
				url: "https://www.thecube.life/",
			};

			sendPasswordResetEmail(getAuth(), this.email, actionCodeSettings)
				.then(() => {
					this.$notify({
						title: "Email sent!",
						text: "Please check your email for a verification link. It may be in your spam folder!",
						type: "success",
					});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					console.log("AY BRUH");
				});
		},
	},
};
</script>

<style>
.passreset {
	width: calc(100vw - 5px);
	height: 100vh;
	background-color: rgb(55, 55, 60);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: white;
}

.passreset .btn:hover {
	background-color: var(--primary-dark);
}

.passreset-container {
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
.passreset-body {
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
