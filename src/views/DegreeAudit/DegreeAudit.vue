<template>
	<div class="degree-audit nav-pad">
		<div
			:class="
				showOutput
					? 'h-100 mx-5 px-5'
					: 'degree-audit-container container'
			"
		>
			<h1 class="center">Degree Audit</h1>
			<div class="row h-100" v-if="!showOutput">
				<div class="col-12 mb-4 center px-5">
					<div class="mx-5 px-5">
						Disclaimer: the Degree Audit is not a substitution for
						academic advising. While this tool may assist you in
						course planning and degree completion, you should still
						confirm any and all results with your academic advisor.
					</div>
				</div>
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
						<div class="h-100 degree-aduit-body py-4">
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
									style="height: 40px"
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
												<option value="P">P</option>
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
								v-model="degreeType"
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
								<div class="mx-0 row">
									<div
										class="col-12"
										v-for="course in coursesTaken.sort(
											(a, b) =>
												a.code > b.code
													? 1
													: b.code > a.code
													? -1
													: 0
										)"
										:key="course"
									>
										<div class="mx-0 row">
											<div class="col-2">
												{{ course.code }}
											</div>
											<div class="col-8">
												{{ courses[course.code].name }}
											</div>
											<div class="px-0 col-2">
												{{ course.grade }}
											</div>
										</div>
									</div>
								</div>
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

			<div class="degreeAuditOutput" v-if="showOutput">
				<div class="container px-5">
					<div
						class="px-5 row"
						style="
							text-align: center;
							width: 75% !important;
							margin: auto !important;
						"
					>
						<div class="col-4">
							Name: {{ authUser.fname }} {{ authUser.lname }}
						</div>
						<div class="col-4">
							Cumulative GPA:
							{{ Math.round(cumulativeGPA * 100) / 100 }}
						</div>
						<div class="col-4">
							Major GPA:
							{{ Math.round(majorGPA * 100) / 100 }}
						</div>
					</div>
					<hr class="white-hr w-75 center mx-auto" />
				</div>
				<div id="computerScience" class="mt-4 pt-1">
					<div style="display: flex; flex-direction: row">
						<h3>Computer Science</h3>
						<div class="ms-4">
							Required Credits: 66
							<br />
							Completed Credits: {{ cs.credits }}
						</div>
					</div>
					<hr class="primary-hr" />
					<div class="mx-0 row gy-4">
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Core'"
								:coursesTaken="cs.core"
								:credits="34"
							/>
						</div>
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Discrete Structures'"
								:coursesTaken="cs.math1"
								:credits="4"
							/>
						</div>
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Calculus'"
								:coursesTaken="cs.math2"
								:credits="4"
							/>
						</div>
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Statistics'"
								:coursesTaken="cs.math3"
								:credits="4"
							/>
						</div>
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Electives'"
								:coursesTaken="cs.electives"
								:credits="20"
							/>
						</div>

						<h3 class="mt-4 pt-2">Concentrations (Optional)</h3>
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Artificial Intelligence'"
								:coursesTaken="cs.ai"
								:credits="12"
							/>
						</div>
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Web Development'"
								:coursesTaken="cs.web"
								:credits="12"
							/>
						</div>
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Cyber Security'"
								:coursesTaken="cs.cyber"
								:credits="12"
							/>
						</div>
					</div>
				</div>

				<div id="geneds" class="mt-5 pt-1">
					<div style="display: flex; flex-direction: row">
						<h3>General Education</h3>
						<div class="ms-4">
							Required Credits: 42
							<br />
							Completed Credits: {{ geneds.credits }}
						</div>
					</div>
					<hr class="primary-hr" />
					<div class="mx-0 row gy-4">
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Fine Arts'"
								:coursesTaken="geneds.fineArts"
								:credits="4"
							/>
						</div>
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Social World'"
								:coursesTaken="geneds.socialWorld"
								:credits="4"
							/>
						</div>
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Meaning & Value'"
								:coursesTaken="geneds.meaningValue"
								:credits="8"
							/>
						</div>
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Natural World'"
								:coursesTaken="geneds.naturalWorld"
								:credits="4"
							/>
						</div>
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Practical Skills (Qual)'"
								:coursesTaken="geneds.creativeQual"
								:credits="4"
							/>
						</div>
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Practical Skills (Quan)'"
								:coursesTaken="geneds.creativeQuan"
								:credits="4"
							/>
						</div>
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Communication A'"
								:coursesTaken="geneds.effCommA"
								:credits="4"
							/>
						</div>
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Communication B'"
								:coursesTaken="geneds.effCommB"
								:credits="4"
							/>
						</div>
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Communication C'"
								:coursesTaken="geneds.effCommC"
								:credits="4"
							/>
						</div>
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Personal Wellness'"
								:coursesTaken="geneds.personalWellness"
								:credits="2"
							/>
						</div>
					</div>
				</div>

				<div id="bs" class="mt-5 pt-1" v-if="degreeType == 'BS'">
					<div style="display: flex; flex-direction: row">
						<h3>Bachelors of Science</h3>
						<div class="ms-4">
							Required Credits: 12
							<br />
							Completed Credits: {{ bs.credits }}
						</div>
					</div>
					<hr class="primary-hr" />
					<div class="mx-0 row gy-4">
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Quantitative'"
								:coursesTaken="bs.quantitative"
								:credits="4"
							/>
						</div>
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Natural Science'"
								:coursesTaken="bs.naturalScience"
								:credits="4"
							/>
						</div>
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Social Science'"
								:coursesTaken="bs.socialScience"
								:credits="4"
							/>
						</div>
					</div>
				</div>

				<div id="ba" class="mt-5 pt-1" v-if="degreeType == 'BA'">
					<div style="display: flex; flex-direction: row">
						<h3>Bachelors of Arts</h3>
						<div class="ms-4">
							Required Credits: 20
							<br />
							Completed Credits: {{ ba.credits }}
						</div>
					</div>
					<hr class="primary-hr" />
					<div class="mx-0 row gy-4">
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Foreign Language'"
								:coursesTaken="ba.foreignLanguage"
								:credits="12"
							/>
						</div>
						<h3 class="mt-4 pt-2">
							Must complete two of the following:
						</h3>
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Communication'"
								:coursesTaken="ba.communication"
								:credits="4"
							/>
						</div>
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'English'"
								:coursesTaken="ba.english"
								:credits="4"
							/>
						</div>
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Latin Studies'"
								:coursesTaken="ba.latinStudies"
								:credits="4"
							/>
						</div>
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Humanities'"
								:coursesTaken="ba.humanities"
								:credits="4"
							/>
						</div>
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Music'"
								:coursesTaken="ba.music"
								:credits="4"
							/>
						</div>
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Philosophy'"
								:coursesTaken="ba.philosophy"
								:credits="4"
							/>
						</div>
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Religion'"
								:coursesTaken="ba.religion"
								:credits="4"
							/>
						</div>
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Theology'"
								:coursesTaken="ba.theology"
								:credits="4"
							/>
						</div>
					</div>
				</div>

				<div id="extras" class="mt-5 pt-1">
					<div style="display: flex; flex-direction: row">
						<h3>Extra Courses</h3>
						<div
							class="ms-4 mb-2"
							style="display: flex; align-items: center"
						>
							Completed Credits: {{ calcCredits(extras) }}
						</div>
					</div>
					<hr class="primary-hr" />
					<div class="mx-0 row gy-4">
						<div class="col-4">
							<Bucket
								:courses="courses"
								:title="'Extras'"
								:coursesTaken="extras"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Bucket from "@/components/Bucket.vue";

