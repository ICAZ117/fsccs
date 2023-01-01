<template>
	<div class="adminPage">
		<div class="container py-5">
			<div id="researchProjects">
				<div
					class=""
					style="
						display: flex;
						align-items: center;
						flex-direction: row;
					"
				>
					<h2 class="primary">Collaborative Research Projects</h2>
					<button
						class="h-75 btn btn-md btn-primary"
						style="margin-left: auto; order: 2"
						@click="showAddResearchProjectModal = true"
					>
						Add Research Project
					</button>
				</div>
				<hr class="primary-hr" />
				<div class="mx-0 px-0 row gy-4 block-center">
					<div
						class="col-3"
						v-for="(researchProject, id) in researchProjects"
						:key="id"
					>
						<div
							class="px-0 card"
							@click="
								openEditResearchProjectModal(
									researchProject,
									id
								)
							"
						>
							<div class="card-body">
								<p>
									<b>Title: </b>
									<br />
									{{ researchProject.title }}
								</p>
								<p>
									<b>Students:</b>
									<br />
									<span>
										{{ researchProject.students }}
									</span>
								</p>
								<p>
									<b>Faculty:</b>
									<br />
									<span>
										{{ researchProject.faculty }}
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="officers" class="mt-4 pt-2">
				<div
					class=""
					style="
						display: flex;
						align-items: center;
						flex-direction: row;
					"
				>
					<h2 class="primary">CS Club Officers</h2>
					<button
						class="h-75 btn btn-md btn-primary"
						style="margin-left: auto; order: 2"
						@click="showAddOfficerModal = true"
					>
						Add Officer
					</button>
				</div>
				<hr class="primary-hr" />
				<div class="mx-0 px-0 row gy-4 block-center">
					<div
						class="col-3"
						v-for="(officer, id) in officers"
						:key="id"
					>
						<div
							class="px-0 card"
							@click="openEditOfficerModal(officer, id)"
						>
							<img
								:src="officer.picture"
								alt=""
								height="300"
								style="object-fit: cover"
							/>
							<div class="card-body">
								<b>Name:</b> {{ officer.name }}
								<br />
								<b>Position:</b> {{ officer.position }}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="advising-resources" class="mt-4 pt-2">
				<div
					class=""
					style="
						display: flex;
						align-items: center;
						flex-direction: row;
					"
				>
					<h2 class="primary">Advising resources</h2>
					<button
						class="h-75 btn btn-md btn-primary"
						style="margin-left: auto; order: 2"
						@click="showAddResourceModal = true"
					>
						Add Resource
					</button>
				</div>
				<hr class="primary-hr" />
				<div class="mx-0 px-0 row gy-4 block-center">
					<div
						class="col-3"
						v-for="(resource, id) in resources"
						:key="id"
					>
						<div
							class="px-0 card"
							@click="openEditResourceModal(resource, id)"
						>
							<div class="card-body">
								<p><b>Name: </b>{{ resource.name }}</p>
								<p>
									<b>Description:</b>
									<br />
									{{ resource.description }}
								</p>
								<p>
									<b>Link: </b>
									<a :href="resource.link" target="_blank">{{
										resource.link
									}}</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="studentProjects" class="mt-4 pt-2">
				<div
					class=""
					style="
						display: flex;
						align-items: center;
						flex-direction: row;
					"
				>
					<h2 class="primary">Project Repository</h2>
					<button
						class="h-75 btn btn-md btn-primary"
						style="margin-left: auto; order: 2"
						@click="showAddStudentProjectModal = true"
					>
						Add Project
					</button>
				</div>
				<hr class="primary-hr" />
				<div class="mx-0 px-0 row gy-4 block-center">
					<div
						class="col-3"
						v-for="(studentProject, id) in studentProjects"
						:key="id"
					>
						<div
							class="px-0 card"
							@click="
								openEditStudentProjectModal(studentProject, id)
							"
						>
							<div class="card-body">
								<p>
									<b>Title: </b>
									<br />
									{{ studentProject.title }}
								</p>
								<p>
									<b>Student(s):</b>
									<br />
									<span>
										{{ studentProject.students }}
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="tutors" class="mt-4 pt-2">
				<div
					class=""
					style="
						display: flex;
						align-items: center;
						flex-direction: row;
					"
				>
					<h2 class="primary">Tutors</h2>
					<button
						class="h-75 btn btn-md btn-primary"
						style="margin-left: auto; order: 2"
						@click="showAddTutorModal = true"
					>
						Add Tutor
					</button>
				</div>
				<hr class="primary-hr" />
				<div class="mx-0 px-0 row gy-4 block-center">
					<div class="col-3" v-for="(tutor, id) in tutors" :key="id">
						<div
							class="px-0 card"
							@click="openEditTutorModal(tutor, id)"
						>
							<img
								:src="tutor.picture"
								alt=""
								height="300"
								style="object-fit: cover"
							/>
							<div class="card-body">
								<b>Name:</b> {{ tutor.name }}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="professors" class="mt-4 pt-2">
				<div
					class=""
					style="
						display: flex;
						align-items: center;
						flex-direction: row;
					"
				>
					<h2 class="primary">Professors</h2>
					<button
						class="h-75 btn btn-md btn-primary"
						style="margin-left: auto; order: 2"
						@click="showAddProfessorModal = true"
					>
						Add Professor
					</button>
				</div>
				<hr class="primary-hr" />
				<div class="mx-0 px-0 row gy-4 block-center">
					<div
						class="col-3"
						v-for="(professor, id) in professors"
						:key="id"
					>
						<div
							class="px-0 card"
							@click="openEditProfessorModal(professor, id)"
						>
							<img
								:src="professor.pfp"
								alt=""
								height="300"
								style="object-fit: cover"
							/>
							<div class="card-body">
								<b>Name:</b> {{ professor.name }}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div id="researchProjectModals">
		<!-- 
             █████  ██████  ██████      ██████  ███████ ███████ ███████  █████  ██████   ██████ ██   ██ 
            ██   ██ ██   ██ ██   ██     ██   ██ ██      ██      ██      ██   ██ ██   ██ ██      ██   ██ 
            ███████ ██   ██ ██   ██     ██████  █████   ███████ █████   ███████ ██████  ██      ███████ 
            ██   ██ ██   ██ ██   ██     ██   ██ ██           ██ ██      ██   ██ ██   ██ ██      ██   ██ 
            ██   ██ ██████  ██████      ██   ██ ███████ ███████ ███████ ██   ██ ██   ██  ██████ ██   ██ 
        -->
		<VueFinalModal
			v-model="showAddResearchProjectModal"
			classes="modal-container"
			content-class="modal-content"
		>
			<button
				class="modal__close"
				@click="showAddResearchProjectModal = false"
			>
				<i class="fa-solid fa-x"></i>
			</button>
			<span class="modal__title ps-1">Add Research Project</span>
			<div class="modal__content">
				<form @submit.prevent id="researchProjectForm"></form>
				<div class="m-0 row">
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="title"
							v-model="researchProject.title"
							form="researchProjectForm"
						/>
						<label for="title">Title</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="abstract"
							v-model="researchProject.abstract"
							form="researchProjectForm"
						/>
						<label for="abstract">Abstract</label>
					</div>
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="students"
							v-model="researchProject.students"
							form="researchProjectForm"
						/>
						<label for="students">Students</label>
					</div>
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="faculty"
							v-model="researchProject.faculty"
							form="researchProjectForm"
						/>
						<label for="faculty">Faculty</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="publications"
							v-model="researchProject.publications"
							form="researchProjectForm"
						/>
						<label for="publications">Publications</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="github"
							v-model="researchProject.github"
							form="researchProjectForm"
						/>
						<label for="github">Github Repository</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="poster"
							v-model="researchProject.poster"
							form="researchProjectForm"
						/>
						<label for="poster">Poster Image Link</label>
					</div>
				</div>
			</div>
			<div class="modal__action">
				<button
					class="btn btn-md btn-primary me-2"
					@click="addResearchProject"
				>
					Save
				</button>
				<button
					class="btn btn-md btn-primary"
					@click="showAddResearchProjectModal = false"
				>
					Cancel
				</button>
			</div>
		</VueFinalModal>

		<!--  
            ███████ ██████  ██ ████████     ██████  ███████ ███████ ███████  █████  ██████   ██████ ██   ██ 
            ██      ██   ██ ██    ██        ██   ██ ██      ██      ██      ██   ██ ██   ██ ██      ██   ██ 
            █████   ██   ██ ██    ██        ██████  █████   ███████ █████   ███████ ██████  ██      ███████ 
            ██      ██   ██ ██    ██        ██   ██ ██           ██ ██      ██   ██ ██   ██ ██      ██   ██ 
            ███████ ██████  ██    ██        ██   ██ ███████ ███████ ███████ ██   ██ ██   ██  ██████ ██   ██ 
        -->
		<VueFinalModal
			v-model="showEditResearchProjectModal"
			classes="modal-container"
			content-class="modal-content"
		>
			<button
				class="modal__close"
				@click="showEditResearchProjectModal = false"
			>
				<i class="fa-solid fa-x"></i>
			</button>
			<span class="modal__title ps-1">Edit Research Project</span>
			<div class="modal__content">
				<form @submit.prevent id="editResearchProjectForm"></form>
				<div class="m-0 row">
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="title"
							v-model="editResearchProject.title"
							form="editResearchProjectForm"
						/>
						<label for="title">Title</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="abstract"
							v-model="editResearchProject.abstract"
							form="editResearchProjectForm"
						/>
						<label for="abstract">Abstract</label>
					</div>
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="students"
							v-model="editResearchProject.students"
							form="editResearchProjectForm"
						/>
						<label for="students">Students</label>
					</div>
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="faculty"
							v-model="editResearchProject.faculty"
							form="editResearchProjectForm"
						/>
						<label for="faculty">Faculty</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="publications"
							v-model="editResearchProject.publications"
							form="editResearchProjectForm"
						/>
						<label for="publications">Publications</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="github"
							v-model="editResearchProject.github"
							form="editResearchProjectForm"
						/>
						<label for="github">Github Repository</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="poster"
							v-model="editResearchProject.poster"
							form="editResearchProjectForm"
						/>
						<label for="poster">Poster Image Link</label>
					</div>
				</div>
			</div>
			<div class="modal__action">
				<button
					class="btn btn-md btn-primary me-2"
					@click="updateResearchProject"
				>
					Save
				</button>
				<button
					class="btn btn-md btn-primary me-2"
					@click="showDeleteResearchProjectModal = true"
				>
					Delete
				</button>
				<button
					class="btn btn-md btn-primary"
					@click="
						showEditResearchProjectModal = false;
						editResearchProject = {};
					"
				>
					Cancel
				</button>
			</div>
		</VueFinalModal>

		<!-- 
            ██████  ███████ ██      ███████ ████████ ███████     ██████  ███████ ███████ ███████  █████  ██████   ██████ ██   ██ 
            ██   ██ ██      ██      ██         ██    ██          ██   ██ ██      ██      ██      ██   ██ ██   ██ ██      ██   ██ 
            ██   ██ █████   ██      █████      ██    █████       ██████  █████   ███████ █████   ███████ ██████  ██      ███████ 
            ██   ██ ██      ██      ██         ██    ██          ██   ██ ██           ██ ██      ██   ██ ██   ██ ██      ██   ██ 
            ██████  ███████ ███████ ███████    ██    ███████     ██   ██ ███████ ███████ ███████ ██   ██ ██   ██  ██████ ██   ██ 
         -->
		<VueFinalModal
			v-model="showDeleteResearchProjectModal"
			classes="modal-container"
			content-class="modal-content2"
		>
			<button
				class="modal__close"
				@click="showDeleteResearchProjectModal = false"
			>
				<i class="fa-solid fa-x"></i>
			</button>
			<span class="modal__title">Caution!</span>
			<div class="modal__content">
				Are you sure you want to delete this research project? This
				action is irreversible!
			</div>
			<div class="modal__action">
				<button
					class="btn btn-md btn-primary me-2"
					@click="deleteResearchProject"
				>
					Delete
				</button>
				<button
					class="btn btn-md btn-primary"
					@click="showDeleteResearchProjectModal = false"
				>
					Cancel
				</button>
			</div>
		</VueFinalModal>
	</div>

	<div id="officerModals">
		<!-- 
             █████  ██████  ██████       ██████  ███████ ███████ ██  ██████ ███████ ██████  
            ██   ██ ██   ██ ██   ██     ██    ██ ██      ██      ██ ██      ██      ██   ██ 
            ███████ ██   ██ ██   ██     ██    ██ █████   █████   ██ ██      █████   ██████  
            ██   ██ ██   ██ ██   ██     ██    ██ ██      ██      ██ ██      ██      ██   ██ 
            ██   ██ ██████  ██████       ██████  ██      ██      ██  ██████ ███████ ██   ██ 
        -->
		<VueFinalModal
			v-model="showAddOfficerModal"
			classes="modal-container"
			content-class="modal-content"
		>
			<button class="modal__close" @click="showAddOfficerModal = false">
				<i class="fa-solid fa-x"></i>
			</button>
			<span class="modal__title ps-1">Add Officer</span>
			<div class="modal__content">
				<form @submit.prevent id="officerForm"></form>
				<div class="m-0 row">
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="name"
							v-model="officer.name"
							form="officerForm"
						/>
						<label for="name">Name</label>
					</div>
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="position"
							v-model="officer.position"
							form="officerForm"
						/>
						<label for="position">Position</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="image"
							v-model="officer.picture"
							form="officerForm"
						/>
						<label for="image">Image Link</label>
					</div>
				</div>
			</div>
			<div class="modal__action">
				<button class="btn btn-md btn-primary me-2" @click="addOfficer">
					Save
				</button>
				<!-- <button
					class="btn btn-md btn-primary me-2"
					highlight
					@click="showConfirmModal = true"
					v-if="modalCourse.originalCode"
				>
					Delete
				</button> -->
				<button
					class="btn btn-md btn-primary"
					@click="showAddOfficerModal = false"
				>
					Cancel
				</button>
			</div>
		</VueFinalModal>

		<!--  
            ███████ ██████  ██ ████████      ██████  ███████ ███████ ██  ██████ ███████ ██████  
            ██      ██   ██ ██    ██        ██    ██ ██      ██      ██ ██      ██      ██   ██ 
            █████   ██   ██ ██    ██        ██    ██ █████   █████   ██ ██      █████   ██████  
            ██      ██   ██ ██    ██        ██    ██ ██      ██      ██ ██      ██      ██   ██ 
            ███████ ██████  ██    ██         ██████  ██      ██      ██  ██████ ███████ ██   ██ 
        -->
		<VueFinalModal
			v-model="showEditOfficerModal"
			classes="modal-container"
			content-class="modal-content"
		>
			<button class="modal__close" @click="showEditOfficerModal = false">
				<i class="fa-solid fa-x"></i>
			</button>
			<span class="modal__title ps-1">Edit Officer</span>
			<div class="modal__content">
				<form @submit.prevent id="editOfficerForm"></form>
				<div class="m-0 row">
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="name"
							v-model="editOfficer.name"
							form="editOfficerForm"
						/>
						<label for="name">Name</label>
					</div>
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="position"
							v-model="editOfficer.position"
							form="editOfficerForm"
						/>
						<label for="position">Position</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="image"
							v-model="editOfficer.picture"
							form="editOfficerForm"
						/>
						<label for="image">Image Link</label>
					</div>
				</div>
			</div>
			<div class="modal__action">
				<button
					class="btn btn-md btn-primary me-2"
					@click="updateOfficer"
				>
					Save
				</button>
				<button
					class="btn btn-md btn-primary me-2"
					@click="showDeleteOfficerModal = true"
				>
					Delete
				</button>
				<button
					class="btn btn-md btn-primary"
					@click="
						showEditOfficerModal = false;
						editOfficer = {};
					"
				>
					Cancel
				</button>
			</div>
		</VueFinalModal>

		<!-- 
            ██████  ███████ ██      ███████ ████████ ███████      ██████  ███████ ███████ ██  ██████ ███████ ██████  
            ██   ██ ██      ██      ██         ██    ██          ██    ██ ██      ██      ██ ██      ██      ██   ██ 
            ██   ██ █████   ██      █████      ██    █████       ██    ██ █████   █████   ██ ██      █████   ██████  
            ██   ██ ██      ██      ██         ██    ██          ██    ██ ██      ██      ██ ██      ██      ██   ██ 
            ██████  ███████ ███████ ███████    ██    ███████      ██████  ██      ██      ██  ██████ ███████ ██   ██ 
         -->
		<VueFinalModal
			v-model="showDeleteOfficerModal"
			classes="modal-container"
			content-class="modal-content2"
		>
			<button
				class="modal__close"
				@click="showDeleteOfficerModal = false"
			>
				<i class="fa-solid fa-x"></i>
			</button>
			<span class="modal__title">Caution!</span>
			<div class="modal__content">
				Are you sure you want to delete this officer? This action is
				irreversible!
			</div>
			<div class="modal__action">
				<button
					class="btn btn-md btn-primary me-2"
					@click="deleteOfficer"
				>
					Delete
				</button>
				<button
					class="btn btn-md btn-primary"
					@click="showDeleteOfficerModal = false"
				>
					Cancel
				</button>
			</div>
		</VueFinalModal>
	</div>

	<div id="resourceModals">
		<!-- 
             █████  ██████  ██████      ██████  ███████ ███████  ██████  ██    ██ ██████   ██████ ███████ 
            ██   ██ ██   ██ ██   ██     ██   ██ ██      ██      ██    ██ ██    ██ ██   ██ ██      ██      
            ███████ ██   ██ ██   ██     ██████  █████   ███████ ██    ██ ██    ██ ██████  ██      █████   
            ██   ██ ██   ██ ██   ██     ██   ██ ██           ██ ██    ██ ██    ██ ██   ██ ██      ██      
            ██   ██ ██████  ██████      ██   ██ ███████ ███████  ██████   ██████  ██   ██  ██████ ███████ 
        -->
		<VueFinalModal
			v-model="showAddResourceModal"
			classes="modal-container"
			content-class="modal-content"
		>
			<button class="modal__close" @click="showAddResourceModal = false">
				<i class="fa-solid fa-x"></i>
			</button>
			<span class="modal__title ps-1">Add Resource</span>
			<div class="modal__content">
				<form @submit.prevent id="resourceForm"></form>
				<div class="m-0 row">
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="name"
							v-model="resource.name"
							form="resourceForm"
						/>
						<label for="name">Name</label>
					</div>
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="link"
							v-model="resource.link"
							form="resourceForm"
						/>
						<label for="link">Link</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="description"
							v-model="resource.description"
							form="resourceForm"
						/>
						<label for="description">Description</label>
					</div>
				</div>
			</div>
			<div class="modal__action">
				<button
					class="btn btn-md btn-primary me-2"
					@click="addResource"
				>
					Save
				</button>
				<!-- <button
					class="btn btn-md btn-primary me-2"
					highlight
					@click="showConfirmModal = true"
					v-if="modalCourse.originalCode"
				>
					Delete
				</button> -->
				<button
					class="btn btn-md btn-primary"
					@click="showAddResourceModal = false"
				>
					Cancel
				</button>
			</div>
		</VueFinalModal>

		<!--  
            ███████ ██████  ██ ████████     ██████  ███████ ███████  ██████  ██    ██ ██████   ██████ ███████ 
            ██      ██   ██ ██    ██        ██   ██ ██      ██      ██    ██ ██    ██ ██   ██ ██      ██      
            █████   ██   ██ ██    ██        ██████  █████   ███████ ██    ██ ██    ██ ██████  ██      █████   
            ██      ██   ██ ██    ██        ██   ██ ██           ██ ██    ██ ██    ██ ██   ██ ██      ██      
            ███████ ██████  ██    ██        ██   ██ ███████ ███████  ██████   ██████  ██   ██  ██████ ███████ 
        -->
		<VueFinalModal
			v-model="showEditResourceModal"
			classes="modal-container"
			content-class="modal-content"
		>
			<button class="modal__close" @click="showEditResourceModal = false">
				<i class="fa-solid fa-x"></i>
			</button>
			<span class="modal__title ps-1">Edit Resource</span>
			<div class="modal__content">
				<form @submit.prevent id="editResourceForm"></form>
				<div class="m-0 row">
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="name"
							v-model="editResource.name"
							form="editResourceForm"
						/>
						<label for="name">Name</label>
					</div>
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="link"
							v-model="editResource.link"
							form="editResourceForm"
						/>
						<label for="link">Link</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="description"
							v-model="editResource.description"
							form="editResourceForm"
						/>
						<label for="description">Description</label>
					</div>
				</div>
			</div>
			<div class="modal__action">
				<button
					class="btn btn-md btn-primary me-2"
					@click="updateResource"
				>
					Save
				</button>
				<button
					class="btn btn-md btn-primary me-2"
					@click="showDeleteResourceModal = true"
				>
					Delete
				</button>
				<button
					class="btn btn-md btn-primary"
					@click="
						showEditResourceModal = false;
						editResource = {};
					"
				>
					Cancel
				</button>
			</div>
		</VueFinalModal>

		<!-- 
            ██████  ███████ ██      ███████ ████████ ███████     ██████  ███████ ███████  ██████  ██    ██ ██████   ██████ ███████ 
            ██   ██ ██      ██      ██         ██    ██          ██   ██ ██      ██      ██    ██ ██    ██ ██   ██ ██      ██      
            ██   ██ █████   ██      █████      ██    █████       ██████  █████   ███████ ██    ██ ██    ██ ██████  ██      █████   
            ██   ██ ██      ██      ██         ██    ██          ██   ██ ██           ██ ██    ██ ██    ██ ██   ██ ██      ██      
            ██████  ███████ ███████ ███████    ██    ███████     ██   ██ ███████ ███████  ██████   ██████  ██   ██  ██████ ███████ 
         -->
		<VueFinalModal
			v-model="showDeleteResourceModal"
			classes="modal-container"
			content-class="modal-content2"
		>
			<button
				class="modal__close"
				@click="showDeleteResourceModal = false"
			>
				<i class="fa-solid fa-x"></i>
			</button>
			<span class="modal__title">Caution!</span>
			<div class="modal__content">
				Are you sure you want to delete this resource? This action is
				irreversible!
			</div>
			<div class="modal__action">
				<button
					class="btn btn-md btn-primary me-2"
					@click="deleteResource"
				>
					Delete
				</button>
				<button
					class="btn btn-md btn-primary"
					@click="showDeleteResourceModal = false"
				>
					Cancel
				</button>
			</div>
		</VueFinalModal>
	</div>

	<div id="studentProjectModals">
		<!-- 
             █████  ██████  ██████      ██████  ██████   ██████       ██ ███████  ██████ ████████ 
            ██   ██ ██   ██ ██   ██     ██   ██ ██   ██ ██    ██      ██ ██      ██         ██    
            ███████ ██   ██ ██   ██     ██████  ██████  ██    ██      ██ █████   ██         ██    
            ██   ██ ██   ██ ██   ██     ██      ██   ██ ██    ██ ██   ██ ██      ██         ██    
            ██   ██ ██████  ██████      ██      ██   ██  ██████   █████  ███████  ██████    ██    
        -->
		<VueFinalModal
			v-model="showAddStudentProjectModal"
			classes="modal-container"
			content-class="modal-content"
		>
			<button
				class="modal__close"
				@click="showAddStudentProjectModal = false"
			>
				<i class="fa-solid fa-x"></i>
			</button>
			<span class="modal__title ps-1">Add Project</span>
			<div class="modal__content">
				<form @submit.prevent id="studentProjectForm"></form>
				<div class="m-0 row">
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="title"
							v-model="studentProject.title"
							form="studentProjectForm"
						/>
						<label for="title">Title</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="description"
							v-model="studentProject.description"
							form="studentProjectForm"
						/>
						<label for="description">Description</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="students"
							v-model="studentProject.students"
							form="studentProjectForm"
						/>
						<label for="students">Student(s)</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="github"
							v-model="studentProject.github"
							form="studentProjectForm"
						/>
						<label for="github">Github Repository</label>
					</div>
					<div class="p-1 col-12">
						<input
							type="checkbox"
							id="is2280"
							v-model="studentProject.is2280"
							form="studentProjectForm"
						/>
						<label class="white ms-2" for="is2280">
							This project is a CSC 2280 final project
						</label>
					</div>
				</div>
			</div>
			<div class="modal__action">
				<button
					class="btn btn-md btn-primary me-2"
					@click="addStudentProject"
				>
					Save
				</button>
				<button
					class="btn btn-md btn-primary"
					@click="showAddStudentProjectModal = false"
				>
					Cancel
				</button>
			</div>
		</VueFinalModal>

		<!--  
            ███████ ██████  ██ ████████     ██████  ██████   ██████       ██ ███████  ██████ ████████ 
            ██      ██   ██ ██    ██        ██   ██ ██   ██ ██    ██      ██ ██      ██         ██    
            █████   ██   ██ ██    ██        ██████  ██████  ██    ██      ██ █████   ██         ██    
            ██      ██   ██ ██    ██        ██      ██   ██ ██    ██ ██   ██ ██      ██         ██    
            ███████ ██████  ██    ██        ██      ██   ██  ██████   █████  ███████  ██████    ██    
        -->
		<VueFinalModal
			v-model="showEditStudentProjectModal"
			classes="modal-container"
			content-class="modal-content"
		>
			<button
				class="modal__close"
				@click="showEditStudentProjectModal = false"
			>
				<i class="fa-solid fa-x"></i>
			</button>
			<span class="modal__title ps-1">Edit Project</span>
			<div class="modal__content">
				<form @submit.prevent id="editStudentProjectForm"></form>
				<div class="m-0 row">
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="title"
							v-model="editStudentProject.title"
							form="studentProjectForm"
						/>
						<label for="title">Title</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="description"
							v-model="editStudentProject.description"
							form="studentProjectForm"
						/>
						<label for="description">Description</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="students"
							v-model="editStudentProject.students"
							form="studentProjectForm"
						/>
						<label for="students">Student(s)</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="github"
							v-model="editStudentProject.github"
							form="studentProjectForm"
						/>
						<label for="github">Github Repository</label>
					</div>
					<div class="p-1 col-12">
						<input
							type="checkbox"
							id="is2280"
							v-model="editStudentProject.is2280"
							form="studentProjectForm"
						/>
						<label class="white ms-2" for="is2280">
							This project is a CSC 2280 final project
						</label>
					</div>
				</div>
			</div>
			<div class="modal__action">
				<button
					class="btn btn-md btn-primary me-2"
					@click="updateStudentProject"
				>
					Save
				</button>
				<button
					class="btn btn-md btn-primary me-2"
					@click="showDeleteStudentProjectModal = true"
				>
					Delete
				</button>
				<button
					class="btn btn-md btn-primary"
					@click="
						showEditStudentProjectModal = false;
						editStudentProject = {};
					"
				>
					Cancel
				</button>
			</div>
		</VueFinalModal>

		<!-- 
            ██████  ███████ ██      ███████ ████████ ███████     ██████  ██████   ██████       ██ ███████  ██████ ████████ 
            ██   ██ ██      ██      ██         ██    ██          ██   ██ ██   ██ ██    ██      ██ ██      ██         ██    
            ██   ██ █████   ██      █████      ██    █████       ██████  ██████  ██    ██      ██ █████   ██         ██    
            ██   ██ ██      ██      ██         ██    ██          ██      ██   ██ ██    ██ ██   ██ ██      ██         ██    
            ██████  ███████ ███████ ███████    ██    ███████     ██      ██   ██  ██████   █████  ███████  ██████    ██    
         -->
		<VueFinalModal
			v-model="showDeleteStudentProjectModal"
			classes="modal-container"
			content-class="modal-content2"
		>
			<button
				class="modal__close"
				@click="showDeleteStudentProjectModal = false"
			>
				<i class="fa-solid fa-x"></i>
			</button>
			<span class="modal__title">Caution!</span>
			<div class="modal__content">
				Are you sure you want to delete this project? This action is
				irreversible!
			</div>
			<div class="modal__action">
				<button
					class="btn btn-md btn-primary me-2"
					@click="deleteStudentProject"
				>
					Delete
				</button>
				<button
					class="btn btn-md btn-primary"
					@click="showDeleteStudentProjectModal = false"
				>
					Cancel
				</button>
			</div>
		</VueFinalModal>
	</div>

	<div id="tutorModals">
		<!-- 
             █████  ██████  ██████      ████████ ██    ██ ████████  ██████  ██████  
            ██   ██ ██   ██ ██   ██        ██    ██    ██    ██    ██    ██ ██   ██ 
            ███████ ██   ██ ██   ██        ██    ██    ██    ██    ██    ██ ██████  
            ██   ██ ██   ██ ██   ██        ██    ██    ██    ██    ██    ██ ██   ██ 
            ██   ██ ██████  ██████         ██     ██████     ██     ██████  ██   ██ 
        -->
		<VueFinalModal
			v-model="showAddTutorModal"
			classes="modal-container"
			content-class="modal-content"
		>
			<button class="modal__close" @click="showAddTutorModal = false">
				<i class="fa-solid fa-x"></i>
			</button>
			<span class="modal__title ps-1">Add Tutor</span>
			<div class="modal__content">
				<form @submit.prevent id="tutorForm"></form>
				<div class="m-0 row">
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="name"
							v-model="tutor.name"
							form="tutorForm"
						/>
						<label for="name">Name</label>
					</div>
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="picture"
							v-model="tutor.picture"
							form="tutorForm"
						/>
						<label for="picture">Image Link</label>
					</div>
				</div>
			</div>
			<div class="modal__action">
				<button class="btn btn-md btn-primary me-2" @click="addTutor">
					Save
				</button>
				<!-- <button
					class="btn btn-md btn-primary me-2"
					highlight
					@click="showConfirmModal = true"
					v-if="modalCourse.originalCode"
				>
					Delete
				</button> -->
				<button
					class="btn btn-md btn-primary"
					@click="showAddTutorModal = false"
				>
					Cancel
				</button>
			</div>
		</VueFinalModal>

		<!--  
            ███████ ██████  ██ ████████     ████████ ██    ██ ████████  ██████  ██████  
            ██      ██   ██ ██    ██           ██    ██    ██    ██    ██    ██ ██   ██ 
            █████   ██   ██ ██    ██           ██    ██    ██    ██    ██    ██ ██████  
            ██      ██   ██ ██    ██           ██    ██    ██    ██    ██    ██ ██   ██ 
            ███████ ██████  ██    ██           ██     ██████     ██     ██████  ██   ██ 
        -->
		<VueFinalModal
			v-model="showEditTutorModal"
			classes="modal-container"
			content-class="modal-content"
		>
			<button class="modal__close" @click="showEditTutorModal = false">
				<i class="fa-solid fa-x"></i>
			</button>
			<span class="modal__title ps-1">Edit Tutor</span>
			<div class="modal__content">
				<form @submit.prevent id="editTutorForm"></form>
				<div class="m-0 row">
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="name"
							v-model="editTutor.name"
							form="editTutorForm"
						/>
						<label for="name">Name</label>
					</div>
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="picture"
							v-model="editTutor.picture"
							form="editTutorForm"
						/>
						<label for="picture">Image Link</label>
					</div>
				</div>
			</div>
			<div class="modal__action">
				<button
					class="btn btn-md btn-primary me-2"
					@click="updateTutor"
				>
					Save
				</button>
				<button
					class="btn btn-md btn-primary me-2"
					@click="showDeleteTutorModal = true"
				>
					Delete
				</button>
				<button
					class="btn btn-md btn-primary"
					@click="
						showEditTutorModal = false;
						editTutor = {};
					"
				>
					Cancel
				</button>
			</div>
		</VueFinalModal>

		<!-- 
            ██████  ███████ ██      ███████ ████████ ███████     ████████ ██    ██ ████████  ██████  ██████  
            ██   ██ ██      ██      ██         ██    ██             ██    ██    ██    ██    ██    ██ ██   ██ 
            ██   ██ █████   ██      █████      ██    █████          ██    ██    ██    ██    ██    ██ ██████  
            ██   ██ ██      ██      ██         ██    ██             ██    ██    ██    ██    ██    ██ ██   ██ 
            ██████  ███████ ███████ ███████    ██    ███████        ██     ██████     ██     ██████  ██   ██ 
         -->
		<VueFinalModal
			v-model="showDeleteTutorModal"
			classes="modal-container"
			content-class="modal-content2"
		>
			<button class="modal__close" @click="showDeleteTutorModal = false">
				<i class="fa-solid fa-x"></i>
			</button>
			<span class="modal__title">Caution!</span>
			<div class="modal__content">
				Are you sure you want to delete this tutor? This action is
				irreversible!
			</div>
			<div class="modal__action">
				<button
					class="btn btn-md btn-primary me-2"
					@click="deleteTutor"
				>
					Delete
				</button>
				<button
					class="btn btn-md btn-primary"
					@click="showDeleteTutorModal = false"
				>
					Cancel
				</button>
			</div>
		</VueFinalModal>
	</div>

	<div id="professorModals">
		<!-- 
             █████  ██████  ██████      ██████  ██████   ██████  ███████ ███████ ███████ ███████  ██████  ██████  
            ██   ██ ██   ██ ██   ██     ██   ██ ██   ██ ██    ██ ██      ██      ██      ██      ██    ██ ██   ██ 
            ███████ ██   ██ ██   ██     ██████  ██████  ██    ██ █████   █████   ███████ ███████ ██    ██ ██████  
            ██   ██ ██   ██ ██   ██     ██      ██   ██ ██    ██ ██      ██           ██      ██ ██    ██ ██   ██ 
            ██   ██ ██████  ██████      ██      ██   ██  ██████  ██      ███████ ███████ ███████  ██████  ██   ██ 
        -->
		<VueFinalModal
			v-model="showAddProfessorModal"
			classes="modal-container"
			content-class="modal-content"
		>
			<button class="modal__close" @click="showAddProfessorModal = false">
				<i class="fa-solid fa-x"></i>
			</button>
			<span class="modal__title ps-1">Add Professor</span>
			<div class="modal__content">
				<form @submit.prevent="addProfessor" id="professorForm"></form>
				<div class="m-0 row">
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="name"
							v-model="professor.name"
							form="professorForm"
							required
						/>
						<label for="name">Name</label>
					</div>
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="title"
							v-model="professor.title"
							form="professorForm"
						/>
						<label for="title">Title</label>
					</div>
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="email"
							v-model="professor.email"
							form="professorForm"
						/>
						<label for="email">Email</label>
					</div>
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="phone"
							v-model="professor.phone"
							form="professorForm"
						/>
						<label for="phone">Phone</label>
					</div>
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="office"
							v-model="professor.office"
							form="professorForm"
						/>
						<label for="office">Office</label>
					</div>
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="slack"
							v-model="professor.slack"
							form="professorForm"
						/>
						<label for="slack">Slack</label>
					</div>
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="github"
							v-model="professor.github"
							form="professorForm"
						/>
						<label for="github">Github</label>
					</div>
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="linkedin"
							v-model="professor.linkedin"
							form="professorForm"
						/>
						<label for="linkedin">LinkedIn</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="pfp"
							v-model="professor.pfp"
							form="professorForm"
						/>
						<label for="pfp">Image Link</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="teachingimg"
							v-model="professor.teachingimg"
							form="professorForm"
						/>
						<label for="teachingimg">Teaching Image Link</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="quote"
							v-model="professor.quote"
							form="professorForm"
						/>
						<label for="quote">Quote</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="bio"
							v-model="professor.bio"
							form="professorForm"
						/>
						<label for="bio">Biography</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="interests"
							v-model="professor.interests"
							form="professorForm"
						/>
						<label for="interests">Interests</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="education"
							v-model="professor.education"
							form="professorForm"
						/>
						<label for="education">Education</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="awards"
							v-model="professor.awards"
							form="professorForm"
						/>
						<label for="awards">Honors/Awards</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="publications"
							v-model="professor.publications"
							form="professorForm"
						/>
						<label for="publications">Publications</label>
					</div>
				</div>
			</div>
			<div class="modal__action">
				<button
					class="btn btn-md btn-primary me-2"
					form="professorForm"
					type="submit"
				>
					Save
				</button>
				<button
					class="btn btn-md btn-primary"
					@click="showAddProfessorModal = false"
				>
					Cancel
				</button>
			</div>
		</VueFinalModal>

		<!--  
            ███████ ██████  ██ ████████     ██████  ██████   ██████  ███████ ███████ ███████ ███████  ██████  ██████  
            ██      ██   ██ ██    ██        ██   ██ ██   ██ ██    ██ ██      ██      ██      ██      ██    ██ ██   ██ 
            █████   ██   ██ ██    ██        ██████  ██████  ██    ██ █████   █████   ███████ ███████ ██    ██ ██████  
            ██      ██   ██ ██    ██        ██      ██   ██ ██    ██ ██      ██           ██      ██ ██    ██ ██   ██ 
            ███████ ██████  ██    ██        ██      ██   ██  ██████  ██      ███████ ███████ ███████  ██████  ██   ██ 
        -->
		<VueFinalModal
			v-model="showEditProfessorModal"
			classes="modal-container"
			content-class="modal-content"
		>
			<button
				class="modal__close"
				@click="showEditProfessorModal = false"
			>
				<i class="fa-solid fa-x"></i>
			</button>
			<span class="modal__title ps-1">Edit Professor</span>
			<div class="modal__content">
				<form @submit.prevent id="editProfessorForm"></form>
				<div class="m-0 row">
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="name"
							v-model="editProfessor.name"
							form="editProfessorForm"
						/>
						<label for="name">Name</label>
					</div>
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="title"
							v-model="editProfessor.title"
							form="editProfessorForm"
						/>
						<label for="title">Title</label>
					</div>
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="email"
							v-model="editProfessor.email"
							form="editProfessorForm"
						/>
						<label for="email">Email</label>
					</div>
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="phone"
							v-model="editProfessor.phone"
							form="editProfessorForm"
						/>
						<label for="phone">Phone</label>
					</div>
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="office"
							v-model="editProfessor.office"
							form="editProfessorForm"
						/>
						<label for="office">Office</label>
					</div>
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="slack"
							v-model="editProfessor.slack"
							form="editProfessorForm"
						/>
						<label for="slack">Slack</label>
					</div>
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="github"
							v-model="editProfessor.github"
							form="editProfessorForm"
						/>
						<label for="github">Github</label>
					</div>
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="linkedin"
							v-model="editProfessor.linkedin"
							form="editProfessorForm"
						/>
						<label for="linkedin">LinkedIn</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="pfp"
							v-model="editProfessor.pfp"
							form="editProfessorForm"
						/>
						<label for="pfp">Image Link</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="teachingimg"
							v-model="editProfessor.teachingimg"
							form="editProfessorForm"
						/>
						<label for="teachingimg">Teaching Image Link</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="quote"
							v-model="editProfessor.quote"
							form="editProfessorForm"
						/>
						<label for="quote">Quote</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="bio"
							v-model="editProfessor.bio"
							form="editProfessorForm"
						/>
						<label for="bio">Biography</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="interests"
							v-model="editProfessor.interests"
							form="editProfessorForm"
						/>
						<label for="interests">Interests</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="education"
							v-model="editProfessor.education"
							form="editProfessorForm"
						/>
						<label for="education">Education</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="awards"
							v-model="editProfessor.awards"
							form="editProfessorForm"
						/>
						<label for="awards">Honors/Awards</label>
					</div>
					<div class="form-floating p-1 col-12">
						<input
							type="text"
							class="form-control"
							id="publications"
							v-model="editProfessor.publications"
							form="editProfessorForm"
						/>
						<label for="publications">Publications</label>
					</div>
				</div>
			</div>
			<div class="modal__action">
				<button
					class="btn btn-md btn-primary me-2"
					@click="updateProfessor"
				>
					Save
				</button>
				<button
					class="btn btn-md btn-primary me-2"
					@click="showDeleteProfessorModal = true"
				>
					Delete
				</button>
				<button
					class="btn btn-md btn-primary"
					@click="
						showEditProfessorModal = false;
						editProfessor = {};
					"
				>
					Cancel
				</button>
			</div>
		</VueFinalModal>

		<!-- 
            ██████  ███████ ██      ███████ ████████ ███████     ██████  ██████   ██████  ███████ ███████ ███████ ███████  ██████  ██████  
            ██   ██ ██      ██      ██         ██    ██          ██   ██ ██   ██ ██    ██ ██      ██      ██      ██      ██    ██ ██   ██ 
            ██   ██ █████   ██      █████      ██    █████       ██████  ██████  ██    ██ █████   █████   ███████ ███████ ██    ██ ██████  
            ██   ██ ██      ██      ██         ██    ██          ██      ██   ██ ██    ██ ██      ██           ██      ██ ██    ██ ██   ██ 
            ██████  ███████ ███████ ███████    ██    ███████     ██      ██   ██  ██████  ██      ███████ ███████ ███████  ██████  ██   ██ 
         -->
		<VueFinalModal
			v-model="showDeleteProfessorModal"
			classes="modal-container"
			content-class="modal-content2"
		>
			<button
				class="modal__close"
				@click="showDeleteProfessorModal = false"
			>
				<i class="fa-solid fa-x"></i>
			</button>
			<span class="modal__title">Caution!</span>
			<div class="modal__content">
				Are you sure you want to delete this professor? This action is
				irreversible!
			</div>
			<div class="modal__action">
				<button
					class="btn btn-md btn-primary me-2"
					@click="deleteProfessor"
				>
					Delete
				</button>
				<button
					class="btn btn-md btn-primary"
					@click="showDeleteProfessorModal = false"
				>
					Cancel
				</button>
			</div>
		</VueFinalModal>
	</div>
