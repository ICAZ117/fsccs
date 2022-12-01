<template>
	<div class="adminPage">
		<div class="container my-5">
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
				<div class="mx-0 px-0 row block-center">
					<div
						class="col-3"
						v-for="(officer, id) in officers"
						:key="id"
					>
						<div class="px-0 card">
							<img
								:src="officer.picture"
								alt=""
								height="300"
								style="object-fit: cover"
							/>
							<div class="card-body">
								Name: {{ officer.name }}
								<br />
								Position: {{ officer.position }}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="advising-resources">
				<div
					class="mt-5"
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
					>
						Add Officer
					</button>
				</div>
				<hr class="primary-hr" />
				<div class="mx-0 px-0 row block-center">
					<div
						class="col-3"
						v-for="(officer, id) in officers"
						:key="id"
					>
						<div class="px-0 card">
							<img :src="officer.picture" alt="" />
							<div class="card-body">{{ id }}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="modals">
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
					@click="showEditOfficerModal = false"
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
} from "firebase/firestore";

export default {
	components: {
		VueFinalModal,
		ModalsContainer,
	},
	data() {
		return {
			officers: {},
			showAddOfficerModal: false,
            showEditOfficerModal: false,
			officer: {},
		};
	},
	methods: {},
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
		const db = getFirestore(app);

		const data = await getDocs(collection(db, "CS-club-officers"));

		// Push each officer's data to the array
		data.forEach((doc) => {
			this.officers[doc.id] = doc.data();
		});
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
.adminPage {
	min-height: 100vh;
	background-color: rgb(55, 55, 60);
	padding-top: var(--navbar-height);
	color: white;
}
.card {
	color: black;
}

h2 {
	display: inline;
}
</style>