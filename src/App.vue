<template>
	<div v-if="!firestoreAdmin">
		<div class="applicationDisplay dark-scroll-bar" v-show="pageLoaded">
			<Navbar :authUser="authUser"></Navbar>
			<router-view v-slot="{ Component, route }">
				<div :key="route.name + pageLoaded" id="routerView">
					<component :is="Component"></component>
				</div>
			</router-view>
			<notifications position="bottom right" />
			<Footer></Footer>
		</div>
		<div id="loadingScreen" v-show="!pageLoaded">
			<Loader style="scale: 2"></Loader>
		</div>
		<div class="small-screen">
			Why yo screen so smol??????
			<img src="./assets/img/SmallScreen.gif" style="width: 100%" />
			Fr tho, your screen has to be at least 350px wide in order for us to
			display the website :/
		</div>
	</div>
	<button
		v-if="firestoreAdmin"
		@click="execute"
		class="btn btn-primary btn-lg"
	>
		Execute
	</button>
</template>

<script>
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Loader from "./components/Loader.vue";

export default {
	components: {
		Navbar,
		Footer,
		Loader,
	},
	data() {
		return {
			firestoreAdmin: false, // SET TO TRUE TO DISPLAY EXECUTE BUTTON
			pageLoaded: false, // SET TO FALSE TO DISPLAY LOADER
			authUser: null,
		};
	},
	methods: {
		async execute() {
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

			const courses = {
				ACC2111: {
					code: "ACC2111",
					name: "FNDTNS OF FINANCIAL ACCOU",
					credits: "4",
					buckets: ["ST:QUAN", "BSQuan"],
				},
				ARA1101: {
					code: "ARA1101",
					name: "FIRST SEMESTER ARABIC",
					credits: "4",
					buckets: ["BAFL"],
				},
				ARA1102: {
					code: "ARA1102",
					name: "SECOND SEMESTER ARABIC",
					credits: "4",
					buckets: ["BAFL"],
				},
				ARA2203: {
					code: "ARA2203",
					name: "SECOND YEAR ARABIC",
					credits: "4",
					buckets: ["BAFL"],
				},
				ARH1100: {
					code: "ARH1100",
					name: "SURVEY WSTRN ART/ARCHITEC",
					credits: "4",
					buckets: ["SW", "BAHA"],
				},
				ARH2700: {
					code: "ARH2700",
					name: "THE CONTEMPORARY ARTIST",
					credits: "4",
					buckets: ["BAHA"],
				},
				ARH3700: {
					code: "ARH3700",
					name: "HISTORY OF PHOTOGRAPHY",
					credits: "4",
					buckets: ["SW"],
				},
				ARH3710: {
					code: "ARH3710",
					name: "ANCIENT ART AND ARCHITECT",
					credits: "4",
					buckets: ["BAHA"],
				},
				ARH3720: {
					code: "ARH3720",
					name: "MEDIEVAL ART AND ARCHITEC",
					credits: "4",
					buckets: ["BAHA"],
				},
				ARH3740: {
					code: "ARH3740",
					name: "RENAISSANCE ART",
					credits: "4",
					buckets: ["BAHA"],
				},
				ARH3750: {
					code: "ARH3750",
					name: "BAROQUE/ROCOCO ART",
					credits: "4",
					buckets: ["BAHA"],
				},
				ARH3770: {
					code: "ARH3770",
					name: "18TH-19TH C ART",
					credits: "4",
					buckets: ["BAHA"],
				},
				ARH3780: {
					code: "ARH3780",
					name: "MODERN ART",
					credits: "4",
					buckets: ["BAHA"],
				},
				ARH3790: {
					code: "ARH3790",
					name: "CONTEMPORARY ART",
					credits: "4",
					buckets: ["BAHA"],
				},
				ARH4999: {
					code: "ARH4999",
					name: "SENIOR THESIS",
					credits: "4",
					buckets: ["ST:QUAL", "EffComC"],
				},
				ART1120: {
					code: "ART1120",
					name: "DESIGN FUNDAMENTALS",
					credits: "4",
					buckets: ["BAHA"],
				},
				ART1131: {
					code: "ART1131",
					name: "DRAWING I",
					credits: "4",
					buckets: ["BAHA"],
				},
				ART1132: {
					code: "ART1132",
					name: "DRAWING II",
					credits: "4",
					buckets: ["BAHA"],
				},
				ART1140: {
					code: "ART1140",
					name: "INTRO TO DIGITAL PHOTOGRA",
					credits: "4",
					buckets: ["BAHA"],
				},
				ART1160: {
					code: "ART1160",
					name: "NEW MEDIA",
					credits: "4",
					buckets: ["BAHA"],
				},
				ART2100: {
					code: "ART2100",
					name: "PAINTING I",
					credits: "4",
					buckets: ["BAHA"],
				},
				ART2110: {
					code: "ART2110",
					name: "PAINTING II",
					credits: "4",
					buckets: ["BAHA"],
				},
				ART2170: {
					code: "ART2170",
					name: "FIGURE DRAWING I",
					credits: "4",
					buckets: ["BAHA"],
				},
				ART2210: {
					code: "ART2210",
					name: "SCULPTURE I",
					credits: "4",
					buckets: ["BAHA"],
				},
				ART2220: {
					code: "ART2220",
					name: "CERAMICS I",
					credits: "4",
					buckets: ["BAHA"],
				},
				ART2310: {
					code: "ART2310",
					name: "PRINTMAKING I",
					credits: "4",
					buckets: ["BAHA"],
				},
				ART2410: {
					code: "ART2410",
					name: "TYPOGRAPHY AND LAYOUT",
					credits: "4",
					buckets: ["BAHA"],
				},
				ART2570: {
					code: "ART2570",
					name: "VIDEO ART",
					credits: "4",
					buckets: ["BAHA"],
				},
				ART3110: {
					code: "ART3110",
					name: "PAINTING III",
					credits: "4",
					buckets: ["BAHA"],
				},
				ART3120: {
					code: "ART3120",
					name: "CERAMICS II",
					credits: "4",
					buckets: ["BAHA"],
				},
				ART3150: {
					code: "ART3150",
					name: "WATERCOLOR",
					credits: "4",
					buckets: ["BAHA"],
				},
				ART3170: {
					code: "ART3170",
					name: "FIGURE DRAWING II",
					credits: "4",
					buckets: ["BAHA"],
				},
				ART3210: {
					code: "ART3210",
					name: "SCULPTURE II",
					credits: "4",
					buckets: ["BAHA"],
				},
				ART3310: {
					code: "ART3310",
					name: "PRINTMAKING II",
					credits: "4",
					buckets: ["BAHA"],
				},
				ART3367: {
					code: "ART3367",
					name: "MOTION PICTURES PRODUCTN",
					credits: "4",
					buckets: ["BACOM"],
				},
				ART3410: {
					code: "ART3410",
					name: "ADVANCED PRINT DESIGN",
					credits: "4",
					buckets: ["BAHA"],
				},
				ART3440: {
					code: "ART3440",
					name: "ADV DIGITAL PHOTOGRAPHY",
					credits: "4",
					buckets: ["BAHA"],
				},
				ART3510: {
					code: "ART3510",
					name: "WEB DESIGN",
					credits: "4",
					buckets: ["BAHA"],
				},
				ART4499: {
					code: "ART4499",
					name: "GRAPHIC DESIGN SR THESIS",
					credits: "4",
					buckets: ["ST:QUAL", "EffComC"],
				},
				ART4900: {
					code: "ART4900",
					name: "SENIOR MEDIA PROJECTS",
					credits: "2",
					buckets: ["EffComC"],
				},
				ART4901: {
					code: "ART4901",
					name: "SENIOR MEDIA PROJECTS",
					credits: "2",
					buckets: ["EffComC"],
				},
				ART4999: {
					code: "ART4999",
					name: "SENIOR SEMINAR",
					credits: "4",
					buckets: ["ST:QUAL", "EffComC"],
				},
				AST1010: {
					code: "AST1010",
					name: "DESCRIPTIVE ASTRONOMY",
					credits: "4",
					buckets: ["BSNS"],
				},
				BAHUM1: {
					code: "BAHUM1",
					name: "BA HUMANITIES REQ 1",
					credits: "4",
					buckets: ["BAHA"],
				},
				BAHUM2: {
					code: "BAHUM2",
					name: "BA HUMANITIES REQ 2",
					credits: "4",
					buckets: ["BAHA"],
				},
				BARQART: {
					code: "BARQART",
					name: "Art",
					credits: "4",
					buckets: ["BAHA"],
				},
				BIO1000: {
					code: "BIO1000",
					name: "BIOLOGY FOR YOUR LIFE",
					credits: "4",
					buckets: ["BSNS"],
				},
				BIO1500: {
					code: "BIO1500",
					name: "BIOLOGICAL ESSENTIALS",
					credits: "4",
					buckets: ["BSNS"],
				},
				BIO1520: {
					code: "BIO1520",
					name: "INTRO TO MARINE BIOLOGY",
					credits: "4",
					buckets: ["BSNS"],
				},
				BIO1600: {
					code: "BIO1600",
					name: "BIOLOGY II: BIOL DVRSTY",
					credits: "4",
					buckets: ["BSNS"],
				},
				BIO1820: {
					code: "BIO1820",
					name: "OCEANOGRAPHY",
					credits: "4",
					buckets: ["BSNS"],
				},
				BIO1900: {
					code: "BIO1900",
					name: "HUMAN GENETICS",
					credits: "4",
					buckets: ["BSNS"],
				},
				BIO2200: {
					code: "BIO2200",
					name: "ENVIRONMENTAL ISSUES",
					credits: "4",
					buckets: ["BSNS"],
				},
				BIO2201: {
					code: "BIO2201",
					name: "ENVIRONMENTAL SCIENCE",
					credits: "4",
					buckets: ["BSNS"],
				},
				BIO2214: {
					code: "BIO2214",
					name: "DISASTERS-CIVILIZATION-EN",
					credits: "4",
					buckets: ["BSNS", "BSSS"],
				},
				BIO2215: {
					code: "BIO2215",
					name: "HUMAN ANATOMY AND PHYSIOL",
					credits: "4",
					buckets: ["BSNS"],
				},
				BIO2216: {
					code: "BIO2216",
					name: "HUMAN ANATOMY AND PHYSIOL",
					credits: "4",
					buckets: ["BSNS"],
				},
				BIO2230: {
					code: "BIO2230",
					name: "GENERAL ZOOLOGY",
					credits: "4",
					buckets: ["BSNS"],
				},
				BIO2235: {
					code: "BIO2235",
					name: "GENERAL BOTANY",
					credits: "4",
					buckets: ["BSNS"],
				},
				BIO2280: {
					code: "BIO2280",
					name: "APPLIED MICROBIOLOGY",
					credits: "4",
					buckets: ["BSNS"],
				},
				BIO2520: {
					code: "BIO2520",
					name: "BIOLOGICL GEOGRAPHY & GIS",
					credits: "4",
					buckets: ["BSNS"],
				},
				BIO2750: {
					code: "BIO2750",
					name: "EVOLUTION",
					credits: "4",
					buckets: ["BSNS"],
				},
				BIO2770: {
					code: "BIO2770",
					name: "EXERCISE PHYSIOLOGY",
					credits: "4",
					buckets: ["BSLab"],
				},
				BIO2800: {
					code: "BIO2800",
					name: "MARINE BIOLOGY",
					credits: "4",
					buckets: ["BSNS"],
				},
				BIO3100: {
					code: "BIO3100",
					name: "PLANT TAXONOMY",
					credits: "4",
					buckets: ["BSNS"],
				},
				BIO3150: {
					code: "BIO3150",
					name: "ECOLOGY",
					credits: "4",
					buckets: ["BSLab"],
				},
				BIO3215: {
					code: "BIO3215",
					name: "ADV HUMAN ANAT/PHYS I",
					credits: "4",
					buckets: ["BSNS"],
				},
				BIO3216: {
					code: "BIO3216",
					name: "ADV HUMAN ANAT/PHYS II",
					credits: "4",
					buckets: ["BSNS"],
				},
				BIO3302: {
					code: "BIO3302",
					name: "PLANT NUTRITION",
					credits: "4",
					buckets: ["BSLab"],
				},
				BIO3316: {
					code: "BIO3316",
					name: "TROPICAL ECOLOGY",
					credits: "4",
					buckets: ["BSLab", "BSNS"],
				},
				BIO3360: {
					code: "BIO3360",
					name: "MEDICAL BOTANY",
					credits: "4",
					buckets: ["BSNS"],
				},
				BIO3361: {
					code: "BIO3361",
					name: "BIOCHEMISTRY I",
					credits: "4",
					buckets: ["BSLab"],
				},
				BIO3362: {
					code: "BIO3362",
					name: "BIOCHEM: MOLECULAR BIO",
					credits: "4",
					buckets: ["BSLab"],
				},
				BIO3378: {
					code: "BIO3378",
					name: "DIALOGUES/SCIENCE/RELIGN",
					credits: "4",
					buckets: ["BSLab", "SW", "MV", "BAREL"],
				},
				BIO3700: {
					code: "BIO3700",
					name: "GENETICS",
					credits: "4",
					buckets: ["BSNS"],
				},
				BIO3710: {
					code: "BIO3710",
					name: "MICROBIOLOGY",
					credits: "4",
					buckets: ["BSNS"],
				},
				BIO3800: {
					code: "BIO3800",
					name: "CELL BIOLOGY",
					credits: "4",
					buckets: ["BSNS"],
				},
				BIO3900: {
					code: "BIO3900",
					name: "ANIMAL BEHAVIOR",
					credits: "4",
					buckets: ["BSNS"],
				},
				BIO4461: {
					code: "BIO4461",
					name: "RESEARCH-ECOLOGY",
					credits: "4",
					buckets: ["EffComC"],
				},
				BIO4462: {
					code: "BIO4462",
					name: "RESEARCH-ECOLOGY",
					credits: "4",
					buckets: ["EffComC"],
				},
				BIO4561: {
					code: "BIO4561",
					name: "RESEARCH-MOLECULAR BIOLOG",
					credits: "4",
					buckets: ["EffComC"],
				},
				BIO4562: {
					code: "BIO4562",
					name: "RESEARCH-MOLECULAR BIOLOG",
					credits: "4",
					buckets: ["EffComC"],
				},
				BIO4661: {
					code: "BIO4661",
					name: "SITE-SPECIFIC RESRCH/BIO",
					credits: "6",
					buckets: ["EffComC"],
				},
				BIO4662: {
					code: "BIO4662",
					name: "SITE-SPECIFIC RESRCH/BIO",
					credits: "6",
					buckets: ["EffComC"],
				},
				BUS3311: {
					code: "BUS3311",
					name: "LEGAL ENVIRONMENT OF BUSI",
					credits: "4",
					buckets: ["ST:QUAL"],
				},
				BUS3320: {
					code: "BUS3320",
					name: "APPL STATS AND ANLYT BUS",
					credits: "4",
					buckets: ["ST:QUAN", "BSQuan", "BSSS"],
				},
				BUS4430: {
					code: "BUS4430",
					name: "BUS ETHICS COMM-RISK MAN",
					credits: "4",
					buckets: ["MV"],
				},
				BUS4999: {
					code: "BUS4999",
					name: "SEMINAR/STRATEGIC MNGMNT",
					credits: "4",
					buckets: ["EffComC"],
				},
				CHE1000: {
					code: "CHE1000",
					name: "PREP FOR PRIN OF CHEMISTR",
					credits: "4",
					buckets: ["BSLab"],
				},
				CHE1005: {
					code: "CHE1005",
					name: "CHEM OF FOOD & COOKING",
					credits: "4",
					buckets: ["BSLab"],
				},
				CHE1011: {
					code: "CHE1011",
					name: "CHEMICAL FOUNDATIONS I",
					credits: "4",
					buckets: ["BSLab"],
				},
				CHE1012: {
					code: "CHE1012",
					name: "CHEMICAL FOUNDATIONS II",
					credits: "4",
					buckets: ["BSLab"],
				},
				CHE1111: {
					code: "CHE1111",
					name: "PRINCIPLES OF CHEMISTRY I",
					credits: "4",
					buckets: ["BSLab"],
				},
				CHE1112: {
					code: "CHE1112",
					name: "PRIN OF CHEMISTRY II",
					credits: "4",
					buckets: ["BSLab"],
				},
				CHE2110: {
					code: "CHE2110",
					name: "PHYSIOLOGICAL CHEMISTRY",
					credits: "4",
					buckets: ["BSLab"],
				},
				CHE2221: {
					code: "CHE2221",
					name: "ORGANIC CHEMISTRY I",
					credits: "4",
					buckets: ["BSLab"],
				},
				CHE2222: {
					code: "CHE2222",
					name: "ORGANIC CHEMISTRY II",
					credits: "4",
					buckets: ["BSLab"],
				},
				CHE2275: {
					code: "CHE2275",
					name: "FORENSIC CHEMISTRY",
					credits: "4",
					buckets: ["BSLab"],
				},
				CHE2335: {
					code: "CHE2335",
					name: "ANALYTICAL CHEMISTRY",
					credits: "4",
					buckets: ["BSLab"],
				},
				CHE2355: {
					code: "CHE2355",
					name: "DESCRIPTIVE INORGANIC CHE",
					credits: "4",
					buckets: ["BSLab"],
				},
				CHE3341: {
					code: "CHE3341",
					name: "PHYSICAL CHEMISTRY I",
					credits: "4",
					buckets: ["BSLab"],
				},
				CHE3342: {
					code: "CHE3342",
					name: "PHYSICAL CHEMISTRY II",
					credits: "4",
					buckets: ["BSLab"],
				},
				CHE3361: {
					code: "CHE3361",
					name: "BIOCHEMISTRY I",
					credits: "4",
					buckets: ["BSLab"],
				},
				CHE3362: {
					code: "CHE3362",
					name: "BIOCHEM: MOLECULAR BIO",
					credits: "4",
					buckets: ["BSLab"],
				},
				CHE4410: {
					code: "CHE4410",
					name: "INTRODUCTION TO RESEARCH",
					credits: "2",
					buckets: ["EffComC"],
				},
				CHE4960: {
					code: "CHE4960",
					name: "INTERNSHIP IN CHEMISTRY",
					credits: "2",
					buckets: ["EffComC"],
				},
				CHE4999: {
					code: "CHE4999",
					name: "SENIOR RESEARCH",
					credits: "2",
					buckets: ["EffComC"],
				},
				CHN1101: {
					code: "CHN1101",
					name: "FIRST SEMESTER CHINESE",
					credits: "4",
					buckets: ["BAFL"],
				},
				CHN1102: {
					code: "CHN1102",
					name: "SECOND SEMESTER CHINESE",
					credits: "4",
					buckets: ["BAFL"],
				},
				CHN2203: {
					code: "CHN2203",
					name: "SECOND YEAR CHINESE",
					credits: "4",
					buckets: ["BAFL"],
				},
				CIT4999: {
					code: "CIT4999",
					name: "CITRUS PRDCTN/BUS PRACT",
					credits: "4",
					buckets: ["EffComC"],
				},
				COM1100: {
					code: "COM1100",
					name: "INTRO TO COMMUNICATION",
					credits: "4",
					buckets: ["BACOM"],
				},
				COM1500: {
					code: "COM1500",
					name: "FUNDAMENTALS OF SPEECH",
					credits: "4",
					buckets: ["BACOM", "EffComB"],
				},
				COM1600: {
					code: "COM1600",
					name: "FORENSICS PRACTICUM",
					credits: "2",
					buckets: ["BACOM", "EffComB"],
				},
				COM1601: {
					code: "COM1601",
					name: "FORENSICS PRACTICUM",
					credits: "2",
					buckets: ["BACOM", "EffComB"],
				},
				COM2100: {
					code: "COM2100",
					name: "MASS MEDIA AND SOCIETY",
					credits: "4",
					buckets: ["BACOM", "SW"],
				},
				COM2101: {
					code: "COM2101",
					name: "NEWS MEDIA PRACTICUM I",
					credits: "4",
					buckets: ["BACOM"],
				},
				COM2102: {
					code: "COM2102",
					name: "NEWS MEDIA PRACTICUM II",
					credits: "4",
					buckets: ["BACOM"],
				},
				COM2110: {
					code: "COM2110",
					name: "MEDIA WRITING",
					credits: "4",
					buckets: ["BACOM"],
				},
				COM2200: {
					code: "COM2200",
					name: "ADVANCED PUBLIC SPEAKING",
					credits: "4",
					buckets: ["BACOM"],
				},
				COM2250: {
					code: "COM2250",
					name: "INTERPERSONAL COMMUNICATI",
					credits: "4",
					buckets: ["BACOM", "SW", "EffComB"],
				},
				COM2260: {
					code: "COM2260",
					name: "SMALL GROUP COMMUNICATION",
					credits: "4",
					buckets: ["BACOM", "SW"],
				},
				COM2270: {
					code: "COM2270",
					name: "INTERCULTURAL COMM",
					credits: "4",
					buckets: ["SW", "MV", "BSSS"],
				},
				COM2301: {
					code: "COM2301",
					name: "NEWS MEDIA PRACTICUM III",
					credits: "4",
					buckets: ["BACOM"],
				},
				COM2302: {
					code: "COM2302",
					name: "NEWS MEDIA PRACTICUM IV",
					credits: "4",
					buckets: ["BACOM"],
				},
				COM2400: {
					code: "COM2400",
					name: "PRIN OF ADVERTISING & PR",
					credits: "4",
					buckets: ["BACOM"],
				},
				COM2500: {
					code: "COM2500",
					name: "VISUAL COMMUNICATION",
					credits: "4",
					buckets: ["BACOM"],
				},
				COM3101: {
					code: "COM3101",
					name: "NEWS MEDIA PRACTICUM III",
					credits: "4",
					buckets: ["BACOM"],
				},
				COM3102: {
					code: "COM3102",
					name: "NEWS MEDIA PRACTICUM IV",
					credits: "4",
					buckets: ["BACOM"],
				},
				COM3200: {
					code: "COM3200",
					name: "PERSUASION",
					credits: "4",
					buckets: ["BACOM", "SW", "EffComB"],
				},
				COM3210: {
					code: "COM3210",
					name: "ORGANZATIONAL COMMUNICATI",
					credits: "4",
					buckets: ["BACOM", "SW"],
				},
				COM3300: {
					code: "COM3300",
					name: "NEWS REPORTING",
					credits: "4",
					buckets: ["BACOM"],
				},
				COM3310: {
					code: "COM3310",
					name: "BROADCAST WRITING",
					credits: "4",
					buckets: ["BACOM"],
				},
				COM3320: {
					code: "COM3320",
					name: "INTRO TO BROADCAST JOURNA",
					credits: "4",
					buckets: ["BACOM"],
				},
				COM3340: {
					code: "COM3340",
					name: "VIDEO PRODUCTION",
					credits: "4",
					buckets: ["BACOM"],
				},
				COM3353: {
					code: "COM3353",
					name: "EDITING FOR MEDIA",
					credits: "4",
					buckets: ["BACOM"],
				},
				COM3355: {
					code: "COM3355",
					name: "PUBLICATN DESIGN/PRODUCTN",
					credits: "4",
					buckets: ["BACOM"],
				},
				COM3360: {
					code: "COM3360",
					name: "ONLINE MEDIA",
					credits: "4",
					buckets: ["BACOM"],
				},
				COM3370: {
					code: "COM3370",
					name: "PHOTOJOURNALISM",
					credits: "4",
					buckets: ["BACOM"],
				},
				COM3410: {
					code: "COM3410",
					name: "ADVERTISING CREATIVE I",
					credits: "4",
					buckets: ["BACOM"],
				},
				COM3420: {
					code: "COM3420",
					name: "ADVERTISING WRITING",
					credits: "4",
					buckets: ["BACOM"],
				},
				COM3450: {
					code: "COM3450",
					name: "PUBLIC RELATIONS WRITING",
					credits: "4",
					buckets: ["BACOM"],
				},
				COM3500: {
					code: "COM3500",
					name: "ADVANCED DESKTOP PUBLISHI",
					credits: "4",
					buckets: ["BACOM"],
				},
				COM3900: {
					code: "COM3900",
					name: "SPECIAL TOPICS IN COMMUNI",
					credits: "4",
					buckets: ["BACOM"],
				},
				COM3905: {
					code: "COM3905",
					name: "POLITICS AND THE MEDIA",
					credits: "4",
					buckets: ["SW", "ST:QUAL"],
				},
				COM4350: {
					code: "COM4350",
					name: "SOCIAL MEDIA STRATEGIES",
					credits: "4",
					buckets: ["BACOM"],
				},
				COM4500: {
					code: "COM4500",
					name: "COMMUNICATION LAW-ETHICS",
					credits: "4",
					buckets: ["EffComC"],
				},
				COM4999: {
					code: "COM4999",
					name: "SPEECH-MASS COMMUNICATN T",
					credits: "4",
					buckets: ["EffComC"],
				},
				CRM2280: {
					code: "CRM2280",
					name: "INTRODUCTION TO CRIMINAL",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				CRM3303: {
					code: "CRM3303",
					name: "SOCIOLOGY OF DEVIANT BEHA",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS"],
				},
				CRM3305: {
					code: "CRM3305",
					name: "RACE CULTURE AND HUMAN R",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS"],
				},
				CRM3310: {
					code: "CRM3310",
					name: "CRIME SCENE INVESTIGATION",
					credits: "4",
					buckets: ["BSSS"],
				},
				CRM3340: {
					code: "CRM3340",
					name: "CRIMINOLOGY",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				CRM3350: {
					code: "CRM3350",
					name: "POLICING IN AMERICAN SOCI",
					credits: "4",
					buckets: ["BSSS"],
				},
				CRM3360: {
					code: "CRM3360",
					name: "JUVENILE DELINQUENCY",
					credits: "4",
					buckets: ["BSSS"],
				},
				CRM3385: {
					code: "CRM3385",
					name: "SELECTED TOPICS: CRM/SOC",
					credits: "4",
					buckets: ["BSSS"],
				},
				CRM4420: {
					code: "CRM4420",
					name: "METHODS OF SOCIAL RESEARC",
					credits: "4",
					buckets: ["SW", "ST:QUAN", "BSQuan"],
				},
				CRM4999: {
					code: "CRM4999",
					name: "SEMINAR IN CRIMINOLOGY",
					credits: "4",
					buckets: ["EffComC"],
				},
				CSC2100: {
					code: "CSC2100",
					name: "DISCRETE STRUCTURES",
					credits: "4",
					buckets: ["ST:QUAN", "BSQuan"],
				},
				CSC2231: {
					code: "CSC2231",
					name: "PROGRAMMING AND DATA STRU",
					credits: "4",
					buckets: ["BSQuan"],
				},
				CSC2232: {
					code: "CSC2232",
					name: "PROGRAMMING-DATA STRUCTUR",
					credits: "4",
					buckets: ["BSQuan"],
				},
				CSC2280: {
					code: "CSC2280",
					name: "INTRO TO COMPUTER SCIENCE",
					credits: "4",
					buckets: ["BSQuan"],
				},
				CSC2281: {
					code: "CSC2281",
					name: "PROGRAMMG/DATA STRUCTURES",
					credits: "4",
					buckets: ["BSQuan"],
				},
				CSC3233: {
					code: "CSC3233",
					name: "PROGRAMG/DATA STRCTR III",
					credits: "4",
					buckets: ["BSQuan"],
				},
				CSC3310: {
					code: "CSC3310",
					name: "COMPUTR ORGANIZATN & ARCH",
					credits: "4",
					buckets: ["BSQuan"],
				},
				CSC3335: {
					code: "CSC3335",
					name: "DATABASE ANALYSIS AND DES",
					credits: "4",
					buckets: ["BSQuan"],
				},
				CSC3336: {
					code: "CSC3336",
					name: "WEB APPLICATIONS",
					credits: "4",
					buckets: ["BSQuan"],
				},
				CSC3340: {
					code: "CSC3340",
					name: "DATABASE MANAGMNT SYSTEMS",
					credits: "4",
					buckets: ["BSQuan"],
				},
				CSC3350: {
					code: "CSC3350",
					name: "COMPUTER GAME DESIGN",
					credits: "4",
					buckets: ["BSQuan", "EffComB"],
				},
				CSC3370: {
					code: "CSC3370",
					name: "PROGRAMMING LANGUAGE CONC",
					credits: "4",
					buckets: ["BSQuan"],
				},
				CSC3380: {
					code: "CSC3380",
					name: "ANALYSIS OF ALGORITHMS",
					credits: "4",
					buckets: ["BSQuan"],
				},
				CSC3400: {
					code: "CSC3400",
					name: "SOFTWARE ENGINEERING",
					credits: "4",
					buckets: ["BSQuan"],
				},
				CSC3510: {
					code: "CSC3510",
					name: "ARTIFICIAL INTELLIGENCE",
					credits: "4",
					buckets: ["BSQuan"],
				},
				CSC3520: {
					code: "CSC3520",
					name: "MACHINE LEARNING",
					credits: "4",
					buckets: ["BSQuan"],
				},
				CSC3610: {
					code: "CSC3610",
					name: "INTRO TO WEB DEVELOPMENT",
					credits: "4",
					buckets: ["BSQuan"],
				},
				CSC3620: {
					code: "CSC3620",
					name: "WEB APPLCTN ARCHITECTURES",
					credits: "4",
					buckets: ["BSQuan"],
				},
				CSC3710: {
					code: "CSC3710",
					name: "INTRO TO PARALLEL COMPUTG",
					credits: "4",
					buckets: ["BSQuan"],
				},
				CSC3720: {
					code: "CSC3720",
					name: "APPS OF PARALLEL COMPUTG",
					credits: "4",
					buckets: ["BSQuan"],
				},
				CSC3951: {
					code: "CSC3951",
					name: "COMPUTER SCIENCE RESEARCH",
					credits: "4",
					buckets: ["BSQuan"],
				},
				CSC4400: {
					code: "CSC4400",
					name: "SOFTWARE ENGINEERING",
					credits: "4",
					buckets: ["BSQuan", "EffComC"],
				},
				CSC4410: {
					code: "CSC4410",
					name: "OPERATING SYSTEMS-CONCURR",
					credits: "4",
					buckets: ["BSQuan"],
				},
				CSC4510: {
					code: "CSC4510",
					name: "ADV TOPCS ARTFCL INTLLGNC",
					credits: "4",
					buckets: ["BSQuan"],
				},
				CSC4610: {
					code: "CSC4610",
					name: "ADV TOPCS WEB DEVELOPMENT",
					credits: "4",
					buckets: ["BSQuan"],
				},
				CSC4640: {
					code: "CSC4640",
					name: "SELECTED TOPICS IN CSC",
					credits: "4",
					buckets: ["BSQuan"],
				},
				CSC4710: {
					code: "CSC4710",
					name: "ADV TOPCS PARALLEL COMPTG",
					credits: "4",
					buckets: ["BSQuan"],
				},
				CSC4899: {
					code: "CSC4899",
					name: "COMPUTER SCI SR PROJECT",
					credits: "4",
					buckets: ["EffComC"],
				},
				DAN1643: {
					code: "DAN1643",
					name: "MODERN DANCE I",
					credits: "3",
					buckets: ["PW"],
				},
				DAN3672: {
					code: "DAN3672",
					name: "DANCE HISTORY II",
					credits: "3",
					buckets: ["EffComC"],
				},
				ECO2010: {
					code: "ECO2010",
					name: "ESSENTIALS OF ECONOMICS",
					credits: "4",
					buckets: ["BSSS"],
				},
				ECO2205: {
					code: "ECO2205",
					name: "PRINCIPLES OF MICROECONOM",
					credits: "4",
					buckets: ["BSSS"],
				},
				ECO2207: {
					code: "ECO2207",
					name: "PRINCIPLES OF MACROECONOM",
					credits: "4",
					buckets: ["BSSS"],
				},
				ECO3150: {
					code: "ECO3150",
					name: "ECOLOGY",
					credits: "4",
					buckets: ["BSLab"],
				},
				ECO3305: {
					code: "ECO3305",
					name: "MICROECONOMIC THEORY",
					credits: "4",
					buckets: ["BSSS"],
				},
				ECO3307: {
					code: "ECO3307",
					name: "MACROECONOMIC THEORY",
					credits: "4",
					buckets: ["BSSS"],
				},
				ECO3308: {
					code: "ECO3308",
					name: "MONETARY ECONOMICS",
					credits: "4",
					buckets: ["BSSS"],
				},
				ECO3316: {
					code: "ECO3316",
					name: "TROPICAL ECOLOGY",
					credits: "4",
					buckets: ["BSLab"],
				},
				ECO3319: {
					code: "ECO3319",
					name: "LABOR ECONOMICS",
					credits: "4",
					buckets: ["BSSS"],
				},
				ECO3320: {
					code: "ECO3320",
					name: "APPL STATS AND ANLYT BUS",
					credits: "4",
					buckets: ["ST:QUAN", "BSQuan", "BSSS"],
				},
				ECO3345: {
					code: "ECO3345",
					name: "ECONOMICS AND THE ENVIRON",
					credits: "4",
					buckets: ["BSSS"],
				},
				ECO4200: {
					code: "ECO4200",
					name: "BEHAVIORAL ECONOMICS",
					credits: "4",
					buckets: ["BSSS"],
				},
				ECO4550: {
					code: "ECO4550",
					name: "COMPRTV ECONOMC INSTITUTN",
					credits: "4",
					buckets: ["BSSS", "EffComC"],
				},
				EDU4990: {
					code: "EDU4990",
					name: "SENIOR INTERNSHIP",
					credits: "4",
					buckets: ["EffComC"],
				},
				ENG1000: {
					code: "ENG1000",
					name: "INTRODUCTION TO COLLEGE E",
					credits: "4",
					buckets: ["BAENG"],
				},
				ENG1003: {
					code: "ENG1003",
					name: "ENGAGING THE WRITTEN WORD",
					credits: "4",
					buckets: ["EffComA", "BAENG"],
				},
				ENG1005: {
					code: "ENG1005",
					name: "WRITING ABOUT TOPICS",
					credits: "4",
					buckets: ["EffComA", "BAENG"],
				},
				ENG1130: {
					code: "ENG1130",
					name: "INTRODUCTION TO ENGLISH S",
					credits: "4",
					buckets: ["EffComA", "BAENG"],
				},
				ENG2004: {
					code: "ENG2004",
					name: "LITERARY LIFE",
					credits: "4",
					buckets: ["ST:QUAL", "BAENG", "EffComB"],
				},
				ENG2023: {
					code: "ENG2023",
					name: "CREATIVE LITERATURE/WRITG",
					credits: "4",
					buckets: ["BAENG"],
				},
				ENG2305: {
					code: "ENG2305",
					name: "MASTERPIECES OF WORLD LIT",
					credits: "4",
					buckets: ["SW", "BAENG"],
				},
				ENG2309: {
					code: "ENG2309",
					name: "AMERICAN LITERATURE I",
					credits: "4",
					buckets: ["SW", "BAENG"],
				},
				ENG2310: {
					code: "ENG2310",
					name: "AMERICAN LITERATURE II",
					credits: "4",
					buckets: ["BAENG"],
				},
				ENG2313: {
					code: "ENG2313",
					name: "BRITISH LIT/MDVL-NEOCLSSC",
					credits: "4",
					buckets: ["SW", "BAENG"],
				},
				ENG2314: {
					code: "ENG2314",
					name: "BRITISH LIT/RMNTC-PSTMDRN",
					credits: "4",
					buckets: ["SW", "BAENG"],
				},
				ENG3100: {
					code: "ENG3100",
					name: "STUDIES IN LITERARY THEOR",
					credits: "4",
					buckets: ["ST:QUAL"],
				},
				ENG3200: {
					code: "ENG3200",
					name: "WRITING FOR BUSINESS",
					credits: "4",
					buckets: ["BAENG", "EffComB"],
				},
				ENG3217: {
					code: "ENG3217",
					name: "CREATIVE NONFICTION WRITI",
					credits: "4",
					buckets: ["EffComC", "BAENG"],
				},
				ENG3219: {
					code: "ENG3219",
					name: "PERSUASIVE WRITING",
					credits: "4",
					buckets: ["ST:QUAL", "EffComC", "BAENG"],
				},
				ENG3235: {
					code: "ENG3235",
					name: "CREATIVE WRITING: POETRY",
					credits: "4",
					buckets: ["ST:QUAL", "BAENG"],
				},
				ENG3236: {
					code: "ENG3236",
					name: "CREATIVE WRITING: FICTION",
					credits: "4",
					buckets: ["ST:QUAL", "BAENG"],
				},
				ENG3263: {
					code: "ENG3263",
					name: "RHETORIC AND WRITING",
					credits: "4",
					buckets: ["ST:QUAL", "EffComC"],
				},
				ENG3304: {
					code: "ENG3304",
					name: "MAJOR AUTHORS",
					credits: "4",
					buckets: ["BAENG"],
				},
				ENG3320: {
					code: "ENG3320",
					name: "SPEC TOPICS/MEDIA STUDIES",
					credits: "4",
					buckets: ["EffComC", "BAENG"],
				},
				ENG3340: {
					code: "ENG3340",
					name: "MYTH AND LEGEND",
					credits: "4",
					buckets: ["BAENG"],
				},
				ENG3370: {
					code: "ENG3370",
					name: "GENDER IN LITERATURE",
					credits: "4",
					buckets: ["BAENG"],
				},
				ENG4209: {
					code: "ENG4209",
					name: "SPECIAL TOPICS/NONFICTION",
					credits: "4",
					buckets: ["EffComC"],
				},
				ENG4999: {
					code: "ENG4999",
					name: "SENIOR SEMINAR",
					credits: "4",
					buckets: ["EffComC"],
				},
				EXS2760: {
					code: "EXS2760",
					name: "SPORTS NUTRITN/SUPPLMNTTN",
					credits: "4",
					buckets: ["PW"],
				},
				EXS2770: {
					code: "EXS2770",
					name: "EXERCISE PHYSIOLOGY",
					credits: "4",
					buckets: ["BSLab"],
				},
				EXS4725: {
					code: "EXS4725",
					name: "RSRCH MTHDS/EXRCS/HMN PRF",
					credits: "4",
					buckets: ["EffComC"],
				},
				FRE1101: {
					code: "FRE1101",
					name: "FIRST YEAR FRENCH",
					credits: "4",
					buckets: ["SW", "BAFL", "ST:QUAL"],
				},
				FRE1102: {
					code: "FRE1102",
					name: "FIRST YEAR FRENCH",
					credits: "4",
					buckets: ["BAFL"],
				},
				FRE2203: {
					code: "FRE2203",
					name: "SECOND YEAR FRENCH",
					credits: "4",
					buckets: ["BAFL"],
				},
				GEO3320: {
					code: "GEO3320",
					name: "CULTURAL GEOGRAPHY",
					credits: "4",
					buckets: ["BSSS"],
				},
				GEO3340: {
					code: "GEO3340",
					name: "WORLD REGIONAL GEOGRAPHY",
					credits: "4",
					buckets: ["BSSS"],
				},
				GER1101: {
					code: "GER1101",
					name: "FIRST YEAR GERMAN",
					credits: "4",
					buckets: ["BAFL"],
				},
				GER1102: {
					code: "GER1102",
					name: "FIRST YEAR GERMAN",
					credits: "4",
					buckets: ["BAFL"],
				},
				GER2203: {
					code: "GER2203",
					name: "SECOND YEAR GERMAN",
					credits: "4",
					buckets: ["BAFL"],
				},
				GRE1101: {
					code: "GRE1101",
					name: "HELLENISTIC GREEK I",
					credits: "4",
					buckets: ["BAFL"],
				},
				GRE1102: {
					code: "GRE1102",
					name: "HELLENISTIC GREEK II",
					credits: "4",
					buckets: ["BAFL"],
				},
				GRE2203: {
					code: "GRE2203",
					name: "READINGS IN GREEK",
					credits: "4",
					buckets: ["BAFL"],
				},
				HCA4999: {
					code: "HCA4999",
					name: "SEMINAR STRATEGIC MNGMNT",
					credits: "4",
					buckets: ["EffComC"],
				},
				HCM4508: {
					code: "HCM4508",
					name: "MEASUREMENT AND EPIDEMIOL",
					credits: "4",
					buckets: ["BSQuan"],
				},
				HIS1100: {
					code: "HIS1100",
					name: "THE ANCIENT WORLD",
					credits: "4",
					buckets: ["SW", "BSSS", "EffComB"],
				},
				HIS1115: {
					code: "HIS1115",
					name: "WESTERN CIVILIZATION TO 1",
					credits: "4",
					buckets: ["SW", "BSSS", "EffComB"],
				},
				HIS1125: {
					code: "HIS1125",
					name: "WESTERN CIVILIZATION SINC",
					credits: "4",
					buckets: ["SW", "BSSS", "EffComB"],
				},
				HIS1200: {
					code: "HIS1200",
					name: "MAKING OF THE MODERN WRLD",
					credits: "4",
					buckets: ["SW", "BSSS", "EffComB"],
				},
				HIS1300: {
					code: "HIS1300",
					name: "THE MODERN WORLD",
					credits: "4",
					buckets: ["SW", "BSSS", "EffComB"],
				},
				HIS2215: {
					code: "HIS2215",
					name: "UNITED STATES HISTORY I",
					credits: "4",
					buckets: ["SW", "BSSS", "EffComB"],
				},
				HIS2225: {
					code: "HIS2225",
					name: "UNITED STATES HISTORY II",
					credits: "4",
					buckets: ["SW", "BSSS", "EffComB"],
				},
				HIS3115: {
					code: "HIS3115",
					name: "HIS OF EARLY MDRN EUROPE",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				HIS3165: {
					code: "HIS3165",
					name: "HISTORY OF MODERN EUROPE",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				HIS3175: {
					code: "HIS3175",
					name: "UNITED STATES FOREIGN POL",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				HIS3215: {
					code: "HIS3215",
					name: "HISTORY OF RUSSIA-SOVIET",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				HIS3225: {
					code: "HIS3225",
					name: "MODERN AMERICA 1945-PRSN",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				HIS3231: {
					code: "HIS3231",
					name: "HISTORY OF THE OLD SOUTH",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				HIS3232: {
					code: "HIS3232",
					name: "HISTORY OF THE NEW SOUTH",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				HIS3240: {
					code: "HIS3240",
					name: "INTRO TO PUBLIC HISTORY",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				HIS3275: {
					code: "HIS3275",
					name: "HISTORY OF EAST ASIA",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				HIS3355: {
					code: "HIS3355",
					name: "HISTORY OF FLORIDA",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC", "BALAS"],
				},
				HIS3365: {
					code: "HIS3365",
					name: "MODERN LATIN AMERICA",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC", "BALAS"],
				},
				HIS3415: {
					code: "HIS3415",
					name: "HISTORY OF THE MIDDLE EAS",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				HIS3445: {
					code: "HIS3445",
					name: "HISTORY OF MODERN AFRICA",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				HIS3455: {
					code: "HIS3455",
					name: "HISTORY OF THE WESTERN WO",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				HIS3550: {
					code: "HIS3550",
					name: "US OR LATIN AMERICAN HIST",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				HIS3555: {
					code: "HIS3555",
					name: "WORLD OR THEMATIC HISTORY",
					credits: "4",
					buckets: ["BSSS"],
				},
				HIS3705: {
					code: "HIS3705",
					name: "WAR AND SOCIETY-MODERN ER",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				HIS3755: {
					code: "HIS3755",
					name: "SCREENING HISTORY",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				HIS4455: {
					code: "HIS4455",
					name: "SEMINAR TOPICS WESTERN WO",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				HIS4550: {
					code: "HIS4550",
					name: "SEMINAR-US HISTORY OR LAT",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				HIS4555: {
					code: "HIS4555",
					name: "SEMINAR-WORLD OR THEMATIC",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				HIS4999: {
					code: "HIS4999",
					name: "PHILOSOPHY AND METHDLGY O",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				HON1173: {
					code: "HON1173",
					name: "ENVRNMNTL INVESTIGATNS-IN",
					credits: "4",
					buckets: ["ST:QUAL", "EffComA"],
				},
				HON1174: {
					code: "HON1174",
					name: "CULTURAL INVESTIGATNS-INS",
					credits: "4",
					buckets: ["SW", "EffComB"],
				},
				HON1700: {
					code: "HON1700",
					name: "WRTG CNTMP SOC ISSUES",
					credits: "4",
					buckets: ["ST:QUAL", "EffComA"],
				},
				HON1701: {
					code: "HON1701",
					name: "SPKG CNTMP SOC ISSUES",
					credits: "4",
					buckets: ["SW", "EffComB"],
				},
				HON2286: {
					code: "HON2286",
					name: "SOCIAL INVESTIGATNS-INSIG",
					credits: "4",
					buckets: ["SW"],
				},
				HON4955: {
					code: "HON4955",
					name: "HONORS RESEARCH AND THESI",
					credits: "4",
					buckets: ["EffComC"],
				},
				HON4956: {
					code: "HON4956",
					name: "HONORS RESEARCH AND THESI",
					credits: "4",
					buckets: ["EffComC"],
				},
				HRT1000: {
					code: "HRT1000",
					name: "PRINCIPLES OF PLANT SCIEN",
					credits: "4",
					buckets: ["BSLab", "SW"],
				},
				HRT2100: {
					code: "HRT2100",
					name: "INTRO TO HORTICULTURAL SC",
					credits: "4",
					buckets: ["BSLab"],
				},
				HRT3301: {
					code: "HRT3301",
					name: "SOIL SCIENCE",
					credits: "4",
					buckets: ["BSLab"],
				},
				HRT3302: {
					code: "HRT3302",
					name: "PLANT NUTRITION",
					credits: "4",
					buckets: ["BSLab"],
				},
				HRT3325: {
					code: "HRT3325",
					name: "PRINCIPLES OF TURF MANAGE",
					credits: "4",
					buckets: ["BSLab"],
				},
				HRT3326: {
					code: "HRT3326",
					name: "TROPICAL AND TEMPERATE FR",
					credits: "4",
					buckets: ["BSLab"],
				},
				JPN1101: {
					code: "JPN1101",
					name: "FIRST SEMESTER JAPANESE",
					credits: "4",
					buckets: ["BAFL"],
				},
				JPN1102: {
					code: "JPN1102",
					name: "SECOND SEMESTER JAPANESE",
					credits: "4",
					buckets: ["BAFL"],
				},
				JPN2203: {
					code: "JPN2203",
					name: "SECOND YEAR JAPANESE",
					credits: "4",
					buckets: ["BAFL"],
				},
				LAS2005: {
					code: "LAS2005",
					name: "LATIN AMERICAN CULTURE",
					credits: "4",
					buckets: ["BALAS"],
				},
				LAS2006: {
					code: "LAS2006",
					name: "LATIN AMERICA ON FILM I",
					credits: "4",
					buckets: ["BALAS"],
				},
				LAS2007: {
					code: "LAS2007",
					name: "LATIN AMERICAN FILM II",
					credits: "4",
					buckets: ["BALAS"],
				},
				LAS3308: {
					code: "LAS3308",
					name: "TPCS-HISPANIC CULTURE-CIV",
					credits: "4",
					buckets: ["SW", "BALAS"],
				},
				LAS3335: {
					code: "LAS3335",
					name: "LATIN AMERICAN FILM AND F",
					credits: "4",
					buckets: ["BAFL", "BALAS"],
				},
				LAS3355: {
					code: "LAS3355",
					name: "HISTORY OF FLORIDA",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC", "BALAS"],
				},
				LAS3365: {
					code: "LAS3365",
					name: "MODERN LATIN AMERICA",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC", "BALAS"],
				},
				MAT1007: {
					code: "MAT1007",
					name: "SOCIAL WORLD ALGORITHMS",
					credits: "4",
					buckets: ["ST:QUAN", "BSQuan"],
				},
				MAT1047: {
					code: "MAT1047",
					name: "PRECALCULUS MATHEMATICS",
					credits: "4",
					buckets: ["ST:QUAN", "BSQuan"],
				},
				MAT2022: {
					code: "MAT2022",
					name: "ELEMENTARY STATISTICS",
					credits: "4",
					buckets: ["ST:QUAN", "BSQuan"],
				},
				MAT2032: {
					code: "MAT2032",
					name: "BIOSTATISTICS",
					credits: "4",
					buckets: ["ST:QUAN", "BSQuan"],
				},
				MAT2050: {
					code: "MAT2050",
					name: "APPLIED CALCULUS",
					credits: "4",
					buckets: ["ST:QUAN", "BSQuan"],
				},
				MAT2100: {
					code: "MAT2100",
					name: "DISCRETE STRUCTURES",
					credits: "4",
					buckets: ["ST:QUAN", "BSQuan"],
				},
				MAT2311: {
					code: "MAT2311",
					name: "CALCULUS W PLANE ANALYTIC",
					credits: "4",
					buckets: ["ST:QUAN", "BSQuan"],
				},
				MAT2312: {
					code: "MAT2312",
					name: "CALCULUS W PLANE ANALYTIC",
					credits: "4",
					buckets: ["ST:QUAN", "BSQuan"],
				},
				MAT2505: {
					code: "MAT2505",
					name: "LINEAR ALGEBRA",
					credits: "4",
					buckets: ["BSQuan"],
				},
				MAT3205: {
					code: "MAT3205",
					name: "PROOF TECHNIQUES",
					credits: "4",
					buckets: ["BSQuan"],
				},
				MAT3313: {
					code: "MAT3313",
					name: "CALCULUS W SOLID ANALY GE",
					credits: "4",
					buckets: ["ST:QUAN", "BSQuan"],
				},
				MAT3350: {
					code: "MAT3350",
					name: "DIFFERENTIAL EQUATIONS",
					credits: "4",
					buckets: ["BSQuan"],
				},
				MAT3442: {
					code: "MAT3442",
					name: "PROBABILITY AND STATISTIC",
					credits: "4",
					buckets: ["BSQuan"],
				},
				MAT3997: {
					code: "MAT3997",
					name: "TRIAL COURSE",
					credits: "4",
					buckets: ["BSQuan"],
				},
				MAT4960: {
					code: "MAT4960",
					name: "SR INTERNSHIP IN MATH",
					credits: "4",
					buckets: ["EffComC"],
				},
				MAT4961: {
					code: "MAT4961",
					name: "SR INTERNSHIP IN MATH",
					credits: "4",
					buckets: ["EffComC"],
				},
				MAT4999: {
					code: "MAT4999",
					name: "MATHEMATIC SENIOR SEMINAR",
					credits: "4",
					buckets: ["EffComC"],
				},
				MKT3160: {
					code: "MKT3160",
					name: "MARKETING PRINCIPLES",
					credits: "4",
					buckets: ["ST:QUAL"],
				},
				MLS4900: {
					code: "MLS4900",
					name: "MEDICAL LAB SCI CAPSTONE",
					credits: "4",
					buckets: ["EffComC"],
				},
				MUS1070: {
					code: "MUS1070",
					name: "INTRODUCTION TO MUSIC THE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1101: {
					code: "MUS1101",
					name: "CHAMBER SINGERS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1102: {
					code: "MUS1102",
					name: "CHAMBER SINGERS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1103: {
					code: "MUS1103",
					name: "WOMEN'S CHORALE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1104: {
					code: "MUS1104",
					name: "WOMEN'S CHORALE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1105: {
					code: "MUS1105",
					name: "SOUTHERN SINGERS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1106: {
					code: "MUS1106",
					name: "SOUTHERN SINGERS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1107: {
					code: "MUS1107",
					name: "OPERA THEATRE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1108: {
					code: "MUS1108",
					name: "OPERA THEATRE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1109: {
					code: "MUS1109",
					name: "CONCERT CHOIR",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1110: {
					code: "MUS1110",
					name: "CONCERT CHOIR",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1111: {
					code: "MUS1111",
					name: "SYMPHONY BAND",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1112: {
					code: "MUS1112",
					name: "SYMPHONY BAND",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1113: {
					code: "MUS1113",
					name: "JAZZ ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				MUS1114: {
					code: "MUS1114",
					name: "JAZZ ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				MUS1117: {
					code: "MUS1117",
					name: "WIND ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				MUS1118: {
					code: "MUS1118",
					name: "WIND ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				MUS1119: {
					code: "MUS1119",
					name: "PIANO ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				MUS1120: {
					code: "MUS1120",
					name: "PIANO ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				MUS1121: {
					code: "MUS1121",
					name: "ORCHESTRA",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1122: {
					code: "MUS1122",
					name: "ORCHESTRA",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1123: {
					code: "MUS1123",
					name: "CHAMBER ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				MUS1124: {
					code: "MUS1124",
					name: "CHAMBER ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				MUS1131: {
					code: "MUS1131",
					name: "STRINGS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1132: {
					code: "MUS1132",
					name: "STRINGS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1133: {
					code: "MUS1133",
					name: "PIANO",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1134: {
					code: "MUS1134",
					name: "PIANO",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1135: {
					code: "MUS1135",
					name: "WOODWINDS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1136: {
					code: "MUS1136",
					name: "WOODWINDS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1137: {
					code: "MUS1137",
					name: "BRASS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1138: {
					code: "MUS1138",
					name: "BRASS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1139: {
					code: "MUS1139",
					name: "PERCUSSION",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1140: {
					code: "MUS1140",
					name: "PERCUSSION",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1143: {
					code: "MUS1143",
					name: "VOICE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1144: {
					code: "MUS1144",
					name: "VOICE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1147: {
					code: "MUS1147",
					name: "CLASSICAL GUITAR",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1148: {
					code: "MUS1148",
					name: "CLASSICAL GUITAR",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1151: {
					code: "MUS1151",
					name: "AURAL SKILLS I",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1152: {
					code: "MUS1152",
					name: "AURAL SKILLS II",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1162: {
					code: "MUS1162",
					name: "MUSIC AND WELLNESS",
					credits: "2",
					buckets: ["PW"],
				},
				MUS1163: {
					code: "MUS1163",
					name: "EXPLORATNS IN MUSIC/DANCE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1164: {
					code: "MUS1164",
					name: "SURVEY OF JAZZ",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1165: {
					code: "MUS1165",
					name: "GREAT WORKS OF MUSIC",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1166: {
					code: "MUS1166",
					name: "CARIBBEAN MUSIC",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1173: {
					code: "MUS1173",
					name: "THEORY-INTRODUCTORY HARMO",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1179: {
					code: "MUS1179",
					name: "COMPOSITION I",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1180: {
					code: "MUS1180",
					name: "COMPOSITION II",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1184: {
					code: "MUS1184",
					name: "ENGLISH DICTION",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1185: {
					code: "MUS1185",
					name: "GERMAN DICTION",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1186: {
					code: "MUS1186",
					name: "ITALIAN DICTION",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS1187: {
					code: "MUS1187",
					name: "FRENCH DICTION",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2201: {
					code: "MUS2201",
					name: "CHAMBER SINGERS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2202: {
					code: "MUS2202",
					name: "CHAMBER SINGERS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2203: {
					code: "MUS2203",
					name: "WOMEN'S CHORALE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2204: {
					code: "MUS2204",
					name: "WOMEN'S CHORALE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2205: {
					code: "MUS2205",
					name: "SOUTHERN SINGERS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2206: {
					code: "MUS2206",
					name: "SOUTHERN SINGERS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2207: {
					code: "MUS2207",
					name: "OPERA THEATRE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2208: {
					code: "MUS2208",
					name: "OPERA THEATRE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2209: {
					code: "MUS2209",
					name: "CONCERT CHOIR",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2210: {
					code: "MUS2210",
					name: "CONCERT CHOIR",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2211: {
					code: "MUS2211",
					name: "SYMPHONY BAND",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2212: {
					code: "MUS2212",
					name: "SYMPHONY BAND",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2213: {
					code: "MUS2213",
					name: "JAZZ ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				MUS2214: {
					code: "MUS2214",
					name: "JAZZ ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				MUS2217: {
					code: "MUS2217",
					name: "WIND ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				MUS2218: {
					code: "MUS2218",
					name: "WIND ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				MUS2219: {
					code: "MUS2219",
					name: "PIANO ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				MUS2220: {
					code: "MUS2220",
					name: "PIANO ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				MUS2221: {
					code: "MUS2221",
					name: "ORCHESTRA",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2222: {
					code: "MUS2222",
					name: "ORCHESTRA",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2223: {
					code: "MUS2223",
					name: "CHAMBER ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				MUS2224: {
					code: "MUS2224",
					name: "CHAMBER ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				MUS2231: {
					code: "MUS2231",
					name: "STRINGS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2232: {
					code: "MUS2232",
					name: "STRINGS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2233: {
					code: "MUS2233",
					name: "PIANO",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2234: {
					code: "MUS2234",
					name: "PIANO",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2235: {
					code: "MUS2235",
					name: "WOODWINDS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2236: {
					code: "MUS2236",
					name: "WOODWINDS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2237: {
					code: "MUS2237",
					name: "BRASS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2238: {
					code: "MUS2238",
					name: "BRASS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2239: {
					code: "MUS2239",
					name: "PERCUSSION",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2240: {
					code: "MUS2240",
					name: "PERCUSSION",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2243: {
					code: "MUS2243",
					name: "VOICE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2244: {
					code: "MUS2244",
					name: "VOICE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2247: {
					code: "MUS2247",
					name: "CLASSICAL GUITAR",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2248: {
					code: "MUS2248",
					name: "CLASSICAL GUITAR",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2251: {
					code: "MUS2251",
					name: "AURAL SKILLS III",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2252: {
					code: "MUS2252",
					name: "AURAL SKILLS IV",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2253: {
					code: "MUS2253",
					name: "INTRODUCTION TO MUSIC BUS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2271: {
					code: "MUS2271",
					name: "THEORY: ADVANCED HARMONY",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2272: {
					code: "MUS2272",
					name: "THEORY: ADVANCED HARMONY",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2275: {
					code: "MUS2275",
					name: "STRINGS PEDAGOGY",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2276: {
					code: "MUS2276",
					name: "WOODWINDS PEDAGOGY",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2277: {
					code: "MUS2277",
					name: "CHORAL PEDAGOGY",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2279: {
					code: "MUS2279",
					name: "COMPOSITION III",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS2280: {
					code: "MUS2280",
					name: "COMPOSITION IV",
					credits: "4",
					buckets: ["BAMUS"],
				},
				MUS3381: {
					code: "MUS3381",
					name: "HISTORY OF MUSIC I",
					credits: "4",
					buckets: ["SW", "EffComC"],
				},
				MUS3382: {
					code: "MUS3382",
					name: "HISTORY OF MUSIC II",
					credits: "4",
					buckets: ["SW", "BAMUS"],
				},
				MUS4481: {
					code: "MUS4481",
					name: "HISTORY-LITERATURE OF THE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				NUR1103: {
					code: "NUR1103",
					name: "HLTH WELL SELF & COMMNTY",
					credits: "2",
					buckets: ["PW"],
				},
				NUR4110: {
					code: "NUR4110",
					name: "EVIDENCE BASED HLTH CARE",
					credits: "4",
					buckets: ["EffComC"],
				},
				PED1005: {
					code: "PED1005",
					name: "WELLNESS MANAGEMENT",
					credits: "2",
					buckets: ["PW"],
				},
				PED2003: {
					code: "PED2003",
					name: "SCUBA DIVING",
					credits: "1",
					buckets: ["PW"],
				},
				PED2005: {
					code: "PED2005",
					name: "BEGINNING GOLF",
					credits: "1",
					buckets: ["PW"],
				},
				PED2010: {
					code: "PED2010",
					name: "AEROBICS",
					credits: "1",
					buckets: ["PW"],
				},
				PED2013: {
					code: "PED2013",
					name: "VOLLEYBALL",
					credits: "1",
					buckets: ["PW"],
				},
				PED2014: {
					code: "PED2014",
					name: "SOCCER",
					credits: "1",
					buckets: ["PW"],
				},
				PED2015: {
					code: "PED2015",
					name: "WEIGHT TRAINING",
					credits: "1",
					buckets: ["PW"],
				},
				PED2018: {
					code: "PED2018",
					name: "BASKETBALL",
					credits: "1",
					buckets: ["PW"],
				},
				PED2019: {
					code: "PED2019",
					name: "BEGINNING JOGGING",
					credits: "1",
					buckets: ["PW"],
				},
				PED2020: {
					code: "PED2020",
					name: "YOGA",
					credits: "1",
					buckets: ["PW"],
				},
				PED2026: {
					code: "PED2026",
					name: "BEGINNING TENNIS",
					credits: "1",
					buckets: ["PW"],
				},
				PED4508: {
					code: "PED4508",
					name: "MEASUREMENT AND EPIDEMIOL",
					credits: "4",
					buckets: ["BSQuan"],
				},
				PHI1109: {
					code: "PHI1109",
					name: "WHAT IS PHILOSOPHY?",
					credits: "4",
					buckets: ["BAPHI", "MV", "ST:QUAL"],
				},
				PHI2204: {
					code: "PHI2204",
					name: "ETHICS",
					credits: "4",
					buckets: ["BAPHI", "MV", "ST:QUAL"],
				},
				PHI2208: {
					code: "PHI2208",
					name: "LOGIC",
					credits: "4",
					buckets: ["BAPHI", "ST:QUAN", "BSQuan"],
				},
				PHI2219: {
					code: "PHI2219",
					name: "WORLD RELIGIONS AND PHILO",
					credits: "4",
					buckets: ["BAPHI", "SW", "MV", "BAREL", "ST:QUAL"],
				},
				PHI2224: {
					code: "PHI2224",
					name: "BUSINESS ETHICS",
					credits: "4",
					buckets: ["BAPHI", "MV", "ST:QUAL"],
				},
				PHI3109: {
					code: "PHI3109",
					name: "GREAT PHILOSOPHERS I",
					credits: "4",
					buckets: ["BAPHI", "MV", "ST:QUAL"],
				},
				PHI3309: {
					code: "PHI3309",
					name: "GREAT PHILOSOPHERS II",
					credits: "4",
					buckets: ["BAPHI", "MV", "ST:QUAL"],
				},
				PHI3359: {
					code: "PHI3359",
					name: "AESTHETICS",
					credits: "4",
					buckets: ["BAPHI", "SW", "MV", "ST:QUAL"],
				},
				PHI3365: {
					code: "PHI3365",
					name: "THEOLOGICAL THEMES IN CON",
					credits: "4",
					buckets: ["BAPHI", "MV", "BAREL", "EffComC"],
				},
				PHI3388: {
					code: "PHI3388",
					name: "FUNDAMENTL QUESTIONS THEO",
					credits: "4",
					buckets: ["BAPHI", "MV", "BAREL", "ST:QUAL", "EffComC"],
				},
				PHI3500: {
					code: "PHI3500",
					name: "SOCIAL & POLITICAL PHIL",
					credits: "4",
					buckets: ["BAPHI"],
				},
				PHI4459: {
					code: "PHI4459",
					name: "KNOWLEDGE TRUTH & REALIT",
					credits: "4",
					buckets: ["MV", "ST:QUAL"],
				},
				PHI4479: {
					code: "PHI4479",
					name: "SPECIAL TOPICS IN PHILOSO",
					credits: "4",
					buckets: ["MV", "ST:QUAL", "EffComC"],
				},
				PHY2010: {
					code: "PHY2010",
					name: "GENERAL PHYSICS I NONCALC",
					credits: "4",
					buckets: ["BSLab"],
				},
				PHY2020: {
					code: "PHY2020",
					name: "GENERAL PHYSICS II NONCAL",
					credits: "4",
					buckets: ["BSLab"],
				},
				PHY2110: {
					code: "PHY2110",
					name: "GENERAL PHYSICS I CALCULU",
					credits: "4",
					buckets: ["BSLab"],
				},
				PHY2120: {
					code: "PHY2120",
					name: "GENERAL PHYSICS II (CALCU",
					credits: "4",
					buckets: ["BSLab"],
				},
				PHY3070: {
					code: "PHY3070",
					name: "MODERN PHYSICS I",
					credits: "4",
					buckets: ["BSLab"],
				},
				PHY3080: {
					code: "PHY3080",
					name: "MODERN PHYSICS II",
					credits: "4",
					buckets: ["BSLab"],
				},
				POR1101: {
					code: "POR1101",
					name: "ELEMENTARY PORTUGUESE I",
					credits: "4",
					buckets: ["SW", "BAFL", "ST:QUAL"],
				},
				POR1102: {
					code: "POR1102",
					name: "ELEMENTARY PORTUGUESE II",
					credits: "4",
					buckets: ["BAFL"],
				},
				POR2203: {
					code: "POR2203",
					name: "INTERMEDIATE PORTUGUESE",
					credits: "4",
					buckets: ["BAFL"],
				},
				POS1115: {
					code: "POS1115",
					name: "METHODS/POLITICAL SCI I",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				POS1125: {
					code: "POS1125",
					name: "AMERICAN POLITICAL SYSTEM",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				POS2100: {
					code: "POS2100",
					name: "INTRO COLLOQUIUM IN POLIT",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS"],
				},
				POS2290: {
					code: "POS2290",
					name: "CURRENT ISSUES IN AMER PO",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS"],
				},
				POS2295: {
					code: "POS2295",
					name: "METHODS/POLITICAL SCI II",
					credits: "4",
					buckets: ["ST:QUAN", "BSSS"],
				},
				POS2500: {
					code: "POS2500",
					name: "LAW AND THE COURTS",
					credits: "4",
					buckets: ["BSSS"],
				},
				POS2900: {
					code: "POS2900",
					name: "INTERNATIONAL RELATIONS",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				POS3100: {
					code: "POS3100",
					name: "SOUTHERN POLITICS",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				POS3175: {
					code: "POS3175",
					name: "UNITED STATES FOREIGN POL",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				POS3315: {
					code: "POS3315",
					name: "POLITICAL PARTIES",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				POS3320: {
					code: "POS3320",
					name: "LEGISLATIVE PROCESSES",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS"],
				},
				POS3323: {
					code: "POS3323",
					name: "INTERNATL ORGANIZATIONS",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				POS3325: {
					code: "POS3325",
					name: "U. S. CAMPAIGNS/ELECTNS",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				POS3327: {
					code: "POS3327",
					name: "TOPICS IN COMPARATIVE POL",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				POS3330: {
					code: "POS3330",
					name: "TOPICS IN PUBLIC POLICY",
					credits: "4",
					buckets: ["SW"],
				},
				POS3339: {
					code: "POS3339",
					name: "THE UNITED STATES CONSTIT",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS"],
				},
				POS3345: {
					code: "POS3345",
					name: "CONFLICT AND WAR",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				POS3380: {
					code: "POS3380",
					name: "SPEC TOPICS IN AMERICAN P",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS"],
				},
				POS3400: {
					code: "POS3400",
					name: "POL PARTIES/INTRST GRPS",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				POS3500: {
					code: "POS3500",
					name: "INTERNAT'L REL DEV WRLD",
					credits: "4",
					buckets: ["BSSS", "EffComC"],
				},
				POS3550: {
					code: "POS3550",
					name: "NAT'L/INTERNAT'L POL ECO",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS"],
				},
				POS3600: {
					code: "POS3600",
					name: "TOPICS IN INTERNAT'L REL",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				POS3905: {
					code: "POS3905",
					name: "POLITICS AND THE MEDIA",
					credits: "4",
					buckets: ["SW", "ST:QUAL"],
				},
				POS4429: {
					code: "POS4429",
					name: "POLITICAL THEORY",
					credits: "4",
					buckets: ["MV"],
				},
				POS4999: {
					code: "POS4999",
					name: "THEORY/METHODS POLITAL SC",
					credits: "4",
					buckets: ["SW", "ST:QUAN", "BSQuan", "EffComC"],
				},
				PSY1106: {
					code: "PSY1106",
					name: "PSYCHOLOGY AS A SOCIAL SC",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				PSY1110: {
					code: "PSY1110",
					name: "PSYCHOLOGY AS A NATURAL S",
					credits: "4",
					buckets: ["BSLab", "BSSS"],
				},
				PSY1500: {
					code: "PSY1500",
					name: "PSY INVSTGTNS SOCIAL WRLD",
					credits: "4",
					buckets: ["SW"],
				},
				PSY2206: {
					code: "PSY2206",
					name: "SOCIAL PSYCHOLOGY",
					credits: "4",
					buckets: ["BSSS"],
				},
				PSY2209: {
					code: "PSY2209",
					name: "DEVELOPMENTAL PSYCHOLOGY",
					credits: "4",
					buckets: ["BSSS"],
				},
				PSY2210: {
					code: "PSY2210",
					name: "TESTS AND MEASUREMENTS",
					credits: "4",
					buckets: ["BSSS"],
				},
				PSY2214: {
					code: "PSY2214",
					name: "ABNORMAL PSYCHOLOGY",
					credits: "4",
					buckets: ["BSSS"],
				},
				PSY2220: {
					code: "PSY2220",
					name: "SENSATION AND PERCEPTION",
					credits: "4",
					buckets: ["BSSS"],
				},
				PSY2230: {
					code: "PSY2230",
					name: "ECOLOGICAL PSYCHOLOGY",
					credits: "4",
					buckets: ["BSSS"],
				},
				PSY3300: {
					code: "PSY3300",
					name: "CLINICAL COUNSELING PSYCH",
					credits: "4",
					buckets: ["BSSS"],
				},
				PSY3301: {
					code: "PSY3301",
					name: "SPECIAL TOPICS IN PSYCHOL",
					credits: "4",
					buckets: ["BSSS"],
				},
				PSY3305: {
					code: "PSY3305",
					name: "PSYCHOLOGY OF LEARNING",
					credits: "4",
					buckets: ["BSSS"],
				},
				PSY3309: {
					code: "PSY3309",
					name: "PHYSIOLOGICAL PSYCHOLOGY",
					credits: "4",
					buckets: ["BSSS"],
				},
				PSY3310: {
					code: "PSY3310",
					name: "RESEARCH DESIGN AND STATI",
					credits: "4",
					buckets: ["ST:QUAN", "BSQuan", "BSSS"],
				},
				PSY3314: {
					code: "PSY3314",
					name: "PSYCHOLOGY OF PERSONALITY",
					credits: "4",
					buckets: ["BSSS"],
				},
				PSY3315: {
					code: "PSY3315",
					name: "COGNITIVE PSYCHOLOGY",
					credits: "4",
					buckets: ["BSSS"],
				},
				PSY3321: {
					code: "PSY3321",
					name: "PSY SRCH MEANG/VALUE",
					credits: "2",
					buckets: ["MV"],
				},
				PSY3322: {
					code: "PSY3322",
					name: "PSY SRCH MEANG/VALUE",
					credits: "2",
					buckets: ["MV"],
				},
				PSY3336: {
					code: "PSY3336",
					name: "INDUSTRIAL PSYCHOLOGY",
					credits: "4",
					buckets: ["BSSS"],
				},
				PSY4999: {
					code: "PSY4999",
					name: "CAPSTONE SEMINAR IN PSYCH",
					credits: "4",
					buckets: ["EffComC"],
				},
				PSYLC1: {
					code: "PSYLC1",
					name: "PSY1106 MAJ EQUIVALENCE",
					credits: "4",
					buckets: ["SW"],
				},
				PSYLC2: {
					code: "PSYLC2",
					name: "PSY1110 MAJ EQUIVALENCE",
					credits: "4",
					buckets: ["BSLab"],
				},
				PWGE1: {
					code: "PWGE1",
					name: "PERSONAL WELLNESS GEN ED1",
					credits: "4",
					buckets: ["PW"],
				},
				PWGE2: {
					code: "PWGE2",
					name: "PERSONAL WELLNESS GEN ED2",
					credits: "4",
					buckets: ["PW"],
				},
				REL1108: {
					code: "REL1108",
					name: "WHAT IS RELIGION",
					credits: "4",
					buckets: ["MV", "BAREL", "ST:QUAL"],
				},
				REL2214: {
					code: "REL2214",
					name: "CHRISTIAN ETHICS",
					credits: "4",
					buckets: ["MV", "ST:QUAL"],
				},
				REL2215: {
					code: "REL2215",
					name: "OLD TESTAMENT",
					credits: "4",
					buckets: ["SW", "MV", "BAREL", "ST:QUAL"],
				},
				REL2216: {
					code: "REL2216",
					name: "THE NEW TESTAMENT",
					credits: "4",
					buckets: ["MV", "BAREL", "ST:QUAL"],
				},
				REL2218: {
					code: "REL2218",
					name: "BASIC CHRISTIAN BELIEFS",
					credits: "4",
					buckets: ["MV", "BAREL", "ST:QUAL"],
				},
				REL2219: {
					code: "REL2219",
					name: "WORLD RELIGIONS AND PHILO",
					credits: "4",
					buckets: ["BAPHI", "SW", "MV", "BAREL", "ST:QUAL"],
				},
				REL2225: {
					code: "REL2225",
					name: "THE APOCRYPHA",
					credits: "4",
					buckets: ["SW", "MV", "BAREL"],
				},
				REL2228: {
					code: "REL2228",
					name: "JESUS IN FILM",
					credits: "4",
					buckets: ["MV", "BAREL", "ST:QUAL"],
				},
				REL2256: {
					code: "REL2256",
					name: "GENDER INTERPRETATN BIBLI",
					credits: "4",
					buckets: ["MV", "BAREL"],
				},
				REL3328: {
					code: "REL3328",
					name: "HISTORY OF CHRISTIAN THOU",
					credits: "4",
					buckets: ["MV", "BAREL", "ST:QUAL"],
				},
				REL3345: {
					code: "REL3345",
					name: "WISDOM TRADITION ANCIENT",
					credits: "4",
					buckets: ["BAREL"],
				},
				REL3358: {
					code: "REL3358",
					name: "PRINCIPLES OF CHRISTIAN E",
					credits: "4",
					buckets: ["MV", "BAREL", "ST:QUAL"],
				},
				REL3365: {
					code: "REL3365",
					name: "THEOLOGICAL THEMES IN CON",
					credits: "4",
					buckets: ["BAPHI", "MV", "BAREL", "EffComC"],
				},
				REL3366: {
					code: "REL3366",
					name: "THE JOHANNINE LITERATURE",
					credits: "4",
					buckets: ["BAREL"],
				},
				REL3378: {
					code: "REL3378",
					name: "DIALOGUES/SCIENCE/RELIGN",
					credits: "4",
					buckets: ["BSLab", "MV", "BAREL"],
				},
				REL3388: {
					code: "REL3388",
					name: "FUNDAMENTL QUESTIONS THEO",
					credits: "4",
					buckets: ["BAPHI", "MV", "BAREL", "ST:QUAL", "EffComC"],
				},
				REL4428: {
					code: "REL4428",
					name: "CURRENT THEOLOGICAL THOUG",
					credits: "4",
					buckets: ["EffComC"],
				},
				REL4448: {
					code: "REL4448",
					name: "THE DOCTRINE OF GOD",
					credits: "4",
					buckets: ["EffComC"],
				},
				REL4474: {
					code: "REL4474",
					name: "SPECIAL TOP IN CHRSTN ETH",
					credits: "4",
					buckets: ["MV"],
				},
				RYM2210: {
					code: "RYM2210",
					name: "TCHNG-LRNNG THEORIES YOUT",
					credits: "4",
					buckets: ["BAREL"],
				},
				RYM3310: {
					code: "RYM3310",
					name: "LDSHIP AND ADM FOR YOUTH",
					credits: "4",
					buckets: ["BAREL"],
				},
				RYM4410: {
					code: "RYM4410",
					name: "BIBLE/THEOLOGY YOUTH MNST",
					credits: "4",
					buckets: ["BAREL"],
				},
				SOC1100: {
					code: "SOC1100",
					name: "INTRODUCTION TO SOCIOLOGY",
					credits: "4",
					buckets: ["SW", "MV", "BSSS"],
				},
				SOC2206: {
					code: "SOC2206",
					name: "SOCIAL PSYCHOLOGY",
					credits: "4",
					buckets: ["BSSS"],
				},
				SOC2216: {
					code: "SOC2216",
					name: "SOCIAL PROBLEMS",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				SOC2220: {
					code: "SOC2220",
					name: "MARRIAGE AND THE FAMILY",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS"],
				},
				SOC2240: {
					code: "SOC2240",
					name: "CLINICAL SOCIOLOGY",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				SOC2270: {
					code: "SOC2270",
					name: "INTERCULTURAL COMM",
					credits: "4",
					buckets: ["SW", "MV", "BSSS"],
				},
				SOC3300: {
					code: "SOC3300",
					name: "SELECTED TOPICS IN SOCIOL",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				SOC3303: {
					code: "SOC3303",
					name: "SOCIOLOGY OF DEVIANT BEHA",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS"],
				},
				SOC3305: {
					code: "SOC3305",
					name: "RACE CULTURE AND HUMAN R",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS"],
				},
				SOC3307: {
					code: "SOC3307",
					name: "SPORT LEISURE AND SOCIET",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				SOC3309: {
					code: "SOC3309",
					name: "URBAN SOCIOLOGY",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				SOC3315: {
					code: "SOC3315",
					name: "BASEBALL AND AMERICAN SOC",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				SOC3336: {
					code: "SOC3336",
					name: "GERONTOLOGY",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				SOC3337: {
					code: "SOC3337",
					name: "DEATH AND DYING",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS"],
				},
				SOC3385: {
					code: "SOC3385",
					name: "SELECTED TOPICS: CRM/SOC",
					credits: "4",
					buckets: ["BSSS"],
				},
				SOC4400: {
					code: "SOC4400",
					name: "SELECTED TOPICS IN SOCIOL",
					credits: "4",
					buckets: ["SW", "ST:QUAN", "BSQuan", "ST:QUAL"],
				},
				SOC4406: {
					code: "SOC4406",
					name: "SOCIOLOGICAL THEORY",
					credits: "4",
					buckets: ["SW", "MV", "EffComC"],
				},
				SOC4420: {
					code: "SOC4420",
					name: "METHODS OF SOCIAL RESEARC",
					credits: "4",
					buckets: ["SW", "ST:QUAN", "BSQuan"],
				},
				SPA1101: {
					code: "SPA1101",
					name: "FIRST YEAR SPANISH",
					credits: "4",
					buckets: ["SW", "BAFL", "ST:QUAL"],
				},
				SPA1102: {
					code: "SPA1102",
					name: "SECOND SEMESTER SPANISH",
					credits: "4",
					buckets: ["BAFL"],
				},
				SPA2203: {
					code: "SPA2203",
					name: "SECOND YEAR SPANISH",
					credits: "4",
					buckets: ["BAFL"],
				},
				SPA2205: {
					code: "SPA2205",
					name: "COMPOSITION-CONVERSATION",
					credits: "4",
					buckets: ["SW", "BAFL", "ST:QUAL"],
				},
				SPA2207: {
					code: "SPA2207",
					name: "COMPOSITION AND CONVERSAT",
					credits: "4",
					buckets: ["SW", "BAFL", "ST:QUAL"],
				},
				SPA3308: {
					code: "SPA3308",
					name: "TPCS-HISPANIC CULTURE-CIV",
					credits: "4",
					buckets: ["SW", "BALAS"],
				},
				SPA3320: {
					code: "SPA3320",
					name: "INTRO TO LITERATURE IN SP",
					credits: "4",
					buckets: ["BAFL", "ST:QUAL"],
				},
				SPA3323: {
					code: "SPA3323",
					name: "SURVEY OF SPANISH LITERAT",
					credits: "4",
					buckets: ["BAFL"],
				},
				SPA3334: {
					code: "SPA3334",
					name: "SURVEY OF SPANISH AMERICA",
					credits: "4",
					buckets: ["BAFL"],
				},
				SPA3335: {
					code: "SPA3335",
					name: "LATIN AMERICAN FILM AND F",
					credits: "4",
					buckets: ["BAFL", "BALAS"],
				},
				SPA3340: {
					code: "SPA3340",
					name: "CINEMA FOR SPANISH CONVER",
					credits: "4",
					buckets: ["BAFL"],
				},
				SPA3345: {
					code: "SPA3345",
					name: "SPANISH FOR BUSINESS",
					credits: "4",
					buckets: ["BAFL"],
				},
				SPM3307: {
					code: "SPM3307",
					name: "SPORT LEISURE AND SOCIET",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				SPM4999: {
					code: "SPM4999",
					name: "SR SEMINAR/SPORT BUS MGT",
					credits: "4",
					buckets: ["EffComC"],
				},
				THE1050: {
					code: "THE1050",
					name: "INTRODUCTION TO THEATRE",
					credits: "4",
					buckets: ["BATHE", "ST:QUAL"],
				},
				THE1101: {
					code: "THE1101",
					name: "PRODUCTION PRACTICUM I",
					credits: "4",
					buckets: ["BATHE"],
				},
				THE1102: {
					code: "THE1102",
					name: "PRODUCTION PRACTICUM II",
					credits: "4",
					buckets: ["BATHE"],
				},
				THE1103: {
					code: "THE1103",
					name: "PRODUCTION PRACTICUM III",
					credits: "4",
					buckets: ["BATHE"],
				},
				THE1104: {
					code: "THE1104",
					name: "PRODUCTION PRACTICUM IV",
					credits: "4",
					buckets: ["BATHE"],
				},
				THE1105: {
					code: "THE1105",
					name: "PRODUCTION PRACTICUM V",
					credits: "4",
					buckets: ["BATHE"],
				},
				THE1106: {
					code: "THE1106",
					name: "PRODUCTION PRACTICUM VI",
					credits: "4",
					buckets: ["BATHE"],
				},
				THE1130: {
					code: "THE1130",
					name: "VOCAL TECHNIQUE MASTER CL",
					credits: "4",
					buckets: ["BATHE"],
				},
				THE1213: {
					code: "THE1213",
					name: "INTRODUCTION TO ACTING",
					credits: "4",
					buckets: ["ST:QUAL"],
				},
				THE1214: {
					code: "THE1214",
					name: "ACTING FOR THE NON-ACTOR",
					credits: "4",
					buckets: ["BATHE", "ST:QUAL"],
				},
				THE1220: {
					code: "THE1220",
					name: "STAGE MOVEMENT",
					credits: "4",
					buckets: ["BATHE"],
				},
				THE1231: {
					code: "THE1231",
					name: "APPLD VOICE FOR THEATRE",
					credits: "4",
					buckets: ["BATHE"],
				},
				THE1232: {
					code: "THE1232",
					name: "APPLD VOICE FOR THEATRE",
					credits: "4",
					buckets: ["BATHE"],
				},
				THE1233: {
					code: "THE1233",
					name: "APPLD VOICE FOR THEATRE",
					credits: "4",
					buckets: ["BATHE"],
				},
				THE1234: {
					code: "THE1234",
					name: "APPLD VOICE FOR THEATRE",
					credits: "4",
					buckets: ["BATHE"],
				},
				THE1235: {
					code: "THE1235",
					name: "APPLD VOICE FOR THEATRE",
					credits: "4",
					buckets: ["BATHE"],
				},
				THE1236: {
					code: "THE1236",
					name: "APPLD VOICE FOR THEATRE",
					credits: "4",
					buckets: ["BATHE"],
				},
				THE1237: {
					code: "THE1237",
					name: "APPLD VOICE FOR THEATRE",
					credits: "4",
					buckets: ["BATHE"],
				},
				THE1238: {
					code: "THE1238",
					name: "APPLD VOICE FOR THEATRE",
					credits: "4",
					buckets: ["BATHE"],
				},
				THE1240: {
					code: "THE1240",
					name: "IMPROVISATN-CREATIVE EXPR",
					credits: "4",
					buckets: ["BATHE"],
				},
				THE1413: {
					code: "THE1413",
					name: "STAGECRAFT-PRODUCTION PRA",
					credits: "4",
					buckets: ["BATHE"],
				},
				THE2114: {
					code: "THE2114",
					name: "MAKEUP FOR THE STAGE",
					credits: "4",
					buckets: ["BATHE"],
				},
				THE2153: {
					code: "THE2153",
					name: "APPLIED PRODUCTION EXPERI",
					credits: "2",
					buckets: ["BATHE"],
				},
				THE2210: {
					code: "THE2210",
					name: "INTERMEDIATE ACTING",
					credits: "4",
					buckets: ["BATHE"],
				},
				THE2220: {
					code: "THE2220",
					name: "VOICE AND DIALECT FOR THE",
					credits: "4",
					buckets: ["BATHE"],
				},
				THE2313: {
					code: "THE2313",
					name: "SCRIPT ANALYSIS",
					credits: "4",
					buckets: ["BATHE"],
				},
				THE2413: {
					code: "THE2413",
					name: "SCENE DESIGN",
					credits: "4",
					buckets: ["BATHE"],
				},
				THE2420: {
					code: "THE2420",
					name: "LIGHTING FOR THE STAGE",
					credits: "4",
					buckets: ["BATHE"],
				},
				THE2430: {
					code: "THE2430",
					name: "COSTUMING FOR THE STAGE",
					credits: "4",
					buckets: ["BATHE"],
				},
				THE2610: {
					code: "THE2610",
					name: "BEGINNING BALLET I",
					credits: "1",
					buckets: ["BATHE", "PW"],
				},
				THE2611: {
					code: "THE2611",
					name: "BEGINNING BALLET II",
					credits: "1",
					buckets: ["BATHE", "PW"],
				},
				THE2620: {
					code: "THE2620",
					name: "BEGINNING JAZZ I",
					credits: "1",
					buckets: ["BATHE", "PW"],
				},
				THE2621: {
					code: "THE2621",
					name: "BEGINNING JAZZ II",
					credits: "1",
					buckets: ["BATHE", "PW"],
				},
				THE2630: {
					code: "THE2630",
					name: "BEGINNING TAP I",
					credits: "1",
					buckets: ["BATHE", "PW"],
				},
				THE2631: {
					code: "THE2631",
					name: "BEGINNING TAP II",
					credits: "1",
					buckets: ["BATHE", "PW"],
				},
				THE2640: {
					code: "THE2640",
					name: "BEGINNING MODERN DANCE I",
					credits: "1",
					buckets: ["BATHE", "PW"],
				},
				THE2641: {
					code: "THE2641",
					name: "BEGINNING MODERN DANCE II",
					credits: "1",
					buckets: ["BATHE", "PW"],
				},
				THE3610: {
					code: "THE3610",
					name: "INTERMEDIATE BALLET",
					credits: "1",
					buckets: ["PW"],
				},
				THE3611: {
					code: "THE3611",
					name: "ADVANCED BALLET",
					credits: "1",
					buckets: ["PW"],
				},
				THE3620: {
					code: "THE3620",
					name: "INTERMEDIATE JAZZ",
					credits: "1",
					buckets: ["PW"],
				},
				THE3621: {
					code: "THE3621",
					name: "ADVANCED JAZZ",
					credits: "1",
					buckets: ["PW"],
				},
				THE3630: {
					code: "THE3630",
					name: "INTERMEDIATE TAP",
					credits: "1",
					buckets: ["PW"],
				},
				THE3631: {
					code: "THE3631",
					name: "ADVANCED TAP",
					credits: "1",
					buckets: ["PW"],
				},
				THE3640: {
					code: "THE3640",
					name: "INTERMEDIATE MODERN DANCE",
					credits: "1",
					buckets: ["PW"],
				},
				THE3641: {
					code: "THE3641",
					name: "ADVANCED MODERN DANCE",
					credits: "1",
					buckets: ["PW"],
				},
				THE4513: {
					code: "THE4513",
					name: "THEATRE HISTORY AND LITER",
					credits: "4",
					buckets: ["SW", "EffComC"],
				},
				THE4523: {
					code: "THE4523",
					name: "THEATRE HISTORY-LITERATUR",
					credits: "4",
					buckets: ["SW", "EffComC"],
				},
				WST2200: {
					code: "WST2200",
					name: "INTRO WOMEN/GENDER STD",
					credits: "4",
					buckets: ["SW", "ST:QUAL"],
				},
				WST2220: {
					code: "WST2220",
					name: "MARRIAGE AND THE FAMILY",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS"],
				},
				WST2256: {
					code: "WST2256",
					name: "GENDER INTERPRETATN BIBLI",
					credits: "4",
					buckets: ["MV", "BAREL"],
				},
				WST3370: {
					code: "WST3370",
					name: "GENDER IN LITERATURE",
					credits: "4",
					buckets: ["BAENG"],
				},
				WST4400: {
					code: "WST4400",
					name: "WMN/GNDR CNTMP CULTURE",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComB"],
				},
			};

			await setDoc(doc(db, "courses", "courses"), courses);
		},
	},
	async mounted() {
		// document.onreadystatechange = () => {
		// 	if (document.readyState === "complete") {
		// 		this.pageLoaded = true;
		// 	}
		// };
		let stateCheck = setInterval(() => {
			if (document.readyState === "complete") {
				clearInterval(stateCheck);
				this.pageLoaded = true;
			}
		}, 100);

		onAuthStateChanged(getAuth(), async (user) => {
			if (user) {
				console.log("LOGGED IN: " + user.email);
				this.$store.commit("setEmail", user.email);
				await this.$store.dispatch("fetchUser");
				this.authUser = this.$store.getters.getUser;
			} else {
				console.log("LOGGED OUT");
				this.$store.commit("resetAuth");
				this.authUser = null;
			}
		});
	},
	async beforeMount() {
		await this.$store.dispatch("fetchEvents");
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Rajdhani:wght@300;400;500;600;700&display=swap");

/* 
██████   ██████   ██████  ████████ 
██   ██ ██    ██ ██    ██    ██    
██████  ██    ██ ██    ██    ██    
██   ██ ██    ██ ██    ██    ██    
██   ██  ██████   ██████     ██    
*/
:root {
	--navbar-height: 60px;

	--FSCred: #ba0c2f;
	--FSCblue: #0060a9 !important;
	--FSClightblue: #0096db !important;
	--FSCgrey: #646464 !important;

	--FSCredRGB: 186, 12, 47 !important;
	--FSCblueRGB: 0, 96, 169 !important;
	--FSClightblueRGB: 0, 150, 219 !important;
	--FSCgreyRGB: 100, 100, 100 !important;

	--primary: var(--FSCred);
	--secondary: var(--FSCgrey);
	--primary-dark: rgb(128, 8, 32) !important;

	--red-gradient: linear-gradient(
		to left,
		var(--primary),
		var(--primary-dark) 45%
	);

	--off-white: #fafafa;
}

body {
	background-color: var(--off-white);
	color: rgb(20, 20, 20);
	font-family: "Montserrat", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: "Rajdhani", sans-serif;
}

h1 {
	font-size: 350%;
}

h2 {
	font-size: 300%;
}

h3 {
	font-size: 250%;
}

h4 {
	font-size: 200%;
}

h5 {
	font-size: 150%;
}

h6 {
	font-size: 130%;
}

/* 
███████  ██████ ██████   ██████  ██      ██      ██████   █████  ██████  
██      ██      ██   ██ ██    ██ ██      ██      ██   ██ ██   ██ ██   ██ 
███████ ██      ██████  ██    ██ ██      ██      ██████  ███████ ██████  
     ██ ██      ██   ██ ██    ██ ██      ██      ██   ██ ██   ██ ██   ██ 
███████  ██████ ██   ██  ██████  ███████ ███████ ██████  ██   ██ ██   ██ 
*/
.dark-scroll-bar {
	scrollbar-width: thin !important;
	scrollbar-color: var(--red) transparent !important;
	overflow-y: auto !important;
	/* margin-right: 5px !important; */
}

/* Works on Chrome, Edge, and Safari */
::-webkit-scrollbar {
	width: 10px !important;
}

::-webkit-scrollbar-track {
	background: rgb(8, 8, 8) !important;
}

::-webkit-scrollbar-thumb {
	background-color: var(--FSCred) !important;
	border-radius: 100px !important;
	width: 4px !important;
	border: 3px solid var(--FSCred) !important;
}

.white-scroll-bar::-webkit-scrollbar,
.white-scroll-bar ::-webkit-scrollbar {
	width: 10px !important;
}

.white-scroll-bar::-webkit-scrollbar-track,
.white-scroll-bar ::-webkit-scrollbar-track {
	background: transparent !important;
}

.white-scroll-bar::-webkit-scrollbar-thumb,
.white-scroll-bar ::-webkit-scrollbar-thumb {
	background-color: white !important;
	border-radius: 100px !important;
	width: 4px !important;
	border: 3px solid white !important;
}

/* 
 ██████  ███████ ███    ██ ███████ ██████   █████  ██      
██       ██      ████   ██ ██      ██   ██ ██   ██ ██      
██   ███ █████   ██ ██  ██ █████   ██████  ███████ ██      
██    ██ ██      ██  ██ ██ ██      ██   ██ ██   ██ ██      
 ██████  ███████ ██   ████ ███████ ██   ██ ██   ██ ███████ 
*/
.applicationDisplay {
	top: 0;
	height: 100vh;
	overflow-y: scroll;
	overflow-x: hidden;
}

#loadingScreen {
	height: 100vh;
	width: 100vw;
	overflow: hidden;
}

.small-screen {
	display: none;
}

.cube {
	filter: invert(11%) sepia(73%) saturate(5399%) hue-rotate(340deg)
		brightness(98%) contrast(99%);
}

.page-text {
	text-align: justify;
	line-height: 2;
}

.success {
	transform: translateX(-10px);
}

.page-container {
	margin-top: 80px;
}

.btn-primary,
.btn-primary:visited,
.btn-primary:active,
.btn-primary:focus,
.btn-primary:active:focus {
	background-color: var(--primary);
	color: rgb(255, 255, 255);
	border: none;
	outline: none;
	box-shadow: none;
	transition: all 0.25s ease-in-out;
}

.btn-primary:hover {
	background-color: var(--primary-dark);
}

.section {
	border-bottom: 5px solid var(--primary);
}

.large {
	font-size: 3.5rem;
}

p.large {
	font-size: 1.3rem;
}

.normal {
	font-weight: normal;
}

.center {
	text-align: center;
}

.italicized {
	font-style: italic;
}

.primary {
	color: var(--primary);
}

.secondary {
	color: var(--secondary);
}

.white,
.white:hover,
.white:active,
.white:active:focus,
.white:focus,
.white:visited {
	color: white !important;
}

.FSCred {
	color: var(--FSCred);
}

.FSCblue {
	color: var(--FSCblue);
}

.FSClightblue {
	color: var(--FSClightblue);
}

.FSCgrey {
	color: var(--FSCgrey);
}

hr.FSCred {
	margin: 0 0 15px 0;
	border-bottom: 4px solid var(--FSCred);
	border-radius: 20px;
	opacity: 1;
}

hr.FSCblue {
	margin: 0 0 15px 0;
	border-bottom: 4px solid var(--FSCblue);
	border-radius: 20px;
	opacity: 1;
}

hr.FSClightblue {
	margin: 0 0 15px 0;
	border-bottom: 4px solid var(--FSClightblue);
	border-radius: 20px;
	opacity: 1;
}

.no-decor,
.no-decor:hover,
.no-decor:focus,
.no-decor:active,
.no-decor:visited {
	text-decoration: none;
	color: var(--primary);
}

.white-shadow {
	text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #fff, 0 0 4px #fff,
		0 0 5px #fff, 0 0 6px #fff, 0 0 7px #fff;
}

.black-shadow {
	text-shadow: 0 0 5px #000;
}

.link,
.link:focus,
.link:active,
.link:visited {
	color: var(--primary);
	font-weight: 500;
}

.link:hover {
	color: var(--primary-dark);
}

.primary-hr {
	margin: 0 0 15px 0;
	border-bottom: 4px solid var(--primary);
	border-radius: 20px;
	opacity: 1;
}

.white-hr {
	margin: 0 0 15px 0;
	border-bottom: 4px solid white;
	border-radius: 20px;
	opacity: 1;
}

.row.block-center {
	width: unset !important;
}

.nav-pad {
	padding-top: 60px;
}

.vertical-center {
	display: flex;
	align-items: center;
	height: 100%;
	width: 100%;
	justify-content: center;
	flex-direction: column;
}

.mb-sm-4 {
	margin-bottom: 0 !important;
}

.bold {
	font-weight: bold;
}

.blur {
	backdrop-filter: blur(5px);
}

.strong-blur {
	backdrop-filter: blur(10px);
}

/*
███    ███ ███████ ██████  ██  █████       ██████  ██    ██ ███████ ██████  ██ ███████ ███████ 
████  ████ ██      ██   ██ ██ ██   ██     ██    ██ ██    ██ ██      ██   ██ ██ ██      ██      
██ ████ ██ █████   ██   ██ ██ ███████     ██    ██ ██    ██ █████   ██████  ██ █████   ███████ 
██  ██  ██ ██      ██   ██ ██ ██   ██     ██ ▄▄ ██ ██    ██ ██      ██   ██ ██ ██           ██ 
██      ██ ███████ ██████  ██ ██   ██      ██████   ██████  ███████ ██   ██ ██ ███████ ███████ 
*/
@media (max-width: 1199.9px) {
	h1 {
		font-size: 300%;
	}

	h2 {
		font-size: 250%;
	}

	h3 {
		font-size: 200%;
	}

	h4 {
		font-size: 175%;
	}

	h5 {
		font-size: 125%;
	}

	h6 {
		font-size: 100%;
	}
}

@media (max-width: 991.9px) {
	h1 {
		font-size: 250%;
	}

	h2 {
		font-size: 200%;
	}

	h3 {
		font-size: 175%;
	}

	h4 {
		font-size: 150%;
	}

	h5 {
		font-size: 125%;
	}

	h6 {
		font-size: 100%;
	}
}

@media (max-width: 767.9px) {
	h1 {
		font-size: 220%;
	}

	h2 {
		font-size: 180%;
	}

	h3 {
		font-size: 160%;
	}

	h4 {
		font-size: 140%;
	}

	h5 {
		font-size: 120%;
	}

	h6 {
		font-size: 100%;
	}
}

@media (max-width: 575.9px) {
	h1 {
		font-size: 180%;
	}

	h2 {
		font-size: 150%;
	}

	h3 {
		font-size: 130%;
	}

	h4 {
		font-size: 120%;
	}

	h5 {
		font-size: 110%;
	}

	h6 {
		font-size: 100%;
	}
}

@media (max-width: 399.9px) {
	h1 {
		font-size: 125%;
	}

	h2 {
		font-size: 120%;
	}

	h3 {
		font-size: 115%;
	}

	h4 {
		font-size: 110%;
	}

	h5 {
		font-size: 105%;
	}

	h6 {
		font-size: 100%;
	}
}

@media (max-width: 349.9px) {
	.applicationDisplay {
		display: none;
	}

	.small-screen {
		display: unset;
	}
}
</style>