</template>

<script>
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { VueFinalModal, ModalsContainer } from "vue-final-modal";
import {
	getFirestore,
	doc,
	setDoc,
	getDoc,
	getDocs,
	collection,
	addDoc,
	query,
	orderBy,
	where,
	updateDoc,
	deleteDoc,
} from "firebase/firestore";

export default {
	components: {
		VueFinalModal,
		ModalsContainer,
	},
	data() {
		return {
			db: {},

			showAddResearchProjectModal: false,
			showEditResearchProjectModal: false,
			showDeleteResearchProjectModal: false,
			researchProjects: {},
			researchProject: {},
			editResearchProject: {},

			showAddOfficerModal: false,
			showEditOfficerModal: false,
			showDeleteOfficerModal: false,
			officers: {},
			officer: {},
			editOfficer: {},

			showAddResourceModal: false,
			showEditResourceModal: false,
			showDeleteResourceModal: false,
			resources: {},
			resource: {},
			editResource: {},

			showAddStudentProjectModal: false,
			showEditStudentProjectModal: false,
			showDeleteStudentProjectModal: false,
			studentProjects: {},
			studentProject: {},
			editStudentProject: {},

			showAddTutorModal: false,
			showEditTutorModal: false,
			showDeleteTutorModal: false,
			tutors: {},
			tutor: {},
			editTutor: {},

			showAddProfessorModal: false,
			showEditProfessorModal: false,
			showDeleteProfessorModal: false,
			professors: {},
			professor: {},
			editProfessor: {},
		};
	},
	methods: {
		async addResearchProject() {
			this.showAddResearchProjectModal = false;
			await addDoc(collection(this.db, "researchProjects"), {
				title: this.researchProject.title
					? this.researchProject.title
					: "",
				abstract: this.researchProject.abstract
					? this.researchProject.abstract
					: "",
				students: this.researchProject.students
					? this.researchProject.students
					: "",
				faculty: this.researchProject.faculty
					? this.researchProject.faculty
					: "",
				publications: this.researchProject.publications
					? this.researchProject.publications
					: "",
				github: this.researchProject.github
					? this.researchProject.github
					: "",
				poster: this.researchProject.poster
					? this.researchProject.poster
					: "",
			});
			this.researchProject = {};
			await this.getResearchProjects();
		},
		openEditResearchProjectModal(currentResearchProject, id) {
			this.editResearchProject = currentResearchProject;
			this.editResearchProject.id = id;
			this.showEditResearchProjectModal = true;
		},
		async updateResearchProject() {
			this.showEditResearchProjectModal = false;
			await setDoc(
				doc(this.db, "researchProjects", this.editResearchProject.id),
				{
					title: this.editResearchProject.title
						? this.editResearchProject.title
						: "",
					abstract: this.editResearchProject.abstract
						? this.editResearchProject.abstract
						: "",
					students: this.editResearchProject.students
						? this.editResearchProject.students
						: "",
					faculty: this.editResearchProject.faculty
						? this.editResearchProject.faculty
						: "",
					publications: this.editResearchProject.publications
						? this.editResearchProject.publications
						: "",
					github: this.editResearchProject.github
						? this.editResearchProject.github
						: "",
					poster: this.editResearchProject.poster
						? this.editResearchProject.poster
						: "",
				}
			);
			this.editResearchProject = {};
			await this.getOResearchProject();
		},
		async deleteResearchProject() {
			this.showDeleteResearchProjectModal = false;
			this.showEditResearchProjectModal = false;
			await deleteDoc(
				doc(this.db, "researchProjects", this.editResearchProject.id)
			);
			delete this.researchProjects[this.editResearchProject.id];
			this.editResearchProject = {};
		},
		async getResearchProjects() {
			const data = await getDocs(collection(this.db, "researchProjects"));

			// Push each officer's data to the array
			data.forEach((doc) => {
				this.researchProjects[doc.id] = doc.data();
			});
		},

		async addOfficer() {
			this.showAddOfficerModal = false;
			await addDoc(collection(this.db, "CS-club-officers"), {
				name: this.officer.name ? this.officer.name : "",
				position: this.officer.position ? this.officer.position : "",
				picture: this.officer.picture ? this.officer.picture : "",
			});
			this.officer = {};
			await this.getOfficers();
		},
		openEditOfficerModal(currentOfficer, id) {
			this.editOfficer = currentOfficer;
			this.editOfficer.id = id;
			this.showEditOfficerModal = true;
		},
		async updateOfficer() {
			this.showEditOfficerModal = false;
			await setDoc(
				doc(this.db, "CS-club-officers", this.editOfficer.id),
				{
					name: this.editOfficer.name ? this.editOfficer.name : "",
					position: this.editOfficer.position
						? this.editOfficer.position
						: "",
					picture: this.editOfficer.picture
						? this.editOfficer.picture
						: "",
				}
			);
			this.editOfficer = {};
			await this.getOfficers();
		},
		async deleteOfficer() {
			this.showDeleteOfficerModal = false;
			this.showEditOfficerModal = false;
			await deleteDoc(
				doc(this.db, "CS-club-officers", this.editOfficer.id)
			);
			delete this.officers[this.editOfficer.id];
			this.editOfficer = {};
		},
		async getOfficers() {
			const data = await getDocs(collection(this.db, "CS-club-officers"));

			// Push each officer's data to the array
			data.forEach((doc) => {
				this.officers[doc.id] = doc.data();
			});
		},

		async addResource() {
			this.showAddResourceModal = false;
			await addDoc(collection(this.db, "advising-resources"), {
				name: this.resource.name ? this.resource.name : "",
				description: this.resource.description
					? this.resource.description
					: "",
				link: this.resource.link ? this.resource.link : "",
			});
			this.resource = {};
			await this.getResources();
		},
		openEditResourceModal(currentResource, id) {
			this.editResource = currentResource;
			this.editResource.id = id;
			this.showEditResourceModal = true;
		},
		async updateResource() {
			this.showEditResourceModal = false;
			await setDoc(
				doc(this.db, "advising-resources", this.editResource.id),
				{
					name: this.editResource.name ? this.editResource.name : "",
					description: this.editResource.description
						? this.editResource.description
						: "",
					link: this.editResource.link ? this.editResource.link : "",
				}
			);
			this.editResource = {};
			await this.getOResource();
		},
		async deleteResource() {
			this.showDeleteResourceModal = false;
			this.showEditResourceModal = false;
			await deleteDoc(
				doc(this.db, "advising-resources", this.editResource.id)
			);
			delete this.resources[this.editResource.id];
			this.editResource = {};
		},
		async getResources() {
			const data = await getDocs(
				collection(this.db, "advising-resources")
			);

			// Push each officer's data to the array
			data.forEach((doc) => {
				this.resources[doc.id] = doc.data();
			});
		},

		async addStudentProject() {
			this.showAddStudentProjectModal = false;
			await addDoc(collection(this.db, "studentProjects"), {
				title: this.studentProject.title
					? this.studentProject.title
					: "",
				description: this.studentProject.description
					? this.studentProject.description
					: "",
				students: this.studentProject.students
					? this.studentProject.students
					: "",
				github: this.studentProject.github
					? this.studentProject.github
					: "",
				is2280: this.studentProject.is2280 ? true : false,
			});
			this.studentProject = {};
			await this.getStudentProjects();
		},
		openEditStudentProjectModal(currentStudentProject, id) {
			this.editStudentProject = currentStudentProject;
			this.editStudentProject.id = id;
			this.showEditStudentProjectModal = true;
		},
		async updateStudentProject() {
			this.showEditStudentProjectModal = false;
			await setDoc(
				doc(this.db, "studentProjects", this.editStudentProject.id),
				{
					title: this.editStudentProject.title
						? this.editStudentProject.title
						: "",
					description: this.editStudentProject.description
						? this.editStudentProject.description
						: "",
					students: this.editStudentProject.students
						? this.editStudentProject.students
						: "",
					github: this.editStudentProject.github
						? this.editStudentProject.github
						: "",
					is2280: this.editStudentProject.is2280 ? true : false,
				}
			);
			this.editStudentProject = {};
			await this.getOStudentProject();
		},
		async deleteStudentProject() {
			this.showDeleteStudentProjectModal = false;
			this.showEditStudentProjectModal = false;
			await deleteDoc(
				doc(this.db, "studentProjects", this.editStudentProject.id)
			);
			delete this.studentProjects[this.editStudentProject.id];
			this.editStudentProject = {};
		},
		async getStudentProjects() {
			const data = await getDocs(collection(this.db, "studentProjects"));

			// Push each officer's data to the array
			data.forEach((doc) => {
				this.studentProjects[doc.id] = doc.data();
			});
		},

		async addTutor() {
			this.showAddTutorModal = false;
			await addDoc(collection(this.db, "cs-tutors"), {
				name: this.tutor.name ? this.tutor.name : "",
				picture: this.tutor.picture ? this.tutor.picture : "",
			});
			this.tutor = {};
			await this.getTutors();
		},
		openEditTutorModal(currentTutor, id) {
			this.editTutor = currentTutor;
			this.editTutor.id = id;
			this.showEditTutorModal = true;
		},
		async updateTutor() {
			this.showEditTutorModal = false;
			await setDoc(doc(this.db, "cs-tutors", this.editTutor.id), {
				name: this.editTutor.name ? this.editTutor.name : "",
				picture: this.editTutor.picture ? this.editTutor.picture : "",
			});
			this.editTutor = {};
			await this.getOTutor();
		},
		async deleteTutor() {
			this.showDeleteTutorModal = false;
			this.showEditTutorModal = false;
			await deleteDoc(doc(this.db, "cs-tutors", this.editTutor.id));
			delete this.tutors[this.editTutor.id];
			this.editTutor = {};
		},
		async getTutors() {
			const data = await getDocs(collection(this.db, "cs-tutors"));

			// Push each officer's data to the array
			data.forEach((doc) => {
				this.tutors[doc.id] = doc.data();
			});
		},

		async addProfessor() {
			this.showAddProfessorModal = false;
			const names = this.professor.name.split(" ");
			await setDoc(
				doc(this.db, "faculty", names[names.length - 1].toLowerCase()),
				{
					name: this.professor.name,
					title: this.professor.title ? this.professor.title : "",
					email: this.professor.email ? this.professor.email : "",
					phone: this.professor.phone ? this.professor.phone : "",
					office: this.professor.office ? this.professor.office : "",
					slack: this.professor.slack ? this.professor.slack : "",
					github: this.professor.github ? this.professor.github : "",
					linkedin: this.professor.linkedin
						? this.professor.linkedin
						: "",
					pfp: this.professor.pfp ? this.professor.pfp : "",
					teachingimg: this.professor.teachingimg
						? this.professor.teachingimg
						: "",
					quote: this.professor.quote ? this.professor.quote : "",
					bio: this.professor.bio ? this.professor.bio : "",
					interests: this.professor.interests
						? this.professor.interests
						: "",
					education: this.professor.education
						? this.professor.education
						: "",
					awards: this.professor.awards ? this.professor.awards : "",
					publications: this.professor.publications
						? this.professor.publications
						: "",
				}
			);
			this.professor = {};
			await this.getProfessors();
		},
		openEditProfessorModal(currentProfessor, id) {
			this.editProfessor = currentProfessor;
			this.editProfessor.id = id;
			this.showEditProfessorModal = true;
		},
		async updateProfessor() {
			this.showEditProfessorModal = false;
			await setDoc(doc(this.db, "faculty", this.editProfessor.id), {
				name: this.editProfessor.name ? this.editProfessor.name : "",
				title: this.editProfessor.title ? this.editProfessor.title : "",
				email: this.editProfessor.email ? this.editProfessor.email : "",
				phone: this.editProfessor.phone ? this.editProfessor.phone : "",
				office: this.editProfessor.office
					? this.editProfessor.office
					: "",
				slack: this.editProfessor.slack ? this.editProfessor.slack : "",
				github: this.editProfessor.github
					? this.editProfessor.github
					: "",
				linkedin: this.editProfessor.linkedin
					? this.editProfessor.linkedin
					: "",
				pfp: this.editProfessor.pfp ? this.editProfessor.pfp : "",
				teachingimg: this.editProfessor.teachingimg
					? this.editProfessor.teachingimg
					: "",
				quote: this.editProfessor.quote ? this.editProfessor.quote : "",
				bio: this.editProfessor.bio ? this.editProfessor.bio : "",
				interests: this.editProfessor.interests
					? this.editProfessor.interests
					: "",
				education: this.editProfessor.education
					? this.editProfessor.education
					: "",
				awards: this.editProfessor.awards
					? this.editProfessor.awards
					: "",
				publications: this.editProfessor.publications
					? this.editProfessor.publications
					: "",
			});
			this.editProfessor = {};
			await this.getOProfessor();
		},
		async deleteProfessor() {
			this.showDeleteProfessorModal = false;
			this.showEditProfessorModal = false;
			await deleteDoc(doc(this.db, "faculty", this.editProfessor.id));
			delete this.professors[this.editProfessor.id];
			this.editProfessor = {};
		},
		async getProfessors() {
			const data = await getDocs(collection(this.db, "faculty"));

			// Push each officer's data to the array
			data.forEach((doc) => {
				this.professors[doc.id] = doc.data();
			});
		},
	},
	async mounted() {
		// Your web app's Firebase configuration
		const firebaseConfig = {
			apiKey: "AIzaSyCsqL3m_B66Rfg7kT86tjEwJP8wXiFO4r4",
			authDomain: "fsc-cs.firebaseapp.com",
			projectId: "fsc-cs",
			storageBucket: "fsc-cs.appspot.com",
			messagingSenderId: "1016219790552",
			appId: "1:1016219790552:web:b6f8e86da78b92bf98bbad",
		};

		// Initialize Firebase
		const app = initializeApp(firebaseConfig);

		// Connect to firestore and get database
		this.db = getFirestore(app);

		await this.getResearchProjects();
		await this.getOfficers();
		await this.getResources();
		await this.getStudentProjects();
		await this.getTutors();
		await this.getProfessors();
	},
};
</script>

<style scoped>
:deep(.modal-container) {
	display: flex;
	justify-content: center;
	align-items: center;
}
:deep(.modal-content) {
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

:deep(.modal-content label) {
	color: black;
}

:deep(.modal-content2) {
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

:deep(.modal-content2 label) {
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
.adminPage {
	min-height: 100vh;
	background-color: rgb(55, 55, 60);
	padding-top: var(--navbar-height);
	color: white;
}
.card {
	color: black;
	transition: all ease-in-out 0.3s;
}

.card:hover {
	scale: 1.05;
}

h2 {
	display: inline;
}
</style>