export default {
	components: {
		Bucket,
	},
	data() {
		return {
			courses: {},
			search: "",
			coursesTaken: [],
			degreeType: "",
			showOutput: false,
			authUser: {},
			cumulativeGPA: 0,
			majorGPA: 0,
			cs: {
				core: [],
				ai: [],
				web: [],
				cyber: [],
				math1: [],
				math2: [],
				math3: [],
				electives: [],
			},
			geneds: {
				fineArts: [],
				socialWorld: [],
				meaningValue: [],
				naturalWorld: [],
				creativeQuan: [],
				creativeQual: [],
				effCommA: [],
				effCommB: [],
				effCommC: [],
				personalWellness: [],
			},
			bs: {
				quantitative: [],
				naturalScience: [],
				socialScience: [],
			},
			ba: {
				foreignLanguage: [],
				communication: [],
				english: [],
				latinStudies: [],
				humanities: [],
				music: [],
				philosophy: [],
				religion: [],
				theology: [],
			},
			extras: [],
		};
	},
	methods: {
		// ██       █████  ██    ██ ███    ██  ██████ ██   ██      █████  ██    ██ ██████  ██ ████████
		// ██      ██   ██ ██    ██ ████   ██ ██      ██   ██     ██   ██ ██    ██ ██   ██ ██    ██
		// ██      ███████ ██    ██ ██ ██  ██ ██      ███████     ███████ ██    ██ ██   ██ ██    ██
		// ██      ██   ██ ██    ██ ██  ██ ██ ██      ██   ██     ██   ██ ██    ██ ██   ██ ██    ██
		// ███████ ██   ██  ██████  ██   ████  ██████ ██   ██     ██   ██  ██████  ██████  ██    ██
		async launchDegreeAudit() {
			// Save all of the current courses into the database
			await this.saveCourses();

			this.showOutput = true;

			// Definte the buckets
			const CS_CURRICULUM = {
				core: [
					"CSC1980",
					"CSC2280",
					"CSC2290",
					"CSC3280",
					"CSC3310",
					"CSC3380",
					"CSC3400",
					"CSC4410",
					"CSC4899",
				],
				ai: ["CSC3510", "CSC3520", "CSC4510"],
				web: ["CSC3610", "CSC3620", "CSC4610"],
				cyber: ["CSC3810", "CSC3620", "CSC4910"],
				math1: ["CSC2100", "MAT2100"],
				math2: ["MAT2350", "MAT2311"],
				math3: ["MAT2022", "MAT2032"],
				electives: [
					"CSC3340",
					"CSC3350",
					"CSC3510",
					"CSC3520",
					"CSC3610",
					"CSC3620",
					"CSC3810",
					"CSC3820",
					"CSC3951",
					"CSC4510",
					"CSC4610",
					"CSC4640",
					"CSC4645",
					"MAT4645",
					"CSC4810",
					"CSC4952",
					"CSC4960",
					"MAT2312",
				],
			};

			this.cs = {
				core: [],
				ai: [],
				web: [],
				cyber: [],
				math1: [],
				math2: [],
				math3: [],
				electives: [],
			};

			this.geneds = {
				fineArts: [],
				socialWorld: [],
				meaningValue: [],
				naturalWorld: [],
				creativeQuan: [],
				creativeQual: [],
				effCommA: [],
				effCommB: [],
				effCommC: [],
				personalWellness: [],
			};

			this.bs = {
				quantitative: [],
				naturalScience: [],
				socialScience: [],
			};

			this.ba = {
				foreignLanguage: [],
				communication: [],
				english: [],
				latinStudies: [],
				humanities: [],
				music: [],
				philosophy: [],
				religion: [],
				theology: [],
			};

			// Loop over all of the courses the student has taken. For EACH course,
			// push them to every single gened bucket they apply to. Additionally,
			// push them to every CS bucket they apply to.
			for (let i = 0; i < this.coursesTaken.length; i++) {
				// Get the course from the master course list
				const course = this.courses[this.coursesTaken[i].code];

				//  ██████  ███████ ███    ██ ███████ ██████  ███████
				// ██       ██      ████   ██ ██      ██   ██ ██
				// ██   ███ █████   ██ ██  ██ █████   ██   ██ ███████
				// ██    ██ ██      ██  ██ ██ ██      ██   ██      ██
				//  ██████  ███████ ██   ████ ███████ ██████  ███████

				// Loop over the buckets in the course
				for (let j = 0; j < course.buckets.length; j++) {
					// Add the course to the buckets it fills
					if (course.buckets[j] == "FA") {
						this.geneds.fineArts.push(course.code);
					}
					if (course.buckets[j] == "SW") {
						this.geneds.socialWorld.push(course.code);
					}
					if (course.buckets[j] == "MV") {
						this.geneds.meaningValue.push(course.code);
					}
					if (course.buckets[j] == "NW") {
						this.geneds.naturalWorld.push(course.code);
					}
					if (course.buckets[j] == "ST:QUAL") {
						this.geneds.creativeQual.push(course.code);
					}
					if (course.buckets[j] == "ST:QUAN") {
						this.geneds.creativeQuan.push(course.code);
					}
					if (course.buckets[j] == "EffComA") {
						this.geneds.effCommA.push(course.code);
					}
					if (course.buckets[j] == "EffComB") {
						this.geneds.effCommB.push(course.code);
					}
					if (course.buckets[j] == "EffComC") {
						this.geneds.effCommC.push(course.code);
					}
					if (course.buckets[j] == "PW") {
						this.geneds.personalWellness.push(course.code);
					}
				}

				//  ██████  ██████  ███    ███ ██████      ███████  ██████ ██
				// ██      ██    ██ ████  ████ ██   ██     ██      ██      ██
				// ██      ██    ██ ██ ████ ██ ██████      ███████ ██      ██
				// ██      ██    ██ ██  ██  ██ ██               ██ ██      ██
				//  ██████  ██████  ██      ██ ██          ███████  ██████ ██

				// If the course is an MAT or CSC course, check if it applies to the major
				if (
					(course.code.startsWith("MAT") ||
						course.code.startsWith("CSC")) &&
					(this.coursesTaken[i].grade.charCodeAt(0) <= 67 ||
						this.coursesTaken[i].grade.charCodeAt(0) == 80)
				) {
					if (CS_CURRICULUM.core.includes(course.code)) {
						this.cs.core.push(course.code);
					}

					if (CS_CURRICULUM.ai.includes(course.code)) {
						this.cs.ai.push(course.code);
					}

					if (CS_CURRICULUM.web.includes(course.code)) {
						this.cs.web.push(course.code);
					}

					if (CS_CURRICULUM.cyber.includes(course.code)) {
						this.cs.cyber.push(course.code);
					}

					if (CS_CURRICULUM.math1.includes(course.code)) {
						this.cs.math1.push(course.code);
					}

					if (CS_CURRICULUM.math2.includes(course.code)) {
						this.cs.math2.push(course.code);
					}

					if (CS_CURRICULUM.math3.includes(course.code)) {
						this.cs.math3.push(course.code);
					}

					if (CS_CURRICULUM.electives.includes(course.code)) {
						this.cs.electives.push(course.code);
					}
				}
			}

			// ██████  ███████
			// ██   ██ ██
			// ██████  ███████
			// ██   ██      ██
			// ██████  ███████

			if (this.degreeType == "BS") {
				// Loop over all of the courses the student has taken.
				for (let i = 0; i < this.coursesTaken.length; i++) {
					// Get the course from the master course list
					const course = this.courses[this.coursesTaken[i].code];
					var BSbucket;

					// Loop over the buckets in the course
					for (let j = 0; j < course.buckets.length; j++) {
						// Deteremine if the course applies to a BS bucket
						if (course.buckets[j] == "BSQuan") {
							BSbucket = "quantitative";
						} else if (course.buckets[j] == "BSNS") {
							BSbucket = "naturalScience";
						} else if (course.buckets[j] == "BSSS") {
							BSbucket = "socialScience";
						} else {
							continue;
						}

						var genedBucketsFilled = [];

						// Determine which buckets the current course is in
						if (this.geneds.fineArts.includes(course.code)) {
							genedBucketsFilled.push("fineArts");
						}
						if (this.geneds.socialWorld.includes(course.code)) {
							genedBucketsFilled.push("socialWorld");
						}
						if (this.geneds.meaningValue.includes(course.code)) {
							genedBucketsFilled.push("meaningValue");
						}
						if (this.geneds.naturalWorld.includes(course.code)) {
							genedBucketsFilled.push("naturalWorld");
						}
						if (this.geneds.creativeQuan.includes(course.code)) {
							genedBucketsFilled.push("creativeQuan");
						}
						if (this.geneds.creativeQual.includes(course.code)) {
							genedBucketsFilled.push("creativeQual");
						}
						if (this.geneds.effCommA.includes(course.code)) {
							genedBucketsFilled.push("effCommA");
						}
						if (this.geneds.effCommB.includes(course.code)) {
							genedBucketsFilled.push("effCommB");
						}
						if (this.geneds.effCommC.includes(course.code)) {
							genedBucketsFilled.push("effCommC");
						}
						if (
							this.geneds.personalWellness.includes(course.code)
						) {
							genedBucketsFilled.push("personalWellness");
						}

						// Check if the course is not in any gened buckets. If so,
						// push it to the BS bucket.
						if (genedBucketsFilled.length == 0) {
							this.bs[BSbucket].push(course.code);
						}
						// Else, the courses is in one or more gened buckets. As
						// such, we need to push to the BS bucket ONLY IF all of
						// the gened buckets the courses is in would be filled
						// even if the course were to be removed.
						else {
							// Create a flag
							var applicableToBS = true;

							// For EACH bucket the course is in...
							genedBucketsFilled.forEach((bucket) => {
								// Calculate the number of credits present in the
								// bucket should the current course be removed
								var credits =
									this.calcCredits(this.geneds[bucket]) -
									course.credits;

								// Check if the bucket would still be filled with
								// the course removed. If it wouldn't, set the flag
								// to false
								if (
									credits < 8 &&
									(bucket == "MV" || bucket == "SW")
								) {
									applicableToBS = false;
								} else if (credits < 2 && bucket == "PW") {
									applicableToBS = false;
								} else if (credits < 4) {
									applicableToBS = false;
								}
							});

							// If all of the buckets the course is in are overfilled and
							// will remain filled should the course be removed, remove
							// the course from all the gened buckets it's in and instead
							// push it into the BS bucket
							if (applicableToBS) {
								// Loop over all the buckets the course is in
								for (
									let i = 0;
									i < genedBucketsFilled.length;
									i++
								) {
									// Remove the course from the current gened bucket
									this.geneds[genedBucketsFilled[i]] =
										this.geneds[
											genedBucketsFilled[i]
										].filter((code) => code != course.code);
								}

								// Add the course to the BS bucket
								this.bs[BSbucket].push(course.code);
							}
						}
					}
				}

				// Once all of the BS buckets have been filled, the next step is to remove
				// any overflowed buckets from BS buckets and move them into the extras bucket

				// Loop over all of the courses the student has taken.
				for (let i = 0; i < this.coursesTaken.length; i++) {
					// Get the course from the master course list
					const course = this.courses[this.coursesTaken[i].code];
					var bsBucketsFilled = [];

					// Loop over the buckets in the course
					for (let j = 0; j < course.buckets.length; j++) {
						// Deteremine if the course applies to a BS bucket
						if (course.buckets[j] == "BSQuan") {
							bsBucketsFilled.push("quantitative");
						} else if (course.buckets[j] == "BSNS") {
							bsBucketsFilled.push("naturalScience");
						} else if (course.buckets[j] == "BSSS") {
							bsBucketsFilled.push("socialScience");
						} else {
							continue;
						}
					}

					// Create a flag
					var applicableToExtra = true;

					// Loop over all of the BS buckets the current course applies to
					for (let j = 0; j < bsBucketsFilled.length; j++) {
						// Calculate the number of credits within the current bucket
						// should the current course be removed
						const credits =
							this.calcCredits(this.bs[bsBucketsFilled[j]]) -
							course.credits;

						// If the removal of the current course would result in the
						// bucket being underfilled, don't remove the course
						if (credits < 4) {
							applicableToExtra = false;
							break;
						}
					}

					// If the current course is an extra course, remove it from all BS buckets
					// it's in and add it to the extras bucket
					if (applicableToExtra) {
						// Loop over all of the BS buckets the current course applies to
						for (let j = 0; j < bsBucketsFilled.length; j++) {
							this.bs[bsBucketsFilled[j]] = this.bs[
								bsBucketsFilled[j]
							].filter((code) => code != course.code);

							this.extras.push(course.code);
						}
					}
				}
			}

			// ██████   █████
			// ██   ██ ██   ██
			// ██████  ███████
			// ██   ██ ██   ██
			// ██████  ██   ██
			else {
				// Loop over all of the courses the student has taken.
				for (let i = 0; i < this.coursesTaken.length; i++) {
					// Get the course from the master course list
					const course = this.courses[this.coursesTaken[i].code];
					var BAbucket;

					// Loop over the buckets in the course
					for (let j = 0; j < course.buckets.length; j++) {
						// Add the course to the buckets it fills
						if (course.buckets[j] == "BAFL") {
							BAbucket = "quantitative";
						} else if (course.buckets[j] == "BACOM") {
							BAbucket = "communication";
						} else if (course.buckets[j] == "BAENG") {
							BAbucket = "english";
						} else if (course.buckets[j] == "BALAS") {
							BAbucket = "latinStudies";
						} else if (course.buckets[j] == "BAHA") {
							BAbucket = "humanities";
						} else if (course.buckets[j] == "BAMUS") {
							BAbucket = "music";
						} else if (course.buckets[j] == "BAPHI") {
							BAbucket = "philosophy";
						} else if (course.buckets[j] == "BAREL") {
							BAbucket = "religion";
						} else if (course.buckets[j] == "BATHE") {
							BAbucket = "theology";
						} else {
							continue;
						}

						var genedBucketsFilled = [];

						// Determine which buckets the current course is in
						if (this.geneds.fineArts.includes(course.code)) {
							genedBucketsFilled.push("fineArts");
						}
						if (this.geneds.socialWorld.includes(course.code)) {
							genedBucketsFilled.push("socialWorld");
						}
						if (this.geneds.meaningValue.includes(course.code)) {
							genedBucketsFilled.push("meaningValue");
						}
						if (this.geneds.naturalWorld.includes(course.code)) {
							genedBucketsFilled.push("naturalWorld");
						}
						if (this.geneds.creativeQuan.includes(course.code)) {
							genedBucketsFilled.push("creativeQuan");
						}
						if (this.geneds.creativeQual.includes(course.code)) {
							genedBucketsFilled.push("creativeQual");
						}
						if (this.geneds.effCommA.includes(course.code)) {
							genedBucketsFilled.push("effCommA");
						}
						if (this.geneds.effCommB.includes(course.code)) {
							genedBucketsFilled.push("effCommB");
						}
						if (this.geneds.effCommC.includes(course.code)) {
							genedBucketsFilled.push("effCommC");
						}
						if (
							this.geneds.personalWellness.includes(course.code)
						) {
							genedBucketsFilled.push("personalWellness");
						}

						// Check if the course is not in any gened buckets. If so,
						// push it to the BS bucket.
						if (genedBucketsFilled.length == 0) {
							this.ba[BAbucket].push(course.code);
						}
						// Else, the courses is in one or more gened buckets. As
						// such, we need to push to the BS bucket ONLY IF all of
						// the gened buckets the courses is in would be filled
						// even if the course were to be removed.
						else {
							// Create a flag
							var applicableToBA = true;

							// For EACH bucket the course is in...
							genedBucketsFilled.forEach((bucket) => {
								// Calculate the number of credits present in the
								// bucket should the current course be removed
								var credits =
									this.calcCredits(this.geneds[bucket]) -
									course.credits;

								// Check if the bucket would still be filled with
								// the course removed. If it wouldn't, set the flag
								// to false
								if (
									credits < 8 &&
									(bucket == "MV" || bucket == "SW")
								) {
									applicableToBA = false;
								} else if (credits < 2 && bucket == "PW") {
									applicableToBA = false;
								} else if (credits < 4) {
									applicableToBA = false;
								}
							});

							// If all of the buckets the course is in are overfilled and
							// will remain filled should the course be removed, remove
							// the course from all the gened buckets it's in and instead
							// push it into the BS bucket
							if (applicableToBA) {
								// Loop over all the buckets the course is in
								for (
									let i = 0;
									i < genedBucketsFilled.length;
									i++
								) {
									// Remove the course from the current gened bucket
									this.geneds[genedBucketsFilled[i]] =
										this.geneds[
											genedBucketsFilled[i]
										].filter((code) => code != course.code);
								}

								// Add the course to the BS bucket
								this.ba[BSbucket].push(course.code);
							}
						}
					}
				}
			}

			//  ██████ ██████  ███████ ██████  ██ ████████ ███████
			// ██      ██   ██ ██      ██   ██ ██    ██    ██
			// ██      ██████  █████   ██   ██ ██    ██    ███████
			// ██      ██   ██ ██      ██   ██ ██    ██         ██
			//  ██████ ██   ██ ███████ ██████  ██    ██    ███████

			//  ██████        ██████ ███████
			// ██            ██      ██
			// ██      █████ ██      ███████
			// ██            ██           ██
			//  ██████        ██████ ███████
			{
				const csSet = new Set();

				this.cs.core.forEach((code) => {
					csSet.add(code);
				});
				this.cs.math1.forEach((code) => {
					csSet.add(code);
				});
				this.cs.math2.forEach((code) => {
					csSet.add(code);
				});
				this.cs.math3.forEach((code) => {
					csSet.add(code);
				});
				this.cs.electives.forEach((code) => {
					csSet.add(code);
				});
				this.cs.ai.forEach((code) => {
					csSet.add(code);
				});
				this.cs.web.forEach((code) => {
					csSet.add(code);
				});
				this.cs.cyber.forEach((code) => {
					csSet.add(code);
				});

				this.cs.credits = 0;

				csSet.forEach((code) => {
					this.cs.credits += parseInt(this.courses[code].credits);
				});
			}

			//  ██████        ██████  ███████ ███    ██ ███████ ██████  ███████
			// ██            ██       ██      ████   ██ ██      ██   ██ ██
			// ██      █████ ██   ███ █████   ██ ██  ██ █████   ██   ██ ███████
			// ██            ██    ██ ██      ██  ██ ██ ██      ██   ██      ██
			//  ██████        ██████  ███████ ██   ████ ███████ ██████  ███████
			{
				const genedSet = new Set();

				this.geneds.fineArts.forEach((code) => {
					genedSet.add(code);
				});
				this.geneds.socialWorld.forEach((code) => {
					genedSet.add(code);
				});
				this.geneds.meaningValue.forEach((code) => {
					genedSet.add(code);
				});
				this.geneds.naturalWorld.forEach((code) => {
					genedSet.add(code);
				});
				this.geneds.creativeQuan.forEach((code) => {
					genedSet.add(code);
				});
				this.geneds.creativeQual.forEach((code) => {
					genedSet.add(code);
				});
				this.geneds.effCommA.forEach((code) => {
					genedSet.add(code);
				});
				this.geneds.effCommB.forEach((code) => {
					genedSet.add(code);
				});
				this.geneds.effCommC.forEach((code) => {
					genedSet.add(code);
				});

				this.geneds.personalWellness.forEach((code) => {
					genedSet.add(code);
				});

				this.geneds.credits = 0;

				genedSet.forEach((code) => {
					this.geneds.credits += parseInt(this.courses[code].credits);
				});
			}

			//  ██████       ██████  ███████
			// ██            ██   ██ ██
			// ██      █████ ██████  ███████
			// ██            ██   ██      ██
			//  ██████       ██████  ███████
			if (this.degreeType == "BS") {
				const bsSet = new Set();

				this.bs.quantitative.forEach((code) => {
					bsSet.add(code);
				});
				this.bs.naturalScience.forEach((code) => {
					bsSet.add(code);
				});
				this.bs.socialScience.forEach((code) => {
					bsSet.add(code);
				});

				this.bs.credits = 0;

				bsSet.forEach((code) => {
					this.bs.credits += parseInt(this.courses[code].credits);
				});
			}
			//  ██████       ██████   █████
			// ██            ██   ██ ██   ██
			// ██      █████ ██████  ███████
			// ██            ██   ██ ██   ██
			//  ██████       ██████  ██   ██
			else {
				const baSet = new Set();

				this.ba.foreignLanguage.forEach((code) => {
					baSet.add(code);
				});
				this.ba.communication.forEach((code) => {
					baSet.add(code);
				});
				this.ba.english.forEach((code) => {
					baSet.add(code);
				});
				this.ba.latinStudies.forEach((code) => {
					baSet.add(code);
				});
				this.ba.humanities.forEach((code) => {
					baSet.add(code);
				});
				this.ba.music.forEach((code) => {
					baSet.add(code);
				});
				this.ba.philosophy.forEach((code) => {
					baSet.add(code);
				});
				this.ba.religion.forEach((code) => {
					baSet.add(code);
				});
				this.ba.theology.forEach((code) => {
					baSet.add(code);
				});

				this.ba.credits = 0;

				baSet.forEach((code) => {
					this.ba.credits += parseInt(this.courses[code].credits);
				});
			}

			//  ██████  ██████   █████
			// ██       ██   ██ ██   ██
			// ██   ███ ██████  ███████
			// ██    ██ ██      ██   ██
			//  ██████  ██      ██   ██
			this.calcGPA();
			this.calcMajorGPA(CS_CURRICULUM);

			console.log("CS", this.cs);
			console.log("Geneds", this.bs);
			console.log("BS", this.bs);
		},
		calcGPA() {
			var credits = 0,
				gradePoints = 0;

			this.coursesTaken.forEach((course) => {
				if (course.grade != "P") {
					credits += parseInt(this.courses[course.code].credits);

					switch (course.grade) {
						case "A":
							gradePoints +=
								4 * parseInt(this.courses[course.code].credits);
							break;
						case "B":
							gradePoints +=
								3 * parseInt(this.courses[course.code].credits);
							break;
						case "C":
							gradePoints +=
								2 * parseInt(this.courses[course.code].credits);
							break;
						case "D":
							gradePoints +=
								1 * parseInt(this.courses[course.code].credits);
							break;
					}
				}
			});

			if (this.credits != 0) {
				this.cumulativeGPA = gradePoints / credits;
			}
		},
		calcMajorGPA(CS_CURRICULUM) {
			var credits = 0,
				gradePoints = 0;

			// Loop over all courses taken
			this.coursesTaken.forEach((course) => {
				// If the course is either a CSC or MAT course, and it's not a P
				if (
					(course.code.startsWith("MAT") ||
						course.code.startsWith("CSC")) &&
					course.grade != "P"
				) {
					// If the courses is within the CS curriculum
					if (
						CS_CURRICULUM.core.includes(course.code) ||
						CS_CURRICULUM.ai.includes(course.code) ||
						CS_CURRICULUM.web.includes(course.code) ||
						CS_CURRICULUM.cyber.includes(course.code) ||
						CS_CURRICULUM.math1.includes(course.code) ||
						CS_CURRICULUM.math2.includes(course.code) ||
						CS_CURRICULUM.math3.includes(course.code) ||
						CS_CURRICULUM.electives.includes(course.code)
					) {
						credits += parseInt(this.courses[course.code].credits);

						switch (course.grade) {
							case "A":
								gradePoints +=
									4 *
									parseInt(this.courses[course.code].credits);
								break;
							case "B":
								gradePoints +=
									3 *
									parseInt(this.courses[course.code].credits);
								break;
							case "C":
								gradePoints +=
									2 *
									parseInt(this.courses[course.code].credits);
								break;
							case "D":
								gradePoints +=
									1 *
									parseInt(this.courses[course.code].credits);
								break;
						}
					}
				}
			});
			if (this.credits != 0) {
				this.majorGPA = gradePoints / credits;
			}
		},
		calcCredits(list) {
			var credits = 0;

			for (var i = 0; i < list.length; i++) {
				credits += parseInt(this.courses[list[i]].credits);
			}

			return credits;
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
		this.authUser = res;
		this.coursesTaken = res.coursesTaken;
	},
};
</script>

<style scoped>
.courseTaken ~ .courseTaken::before {
	content: ", ";
}

.header-row * {
	display: flex;
	align-items: center;
}

.degree-audit-container {
	height: calc(100vh - 10rem);
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
	height: 100%;
	background-color: rgb(55, 55, 60);
	color: white;
	padding: 5rem 0;
}

.degree-audit .btn:hover {
	background-color: var(--primary-dark);
}

.degree-aduit-body {
	width: 100%;
	max-height: calc(100% - 180px);
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	border: 5px solid var(--FSCred);
	box-shadow: 0 0 20px var(--FSCred);
	background-color: rgb(55, 55, 62);
	overflow: auto;
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