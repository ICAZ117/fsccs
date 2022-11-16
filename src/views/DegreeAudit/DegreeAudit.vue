<template>
	<div class="degree-audit nav-pad">
		<div class="degree-audit-container container">
			<h1 class="center">Degree Audit</h1>
			<div class="row h-100">
				<div class="col-6 h-100">
					<div class="h-100">
						<div class="mb-4">
							<input
								type="text"
								class="searchBox"
								placeholder="Search by Course Code or Course Name"
								v-model="search"
							/>
						</div>
						<div class="degree-aduit-body py-4">
							<div
								class="ms-0 px-3 pb-2 row bold header-row"
								style="width: calc(100% - 10px) !important"
							>
								<div class="col-2">Code</div>
								<div class="col-7">Name</div>
								<div class="px-0 col-3">Grade</div>
							</div>
							<div
								class="
									ms-0
									row
									degree-audit-course-list
									white-scroll-bar
								"
							>
								<div
									class="px-3 py-2 col-12"
									v-for="course in filteredCourses"
									:key="course"
								>
									<div class="ms-0 row">
										<div class="col-2">
											{{ course.code }}
										</div>
										<div class="col-7">
											{{ course.name }}
										</div>
										<div
											class="px-0 col-3"
											v-if="
												coursesTaken.find(
													({ code }) =>
														code == course.code
												)
											"
										>
											<select
												class="
													form-select form-select-sm
												"
												aria-label=".form-select-sm example"
												@change="
													updateCoursesTaken(
														$event,
														course.code
													)
												"
												v-model="
													coursesTaken.find(
														({ code }) =>
															code == course.code
													).grade
												"
											>
												<option value="" selected>
													Not Taken
												</option>
												<option value="A">A</option>
												<option value="B">B</option>
												<option value="C">C</option>
												<option value="D">D</option>
												<option value="F">F</option>
											</select>
										</div>
										<div class="px-0 col-3" v-else>
											<select
												class="
													form-select form-select-sm
												"
												aria-label=".form-select-sm example"
												@change="
													updateCoursesTaken(
														$event,
														course.code
													)
												"
											>
												<option value="" selected>
													Not Taken
												</option>
												<option value="A">A</option>
												<option value="B">B</option>
												<option value="C">C</option>
												<option value="D">D</option>
												<option value="F">F</option>
											</select>
										</div>
									</div>
								</div>

								<div
									class="px-3 py-2 col-12 center"
									v-if="
										Object.keys(filteredCourses).length ===
										0
									"
								>
									Course not found!
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-6 h-100">
					<form
						@submit.prevent="launchDegreeAudit()"
						id="degreeAuditForm"
					></form>
					<div
						style="
							display: flex;
							flex-direction: row;
							align-items: center;
							align-content: center;
							height: 46px;
						"
						class="mb-4"
					>
						<div class="col-6 pe-1">
							<select
								class="form-select form-select-sm"
								aria-label=".form-select-sm example"
								required
								form="degreeAuditForm"
							>
								<option value="" disabled selected>
									Select degree...
								</option>
								<option value="BS">Bachelors of Science</option>
								<option value="BA">Bachelors of Arts</option>
							</select>
						</div>
						<div class="col-3 px-1">
							<button
								@click="saveCourses"
								class="w-100 btn btn-md btn-primary"
							>
								Save Courses
							</button>
						</div>
						<div class="col-3 ps-1">
							<button
								type="submit"
								class="w-100 btn btn-md btn-primary"
								form="degreeAuditForm"
							>
								Launch Audit
							</button>
						</div>
					</div>
					<div class="degree-aduit-body py-4">
						<div
							class="ms-0 px-3 pb-2 row bold header-row"
							style="width: calc(100% - 10px) !important"
						>
							<div class="px-3 col-12">Courses Taken:</div>
						</div>
						<div
							class="
								ms-0
								row
								degree-audit-course-list
								white-scroll-bar
								px-3
							"
						>
							<div class="px-3 col-12">
								<span
									class="courseTaken"
									v-for="course in coursesTaken"
									:key="course"
									>{{ course.code }} ({{
										course.grade
									}})</span
								>
							</div>
							<div
								class="px-3 py-2 col-12 center"
								v-if="Object.keys(coursesTaken).length === 0"
							>
								No courses added!
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			courses: {},
			search: "",
			coursesTaken: [],
		};
	},
	methods: {
		async launchDegreeAudit() {
			// Save all of the current courses into the database
			await this.saveCourses();

			// Definte the buckets
			var geneds = {
				fineArts: [],
				socialWorld: [],
				meaningValue: [],
				naturalWorld: [],
				creativeThinking: {
					quantitative: [],
					qualitative: [],
				},
				effectiveCommunication: {
					a: [],
					b: [],
					c: [],
				},
				personalWellness: [],
			};

			// Loop over all of the courses the student has taken
			for (let i = 0; i < this.coursesTaken.length; i++) {
				// Get the course from the master course list
				const course = this.courses[this.coursesTaken[i].code];

				// Loop over the buckets in the course
				for (let j = 0; j < course.buckets.length; j++) {
					// Add the course to the buckets it fills
					if (course.buckets[j] == "FA") {
						geneds.fineArts.push(course.code);
					}
					if (course.buckets[j] == "SW") {
						geneds.socialWorld.push(course.code);
					}
					if (course.buckets[j] == "MV") {
						geneds.meaningValue.push(course.code);
					}
					if (course.buckets[j] == "NW") {
						geneds.naturalWorld.push(course.code);
					}
					if (course.buckets[j] == "ST:QUAL") {
						geneds.creativeThinking.qualitative.push(course.code);
					}
					if (course.buckets[j] == "ST:QUAN") {
						geneds.creativeThinking.quantitative.push(course.code);
					}
					if (course.buckets[j] == "EffComA") {
						geneds.effectiveCommunication.a.push(course.code);
					}
					if (course.buckets[j] == "EffComB") {
						geneds.effectiveCommunication.b.push(course.code);
					}
					if (course.buckets[j] == "EffComC") {
						geneds.effectiveCommunication.c.push(course.code);
					}
					if (course.buckets[j] == "PW") {
						geneds.personalWellness.push(course.code);
					}
				}
			}

			console.log("Geneds", geneds);
		},
		async saveCourses() {
			await this.$store.dispatch("updateUserCourses", this.coursesTaken);
			await this.$store.dispatch("fetchUser");
			this.$notify({
				title: "Success",
				text: "Courses saved!",
				type: "success",
			});
		},
		updateCoursesTaken(event, course) {
			if (event.target.value != "") {
				this.coursesTaken = this.coursesTaken.filter(
					(item) => item.code !== course
				);
				this.coursesTaken.push({
					code: course,
					grade: event.target.value,
				});
			} else {
				this.coursesTaken = this.coursesTaken.filter(
					(item) => item.code !== course
				);
			}
		},
		hasCourseBeenTaken(code) {},
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

		await this.$store.dispatch("fetchUser");

		const res = this.$store.getters.getUser;
		this.coursesTaken = res.coursesTaken;
	},
};
</script>

<style scoped>
.courseTaken ~ .courseTaken::before {
	content: ", ";
}

.degree-audit {
	width: 100vw;
	min-height: 100vh;
	background-color: rgb(50, 50, 60);
}

.header-row * {
	display: flex;
	align-items: center;
}

.degree-audit-container {
	height: 100%;
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

.degree-audit-course-list {
	height: fit-content;
	overflow-y: scroll;
}

.degree-audit-body .col-12 {
	transition: all ease-in-out 0.3s;
}
.degree-audit-body .col-12:hover {
	background-color: rgb(98, 98, 106);
}
.degree-audit {
	width: calc(100vw - 5px);
	height: 100vh;
	background-color: rgb(55, 55, 60);
	color: white;
	padding: 5rem 0;
}

.degree-audit .btn:hover {
	background-color: var(--primary-dark);
}

.degree-aduit-body {
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
.degree-audit-course-list {
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