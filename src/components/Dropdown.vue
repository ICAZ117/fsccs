<template>
	<div class="nav-item">
		<div class="dropdown">
			<span class="nav-link dropbtn" @click="toggleDropdown">
				<span v-html="header"></span>
				<i
					v-if="useArrow"
					style="font-size: 8pt; top: 17px; margin-left: 7px"
					class="fa-solid fa-chevron-down"
				></i>
			</span>
			<div
				v-if="!useRouterLinks"
				v-show="pageWidth < 1200 ? isOpen : true"
				class="dropdown-content"
			>
				<div
					v-for="item in dropContent"
					:key="item"
					v-html="item"
				></div>
			</div>

			<div
				v-if="useRouterLinks"
				v-show="pageWidth < 1200 ? isOpen : true"
				class="dropdown-content"
			>
				<router-link
					v-for="item in dropContent"
					:key="item"
					class="nav-link"
					:to="item.path"
				>
					{{ item.title }}
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		header: {
			type: String,
			required: true,
		},
		useRouterLinks: {
			type: Boolean,
			required: true,
		},
		width: {
			type: String,
			required: true,
		},
		dropContent: {
			type: Array,
			required: true,
		},
		pageWidth: {
			type: Number,
			required: true,
		},
		useArrow: {
			type: Boolean,
			required: false,
			default: true,
		},
	},
	watch: {
		$route(to, from) {
			this.isOpen = false;
		},
	},
	// ["header", "useRouterLinks", "width", "dropContent", "pageWidth"],
	data() {
		return {
			isOpen: false,
		};
	},
	methods: {
		toggleDropdown(event) {
			this.isOpen = !this.isOpen;
		},
	},
};
</script>

<style scoped>
.dropdown-content::after {
	filter: blur(20px);
}

.dropdown-content .nav-link {
	padding: 0 !important;
}

.dropdown:has(.router-link-active) .dropbtn {
	color: white !important;
	background-color: rgba(255, 255, 255, 0.2);
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
	position: relative;
	transition: all 0.5s ease-in-out;
	/* display: inline-block; */
}

.router-link-active {
	color: white !important;
	background-color: rgba(100, 100, 100, 0.9) !important;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
	display: none;
	position: absolute;
	width: v-bind(width) !important;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
	color: white;
	border-bottom-right-radius: 1rem;
	border-bottom-left-radius: 1rem;
	top: 60px;
	overflow: hidden;
	left: 50%;
	transform: translateX(-50%);
	transition: all 0.5s ease-in-out;
}

/* Links inside the dropdown */
.dropdown-content div,
.dropdown-content a {
	color: white;
	text-decoration: none;
	display: flex;
	background-color: rgba(0, 0, 0, 0.85);
	z-index: -500 !important;
	position: relative !important;
	height: 60px !important;
	transition: all 0.5s ease-in-out;
}

/* Change color of dropdown links on hover */
.dropdown-content div:hover,
.dropdown-content a:hover {
	background-color: rgba(80, 80, 80, 0.9);
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
	display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
	color: white;
}

@media (max-width: 1199.98px) {
	.dropdown-content {
		width: 100vw !important;
		position: unset;
		left: unset;
		transform: unset;
		display: unset;
	}

	.dropdown:hover .dropdown-content {
		display: unset;
	}

	.dropdown:has(.router-link-active) .dropbtn {
		background: linear-gradient(
			to right,
			rgba(var(--FSCredRGB), 0.5),
			transparent
		);
	}

	.dropdown-content div,
	.dropdown-content a {
		z-index: unset !important;
		display: flex !important;
		background-color: rgba(0, 0, 0, 0.3) !important;
	}

	.dropdown-content .nav-link {
		width: 100% !important;
		padding: 0 0 0 4rem !important;
	}
}
</style>

<style>
.dropdown-content .nav-link {
	padding: 0;
	height: unset !important;
	font-size: 12pt !important;
	width: v-bind(width) !important;
	color: white !important;
}
</style>
