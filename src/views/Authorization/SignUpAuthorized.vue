<template>
	<!-- Create login page -->
	<div class="sign-up">
		<div class="sign-up-container">
			<div class="sign-up-header">
				<h1>Complete Registration</h1>
			</div>
			<div class="sign-up-body">
				<form @submit.prevent="signUp" class="row block-center g-4">
                    <div class="form-group col-6">
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
                    <div class="form-group col-6">
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
                    <div class="form-group col-6">
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
					<div class="form-group col-6">
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
						<button type="submit" class="btn btn-primary submitButton">Finish</button>
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
                email: '',
                username: '',
                password: '',
                confirm: '',
                fname: '',
                lname: '',
            }
        },
        methods: {
            signUp() {
                if (this.password != this.confirm) {
                    this.$notify({
                        type: 'error',
                        title: 'Error',
                        text: 'Passwords do not match'
                    });
                }
                else {
                    this.createUser();
                }
            },

            // method to create user
            async createUser() {
                await createUserWithEmailAndPassword(getAuth(), this.email, this.password)
                    .then(() => {
                        // Add email and username to store
                        console.log(this.email);
                        console.log(this.username);

                        this.$store.commit('setAuth', {
                            email: this.email,
                            username: this.username,
                            pfp: 'https://www.knack.com/images/about/default-profile.png',
                            privilege: 1,
                            id: '',
                            fname: this.fname,
                            lname: this.lname,
                        });

                        // Add user to database
                        this.$store.dispatch('createUser');

                        this.$router.push('/');
                    })
                    .catch((error) => {
                        this.$notify({
                            title: 'Error',
                            text: 'Registration failed',
                            type: 'error'
                        });
                    });
            }
        }
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
		width: 750px !important;
		height: 550px;
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
		font-size: 1.2rem!important;
	}

	.form-control:focus {
		border-color: var(--FSCred) !important;
		box-shadow: 0 0 0 0.25rem #d31f31c2 !important;
	}
</style>
