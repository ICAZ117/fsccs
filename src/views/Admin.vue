<template>
	<div class="adminPage">
		<div class="container py-5">
			<div id="officers">
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
					@click="deleteOfficer"
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
					@click="deleteResource"
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
	</div>

	<div id="tutorModals">
		<!-- 
             █████  ██████  ██████      ██████  ███████ ███████  ██████  ██    ██ ██████   ██████ ███████ 
            ██   ██ ██   ██ ██   ██     ██   ██ ██      ██      ██    ██ ██    ██ ██   ██ ██      ██      
            ███████ ██   ██ ██   ██     ██████  █████   ███████ ██    ██ ██    ██ ██████  ██      █████   
            ██   ██ ██   ██ ██   ██     ██   ██ ██           ██ ██    ██ ██    ██ ██   ██ ██      ██      
            ██   ██ ██████  ██████      ██   ██ ███████ ███████  ██████   ██████  ██   ██  ██████ ███████ 
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
            ███████ ██████  ██ ████████     ██████  ███████ ███████  ██████  ██    ██ ██████   ██████ ███████ 
            ██      ██   ██ ██    ██        ██   ██ ██      ██      ██    ██ ██    ██ ██   ██ ██      ██      
            █████   ██   ██ ██    ██        ██████  █████   ███████ ██    ██ ██    ██ ██████  ██      █████   
            ██      ██   ██ ██    ██        ██   ██ ██           ██ ██    ██ ██    ██ ██   ██ ██      ██      
            ███████ ██████  ██    ██        ██   ██ ███████ ███████  ██████   ██████  ██   ██  ██████ ███████ 
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
					@click="deleteTutor"
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
	</div>

	<div id="professorModals">
		<!-- 
             █████  ██████  ██████      ██████  ███████ ███████  ██████  ██    ██ ██████   ██████ ███████ 
            ██   ██ ██   ██ ██   ██     ██   ██ ██      ██      ██    ██ ██    ██ ██   ██ ██      ██      
            ███████ ██   ██ ██   ██     ██████  █████   ███████ ██    ██ ██    ██ ██████  ██      █████   
            ██   ██ ██   ██ ██   ██     ██   ██ ██           ██ ██    ██ ██    ██ ██   ██ ██      ██      
            ██   ██ ██████  ██████      ██   ██ ███████ ███████  ██████   ██████  ██   ██  ██████ ███████ 
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
				<form @submit.prevent id="professorForm"></form>
				<div class="m-0 row">
					<div class="form-floating p-1 col-6">
						<input
							type="text"
							class="form-control"
							id="name"
							v-model="professor.name"
							form="professorForm"
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
					@click="addProfessor"
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
					@click="showAddProfessorModal = false"
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
					@click="deleteProfessor"
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

			showAddOfficerModal: false,
			showEditOfficerModal: false,
			officers: {},
			officer: {},
			editOfficer: {},

			showAddResourceModal: false,
			showEditResourceModal: false,
			resources: {},
			resource: {},
			editResource: {},

			showAddTutorModal: false,
			showEditTutorModal: false,
			tutors: {},
			tutor: {},
			editTutor: {},

			showAddProfessorModal: false,
			showEditProfessorModal: false,
			professors: {},
			professor: {},
			editProfessor: {},
		};
	},
	methods: {
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
			await addDoc(collection(this.db, "faculty"), {
				name: this.professor.name ? this.professor.name : "",
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
			});
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

		await this.getOfficers();
		await this.getResources();
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