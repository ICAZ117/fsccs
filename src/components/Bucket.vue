<template>
	<div class="bucket-body py-4">
		<div
			class="ms-0 px-3 row bold header-row"
			style="height: 80px !important; min-height: 80px"
		>
			<h5 class="ps-3 col-8">{{ title }}</h5>
			<div
				class="col-4"
				style="
					display: flex;
					justify-content: flex-end;
					align-items: flex-start;
				"
			>
				<div
					:style="
						'color: ' + (creditsTaken >= credits)
							? '#00FF44'
							: 'white'
					"
				>
					{{ creditsTaken }}{{ credits ? "/" + credits : "" }}
				</div>
				<div v-if="creditsTaken < credits">
					<i
						class="ms-3 mt-1 fa-solid fa-x"
						style="color: var(--FSCred)"
					></i>
				</div>
				<div v-else>
					<i
						class="ms-3 mt-1 fa-solid fa-check"
						style="color: #00ff44"
					></i>
				</div>
			</div>
			<div :class="'ps-3 ' + (windowWidth >= 475 ? 'col-3' : 'col-6')">
				Code
			</div>
			<div class="col-6" v-if="windowWidth >= 475">Name</div>
			<div
				:class="windowWidth >= 475 ? 'col-3' : 'col-6'"
				style="display: flex; justify-content: flex-end"
			>
				Credits
			</div>
		</div>

		<div class="ms-0 px-0 row bucket-course-list white-scroll-bar">
			<div
				class="px-3 pe-0 col-12"
				v-for="course in coursesTaken"
				:key="course"
				style="height: 40px; display: flex; align-items: center"
			>
				<div class="row px-3 mx-0">
					<div
						:class="
							'ps-0 ' + (windowWidth >= 475 ? 'col-3' : 'col-6')
						"
					>
						{{ course }}
					</div>
					<div
						class="ps-0 col-6"
						v-if="windowWidth >= 475"
						style="white-space: nowrap; overflow: hidden"
					>
						{{ courses[course].name }}
					</div>
					<div
						:class="
							'ms-0 ps-0 ' +
							(windowWidth >= 475 ? 'col-3' : 'col-6')
						"
						style="display: flex; justify-content: flex-end"
					>
						{{ courses[course].credits }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["courses", "coursesTaken", "credits", "title"],
	data() {
		return {
			windowHeight: 0,
			windowWidth: 0,
		};
	},
	methods: {
		getWindowSize() {
			this.windowHeight = window.innerHeight;
			this.windowWidth = window.innerWidth;
		},
	},
	computed: {
		creditsTaken() {
			var sum = 0;

			for (let i = 0; i < this.coursesTaken.length; i++) {
				sum += parseInt(this.courses[this.coursesTaken[i]].credits);
			}

			return sum;
		},
	},
	created() {
		window.addEventListener("resize", this.getWindowSize);
	},
	destroyed() {
		window.removeEventListener("resize", this.getWindowSize);
	},
	async beforeMount() {
		// Get window height
		this.getWindowSize();
	},
};
</script>

<style scoped>
.header-row * {
	display: flex;
	align-items: center;
}

.bucket-body .col-12 {
	transition: all ease-in-out 0.3s;
}
.bucket-body .col-12:hover {
	background-color: rgb(98, 98, 106);
}

.bucket .btn:hover {
	background-color: var(--primary-dark);
}

.bucket-body {
	width: 100%;
	height: 250px;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	border: 5px solid var(--FSCred);
	box-shadow: 0 0 20px var(--FSCred);
	background-color: rgb(55, 55, 62);
}
.bucket-course-list {
	width: 100%;
	height: fit-content;
	overflow: auto;
}

@media (max-width: 991.9px) {
	.bucket-body {
		height: fit-content;
		max-height: 250px;
	}
}
</style>