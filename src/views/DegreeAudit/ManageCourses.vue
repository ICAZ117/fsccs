<template>
	<!-- Create manage-courses page -->
	<div class="manage-courses px-5">
		<h1 class="center">Manage Courses</h1>
		<div class="container h-100">
			<div class="mb-4">
				<input
					type="text"
					class="searchBox"
					placeholder="Search by Course Code or Course Name"
					v-model="search"
				/>
			</div>
			<div class="manage-courses-container py-4">
				<div
					class="ms-0 px-3 pb-2 row bold header-row"
					style="width: calc(100% - 10px) !important"
				>
					<div class="col-2">Code</div>
					<div class="col-4">Name</div>
					<div class="col-2">Credits</div>
					<div class="col-2">Buckets</div>
					<div
						class="col-2"
						style="display: flex; justify-content: flex-end"
					>
						<button
							class="btn btn-primary"
							@click="
								displayModal({
									code: '',
									name: '',
									credits: '',
									buckets: [],
								})
							"
						>
							Add Course
						</button>
					</div>
				</div>
				<div class="ms-0 row manage-courses-body white-scroll-bar">
					<div
						class="px-3 py-2 col-12"
						v-for="course in filteredCourses"
						:key="course"
					>
						<div
							class="ms-0 row"
							@click="displayModal(Object.assign({}, course))"
						>
							<div class="col-2">
								{{ course.code }}
							</div>
							<div class="col-4">
								{{ course.name }}
							</div>
							<div class="col-2">
								{{ course.credits }}
							</div>
							<div class="col-4">
								<span
									class="bucket"
									v-for="bucket in course.buckets"
									:key="bucket"
									>{{ bucket }}</span
								>
							</div>
						</div>
					</div>

					<div
						class="px-3 py-2 col-12 center"
						v-if="Object.keys(filteredCourses).length === 0"
					>
						Course not found!
					</div>
				</div>
			</div>
		</div>
	</div>

	<div>
		<!-- First modal -->
		<vue-final-modal
			v-model="showModal"
			classes="modal-container"
			content-class="modal-content"
		>
			<button class="modal__close" @click="showModal = false">
				<i class="fa-solid fa-x"></i>
			</button>
			<span class="modal__title ps-1">{{ modalCourse.code }}</span>
			<div class="modal__content">
				<form @submit.prevent id="courseForm"></form>
				<div class="m-0 row">
					<div class="form-floating p-1 col-3">
						<input
							type="text"
							class="form-control"
							id="code"
							v-model="modalCourse.code"
							form="courseForm"
						/>
						<label for="code">Course Code</label>
					</div>
					<div class="form-floating p-1 col-7">
						<input
							type="text"
							class="form-control"
							id="name"
							v-model="modalCourse.name"
							form="courseForm"
						/>
						<label for="code">Course Name</label>
					</div>
					<div class="form-floating p-1 col-2">
						<input
							type="text"
							class="form-control"
							id="credits"
							v-model="modalCourse.credits"
							form="courseForm"
						/>
						<label for="code">Credits</label>
					</div>
					<div class="form-floating p-1 col-12">
						<textarea
							type="text"
							class="form-control"
							id="credits"
							v-model="modalCourse.buckets"
							form="courseForm"
							contenteditable="true"
						>
						</textarea>
						<label for="code">Buckets</label>
					</div>
				</div>
			</div>
			<div class="modal__action">
				<button class="btn btn-md btn-primary me-2" @click="save">
					Save
				</button>
				<button
					class="btn btn-md btn-primary me-2"
					highlight
					@click="showConfirmModal = true"
					v-if="modalCourse.originalCode"
				>
					Delete
				</button>
				<button
					class="btn btn-md btn-primary"
					@click="showModal = false"
				>
					Cancel
				</button>
			</div>
		</vue-final-modal>

		<!-- Second modal -->
		<vue-final-modal
			v-model="showConfirmModal"
			classes="modal-container"
			content-class="modal-content2"
		>
			<button class="modal__close" @click="showConfirmModal = false">
				<i class="fa-solid fa-x"></i>
			</button>
			<span class="modal__title">Caution!</span>
			<div class="modal__content">
				Are you sure you want to delete this course? This action is
				irreversible!
			</div>
			<div class="modal__action">
				<button
					class="btn btn-md btn-primary me-2"
					@click="deleteCourse"
				>
					Delete
				</button>
				<button
					class="btn btn-md btn-primary"
					@click="showConfirmModal = false"
				>
					Cancel
				</button>
			</div>
		</vue-final-modal>
	</div>
</template>

<script>
import { VueFinalModal, ModalsContainer } from "vue-final-modal";

