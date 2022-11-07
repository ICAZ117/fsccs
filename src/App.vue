<template>
	<div v-if="!firestoreAdmin">
		<div class="applicationDisplay dark-scroll-bar" v-show="pageLoaded">
			<Navbar></Navbar>
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

			const courses = [
				{
					code: "COM2100",
					name: "MASS MEDIA AND SOCIETY",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "PHI1109",
					name: "WHAT IS PHILOSOPHY?",
					credits: "4",
					buckets: ["MV", "ST:QUAL"],
				},
				{
					code: "ACC2111",
					name: "FNDTNS OF FINANCIAL ACCOU",
					credits: "4",
					buckets: ["ST:QUAN"],
				},
				{
					code: "HIS3275",
					name: "HISTORY OF EAST ASIA",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				{
					code: "HON2286",
					name: "SOCIAL INVESTIGATNS-INSIG",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "PSYLC1",
					name: "PSY1106 MAJ EQUIVALENCE",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "CHE4410",
					name: "INTRODUCTION TO RESEARCH",
					credits: "2",
					buckets: ["EffComC"],
				},
				{
					code: "THE4523",
					name: "THEATRE HISTORY-LITERATUR",
					credits: "4",
					buckets: ["SW", "EffComC"],
				},
				{
					code: "DAN1643",
					name: "MODERN DANCE I",
					credits: "3",
					buckets: ["PW"],
				},
				{
					code: "COM4999",
					name: "SPEECH-MASS COMMUNICATN T",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "HIS3705",
					name: "WAR AND SOCIETY-MODERN ER",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				{
					code: "BUS4430",
					name: "BUS ETHICS COMM-RISK MAN",
					credits: "4",
					buckets: ["MV"],
				},
				{
					code: "EDU4990",
					name: "SENIOR INTERNSHIP",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "ART4999",
					name: "SENIOR SEMINAR",
					credits: "4",
					buckets: ["ST:QUAL", "EffComC"],
				},
				{
					code: "ENG3263",
					name: "RHETORIC AND WRITING",
					credits: "4",
					buckets: ["ST:QUAL", "EffComC"],
				},
				{
					code: "SOC2270",
					name: "INTERCULTURAL COMM",
					credits: "4",
					buckets: ["SW", "MV"],
				},
				{
					code: "MLS4900",
					name: "MEDICAL LAB SCI CAPSTONE",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "COM4500",
					name: "COMMUNICATION LAW-ETHICS",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "PSY1500",
					name: "PSY INVSTGTNS SOCIAL WRLD",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "HON1173",
					name: "ENVRNMNTL INVESTIGATNS-IN",
					credits: "4",
					buckets: ["ST:QUAL", "EffComA"],
				},
				{
					code: "HON1174",
					name: "CULTURAL INVESTIGATNS-INS",
					credits: "4",
					buckets: ["SW", "EffComB"],
				},
				{
					code: "PED1005",
					name: "WELLNESS MANAGEMENT",
					credits: "2",
					buckets: ["PW"],
				},
				{
					code: "FRE1101",
					name: "FIRST YEAR FRENCH",
					credits: "4",
					buckets: ["SW", "ST:QUAL"],
				},
				{
					code: "ARH3700",
					name: "HISTORY OF PHOTOGRAPHY",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "HIS3365",
					name: "MODERN LATIN AMERICA",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				{
					code: "HIS4455",
					name: "SEMINAR TOPICS WESTERN WO",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				{
					code: "LAS3365",
					name: "MODERN LATIN AMERICA",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				{
					code: "POS3905",
					name: "POLITICS AND THE MEDIA",
					credits: "4",
					buckets: ["SW", "ST:QUAL"],
				},
				{
					code: "HIS3240",
					name: "INTRO TO PUBLIC HISTORY",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				{
					code: "BIO3378",
					name: "DIALOGUES/SCIENCE/RELIGN",
					credits: "4",
					buckets: ["SW", "MV"],
				},
				{
					code: "MAT2050",
					name: "APPLIED CALCULUS",
					credits: "4",
					buckets: ["ST:QUAN"],
				},
				{
					code: "POS3100",
					name: "SOUTHERN POLITICS",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "THE4513",
					name: "THEATRE HISTORY AND LITER",
					credits: "4",
					buckets: ["SW", "EffComC"],
				},
				{
					code: "BIO4462",
					name: "RESEARCH-ECOLOGY",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "BIO4461",
					name: "RESEARCH-ECOLOGY",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "POS3345",
					name: "CONFLICT AND WAR",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "THE1050",
					name: "INTRODUCTION TO THEATRE",
					credits: "4",
					buckets: ["ST:QUAL"],
				},
				{
					code: "PSY4999",
					name: "CAPSTONE SEMINAR IN PSYCH",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "NUR4110",
					name: "EVIDENCE BASED HLTH CARE",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "SPM3307",
					name: "SPORT LEISURE AND SOCIET",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "HIS3232",
					name: "HISTORY OF THE NEW SOUTH",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				{
					code: "SPM4999",
					name: "SR SEMINAR/SPORT BUS MGT",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "HRT1000",
					name: "PRINCIPLES OF PLANT SCIEN",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "HIS3355",
					name: "HISTORY OF FLORIDA",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				{
					code: "HIS3115",
					name: "HIS OF EARLY MDRN EUROPE",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				{
					code: "LAS3355",
					name: "HISTORY OF FLORIDA",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				{
					code: "REL4474",
					name: "SPECIAL TOP IN CHRSTN ETH",
					credits: "4",
					buckets: ["MV"],
				},
				{
					code: "HIS3231",
					name: "HISTORY OF THE OLD SOUTH",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				{
					code: "POS3175",
					name: "UNITED STATES FOREIGN POL",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "REL3388",
					name: "FUNDAMENTL QUESTIONS THEO",
					credits: "4",
					buckets: ["MV", "ST:QUAL", "EffComC"],
				},
				{
					code: "COM2270",
					name: "INTERCULTURAL COMM",
					credits: "4",
					buckets: ["SW", "MV"],
				},
				{
					code: "COM1600",
					name: "FORENSICS PRACTICUM",
					credits: "2",
					buckets: ["EffComB"],
				},
				{
					code: "COM1601",
					name: "FORENSICS PRACTICUM",
					credits: "2",
					buckets: ["EffComB"],
				},
				{
					code: "PSY3310",
					name: "RESEARCH DESIGN AND STATI",
					credits: "4",
					buckets: ["ST:QUAN"],
				},
				{
					code: "ARH1100",
					name: "SURVEY WSTRN ART/ARCHITEC",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "COM3905",
					name: "POLITICS AND THE MEDIA",
					credits: "4",
					buckets: ["SW", "ST:QUAL"],
				},
				{
					code: "HIS3225",
					name: "MODERN AMERICA 1945-PRSN",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				{
					code: "HIS4555",
					name: "SEMINAR-WORLD OR THEMATIC",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				{
					code: "HIS4550",
					name: "SEMINAR-US HISTORY OR LAT",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				{
					code: "HON1700",
					name: "WRTG CNTMP SOC ISSUES",
					credits: "4",
					buckets: ["ST:QUAL", "EffComA"],
				},
				{
					code: "MAT2032",
					name: "BIOSTATISTICS",
					credits: "4",
					buckets: ["ST:QUAN"],
				},
				{
					code: "POS3600",
					name: "TOPICS IN INTERNAT'L REL",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "HON1701",
					name: "SPKG CNTMP SOC ISSUES",
					credits: "4",
					buckets: ["SW", "EffComB"],
				},
				{
					code: "COM2260",
					name: "SMALL GROUP COMMUNICATION",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "MAT1047",
					name: "PRECALCULUS MATHEMATICS",
					credits: "4",
					buckets: ["ST:QUAN"],
				},
				{
					code: "PSY3322",
					name: "PSY SRCH MEANG/VALUE",
					credits: "2",
					buckets: ["MV"],
				},
				{
					code: "ENG2314",
					name: "BRITISH LIT/RMNTC-PSTMDRN",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "ENG2313",
					name: "BRITISH LIT/MDVL-NEOCLSSC",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "PSY3321",
					name: "PSY SRCH MEANG/VALUE",
					credits: "2",
					buckets: ["MV"],
				},
				{
					code: "HCA4999",
					name: "SEMINAR STRATEGIC MNGMNT",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "HIS3215",
					name: "HISTORY OF RUSSIA-SOVIET",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				{
					code: "HIS3455",
					name: "HISTORY OF THE WESTERN WO",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				{
					code: "COM2250",
					name: "INTERPERSONAL COMMUNICATI",
					credits: "4",
					buckets: ["SW", "EffComB"],
				},
				{
					code: "REL3365",
					name: "THEOLOGICAL THEMES IN CON",
					credits: "4",
					buckets: ["MV", "EffComC"],
				},
				{
					code: "PHI3388",
					name: "FUNDAMENTL QUESTIONS THEO",
					credits: "4",
					buckets: ["MV", "ST:QUAL", "EffComC"],
				},
				{
					code: "PHI4479",
					name: "SPECIAL TOPICS IN PHILOSO",
					credits: "4",
					buckets: ["MV", "ST:QUAL", "EffComC"],
				},
				{
					code: "MAT2022",
					name: "ELEMENTARY STATISTICS",
					credits: "4",
					buckets: ["ST:QUAN"],
				},
				{
					code: "POS2290",
					name: "CURRENT ISSUES IN AMER PO",
					credits: "4",
					buckets: ["SW", "ST:QUAL"],
				},
				{
					code: "ENG2305",
					name: "MASTERPIECES OF WORLD LIT",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "EXS4725",
					name: "RSRCH MTHDS/EXRCS/HMN PRF",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "COM3200",
					name: "PERSUASION",
					credits: "4",
					buckets: ["SW", "EffComB"],
				},
				{
					code: "CSC3350",
					name: "COMPUTER GAME DESIGN",
					credits: "4",
					buckets: ["EffComB"],
				},
				{
					code: "POS3380",
					name: "SPEC TOPICS IN AMERICAN P",
					credits: "4",
					buckets: ["SW", "ST:QUAL"],
				},
				{
					code: "HIS3445",
					name: "HISTORY OF MODERN AFRICA",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				{
					code: "ENG2309",
					name: "AMERICAN LITERATURE I",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "SPA3320",
					name: "INTRO TO LITERATURE IN SP",
					credits: "4",
					buckets: ["ST:QUAL"],
				},
				{
					code: "POS2295",
					name: "METHODS/POLITICAL SCI II",
					credits: "4",
					buckets: ["ST:QUAN"],
				},
				{
					code: "COM3210",
					name: "ORGANZATIONAL COMMUNICATI",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "MKT3160",
					name: "MARKETING PRINCIPLES",
					credits: "4",
					buckets: ["ST:QUAL"],
				},
				{
					code: "REL3378",
					name: "DIALOGUES/SCIENCE/RELIGN",
					credits: "4",
					buckets: ["MV"],
				},
				{
					code: "ENG1005",
					name: "WRITING ABOUT TOPICS",
					credits: "4",
					buckets: ["EffComA"],
				},
				{
					code: "ENG1003",
					name: "ENGAGING THE WRITTEN WORD",
					credits: "4",
					buckets: ["EffComA"],
				},
				{
					code: "LAS3308",
					name: "TPCS-HISPANIC CULTURE-CIV",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "ENG4999",
					name: "SENIOR SEMINAR",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "HIS2225",
					name: "UNITED STATES HISTORY II",
					credits: "4",
					buckets: ["SW", "EffComB"],
				},
				{
					code: "ART4900",
					name: "SENIOR MEDIA PROJECTS",
					credits: "2",
					buckets: ["EffComC"],
				},
				{
					code: "POS1115",
					name: "METHODS/POLITICAL SCI I",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "ART4901",
					name: "SENIOR MEDIA PROJECTS",
					credits: "2",
					buckets: ["EffComC"],
				},
				{
					code: "HIS3550",
					name: "US OR LATIN AMERICAN HIST",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				{
					code: "THE2621",
					name: "BEGINNING JAZZ II",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "ECO4550",
					name: "COMPRTV ECONOMC INSTITUTN",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "PHI4459",
					name: "KNOWLEDGE TRUTH & REALIT",
					credits: "4",
					buckets: ["MV", "ST:QUAL"],
				},
				{
					code: "REL2256",
					name: "GENDER INTERPRETATN BIBLI",
					credits: "4",
					buckets: ["MV"],
				},
				{
					code: "CRM3340",
					name: "CRIMINOLOGY",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "DAN3672",
					name: "DANCE HISTORY II",
					credits: "3",
					buckets: ["EffComC"],
				},
				{
					code: "ENG1130",
					name: "INTRODUCTION TO ENGLISH S",
					credits: "4",
					buckets: ["EffComA"],
				},
				{
					code: "PHI3365",
					name: "THEOLOGICAL THEMES IN CON",
					credits: "4",
					buckets: ["MV", "EffComC"],
				},
				{
					code: "SPA2205",
					name: "COMPOSITION-CONVERSATION",
					credits: "4",
					buckets: ["SW", "ST:QUAL"],
				},
				{
					code: "THE2620",
					name: "BEGINNING JAZZ I",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "SPA2207",
					name: "COMPOSITION AND CONVERSAT",
					credits: "4",
					buckets: ["SW", "ST:QUAL"],
				},
				{
					code: "MAT3313",
					name: "CALCULUS W SOLID ANALY GE",
					credits: "4",
					buckets: ["ST:QUAN"],
				},
				{
					code: "PWGE2",
					name: "PERSONAL WELLNESS GEN ED2",
					credits: "4",
					buckets: ["PW"],
				},
				{
					code: "PWGE1",
					name: "PERSONAL WELLNESS GEN ED1",
					credits: "4",
					buckets: ["PW"],
				},
				{
					code: "HIS4999",
					name: "PHILOSOPHY AND METHDLGY O",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				{
					code: "HIS2215",
					name: "UNITED STATES HISTORY I",
					credits: "4",
					buckets: ["SW", "EffComB"],
				},
				{
					code: "HIS1125",
					name: "WESTERN CIVILIZATION SINC",
					credits: "4",
					buckets: ["SW", "EffComB"],
				},
				{
					code: "REL3358",
					name: "PRINCIPLES OF CHRISTIAN E",
					credits: "4",
					buckets: ["MV", "ST:QUAL"],
				},
				{
					code: "SPA3308",
					name: "TPCS-HISPANIC CULTURE-CIV",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "REL4448",
					name: "THE DOCTRINE OF GOD",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "PHI3359",
					name: "AESTHETICS",
					credits: "4",
					buckets: ["SW", "MV", "ST:QUAL"],
				},
				{
					code: "SOC1100",
					name: "INTRODUCTION TO SOCIOLOGY",
					credits: "4",
					buckets: ["SW", "MV"],
				},
				{
					code: "THE2630",
					name: "BEGINNING TAP I",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "THE2631",
					name: "BEGINNING TAP II",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "POS3400",
					name: "POL PARTIES/INTRST GRPS",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "MAT4999",
					name: "MATHEMATIC SENIOR SEMINAR",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "MAT1007",
					name: "SOCIAL WORLD ALGORITHMS",
					credits: "4",
					buckets: ["ST:QUAN"],
				},
				{
					code: "HIS3415",
					name: "HISTORY OF THE MIDDLE EAS",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				{
					code: "HIS1115",
					name: "WESTERN CIVILIZATION TO 1",
					credits: "4",
					buckets: ["SW", "EffComB"],
				},
				{
					code: "PSY1106",
					name: "PSYCHOLOGY AS A SOCIAL SC",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "WST2256",
					name: "GENDER INTERPRETATN BIBLI",
					credits: "4",
					buckets: ["MV"],
				},
				{
					code: "SOC4406",
					name: "SOCIOLOGICAL THEORY",
					credits: "4",
					buckets: ["SW", "MV", "EffComC"],
				},
				{
					code: "PHI3109",
					name: "GREAT PHILOSOPHERS I",
					credits: "4",
					buckets: ["MV", "ST:QUAL"],
				},
				{
					code: "SOC3315",
					name: "BASEBALL AND AMERICAN SOC",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "CSC4899",
					name: "COMPUTER SCI SR PROJECT",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "REL3328",
					name: "HISTORY OF CHRISTIAN THOU",
					credits: "4",
					buckets: ["MV", "ST:QUAL"],
				},
				{
					code: "SOC4400",
					name: "SELECTED TOPICS IN SOCIOL",
					credits: "4",
					buckets: ["SW", "ST:QUAN", "ST:QUAL"],
				},
				{
					code: "ECO3320",
					name: "APPL STATS AND ANLYT BUS",
					credits: "4",
					buckets: ["ST:QUAN"],
				},
				{
					code: "MAT2100",
					name: "DISCRETE STRUCTURES",
					credits: "4",
					buckets: ["ST:QUAN"],
				},
				{
					code: "EXS2760",
					name: "SPORTS NUTRITN/SUPPLMNTTN",
					credits: "4",
					buckets: ["PW"],
				},
				{
					code: "SOC2220",
					name: "MARRIAGE AND THE FAMILY",
					credits: "4",
					buckets: ["SW", "ST:QUAL"],
				},
				{
					code: "COM1500",
					name: "FUNDAMENTALS OF SPEECH",
					credits: "4",
					buckets: ["EffComB"],
				},
				{
					code: "HIS1100",
					name: "THE ANCIENT WORLD",
					credits: "4",
					buckets: ["SW", "EffComB"],
				},
				{
					code: "SOC3309",
					name: "URBAN SOCIOLOGY",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "ARH4999",
					name: "SENIOR THESIS",
					credits: "4",
					buckets: ["ST:QUAL", "EffComC"],
				},
				{
					code: "SOC3305",
					name: "RACE CULTURE AND HUMAN R",
					credits: "4",
					buckets: ["SW", "ST:QUAL"],
				},
				{
					code: "MUS3382",
					name: "HISTORY OF MUSIC II",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "MUS3381",
					name: "HISTORY OF MUSIC I",
					credits: "4",
					buckets: ["SW", "EffComC"],
				},
				{
					code: "SOC3307",
					name: "SPORT LEISURE AND SOCIET",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "ENG3320",
					name: "SPEC TOPICS/MEDIA STUDIES",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "ENG3200",
					name: "WRITING FOR BUSINESS",
					credits: "4",
					buckets: ["EffComB"],
				},
				{
					code: "CRM2280",
					name: "INTRODUCTION TO CRIMINAL",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "SOC3303",
					name: "SOCIOLOGY OF DEVIANT BEHA",
					credits: "4",
					buckets: ["SW", "ST:QUAL"],
				},
				{
					code: "SPA1101",
					name: "FIRST YEAR SPANISH",
					credits: "4",
					buckets: ["SW", "ST:QUAL"],
				},
				{
					code: "SOC2216",
					name: "SOCIAL PROBLEMS",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "THE2610",
					name: "BEGINNING BALLET I",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "ART4499",
					name: "GRAPHIC DESIGN SR THESIS",
					credits: "4",
					buckets: ["ST:QUAL", "EffComC"],
				},
				{
					code: "THE2611",
					name: "BEGINNING BALLET II",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "CSC2100",
					name: "DISCRETE STRUCTURES",
					credits: "4",
					buckets: ["ST:QUAN"],
				},
				{
					code: "REL4428",
					name: "CURRENT THEOLOGICAL THOUG",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "SOC3300",
					name: "SELECTED TOPICS IN SOCIOL",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "CHE4960",
					name: "INTERNSHIP IN CHEMISTRY",
					credits: "2",
					buckets: ["EffComC"],
				},
				{
					code: "POS3500",
					name: "INTERNAT'L REL DEV WRLD",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "HON4956",
					name: "HONORS RESEARCH AND THESI",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "CSC4400",
					name: "SOFTWARE ENGINEERING",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "HON4955",
					name: "HONORS RESEARCH AND THESI",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "MAT2312",
					name: "CALCULUS W PLANE ANALYTIC",
					credits: "4",
					buckets: ["ST:QUAN"],
				},
				{
					code: "MAT2311",
					name: "CALCULUS W PLANE ANALYTIC",
					credits: "4",
					buckets: ["ST:QUAN"],
				},
				{
					code: "HIS3755",
					name: "SCREENING HISTORY",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				{
					code: "POR1101",
					name: "ELEMENTARY PORTUGUESE I",
					credits: "4",
					buckets: ["SW", "ST:QUAL"],
				},
				{
					code: "POS4429",
					name: "POLITICAL THEORY",
					credits: "4",
					buckets: ["MV"],
				},
				{
					code: "POS3339",
					name: "THE UNITED STATES CONSTIT",
					credits: "4",
					buckets: ["SW", "ST:QUAL"],
				},
				{
					code: "SOC3336",
					name: "GERONTOLOGY",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "ENG3235",
					name: "CREATIVE WRITING: POETRY",
					credits: "4",
					buckets: ["ST:QUAL"],
				},
				{
					code: "SOC3337",
					name: "DEATH AND DYING",
					credits: "4",
					buckets: ["SW", "ST:QUAL"],
				},
				{
					code: "CIT4999",
					name: "CITRUS PRDCTN/BUS PRACT",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "SOC2240",
					name: "CLINICAL SOCIOLOGY",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "SOC4420",
					name: "METHODS OF SOCIAL RESEARC",
					credits: "4",
					buckets: ["SW", "ST:QUAN"],
				},
				{
					code: "POS3330",
					name: "TOPICS IN PUBLIC POLICY",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "REL2216",
					name: "THE NEW TESTAMENT",
					credits: "4",
					buckets: ["MV", "ST:QUAL"],
				},
				{
					code: "THE3630",
					name: "INTERMEDIATE TAP",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "REL2215",
					name: "OLD TESTAMENT",
					credits: "4",
					buckets: ["SW", "MV", "ST:QUAL"],
				},
				{
					code: "THE3631",
					name: "ADVANCED TAP",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "THE1214",
					name: "ACTING FOR THE NON-ACTOR",
					credits: "4",
					buckets: ["ST:QUAL"],
				},
				{
					code: "REL2214",
					name: "CHRISTIAN ETHICS",
					credits: "4",
					buckets: ["MV", "ST:QUAL"],
				},
				{
					code: "THE1213",
					name: "INTRODUCTION TO ACTING",
					credits: "4",
					buckets: ["ST:QUAL"],
				},
				{
					code: "CRM3305",
					name: "RACE CULTURE AND HUMAN R",
					credits: "4",
					buckets: ["SW", "ST:QUAL"],
				},
				{
					code: "REL2219",
					name: "WORLD RELIGIONS AND PHILO",
					credits: "4",
					buckets: ["SW", "MV", "ST:QUAL"],
				},
				{
					code: "CRM3303",
					name: "SOCIOLOGY OF DEVIANT BEHA",
					credits: "4",
					buckets: ["SW", "ST:QUAL"],
				},
				{
					code: "MAT4961",
					name: "SR INTERNSHIP IN MATH",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "REL2218",
					name: "BASIC CHRISTIAN BELIEFS",
					credits: "4",
					buckets: ["MV", "ST:QUAL"],
				},
				{
					code: "ENG2004",
					name: "LITERARY LIFE",
					credits: "4",
					buckets: ["ST:QUAL", "EffComB"],
				},
				{
					code: "CRM4999",
					name: "SEMINAR IN CRIMINOLOGY",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "HIS1200",
					name: "MAKING OF THE MODERN WRLD",
					credits: "4",
					buckets: ["SW", "EffComB"],
				},
				{
					code: "ENG3217",
					name: "CREATIVE NONFICTION WRITI",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "ENG3219",
					name: "PERSUASIVE WRITING",
					credits: "4",
					buckets: ["ST:QUAL", "EffComC"],
				},
				{
					code: "WST2200",
					name: "INTRO WOMEN/GENDER STD",
					credits: "4",
					buckets: ["SW", "ST:QUAL"],
				},
				{
					code: "POS3327",
					name: "TOPICS IN COMPARATIVE POL",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "PED2005",
					name: "BEGINNING GOLF",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "ENG3100",
					name: "STUDIES IN LITERARY THEOR",
					credits: "4",
					buckets: ["ST:QUAL"],
				},
				{
					code: "PED2003",
					name: "SCUBA DIVING",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "PHI2224",
					name: "BUSINESS ETHICS",
					credits: "4",
					buckets: ["MV", "ST:QUAL"],
				},
				{
					code: "POS3320",
					name: "LEGISLATIVE PROCESSES",
					credits: "4",
					buckets: ["SW", "ST:QUAL"],
				},
				{
					code: "BIO4561",
					name: "RESEARCH-MOLECULAR BIOLOG",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "BIO4562",
					name: "RESEARCH-MOLECULAR BIOLOG",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "REL2228",
					name: "JESUS IN FILM",
					credits: "4",
					buckets: ["MV", "ST:QUAL"],
				},
				{
					code: "THE3640",
					name: "INTERMEDIATE MODERN DANCE",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "THE3641",
					name: "ADVANCED MODERN DANCE",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "POS3325",
					name: "U. S. CAMPAIGNS/ELECTNS",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "REL2225",
					name: "THE APOCRYPHA",
					credits: "4",
					buckets: ["SW", "MV"],
				},
				{
					code: "POS3323",
					name: "INTERNATL ORGANIZATIONS",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "NUR1103",
					name: "HLTH WELL SELF & COMMNTY",
					credits: "2",
					buckets: ["PW"],
				},
				{
					code: "PED2013",
					name: "VOLLEYBALL",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "PED2010",
					name: "AEROBICS",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "POS2900",
					name: "INTERNATIONAL RELATIONS",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "PHI2219",
					name: "WORLD RELIGIONS AND PHILO",
					credits: "4",
					buckets: ["SW", "MV", "ST:QUAL"],
				},
				{
					code: "PED2018",
					name: "BASKETBALL",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "POS3315",
					name: "POLITICAL PARTIES",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "PED2019",
					name: "BEGINNING JOGGING",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "BUS4999",
					name: "SEMINAR/STRATEGIC MNGMNT",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "HIS3175",
					name: "UNITED STATES FOREIGN POL",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "PHI3309",
					name: "GREAT PHILOSOPHERS II",
					credits: "4",
					buckets: ["MV", "ST:QUAL"],
				},
				{
					code: "PED2014",
					name: "SOCCER",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "PED2015",
					name: "WEIGHT TRAINING",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "THE3611",
					name: "ADVANCED BALLET",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "POS2100",
					name: "INTRO COLLOQUIUM IN POLIT",
					credits: "4",
					buckets: ["SW", "ST:QUAL"],
				},
				{
					code: "POS3550",
					name: "NAT'L/INTERNAT'L POL ECO",
					credits: "4",
					buckets: ["SW", "ST:QUAL"],
				},
				{
					code: "MAT4960",
					name: "SR INTERNSHIP IN MATH",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "THE2640",
					name: "BEGINNING MODERN DANCE I",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "THE2641",
					name: "BEGINNING MODERN DANCE II",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "THE3610",
					name: "INTERMEDIATE BALLET",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "WST4400",
					name: "WMN/GNDR CNTMP CULTURE",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComB"],
				},
				{
					code: "WST2220",
					name: "MARRIAGE AND THE FAMILY",
					credits: "4",
					buckets: ["SW", "ST:QUAL"],
				},
				{
					code: "REL1108",
					name: "WHAT IS RELIGION",
					credits: "4",
					buckets: ["MV", "ST:QUAL"],
				},
				{
					code: "CHE4999",
					name: "SENIOR RESEARCH",
					credits: "2",
					buckets: ["EffComC"],
				},
				{
					code: "ENG3236",
					name: "CREATIVE WRITING: FICTION",
					credits: "4",
					buckets: ["ST:QUAL"],
				},
				{
					code: "ENG4209",
					name: "SPECIAL TOPICS/NONFICTION",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "PED2020",
					name: "YOGA",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "BUS3320",
					name: "APPL STATS AND ANLYT BUS",
					credits: "4",
					buckets: ["ST:QUAN"],
				},
				{
					code: "HIS1300",
					name: "THE MODERN WORLD",
					credits: "4",
					buckets: ["SW", "EffComB"],
				},
				{
					code: "BUS3311",
					name: "LEGAL ENVIRONMENT OF BUSI",
					credits: "4",
					buckets: ["ST:QUAL"],
				},
				{
					code: "POS4999",
					name: "THEORY/METHODS POLITAL SC",
					credits: "4",
					buckets: ["SW", "ST:QUAN", "EffComC"],
				},
				{
					code: "PHI2208",
					name: "LOGIC",
					credits: "4",
					buckets: ["ST:QUAN"],
				},
				{
					code: "MUS1162",
					name: "MUSIC AND WELLNESS",
					credits: "2",
					buckets: ["PW"],
				},
				{
					code: "HIS3165",
					name: "HISTORY OF MODERN EUROPE",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				{
					code: "PED2026",
					name: "BEGINNING TENNIS",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "BIO4662",
					name: "SITE-SPECIFIC RESRCH/BIO",
					credits: "6",
					buckets: ["EffComC"],
				},
				{
					code: "CRM4420",
					name: "METHODS OF SOCIAL RESEARC",
					credits: "4",
					buckets: ["SW", "ST:QUAN"],
				},
				{
					code: "BIO4661",
					name: "SITE-SPECIFIC RESRCH/BIO",
					credits: "6",
					buckets: ["EffComC"],
				},
				{
					code: "POS1125",
					name: "AMERICAN POLITICAL SYSTEM",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "PHI2204",
					name: "ETHICS",
					credits: "4",
					buckets: ["MV", "ST:QUAL"],
				},
				{
					code: "THE3620",
					name: "INTERMEDIATE JAZZ",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "THE3621",
					name: "ADVANCED JAZZ",
					credits: "1",
					buckets: ["PW"],
				},
			];
			courses.forEach(async (course) => {
				await setDoc(doc(db, "gened-courses", course.code), {
					code: course.code,
					name: course.name,
					credits: course.credits,
					buckets: course.buckets,
				});
			});
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
