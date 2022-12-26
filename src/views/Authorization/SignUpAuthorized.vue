<template>
	<!-- Create login page -->
	<div class="sign-up">
		<div class="sign-up-container">
			<div class="sign-up-header">
				<h1 class="center">Complete Registration</h1>
			</div>
			<div class="sign-up-body">
				<form @submit.prevent="finalizeUser">
					<div class="form-">
						<label for="username">Username</label>
						<input
							type="text"
							name="username"
							id="username"
							class="form-control"
							placeholder="Username"
							v-model="username"
							required
						/>
					</div>
					<br />
					<div class="form-group">
						<label for="fname">First Name</label>
						<input
							type="text"
							name="fname"
							id="fname"
							class="form-control"
							placeholder="First Name"
							v-model="fname"
							autocomplete
							required
						/>
					</div>
					<br />
					<div class="form-group">
						<label for="lname">Last Name</label>
						<input
							type="text"
							name="lname"
							id="lname"
							class="form-control"
							placeholder="Last Name"
							v-model="lname"
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
							Finish
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import { CONDITIONAL_TYPES } from "@babel/types";
import { getAuth } from "firebase/auth";

export default {
	data() {
		return {
			email: "",
			username: "",
			password: "",
			confirm: "",
			fname: "",
			lname: "",
		};
	},
	methods: {
		async finalizeUser() {
			const email = getAuth().currentUser.email;

			this.$store.commit("setAuth", {
				email: email,
				username: this.username,
				fname: this.fname,
				lname: this.lname,
			});

			this.$store.dispatch("finalizeUser");

			this.$router.push("/");
		},
	},
};
</script>

<style scoped>
.sign-up {
	width: calc(100vw - 5px);
	height: 100vh;
	padding-top: var(--navbar-height);
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

@media (max-width: 474.9px) {
    .sign-up-container {
        width: 300px!important;
    }
}
</style>