export default {
	components: {
		VueFinalModal,
		ModalsContainer,
	},
	data() {
		return {
			courses: {},
			search: "",
			showModal: false,
			showConfirmModal: false,
			modalCourse: {},
		};
	},
	methods: {
		async save() {
			try {
				// Confirm the buckets are in valid JSON format
				JSON.parse(this.modalCourse.buckets);

				// Delete the old course from the courses list
				delete this.courses[this.modalCourse.originalCode];

				// Format modalCourse for insertion into the courses list
				delete this.modalCourse.originalCode;
				this.modalCourse.buckets = JSON.parse(this.modalCourse.buckets);

				// Insert modalCourse into the courses list and sort the list
				this.courses[this.modalCourse.code] = this.modalCourse;
				this.courses = Object.keys(this.courses)
					.sort()
					.reduce((obj, key) => {
						obj[key] = this.courses[key];
						return obj;
					}, {});

				// Push the updated courses list to the database
				await this.$store.dispatch("updateCourses", this.courses);

				// Close the modal
				this.showModal = false;
			} catch (error) {
				// If the bucket is not in valid JSON format, notify the user
				this.$notify({
					title: "Invalid JSON!",
					text: "The buckets are not valid JSON.",
					type: "error",
				});
			}
		},
		displayModal(course) {
			this.modalCourse = course;
			this.modalCourse.originalCode = course.code;
			this.modalCourse.buckets = JSON.stringify(course.buckets);
			this.showModal = true;
		},
		async deleteCourse() {
			// Remove the course from the courses list
			delete this.courses[this.modalCourse.originalCode];

			// Push the updated courses list to the database
			await this.$store.dispatch("updateCourses", this.courses);

			// Close the modals
			this.showConfirmModal = false;
			this.showModal = false;
		},
	},
	computed: {
		filteredCourses() {
			if (this.search == "") {
				return this.courses;
			} else {
				var returnObj = {};

				Object.entries(this.courses).forEach(([key, value]) => {
					if (
						value.code
							.toUpperCase()
							.includes(this.search.toUpperCase()) ||
						value.name
							.toUpperCase()
							.includes(this.search.toUpperCase())
					) {
						returnObj[value.code] = value;
					}
				});

				returnObj = Object.keys(returnObj)
					.sort()
					.reduce((obj, key) => {
						obj[key] = returnObj[key];
						return obj;
					}, {});

				return returnObj;
			}
		},
	},
	async beforeMount() {
		// Fetch courses from firebase
		await this.$store.dispatch("fetchCourses");

		// Save courses into local objects
		const storeCourses = this.$store.getters.getCourses;

		// Sort courses into Vue objects
		this.courses = Object.keys(storeCourses)
			.sort()
			.reduce((obj, key) => {
				obj[key] = storeCourses[key];
				return obj;
			}, {});
	},
};
</script>

<style scoped>
::v-deep .modal-container {
	display: flex;
	justify-content: center;
	align-items: center;
}
::v-deep .modal-content {
	position: relative;
	display: flex;
	flex-direction: column;
	width: 600px !important;
	max-height: 90%;
	margin: 0 1rem;
	padding: 1rem;
	border: 1px solid rgb(30, 30, 36);
	border-radius: 1rem;
	background: rgb(50, 50, 60);
	color: white;
}

::v-deep .modal-content label {
	color: black;
}

::v-deep .modal-content2 {
	position: relative;
	display: flex;
	flex-direction: column;
	width: 400px !important;
	max-height: 90%;
	margin: 0 1rem;
	padding: 1rem;
	border: 1px solid rgb(30, 30, 36);
	border-radius: 1rem;
	background: rgb(50, 50, 60);
	color: white;
}

::v-deep .modal-content2 label {
	color: black;
}

.modal__title {
	margin: 0 2rem 0.5rem 0;
	font-size: 1.5rem;
	font-weight: 700;
}
.modal__content {
	flex-grow: 1;
	overflow-y: auto;
}
.modal__action {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	padding: 1rem 0 0;
}
.modal__close {
	position: absolute;
	top: 0.5rem;
	right: 0.5rem;
	border: none;
	background-color: transparent;
	color: var(--primary);
}
</style>

<style scoped>
.header-row * {
	display: flex;
	align-items: center;
}
.bucket ~ .bucket::before {
	content: ", ";
}

.searchBox,
.searchBox:focus {
	width: 100% !important;
	border: 5px solid var(--FSCred) !important;
	box-shadow: 0 0 20px var(--FSCred) !important;
	border-radius: 10px !important;
	display: block;
	width: 100%;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: #212529;
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid #ced4da;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border-radius: 0.25rem;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	outline: 0 !important;
}

.manage-courses-body {
	height: fit-content;
	overflow-y: scroll;
}

.manage-courses-body .col-12 {
	transition: all ease-in-out 0.3s;
}
.manage-courses-body .col-12:hover {
	background-color: rgb(98, 98, 106);
}
.manage-courses {
	width: calc(100vw - 5px);
	height: 100vh;
	background-color: rgb(55, 55, 60);
	color: white;
	padding: 5rem 0;
}

.manage-courses .btn:hover {
	background-color: var(--primary-dark);
}

.manage-courses-container {
	width: 100%;
	max-height: calc(100% - 100px);
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	border: 5px solid var(--FSCred);
	box-shadow: 0 0 20px var(--FSCred);
	background-color: rgb(55, 55, 62);
	overflow: auto;
}
.manage-courses-body {
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
