<template>
	<div>
		<nav class="navbar navbar-dark navbar-expand-xl align-middle">
			<div class="w-100 contain">
				<router-link to="/" class="navbar-brand">
					<img
						src="@/assets/img/DiscoCube.gif"
						height="50"
						alt="Logo"
						title="Logo"
						v-if="cubeLifeMode"
					/>
					<img
						src="../assets/img/Cube.svg"
						class="cube"
						height="44"
						alt="Logo"
						title="Logo"
						v-else
					/>
				</router-link>

				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarResponsive"
					@click="toggleNav"
					style="height: 44px !important; width: 44px !important"
				>
					<span v-if="!isOpen" class="navbar-toggler-icon"></span>
					<i
						style="
							font-size: 1.5em !important;

							width: 30px !important;

							margin: auto;
						"
						v-if="isOpen"
						class="fa-solid fa-xmark"
					></i>
				</button>

				<div
					class="nav-items"
					id="navbarResponsive"
					:style="
						useHamburger
							? (isOpen
									? 'transform: translateY(0); height: calc(100vh - 60px)!important;'
									: 'transform: translateY(-1000px); height: calc(100vh - 60px)!important;') +
							  ' overflow-y: scroll!important'
							: 'transform: translateY(0)'
					"
				>
					<div class="navbar-nav">
						<div class="nav-item">
							<router-link to="/" class="nav-link"
								>Home</router-link
							>
						</div>

						<Dropdown
							:header="'About'"
							:useRouterLinks="true"
							:width="'220px'"
							:pageWidth="width"
							:dropContent="[
								{
									path: '/about/department',

									title: 'About the Department',
								},

								{
									path: '/about/faculty',

									title: 'Meet the Faculty',
								},

								{
									path: '/about/degree-and-concentrations',

									title: 'Degree & Concentrations',
								},

								{
									path: '/about/cs-building',

									title: 'About the CS Building',
								},

								{
									path: '/about/cube-life',

									title: 'About The Cube Life',
								},
							]"
						/>

						<Dropdown
							:header="'Get Involved'"
							:useRouterLinks="true"
							:width="'220px'"
							:pageWidth="width"
							:dropContent="[
								{
									path: '/get-involved/boardgame-lunch',
									title: 'Boardgame Lunch',
								},
								{
									path: '/get-involved/collaborative-research',
									title: 'Collaborative Research',
								},
								{
									path: '/get-involved/cs-club',
									title: 'CS Club',
								},
								{
									path: '/get-involved/intramurals',
									title: 'Intramural Sports',
								},
								{
									path: '/get-involved/programming-team',
									title: 'Programming Team',
								},
							]"
						/>

						<Dropdown
							:header="'Resources'"
							:useRouterLinks="true"
							:width="'220px'"
							:pageWidth="width"
							:dropContent="[
								{
									path: '/resources/advising',

									title: 'Advising',
								},
								{
									path: '/resources/degree-audit',

									title: 'Degree Audit',
								},
                                {
									path: '/resources/calendar',

									title: 'Department Calendar',
								},
                                {
									path: '/resources/project-repository',

									title: 'Project Repository',
								},
								{
									path: '/resources/tutor-lab',

									title: 'Tutor Lab',
								},
							]"
						/>

						<div class="nav-item" v-if="!isLoggedIn">
							<router-link to="/login" class="nav-link"
								>Login</router-link
							>
						</div>

						<div class="nav-item" v-if="isLoggedIn">
							<Dropdown
								:header="`<img src='${
									authUser && authUser.pfp
										? authUser.pfp
										: 'https://www.knack.com/images/about/default-profile.png'
								}' style='height: 40px; border: 2px solid var(--FSCred); border-radius: 50%; background-color: var(--FSCgrey)'>`"
								:useRouterLinks="true"
								:width="'120px'"
								:pageWidth="width"
								:dropContent="
									authUser &&
									authUser.registrationComplete &&
									authUser.privilege == 4
										? [
												{
													path: '/profile',

													title: 'Profile',
												},
												{
													path: '/admin',

													title: 'Admin',
												},
												{
													path: '/manage-courses',

													title: 'Manage Courses',
												},
												{
													path: '/logout',

													title: 'Log Out',
												},
										  ]
										: [
												{
													path: '/profile',

													title: 'Profile',
												},
												{
													path: '/logout',

													title: 'Log Out',
												},
										  ]
								"
								:useArrow="false"
							/>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div>

	<div class="page-cover" v-if="isOpen && useHamburger"></div>
</template>

<script>
import Dropdown from "./Dropdown.vue";

export default {
	name: "Navbar",
	props: ["authUser"],
	components: {
		Dropdown,
	},
	watch: {
		width: function () {
			if (this.width < 1200) {
				this.useHamburger = true;
			} else {
				this.useHamburger = false;
				this.$emit("close");
			}
		},
		$route(to, from) {
			this.isOpen = false;
		},
		authUser: function (newVal, oldVal) {
			this.isLoggedIn = newVal != null ? true : false;
		},
		"$store.state.cubeLifeMode": function (newVal, oldVal) {
			this.cubeLifeMode = newVal;
		},
	},

	data() {
		return {
			isOpen: false,
			useHamburger: false,
			width: 0,
			isLoggedIn: false,
			cubeLifeMode: false,
		};
	},
	methods: {
		toggleNav() {
			this.isOpen = !this.isOpen;

			if (this.isOpen && this.useHamburger) {
				this.$emit("open");
			} else {
				this.$emit("close");
			}
		},
	},
	async mounted() {
		window.addEventListener("resize", () => {
			this.width = window.innerWidth;
		});

		this.width = window.innerWidth;
	},
};
</script>

<style>
nav {
	width: 100%;
	z-index: 50;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
}

.contain {
	display: flex;
	flex-wrap: inherit;
	align-items: center;
	justify-content: space-between;
	padding-right: var(--bs-gutter-x, 0.75rem);
	padding-left: var(--bs-gutter-x, 0.75rem);
}

nav,
.navbar,
.navbar-dark,
.navbar-expand-xl {
	width: 100%;
	padding: 0 20px !important;
	background-color: rgba(0, 0, 0, 0.85);
	backdrop-filter: blur(50px);
	height: var(--navbar-height) !important;
	position: fixed;
	top: 0;
}

.nav-items {
	float: right;
	height: 60px !important;
}

.nav-items.mobile {
	display: none;
}

/* .navbar-brand img {

filter: invert(72%) sepia(54%) saturate(296%) hue-rotate(1deg) brightness(96%)

contrast(86%);

} */

.nav-link {
	width: fit-content !important;
	height: var(--navbar-height);
	text-align: center;
	font-size: 14pt;
	transition: box-shadow 0.5s;
	display: flex;
	padding: 0px 25px !important;
	align-content: center;
	align-items: center;
	justify-content: center;
}

.nav-item:hover {
	background-color: rgba(255, 255, 255, 0.15);
	color: var(--FSCred);
	transition: all linear 200ms;
}

.nav-item::before:hover {
	color: var(--FSCred);
	background-color: rgba(255, 255, 255, 0.15);
}

.row {
	width: 100% !important;
}

.nav-item {
	padding: 0 !important;
	align-content: center;
	height: 60px !important;
	transition: all linear 200ms;
}

.nav-items .router-link-active {
	color: white !important;
	background-color: rgba(255, 255, 255, 0.2);
}

@media (max-width: 1199.98px) {
	.navbar-toggler {
		float: right;
		color: var(--FSCred) !important;
		font-size: 1.25rem;
		line-height: 1;
		background-color: transparent;
		border: 1px solid transparent;
		border-radius: 0.25rem;
		transition: box-shadow 0.15s ease-in-out;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
	}

	.navbar-toggler:focus {
		box-shadow: none;
	}

	.navbar-toggler-icon {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28186, 12, 47, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
	}

	.nav-items {
		position: absolute;
		top: var(--navbar-height);
		left: 0;
		width: 100vw;
		height: unset !important;
		transition: all 0.5s ease-in-out;
		transform-origin: left top;
	}

	.nav-item {
		background-color: transparent !important;
		margin: 0;
		height: unset !important;
	}

	.page-cover {
		width: 1000vw !important;
		height: 1000vh !important;
		overflow: hidden;
		z-index: 49;
		background-color: transparent;
		position: fixed;
		background-color: rgba(0, 0, 0, 0.85);
	}

	.nav-link {
		text-align: left !important;
		padding-left: 2rem !important;
		width: 100% !important;
		justify-content: left;
	}

	.nav-items .router-link-active {
		background: linear-gradient(
			to right,
			rgba(var(--FSCredRGB), 0.5),
			transparent
		);
	}
}
</style>
