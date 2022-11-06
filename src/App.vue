<template>
	<div v-if="true">
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
	<button v-if="false" @click="execute" class="btn btn-primary btn-lg">
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
					code: "CSC3380",
					name: "ANALYSIS OF ALGORITHMS",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "ACC2111",
					name: "FNDTNS OF FINANCIAL ACCOU",
					credits: "4",
					buckets: ["ST:QUAN", "BSQuan"],
				},
				{
					code: "BIO3700",
					name: "GENETICS",
					credits: "4",
					buckets: ["BSNS"],
				},
				{
					code: "MUS1151",
					name: "AURAL SKILLS I",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2240",
					name: "PERCUSSION",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "BIO1520",
					name: "INTRO TO MARINE BIOLOGY",
					credits: "4",
					buckets: ["BSNS"],
				},
				{
					code: "MUS2247",
					name: "CLASSICAL GUITAR",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2248",
					name: "CLASSICAL GUITAR",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS1152",
					name: "AURAL SKILLS II",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2243",
					name: "VOICE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2244",
					name: "VOICE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "CSC2280",
					name: "INTRO TO COMPUTER SCIENCE",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "MUS2238",
					name: "BRASS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2239",
					name: "PERCUSSION",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "CSC2281",
					name: "PROGRAMMG/DATA STRUCTURES",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "CSC3370",
					name: "PROGRAMMING LANGUAGE CONC",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "HIS3705",
					name: "WAR AND SOCIETY-MODERN ER",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				{
					code: "ARH3720",
					name: "MEDIEVAL ART AND ARCHITEC",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "BARQART",
					name: "Art",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "MAT2505",
					name: "LINEAR ALGEBRA",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "ENG3263",
					name: "RHETORIC AND WRITING",
					credits: "4",
					buckets: ["ST:QUAL", "EffComC"],
				},
				{
					code: "MUS1140",
					name: "PERCUSSION",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "BIO3710",
					name: "MICROBIOLOGY",
					credits: "4",
					buckets: ["BSNS"],
				},
				{
					code: "MUS2234",
					name: "PIANO",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2235",
					name: "WOODWINDS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS1147",
					name: "CLASSICAL GUITAR",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2236",
					name: "WOODWINDS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS1148",
					name: "CLASSICAL GUITAR",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2237",
					name: "BRASS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2231",
					name: "STRINGS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS1143",
					name: "VOICE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2232",
					name: "STRINGS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS1144",
					name: "VOICE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2233",
					name: "PIANO",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "PED4508",
					name: "MEASUREMENT AND EPIDEMIOL",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "MLS4900",
					name: "MEDICAL LAB SCI CAPSTONE",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "BAHUM2",
					name: "BA HUMANITIES REQ 2",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "MUS1138",
					name: "BRASS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "BAHUM1",
					name: "BA HUMANITIES REQ 1",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "MUS1139",
					name: "PERCUSSION",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "ARH3710",
					name: "ANCIENT ART AND ARCHITECT",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "PSY1500",
					name: "PSY INVSTGTNS SOCIAL WRLD",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "BIO1500",
					name: "BIOLOGICAL ESSENTIALS",
					credits: "4",
					buckets: ["BSNS"],
				},
				{
					code: "BIO3800",
					name: "CELL BIOLOGY",
					credits: "4",
					buckets: ["BSNS"],
				},
				{
					code: "PED1005",
					name: "WELLNESS MANAGEMENT",
					credits: "2",
					buckets: ["PW"],
				},
				{
					code: "GRE2203",
					name: "READINGS IN GREEK",
					credits: "4",
					buckets: ["BAFL"],
				},
				{
					code: "MUS1134",
					name: "PIANO",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2223",
					name: "CHAMBER ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS1135",
					name: "WOODWINDS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2224",
					name: "CHAMBER ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS1136",
					name: "WOODWINDS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS1137",
					name: "BRASS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "ARA1101",
					name: "FIRST SEMESTER ARABIC",
					credits: "4",
					buckets: ["BAFL"],
				},
				{
					code: "MUS1131",
					name: "STRINGS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2220",
					name: "PIANO ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS1132",
					name: "STRINGS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2221",
					name: "ORCHESTRA",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "ARA1102",
					name: "SECOND SEMESTER ARABIC",
					credits: "4",
					buckets: ["BAFL"],
				},
				{
					code: "MUS1133",
					name: "PIANO",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2222",
					name: "ORCHESTRA",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2217",
					name: "WIND ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2218",
					name: "WIND ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2219",
					name: "PIANO ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				{
					code: "ARH3700",
					name: "HISTORY OF PHOTOGRAPHY",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "GRE1101",
					name: "HELLENISTIC GREEK I",
					credits: "4",
					buckets: ["BAFL"],
				},
				{
					code: "LAS3365",
					name: "MODERN LATIN AMERICA",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC", "BALAS"],
				},
				{
					code: "POS3905",
					name: "POLITICS AND THE MEDIA",
					credits: "4",
					buckets: ["SW", "ST:QUAL"],
				},
				{
					code: "GRE1102",
					name: "HELLENISTIC GREEK II",
					credits: "4",
					buckets: ["BAFL"],
				},
				{
					code: "MUS1123",
					name: "CHAMBER ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2212",
					name: "SYMPHONY BAND",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS1124",
					name: "CHAMBER ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2213",
					name: "JAZZ ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2214",
					name: "JAZZ ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS1120",
					name: "PIANO ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				{
					code: "ARA2203",
					name: "SECOND YEAR ARABIC",
					credits: "4",
					buckets: ["BAFL"],
				},
				{
					code: "MUS1121",
					name: "ORCHESTRA",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2210",
					name: "CONCERT CHOIR",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS1122",
					name: "ORCHESTRA",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2211",
					name: "SYMPHONY BAND",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2209",
					name: "CONCERT CHOIR",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2205",
					name: "SOUTHERN SINGERS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "CSC3340",
					name: "DATABASE MANAGMNT SYSTEMS",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "ARH3770",
					name: "18TH-19TH C ART",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "MUS1117",
					name: "WIND ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2206",
					name: "SOUTHERN SINGERS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS1118",
					name: "WIND ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2207",
					name: "OPERA THEATRE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS1119",
					name: "PIANO ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2208",
					name: "OPERA THEATRE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "NUR4110",
					name: "EVIDENCE BASED HLTH CARE",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "LAS3355",
					name: "HISTORY OF FLORIDA",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC", "BALAS"],
				},
				{
					code: "JPN1102",
					name: "SECOND SEMESTER JAPANESE",
					credits: "4",
					buckets: ["BAFL"],
				},
				{
					code: "MUS1112",
					name: "SYMPHONY BAND",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2201",
					name: "CHAMBER SINGERS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "CRM3385",
					name: "SELECTED TOPICS: CRM/SOC",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "MUS1113",
					name: "JAZZ ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2202",
					name: "CHAMBER SINGERS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS1114",
					name: "JAZZ ENSEMBLE",
					credits: "1",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2203",
					name: "WOMEN'S CHORALE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "JPN1101",
					name: "FIRST SEMESTER JAPANESE",
					credits: "4",
					buckets: ["BAFL"],
				},
				{
					code: "MUS2204",
					name: "WOMEN'S CHORALE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "BIO2770",
					name: "EXERCISE PHYSIOLOGY",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "MUS1110",
					name: "CONCERT CHOIR",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS1111",
					name: "SYMPHONY BAND",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS1109",
					name: "CONCERT CHOIR",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "COM1600",
					name: "FORENSICS PRACTICUM",
					credits: "2",
					buckets: ["BACOM", "EffComB"],
				},
				{
					code: "COM3900",
					name: "SPECIAL TOPICS IN COMMUNI",
					credits: "4",
					buckets: ["BACOM"],
				},
				{
					code: "COM1601",
					name: "FORENSICS PRACTICUM",
					credits: "2",
					buckets: ["BACOM", "EffComB"],
				},
				{
					code: "MUS1105",
					name: "SOUTHERN SINGERS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS1106",
					name: "SOUTHERN SINGERS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS1107",
					name: "OPERA THEATRE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "ARH1100",
					name: "SURVEY WSTRN ART/ARCHITEC",
					credits: "4",
					buckets: ["SW", "BAHA"],
				},
				{
					code: "MUS1108",
					name: "OPERA THEATRE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "COM3905",
					name: "POLITICS AND THE MEDIA",
					credits: "4",
					buckets: ["SW", "ST:QUAL"],
				},
				{
					code: "LAS2005",
					name: "LATIN AMERICAN CULTURE",
					credits: "4",
					buckets: ["BALAS"],
				},
				{
					code: "LAS3335",
					name: "LATIN AMERICAN FILM AND F",
					credits: "4",
					buckets: ["BAFL", "BALAS"],
				},
				{
					code: "LAS2007",
					name: "LATIN AMERICAN FILM II",
					credits: "4",
					buckets: ["BALAS"],
				},
				{
					code: "LAS2006",
					name: "LATIN AMERICA ON FILM I",
					credits: "4",
					buckets: ["BALAS"],
				},
				{
					code: "MUS1101",
					name: "CHAMBER SINGERS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS1102",
					name: "CHAMBER SINGERS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "ECO3150",
					name: "ECOLOGY",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "MUS1103",
					name: "WOMEN'S CHORALE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS1104",
					name: "WOMEN'S CHORALE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "HON1700",
					name: "WRTG CNTMP SOC ISSUES",
					credits: "4",
					buckets: ["ST:QUAL", "EffComA"],
				},
				{
					code: "CSC3336",
					name: "WEB APPLICATIONS",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "POS3600",
					name: "TOPICS IN INTERNAT'L REL",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				{
					code: "CSC3335",
					name: "DATABASE ANALYSIS AND DES",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "HON1701",
					name: "SPKG CNTMP SOC ISSUES",
					credits: "4",
					buckets: ["SW", "EffComB"],
				},
				{
					code: "ARH3750",
					name: "BAROQUE/ROCOCO ART",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "BIO2750",
					name: "EVOLUTION",
					credits: "4",
					buckets: ["BSNS"],
				},
				{
					code: "PHI3388",
					name: "FUNDAMENTL QUESTIONS THEO",
					credits: "4",
					buckets: ["BAPHI", "MV", "BAREL", "ST:QUAL", "EffComC"],
				},
				{
					code: "POS2500",
					name: "LAW AND THE COURTS",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "PHI4479",
					name: "SPECIAL TOPICS IN PHILOSO",
					credits: "4",
					buckets: ["MV", "ST:QUAL", "EffComC"],
				},
				{
					code: "CSC3350",
					name: "COMPUTER GAME DESIGN",
					credits: "4",
					buckets: ["BSQuan", "EffComB"],
				},
				{
					code: "ARH3740",
					name: "RENAISSANCE ART",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "BIO2520",
					name: "BIOLOGICL GEOGRAPHY & GIS",
					credits: "4",
					buckets: ["BSNS"],
				},
				{
					code: "CSC3233",
					name: "PROGRAMG/DATA STRCTR III",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "MKT3160",
					name: "MARKETING PRINCIPLES",
					credits: "4",
					buckets: ["ST:QUAL"],
				},
				{
					code: "ART2170",
					name: "FIGURE DRAWING I",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "ENG1005",
					name: "WRITING ABOUT TOPICS",
					credits: "4",
					buckets: ["EffComA", "BAENG"],
				},
				{
					code: "MAT3205",
					name: "PROOF TECHNIQUES",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "ENG1003",
					name: "ENGAGING THE WRITTEN WORD",
					credits: "4",
					buckets: ["EffComA", "BAENG"],
				},
				{
					code: "LAS3308",
					name: "TPCS-HISPANIC CULTURE-CIV",
					credits: "4",
					buckets: ["SW", "BALAS"],
				},
				{
					code: "ENG3304",
					name: "MAJOR AUTHORS",
					credits: "4",
					buckets: ["BAENG"],
				},
				{
					code: "ENG4999",
					name: "SENIOR SEMINAR",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "BIO2216",
					name: "HUMAN ANATOMY AND PHYSIOL",
					credits: "4",
					buckets: ["BSNS"],
				},
				{
					code: "BIO2215",
					name: "HUMAN ANATOMY AND PHYSIOL",
					credits: "4",
					buckets: ["BSNS"],
				},
				{
					code: "SPA2203",
					name: "SECOND YEAR SPANISH",
					credits: "4",
					buckets: ["BAFL"],
				},
				{
					code: "BIO3302",
					name: "PLANT NUTRITION",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "BIO2214",
					name: "DISASTERS-CIVILIZATION-EN",
					credits: "4",
					buckets: ["BSNS", "BSSS"],
				},
				{
					code: "THE2621",
					name: "BEGINNING JAZZ II",
					credits: "1",
					buckets: ["BATHE", "PW"],
				},
				{
					code: "PHY3070",
					name: "MODERN PHYSICS I",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "BIO1000",
					name: "BIOLOGY FOR YOUR LIFE",
					credits: "4",
					buckets: ["BSNS"],
				},
				{
					code: "ENG1130",
					name: "INTRODUCTION TO ENGLISH S",
					credits: "4",
					buckets: ["EffComA", "BAENG"],
				},
				{
					code: "SPA2205",
					name: "COMPOSITION-CONVERSATION",
					credits: "4",
					buckets: ["SW", "BAFL", "ST:QUAL"],
				},
				{
					code: "THE1413",
					name: "STAGECRAFT-PRODUCTION PRA",
					credits: "4",
					buckets: ["BATHE"],
				},
				{
					code: "SPA2207",
					name: "COMPOSITION AND CONVERSAT",
					credits: "4",
					buckets: ["SW", "BAFL", "ST:QUAL"],
				},
				{
					code: "THE2620",
					name: "BEGINNING JAZZ I",
					credits: "1",
					buckets: ["BATHE", "PW"],
				},
				{
					code: "CSC4510",
					name: "ADV TOPCS ARTFCL INTLLGNC",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "MAT3313",
					name: "CALCULUS W SOLID ANALY GE",
					credits: "4",
					buckets: ["ST:QUAN", "BSQuan"],
				},
				{
					code: "ART3150",
					name: "WATERCOLOR",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "AST1010",
					name: "DESCRIPTIVE ASTRONOMY",
					credits: "4",
					buckets: ["BSNS"],
				},
				{
					code: "BIO3316",
					name: "TROPICAL ECOLOGY",
					credits: "4",
					buckets: ["BSLab", "BSNS"],
				},
				{
					code: "SPA3308",
					name: "TPCS-HISPANIC CULTURE-CIV",
					credits: "4",
					buckets: ["SW", "BALAS"],
				},
				{
					code: "ENG1000",
					name: "INTRODUCTION TO COLLEGE E",
					credits: "4",
					buckets: ["BAENG"],
				},
				{
					code: "PHY3080",
					name: "MODERN PHYSICS II",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "MAT3442",
					name: "PROBABILITY AND STATISTIC",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "THE2630",
					name: "BEGINNING TAP I",
					credits: "1",
					buckets: ["BATHE", "PW"],
				},
				{
					code: "THE2631",
					name: "BEGINNING TAP II",
					credits: "1",
					buckets: ["BATHE", "PW"],
				},
				{
					code: "EXS2770",
					name: "EXERCISE PHYSIOLOGY",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "ARH3790",
					name: "CONTEMPORARY ART",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "GEO3320",
					name: "CULTURAL GEOGRAPHY",
					credits: "4",
					buckets: ["BSSS"],
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
					buckets: ["ST:QUAN", "BSQuan"],
				},
				{
					code: "HRT3325",
					name: "PRINCIPLES OF TURF MANAGE",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "HRT3326",
					name: "TROPICAL AND TEMPERATE FR",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "PSY1106",
					name: "PSYCHOLOGY AS A SOCIAL SC",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				{
					code: "WST2256",
					name: "GENDER INTERPRETATN BIBLI",
					credits: "4",
					buckets: ["MV", "BAREL"],
				},
				{
					code: "MUS4481",
					name: "HISTORY-LITERATURE OF THE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "CSC2232",
					name: "PROGRAMMING-DATA STRUCTUR",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "CSC2231",
					name: "PROGRAMMING AND DATA STRU",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "CSC4899",
					name: "COMPUTER SCI SR PROJECT",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "MAT2100",
					name: "DISCRETE STRUCTURES",
					credits: "4",
					buckets: ["ST:QUAN", "BSQuan"],
				},
				{
					code: "COM4350",
					name: "SOCIAL MEDIA STRATEGIES",
					credits: "4",
					buckets: ["BACOM"],
				},
				{
					code: "CSC4410",
					name: "OPERATING SYSTEMS-CONCURR",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "EXS2760",
					name: "SPORTS NUTRITN/SUPPLMNTTN",
					credits: "4",
					buckets: ["PW"],
				},
				{
					code: "ART3170",
					name: "FIGURE DRAWING II",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "ARH3780",
					name: "MODERN ART",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "PSY1110",
					name: "PSYCHOLOGY AS A NATURAL S",
					credits: "4",
					buckets: ["BSLab", "BSSS"],
				},
				{
					code: "HRT2100",
					name: "INTRO TO HORTICULTURAL SC",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "PSY2209",
					name: "DEVELOPMENTAL PSYCHOLOGY",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "ARH4999",
					name: "SENIOR THESIS",
					credits: "4",
					buckets: ["ST:QUAL", "EffComC"],
				},
				{
					code: "PSY2206",
					name: "SOCIAL PSYCHOLOGY",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "MUS3382",
					name: "HISTORY OF MUSIC II",
					credits: "4",
					buckets: ["SW", "BAMUS"],
				},
				{
					code: "MUS3381",
					name: "HISTORY OF MUSIC I",
					credits: "4",
					buckets: ["SW", "EffComC"],
				},
				{
					code: "ENG3320",
					name: "SPEC TOPICS/MEDIA STUDIES",
					credits: "4",
					buckets: ["EffComC", "BAENG"],
				},
				{
					code: "BIO2201",
					name: "ENVIRONMENTAL SCIENCE",
					credits: "4",
					buckets: ["BSNS"],
				},
				{
					code: "ENG3200",
					name: "WRITING FOR BUSINESS",
					credits: "4",
					buckets: ["BAENG", "EffComB"],
				},
				{
					code: "SPA1102",
					name: "SECOND SEMESTER SPANISH",
					credits: "4",
					buckets: ["BAFL"],
				},
				{
					code: "BIO2200",
					name: "ENVIRONMENTAL ISSUES",
					credits: "4",
					buckets: ["BSNS"],
				},
				{
					code: "SPA1101",
					name: "FIRST YEAR SPANISH",
					credits: "4",
					buckets: ["SW", "BAFL", "ST:QUAL"],
				},
				{
					code: "RYM4410",
					name: "BIBLE/THEOLOGY YOUTH MNST",
					credits: "4",
					buckets: ["BAREL"],
				},
				{
					code: "THE2610",
					name: "BEGINNING BALLET I",
					credits: "1",
					buckets: ["BATHE", "PW"],
				},
				{
					code: "THE2611",
					name: "BEGINNING BALLET II",
					credits: "1",
					buckets: ["BATHE", "PW"],
				},
				{
					code: "CSC2100",
					name: "DISCRETE STRUCTURES",
					credits: "4",
					buckets: ["ST:QUAN", "BSQuan"],
				},
				{
					code: "CSC3310",
					name: "COMPUTR ORGANIZATN & ARCH",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "ART4499",
					name: "GRAPHIC DESIGN SR THESIS",
					credits: "4",
					buckets: ["ST:QUAL", "EffComC"],
				},
				{
					code: "CSC4640",
					name: "SELECTED TOPICS IN CSC",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "COM3370",
					name: "PHOTOJOURNALISM",
					credits: "4",
					buckets: ["BACOM"],
				},
				{
					code: "CSC4400",
					name: "SOFTWARE ENGINEERING",
					credits: "4",
					buckets: ["BSQuan", "EffComC"],
				},
				{
					code: "MAT2312",
					name: "CALCULUS W PLANE ANALYTIC",
					credits: "4",
					buckets: ["ST:QUAN", "BSQuan"],
				},
				{
					code: "MAT2311",
					name: "CALCULUS W PLANE ANALYTIC",
					credits: "4",
					buckets: ["ST:QUAN", "BSQuan"],
				},
				{
					code: "GEO3340",
					name: "WORLD REGIONAL GEOGRAPHY",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "RYM3310",
					name: "LDSHIP AND ADM FOR YOUTH",
					credits: "4",
					buckets: ["BAREL"],
				},
				{
					code: "ENG3235",
					name: "CREATIVE WRITING: POETRY",
					credits: "4",
					buckets: ["ST:QUAL", "BAENG"],
				},
				{
					code: "MUS1070",
					name: "INTRODUCTION TO MUSIC THE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2280",
					name: "COMPOSITION IV",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "BIO3100",
					name: "PLANT TAXONOMY",
					credits: "4",
					buckets: ["BSNS"],
				},
				{
					code: "CSC4710",
					name: "ADV TOPCS PARALLEL COMPTG",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "ENG2023",
					name: "CREATIVE LITERATURE/WRITG",
					credits: "4",
					buckets: ["BAENG"],
				},
				{
					code: "THE2420",
					name: "LIGHTING FOR THE STAGE",
					credits: "4",
					buckets: ["BATHE"],
				},
				{
					code: "THE3630",
					name: "INTERMEDIATE TAP",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "THE1214",
					name: "ACTING FOR THE NON-ACTOR",
					credits: "4",
					buckets: ["BATHE", "ST:QUAL"],
				},
				{
					code: "THE3631",
					name: "ADVANCED TAP",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "CSC3620",
					name: "WEB APPLCTN ARCHITECTURES",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "THE1213",
					name: "INTRODUCTION TO ACTING",
					credits: "4",
					buckets: ["ST:QUAL"],
				},
				{
					code: "MAT4961",
					name: "SR INTERNSHIP IN MATH",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "MAT3997",
					name: "TRIAL COURSE",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "ENG2004",
					name: "LITERARY LIFE",
					credits: "4",
					buckets: ["ST:QUAL", "BAENG", "EffComB"],
				},
				{
					code: "ENG3217",
					name: "CREATIVE NONFICTION WRITI",
					credits: "4",
					buckets: ["EffComC", "BAENG"],
				},
				{
					code: "ENG3219",
					name: "PERSUASIVE WRITING",
					credits: "4",
					buckets: ["ST:QUAL", "EffComC", "BAENG"],
				},
				{
					code: "WST2200",
					name: "INTRO WOMEN/GENDER STD",
					credits: "4",
					buckets: ["SW", "ST:QUAL"],
				},
				{
					code: "MUS2271",
					name: "THEORY: ADVANCED HARMONY",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "ENG3340",
					name: "MYTH AND LEGEND",
					credits: "4",
					buckets: ["BAENG"],
				},
				{
					code: "MUS2272",
					name: "THEORY: ADVANCED HARMONY",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS1184",
					name: "ENGLISH DICTION",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "ENG3100",
					name: "STUDIES IN LITERARY THEOR",
					credits: "4",
					buckets: ["ST:QUAL"],
				},
				{
					code: "MUS1180",
					name: "COMPOSITION II",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "RYM2210",
					name: "TCHNG-LRNNG THEORIES YOUT",
					credits: "4",
					buckets: ["BAREL"],
				},
				{
					code: "THE1102",
					name: "PRODUCTION PRACTICUM II",
					credits: "4",
					buckets: ["BATHE"],
				},
				{
					code: "THE2313",
					name: "SCRIPT ANALYSIS",
					credits: "4",
					buckets: ["BATHE"],
				},
				{
					code: "MUS2279",
					name: "COMPOSITION III",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "THE1101",
					name: "PRODUCTION PRACTICUM I",
					credits: "4",
					buckets: ["BATHE"],
				},
				{
					code: "BIO4561",
					name: "RESEARCH-MOLECULAR BIOLOG",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "THE1220",
					name: "STAGE MOVEMENT",
					credits: "4",
					buckets: ["BATHE"],
				},
				{
					code: "BIO4562",
					name: "RESEARCH-MOLECULAR BIOLOG",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "MUS1185",
					name: "GERMAN DICTION",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "THE1106",
					name: "PRODUCTION PRACTICUM VI",
					credits: "4",
					buckets: ["BATHE"],
				},
				{
					code: "THE2430",
					name: "COSTUMING FOR THE STAGE",
					credits: "4",
					buckets: ["BATHE"],
				},
				{
					code: "THE3640",
					name: "INTERMEDIATE MODERN DANCE",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "MUS1186",
					name: "ITALIAN DICTION",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2275",
					name: "STRINGS PEDAGOGY",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "THE1105",
					name: "PRODUCTION PRACTICUM V",
					credits: "4",
					buckets: ["BATHE"],
				},
				{
					code: "THE3641",
					name: "ADVANCED MODERN DANCE",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "MUS1187",
					name: "FRENCH DICTION",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2276",
					name: "WOODWINDS PEDAGOGY",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "THE1104",
					name: "PRODUCTION PRACTICUM IV",
					credits: "4",
					buckets: ["BATHE"],
				},
				{
					code: "CSC3610",
					name: "INTRO TO WEB DEVELOPMENT",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "MUS2277",
					name: "CHORAL PEDAGOGY",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "THE1103",
					name: "PRODUCTION PRACTICUM III",
					credits: "4",
					buckets: ["BATHE"],
				},
				{
					code: "NUR1103",
					name: "HLTH WELL SELF & COMMNTY",
					credits: "2",
					buckets: ["PW"],
				},
				{
					code: "POS2900",
					name: "INTERNATIONAL RELATIONS",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				{
					code: "MUS1173",
					name: "THEORY-INTRODUCTORY HARMO",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "HIS3175",
					name: "UNITED STATES FOREIGN POL",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				{
					code: "BIO2235",
					name: "GENERAL BOTANY",
					credits: "4",
					buckets: ["BSNS"],
				},
				{
					code: "BIO2230",
					name: "GENERAL ZOOLOGY",
					credits: "4",
					buckets: ["BSNS"],
				},
				{
					code: "CSC3520",
					name: "MACHINE LEARNING",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "CSC4610",
					name: "ADV TOPCS WEB DEVELOPMENT",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "THE3611",
					name: "ADVANCED BALLET",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "MUS1179",
					name: "COMPOSITION I",
					credits: "4",
					buckets: ["BAMUS"],
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
					buckets: ["BATHE", "PW"],
				},
				{
					code: "THE2641",
					name: "BEGINNING MODERN DANCE II",
					credits: "1",
					buckets: ["BATHE", "PW"],
				},
				{
					code: "ENG3370",
					name: "GENDER IN LITERATURE",
					credits: "4",
					buckets: ["BAENG"],
				},
				{
					code: "CSC3400",
					name: "SOFTWARE ENGINEERING",
					credits: "4",
					buckets: ["BSQuan"],
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
					buckets: ["SW", "ST:QUAL", "BSSS"],
				},
				{
					code: "ENG3236",
					name: "CREATIVE WRITING: FICTION",
					credits: "4",
					buckets: ["ST:QUAL", "BAENG"],
				},
				{
					code: "ENG4209",
					name: "SPECIAL TOPICS/NONFICTION",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "BIO3216",
					name: "ADV HUMAN ANAT/PHYS II",
					credits: "4",
					buckets: ["BSNS"],
				},
				{
					code: "MUS2251",
					name: "AURAL SKILLS III",
					credits: "4",
					buckets: ["BAMUS"],
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
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				{
					code: "BIO3215",
					name: "ADV HUMAN ANAT/PHYS I",
					credits: "4",
					buckets: ["BSNS"],
				},
				{
					code: "BIO4662",
					name: "SITE-SPECIFIC RESRCH/BIO",
					credits: "6",
					buckets: ["EffComC"],
				},
				{
					code: "THE2413",
					name: "SCENE DESIGN",
					credits: "4",
					buckets: ["BATHE"],
				},
				{
					code: "BIO4661",
					name: "SITE-SPECIFIC RESRCH/BIO",
					credits: "6",
					buckets: ["EffComC"],
				},
				{
					code: "MUS1163",
					name: "EXPLORATNS IN MUSIC/DANCE",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2252",
					name: "AURAL SKILLS IV",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS1164",
					name: "SURVEY OF JAZZ",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS2253",
					name: "INTRODUCTION TO MUSIC BUS",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "MUS1165",
					name: "GREAT WORKS OF MUSIC",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "THE3620",
					name: "INTERMEDIATE JAZZ",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "MUS1166",
					name: "CARIBBEAN MUSIC",
					credits: "4",
					buckets: ["BAMUS"],
				},
				{
					code: "CSC3510",
					name: "ARTIFICIAL INTELLIGENCE",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "THE3621",
					name: "ADVANCED JAZZ",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "CHE1012",
					name: "CHEMICAL FOUNDATIONS II",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "CHE2222",
					name: "ORGANIC CHEMISTRY II",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "THE2220",
					name: "VOICE AND DIALECT FOR THE",
					credits: "4",
					buckets: ["BATHE"],
				},
				{
					code: "COM2100",
					name: "MASS MEDIA AND SOCIETY",
					credits: "4",
					buckets: ["BACOM", "SW"],
				},
				{
					code: "COM2101",
					name: "NEWS MEDIA PRACTICUM I",
					credits: "4",
					buckets: ["BACOM"],
				},
				{
					code: "COM3310",
					name: "BROADCAST WRITING",
					credits: "4",
					buckets: ["BACOM"],
				},
				{
					code: "THE1130",
					name: "VOCAL TECHNIQUE MASTER CL",
					credits: "4",
					buckets: ["BATHE"],
				},
				{
					code: "COM2102",
					name: "NEWS MEDIA PRACTICUM II",
					credits: "4",
					buckets: ["BACOM"],
				},
				{
					code: "ART2570",
					name: "VIDEO ART",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "PHY2020",
					name: "GENERAL PHYSICS II NONCAL",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "PHI1109",
					name: "WHAT IS PHILOSOPHY?",
					credits: "4",
					buckets: ["BAPHI", "MV", "ST:QUAL"],
				},
				{
					code: "HIS3275",
					name: "HISTORY OF EAST ASIA",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				{
					code: "HON2286",
					name: "SOCIAL INVESTIGATNS-INSIG",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "ART3410",
					name: "ADVANCED PRINT DESIGN",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "COM3320",
					name: "INTRO TO BROADCAST JOURNA",
					credits: "4",
					buckets: ["BACOM"],
				},
				{
					code: "PSYLC1",
					name: "PSY1106 MAJ EQUIVALENCE",
					credits: "4",
					buckets: ["SW"],
				},
				{
					code: "COM2110",
					name: "MEDIA WRITING",
					credits: "4",
					buckets: ["BACOM"],
				},
				{
					code: "PSYLC2",
					name: "PSY1110 MAJ EQUIVALENCE",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "CHE2110",
					name: "PHYSIOLOGICAL CHEMISTRY",
					credits: "4",
					buckets: ["BSLab"],
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
					code: "CHE2355",
					name: "DESCRIPTIVE INORGANIC CHE",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "COM4999",
					name: "SPEECH-MASS COMMUNICATN T",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "COM3300",
					name: "NEWS REPORTING",
					credits: "4",
					buckets: ["BACOM"],
				},
				{
					code: "COM3420",
					name: "ADVERTISING WRITING",
					credits: "4",
					buckets: ["BACOM"],
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
					code: "ART1120",
					name: "DESIGN FUNDAMENTALS",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "ART2210",
					name: "SCULPTURE I",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "SOC2270",
					name: "INTERCULTURAL COMM",
					credits: "4",
					buckets: ["SW", "MV", "BSSS"],
				},
				{
					code: "THE2114",
					name: "MAKEUP FOR THE STAGE",
					credits: "4",
					buckets: ["BATHE"],
				},
				{
					code: "BIO3150",
					name: "ECOLOGY",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "COM3410",
					name: "ADVERTISING CREATIVE I",
					credits: "4",
					buckets: ["BACOM"],
				},
				{
					code: "COM2200",
					name: "ADVANCED PUBLIC SPEAKING",
					credits: "4",
					buckets: ["BACOM"],
				},
				{
					code: "ART1140",
					name: "INTRO TO DIGITAL PHOTOGRA",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "COM4500",
					name: "COMMUNICATION LAW-ETHICS",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "HON1173",
					name: "ENVRNMNTL INVESTIGATNS-IN",
					credits: "4",
					buckets: ["ST:QUAL", "EffComA"],
				},
				{
					code: "PHY2120",
					name: "GENERAL PHYSICS II (CALCU",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "HON1174",
					name: "CULTURAL INVESTIGATNS-INS",
					credits: "4",
					buckets: ["SW", "EffComB"],
				},
				{
					code: "ART1131",
					name: "DRAWING I",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "ART2220",
					name: "CERAMICS I",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "ART3310",
					name: "PRINTMAKING II",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "THE1234",
					name: "APPLD VOICE FOR THEATRE",
					credits: "4",
					buckets: ["BATHE"],
				},
				{
					code: "THE1233",
					name: "APPLD VOICE FOR THEATRE",
					credits: "4",
					buckets: ["BATHE"],
				},
				{
					code: "THE1232",
					name: "APPLD VOICE FOR THEATRE",
					credits: "4",
					buckets: ["BATHE"],
				},
				{
					code: "BIO3362",
					name: "BIOCHEM: MOLECULAR BIO",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "ART1132",
					name: "DRAWING II",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "ART2100",
					name: "PAINTING I",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "THE1231",
					name: "APPLD VOICE FOR THEATRE",
					credits: "4",
					buckets: ["BATHE"],
				},
				{
					code: "THE1238",
					name: "APPLD VOICE FOR THEATRE",
					credits: "4",
					buckets: ["BATHE"],
				},
				{
					code: "CHE3342",
					name: "PHYSICAL CHEMISTRY II",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "BIO3360",
					name: "MEDICAL BOTANY",
					credits: "4",
					buckets: ["BSNS"],
				},
				{
					code: "THE1237",
					name: "APPLD VOICE FOR THEATRE",
					credits: "4",
					buckets: ["BATHE"],
				},
				{
					code: "BIO3361",
					name: "BIOCHEMISTRY I",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "FRE1101",
					name: "FIRST YEAR FRENCH",
					credits: "4",
					buckets: ["SW", "BAFL", "ST:QUAL"],
				},
				{
					code: "THE1236",
					name: "APPLD VOICE FOR THEATRE",
					credits: "4",
					buckets: ["BATHE"],
				},
				{
					code: "CSC3720",
					name: "APPS OF PARALLEL COMPUTG",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "FRE1102",
					name: "FIRST YEAR FRENCH",
					credits: "4",
					buckets: ["BAFL"],
				},
				{
					code: "PHI3500",
					name: "SOCIAL & POLITICAL PHIL",
					credits: "4",
					buckets: ["BAPHI"],
				},
				{
					code: "THE1235",
					name: "APPLD VOICE FOR THEATRE",
					credits: "4",
					buckets: ["BATHE"],
				},
				{
					code: "CHE3341",
					name: "PHYSICAL CHEMISTRY I",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "COM1100",
					name: "INTRO TO COMMUNICATION",
					credits: "4",
					buckets: ["BACOM"],
				},
				{
					code: "THE1240",
					name: "IMPROVISATN-CREATIVE EXPR",
					credits: "4",
					buckets: ["BATHE"],
				},
				{
					code: "HIS3365",
					name: "MODERN LATIN AMERICA",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC", "BALAS"],
				},
				{
					code: "HIS4455",
					name: "SEMINAR TOPICS WESTERN WO",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				{
					code: "PHY2010",
					name: "GENERAL PHYSICS I NONCALC",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "HIS3240",
					name: "INTRO TO PUBLIC HISTORY",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				{
					code: "BIO3378",
					name: "DIALOGUES/SCIENCE/RELIGN",
					credits: "4",
					buckets: ["BSLab", "SW", "MV", "BAREL"],
				},
				{
					code: "ART2110",
					name: "PAINTING II",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "MAT2050",
					name: "APPLIED CALCULUS",
					credits: "4",
					buckets: ["ST:QUAN", "BSQuan"],
				},
				{
					code: "POS3100",
					name: "SOUTHERN POLITICS",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				{
					code: "SOC3385",
					name: "SELECTED TOPICS: CRM/SOC",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "FRE2203",
					name: "SECOND YEAR FRENCH",
					credits: "4",
					buckets: ["BAFL"],
				},
				{
					code: "THE4513",
					name: "THEATRE HISTORY AND LITER",
					credits: "4",
					buckets: ["SW", "EffComC"],
				},
				{
					code: "ART3440",
					name: "ADV DIGITAL PHOTOGRAPHY",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "BIO4462",
					name: "RESEARCH-ECOLOGY",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "THE2210",
					name: "INTERMEDIATE ACTING",
					credits: "4",
					buckets: ["BATHE"],
				},
				{
					code: "BIO2280",
					name: "APPLIED MICROBIOLOGY",
					credits: "4",
					buckets: ["BSNS"],
				},
				{
					code: "CSC3710",
					name: "INTRO TO PARALLEL COMPUTG",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "BIO4461",
					name: "RESEARCH-ECOLOGY",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "CSC3951",
					name: "COMPUTER SCIENCE RESEARCH",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "POS3345",
					name: "CONFLICT AND WAR",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				{
					code: "THE1050",
					name: "INTRODUCTION TO THEATRE",
					credits: "4",
					buckets: ["BATHE", "ST:QUAL"],
				},
				{
					code: "COM3355",
					name: "PUBLICATN DESIGN/PRODUCTN",
					credits: "4",
					buckets: ["BACOM"],
				},
				{
					code: "ART1160",
					name: "NEW MEDIA",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "PSY3300",
					name: "CLINICAL COUNSELING PSYCH",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "PSY3301",
					name: "SPECIAL TOPICS IN PSYCHOL",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "PSY2210",
					name: "TESTS AND MEASUREMENTS",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "PSY4999",
					name: "CAPSTONE SEMINAR IN PSYCH",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "HRT3302",
					name: "PLANT NUTRITION",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "PSY3305",
					name: "PSYCHOLOGY OF LEARNING",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "SPM3307",
					name: "SPORT LEISURE AND SOCIET",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				{
					code: "HIS3232",
					name: "HISTORY OF THE NEW SOUTH",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				{
					code: "PSY2214",
					name: "ABNORMAL PSYCHOLOGY",
					credits: "4",
					buckets: ["BSSS"],
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
					buckets: ["BSLab", "SW"],
				},
				{
					code: "PSY3309",
					name: "PHYSIOLOGICAL PSYCHOLOGY",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "HIS3355",
					name: "HISTORY OF FLORIDA",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC", "BALAS"],
				},
				{
					code: "HRT3301",
					name: "SOIL SCIENCE",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "HIS3115",
					name: "HIS OF EARLY MDRN EUROPE",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				{
					code: "SPA3334",
					name: "SURVEY OF SPANISH AMERICA",
					credits: "4",
					buckets: ["BAFL"],
				},
				{
					code: "HCM4508",
					name: "MEASUREMENT AND EPIDEMIOL",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "SPA3335",
					name: "LATIN AMERICAN FILM AND F",
					credits: "4",
					buckets: ["BAFL", "BALAS"],
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
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				{
					code: "CHE3361",
					name: "BIOCHEMISTRY I",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "POS3175",
					name: "UNITED STATES FOREIGN POL",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				{
					code: "ART3210",
					name: "SCULPTURE II",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "CHE2275",
					name: "FORENSIC CHEMISTRY",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "REL3388",
					name: "FUNDAMENTL QUESTIONS THEO",
					credits: "4",
					buckets: ["BAPHI", "MV", "BAREL", "ST:QUAL", "EffComC"],
				},
				{
					code: "COM3360",
					name: "ONLINE MEDIA",
					credits: "4",
					buckets: ["BACOM"],
				},
				{
					code: "CHE3362",
					name: "BIOCHEM: MOLECULAR BIO",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "COM2270",
					name: "INTERCULTURAL COMM",
					credits: "4",
					buckets: ["SW", "MV", "BSSS"],
				},
				{
					code: "THE2153",
					name: "APPLIED PRODUCTION EXPERI",
					credits: "2",
					buckets: ["BATHE"],
				},
				{
					code: "COM3102",
					name: "NEWS MEDIA PRACTICUM IV",
					credits: "4",
					buckets: ["BACOM"],
				},
				{
					code: "COM3101",
					name: "NEWS MEDIA PRACTICUM III",
					credits: "4",
					buckets: ["BACOM"],
				},
				{
					code: "PSY2220",
					name: "SENSATION AND PERCEPTION",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "PSY3310",
					name: "RESEARCH DESIGN AND STATI",
					credits: "4",
					buckets: ["ST:QUAN", "BSQuan", "BSSS"],
				},
				{
					code: "PSY3315",
					name: "COGNITIVE PSYCHOLOGY",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "WST3370",
					name: "GENDER IN LITERATURE",
					credits: "4",
					buckets: ["BAENG"],
				},
				{
					code: "PSY3314",
					name: "PSYCHOLOGY OF PERSONALITY",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "HIS3225",
					name: "MODERN AMERICA 1945-PRSN",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				{
					code: "HIS4555",
					name: "SEMINAR-WORLD OR THEMATIC",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				{
					code: "SPA3345",
					name: "SPANISH FOR BUSINESS",
					credits: "4",
					buckets: ["BAFL"],
				},
				{
					code: "PHY2110",
					name: "GENERAL PHYSICS I CALCULU",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "HIS4550",
					name: "SEMINAR-US HISTORY OR LAT",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "EffComC"],
				},
				{
					code: "SPA3340",
					name: "CINEMA FOR SPANISH CONVER",
					credits: "4",
					buckets: ["BAFL"],
				},
				{
					code: "COM3353",
					name: "EDITING FOR MEDIA",
					credits: "4",
					buckets: ["BACOM"],
				},
				{
					code: "MAT2032",
					name: "BIOSTATISTICS",
					credits: "4",
					buckets: ["ST:QUAN", "BSQuan"],
				},
				{
					code: "COM2260",
					name: "SMALL GROUP COMMUNICATION",
					credits: "4",
					buckets: ["BACOM", "SW"],
				},
				{
					code: "PSY2230",
					name: "ECOLOGICAL PSYCHOLOGY",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "MAT1047",
					name: "PRECALCULUS MATHEMATICS",
					credits: "4",
					buckets: ["ST:QUAN", "BSQuan"],
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
					buckets: ["SW", "BAENG"],
				},
				{
					code: "ART3120",
					name: "CERAMICS II",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "ENG2313",
					name: "BRITISH LIT/MDVL-NEOCLSSC",
					credits: "4",
					buckets: ["SW", "BAENG"],
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
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				{
					code: "HIS3455",
					name: "HISTORY OF THE WESTERN WO",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				{
					code: "COM2250",
					name: "INTERPERSONAL COMMUNICATI",
					credits: "4",
					buckets: ["BACOM", "SW", "EffComB"],
				},
				{
					code: "COM3340",
					name: "VIDEO PRODUCTION",
					credits: "4",
					buckets: ["BACOM"],
				},
				{
					code: "MAT3350",
					name: "DIFFERENTIAL EQUATIONS",
					credits: "4",
					buckets: ["BSQuan"],
				},
				{
					code: "ART3110",
					name: "PAINTING III",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "REL3365",
					name: "THEOLOGICAL THEMES IN CON",
					credits: "4",
					buckets: ["BAPHI", "MV", "BAREL", "EffComC"],
				},
				{
					code: "REL3366",
					name: "THE JOHANNINE LITERATURE",
					credits: "4",
					buckets: ["BAREL"],
				},
				{
					code: "MAT2022",
					name: "ELEMENTARY STATISTICS",
					credits: "4",
					buckets: ["ST:QUAN", "BSQuan"],
				},
				{
					code: "POS2290",
					name: "CURRENT ISSUES IN AMER PO",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS"],
				},
				{
					code: "ENG2305",
					name: "MASTERPIECES OF WORLD LIT",
					credits: "4",
					buckets: ["SW", "BAENG"],
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
					buckets: ["BACOM", "SW", "EffComB"],
				},
				{
					code: "POS3380",
					name: "SPEC TOPICS IN AMERICAN P",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS"],
				},
				{
					code: "HIS3445",
					name: "HISTORY OF MODERN AFRICA",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				{
					code: "PSY3336",
					name: "INDUSTRIAL PSYCHOLOGY",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "ENG2309",
					name: "AMERICAN LITERATURE I",
					credits: "4",
					buckets: ["SW", "BAENG"],
				},
				{
					code: "SPA3323",
					name: "SURVEY OF SPANISH LITERAT",
					credits: "4",
					buckets: ["BAFL"],
				},
				{
					code: "SPA3320",
					name: "INTRO TO LITERATURE IN SP",
					credits: "4",
					buckets: ["BAFL", "ST:QUAL"],
				},
				{
					code: "COM3450",
					name: "PUBLIC RELATIONS WRITING",
					credits: "4",
					buckets: ["BACOM"],
				},
				{
					code: "ENG2310",
					name: "AMERICAN LITERATURE II",
					credits: "4",
					buckets: ["BAENG"],
				},
				{
					code: "COM3210",
					name: "ORGANZATIONAL COMMUNICATI",
					credits: "4",
					buckets: ["BACOM", "SW"],
				},
				{
					code: "POS2295",
					name: "METHODS/POLITICAL SCI II",
					credits: "4",
					buckets: ["ST:QUAN", "BSSS"],
				},
				{
					code: "ART3367",
					name: "MOTION PICTURES PRODUCTN",
					credits: "4",
					buckets: ["BACOM"],
				},
				{
					code: "REL3378",
					name: "DIALOGUES/SCIENCE/RELIGN",
					credits: "4",
					buckets: ["BSLab", "MV", "BAREL"],
				},
				{
					code: "COM2500",
					name: "VISUAL COMMUNICATION",
					credits: "4",
					buckets: ["BACOM"],
				},
				{
					code: "ECO3345",
					name: "ECONOMICS AND THE ENVIRON",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "HIS3555",
					name: "WORLD OR THEMATIC HISTORY",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "HIS2225",
					name: "UNITED STATES HISTORY II",
					credits: "4",
					buckets: ["SW", "BSSS", "EffComB"],
				},
				{
					code: "POS1115",
					name: "METHODS/POLITICAL SCI I",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				{
					code: "ART4900",
					name: "SENIOR MEDIA PROJECTS",
					credits: "2",
					buckets: ["EffComC"],
				},
				{
					code: "HIS3550",
					name: "US OR LATIN AMERICAN HIST",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				{
					code: "ART4901",
					name: "SENIOR MEDIA PROJECTS",
					credits: "2",
					buckets: ["EffComC"],
				},
				{
					code: "SOC2206",
					name: "SOCIAL PSYCHOLOGY",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "REL2256",
					name: "GENDER INTERPRETATN BIBLI",
					credits: "4",
					buckets: ["MV", "BAREL"],
				},
				{
					code: "CRM3340",
					name: "CRIMINOLOGY",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				{
					code: "ECO4550",
					name: "COMPRTV ECONOMC INSTITUTN",
					credits: "4",
					buckets: ["BSSS", "EffComC"],
				},
				{
					code: "PHI4459",
					name: "KNOWLEDGE TRUTH & REALIT",
					credits: "4",
					buckets: ["MV", "ST:QUAL"],
				},
				{
					code: "DAN3672",
					name: "DANCE HISTORY II",
					credits: "3",
					buckets: ["EffComC"],
				},
				{
					code: "PHI3365",
					name: "THEOLOGICAL THEMES IN CON",
					credits: "4",
					buckets: ["BAPHI", "MV", "BAREL", "EffComC"],
				},
				{
					code: "ECO2010",
					name: "ESSENTIALS OF ECONOMICS",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "REL3345",
					name: "WISDOM TRADITION ANCIENT",
					credits: "4",
					buckets: ["BAREL"],
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
					buckets: ["SW", "BSSS", "EffComB"],
				},
				{
					code: "HIS1125",
					name: "WESTERN CIVILIZATION SINC",
					credits: "4",
					buckets: ["SW", "BSSS", "EffComB"],
				},
				{
					code: "REL3358",
					name: "PRINCIPLES OF CHRISTIAN E",
					credits: "4",
					buckets: ["MV", "BAREL", "ST:QUAL"],
				},
				{
					code: "PHI3359",
					name: "AESTHETICS",
					credits: "4",
					buckets: ["BAPHI", "SW", "MV", "ST:QUAL"],
				},
				{
					code: "REL4448",
					name: "THE DOCTRINE OF GOD",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "CRM3350",
					name: "POLICING IN AMERICAN SOCI",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "ECO4200",
					name: "BEHAVIORAL ECONOMICS",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "SOC1100",
					name: "INTRODUCTION TO SOCIOLOGY",
					credits: "4",
					buckets: ["SW", "MV", "BSSS"],
				},
				{
					code: "POS3400",
					name: "POL PARTIES/INTRST GRPS",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				{
					code: "GER2203",
					name: "SECOND YEAR GERMAN",
					credits: "4",
					buckets: ["BAFL"],
				},
				{
					code: "HIS3415",
					name: "HISTORY OF THE MIDDLE EAS",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				{
					code: "BIO1900",
					name: "HUMAN GENETICS",
					credits: "4",
					buckets: ["BSNS"],
				},
				{
					code: "HIS1115",
					name: "WESTERN CIVILIZATION TO 1",
					credits: "4",
					buckets: ["SW", "BSSS", "EffComB"],
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
					buckets: ["BAPHI", "MV", "ST:QUAL"],
				},
				{
					code: "SOC3315",
					name: "BASEBALL AND AMERICAN SOC",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				{
					code: "REL3328",
					name: "HISTORY OF CHRISTIAN THOU",
					credits: "4",
					buckets: ["MV", "BAREL", "ST:QUAL"],
				},
				{
					code: "SOC4400",
					name: "SELECTED TOPICS IN SOCIOL",
					credits: "4",
					buckets: ["SW", "ST:QUAN", "BSQuan", "ST:QUAL"],
				},
				{
					code: "CRM3360",
					name: "JUVENILE DELINQUENCY",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "ECO3320",
					name: "APPL STATS AND ANLYT BUS",
					credits: "4",
					buckets: ["ST:QUAN", "BSQuan", "BSSS"],
				},
				{
					code: "SOC2220",
					name: "MARRIAGE AND THE FAMILY",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS"],
				},
				{
					code: "COM1500",
					name: "FUNDAMENTALS OF SPEECH",
					credits: "4",
					buckets: ["BACOM", "EffComB"],
				},
				{
					code: "GER1102",
					name: "FIRST YEAR GERMAN",
					credits: "4",
					buckets: ["BAFL"],
				},
				{
					code: "GER1101",
					name: "FIRST YEAR GERMAN",
					credits: "4",
					buckets: ["BAFL"],
				},
				{
					code: "HIS1100",
					name: "THE ANCIENT WORLD",
					credits: "4",
					buckets: ["SW", "BSSS", "EffComB"],
				},
				{
					code: "SOC3309",
					name: "URBAN SOCIOLOGY",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				{
					code: "SOC3305",
					name: "RACE CULTURE AND HUMAN R",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS"],
				},
				{
					code: "SOC3307",
					name: "SPORT LEISURE AND SOCIET",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				{
					code: "CRM2280",
					name: "INTRODUCTION TO CRIMINAL",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				{
					code: "SOC3303",
					name: "SOCIOLOGY OF DEVIANT BEHA",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS"],
				},
				{
					code: "SOC2216",
					name: "SOCIAL PROBLEMS",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				{
					code: "JPN2203",
					name: "SECOND YEAR JAPANESE",
					credits: "4",
					buckets: ["BAFL"],
				},
				{
					code: "SOC3300",
					name: "SELECTED TOPICS IN SOCIOL",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				{
					code: "REL4428",
					name: "CURRENT THEOLOGICAL THOUG",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "POS3500",
					name: "INTERNAT'L REL DEV WRLD",
					credits: "4",
					buckets: ["BSSS", "EffComC"],
				},
				{
					code: "CHE4960",
					name: "INTERNSHIP IN CHEMISTRY",
					credits: "2",
					buckets: ["EffComC"],
				},
				{
					code: "HON4956",
					name: "HONORS RESEARCH AND THESI",
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
					code: "COM2302",
					name: "NEWS MEDIA PRACTICUM IV",
					credits: "4",
					buckets: ["BACOM"],
				},
				{
					code: "ECO3305",
					name: "MICROECONOMIC THEORY",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "COM2301",
					name: "NEWS MEDIA PRACTICUM III",
					credits: "4",
					buckets: ["BACOM"],
				},
				{
					code: "ECO3308",
					name: "MONETARY ECONOMICS",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "HIS3755",
					name: "SCREENING HISTORY",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS", "EffComC"],
				},
				{
					code: "ECO3307",
					name: "MACROECONOMIC THEORY",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "POR1102",
					name: "ELEMENTARY PORTUGUESE II",
					credits: "4",
					buckets: ["BAFL"],
				},
				{
					code: "POR1101",
					name: "ELEMENTARY PORTUGUESE I",
					credits: "4",
					buckets: ["SW", "BAFL", "ST:QUAL"],
				},
				{
					code: "BIO1600",
					name: "BIOLOGY II: BIOL DVRSTY",
					credits: "4",
					buckets: ["BSNS"],
				},
				{
					code: "BIO3900",
					name: "ANIMAL BEHAVIOR",
					credits: "4",
					buckets: ["BSNS"],
				},
				{
					code: "POS3339",
					name: "THE UNITED STATES CONSTIT",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS"],
				},
				{
					code: "POS4429",
					name: "POLITICAL THEORY",
					credits: "4",
					buckets: ["MV"],
				},
				{
					code: "SOC3336",
					name: "GERONTOLOGY",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				{
					code: "SOC3337",
					name: "DEATH AND DYING",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS"],
				},
				{
					code: "SOC2240",
					name: "CLINICAL SOCIOLOGY",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				{
					code: "CIT4999",
					name: "CITRUS PRDCTN/BUS PRACT",
					credits: "4",
					buckets: ["EffComC"],
				},
				{
					code: "SOC4420",
					name: "METHODS OF SOCIAL RESEARC",
					credits: "4",
					buckets: ["SW", "ST:QUAN", "BSQuan"],
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
					buckets: ["MV", "BAREL", "ST:QUAL"],
				},
				{
					code: "REL2215",
					name: "OLD TESTAMENT",
					credits: "4",
					buckets: ["SW", "MV", "BAREL", "ST:QUAL"],
				},
				{
					code: "REL2214",
					name: "CHRISTIAN ETHICS",
					credits: "4",
					buckets: ["MV", "ST:QUAL"],
				},
				{
					code: "CRM3305",
					name: "RACE CULTURE AND HUMAN R",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS"],
				},
				{
					code: "REL2219",
					name: "WORLD RELIGIONS AND PHILO",
					credits: "4",
					buckets: ["BAPHI", "SW", "MV", "BAREL", "ST:QUAL"],
				},
				{
					code: "CRM3303",
					name: "SOCIOLOGY OF DEVIANT BEHA",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS"],
				},
				{
					code: "REL2218",
					name: "BASIC CHRISTIAN BELIEFS",
					credits: "4",
					buckets: ["MV", "BAREL", "ST:QUAL"],
				},
				{
					code: "ECO3316",
					name: "TROPICAL ECOLOGY",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "COM3500",
					name: "ADVANCED DESKTOP PUBLISHI",
					credits: "4",
					buckets: ["BACOM"],
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
					buckets: ["SW", "BSSS", "EffComB"],
				},
				{
					code: "CHN1101",
					name: "FIRST SEMESTER CHINESE",
					credits: "4",
					buckets: ["BAFL"],
				},
				{
					code: "POR2203",
					name: "INTERMEDIATE PORTUGUESE",
					credits: "4",
					buckets: ["BAFL"],
				},
				{
					code: "ECO3319",
					name: "LABOR ECONOMICS",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "CHN1102",
					name: "SECOND SEMESTER CHINESE",
					credits: "4",
					buckets: ["BAFL"],
				},
				{
					code: "POS3327",
					name: "TOPICS IN COMPARATIVE POL",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				{
					code: "PED2005",
					name: "BEGINNING GOLF",
					credits: "1",
					buckets: ["PW"],
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
					buckets: ["BAPHI", "MV", "ST:QUAL"],
				},
				{
					code: "POS3320",
					name: "LEGISLATIVE PROCESSES",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS"],
				},
				{
					code: "REL2228",
					name: "JESUS IN FILM",
					credits: "4",
					buckets: ["MV", "BAREL", "ST:QUAL"],
				},
				{
					code: "ART2410",
					name: "TYPOGRAPHY AND LAYOUT",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "POS3325",
					name: "U. S. CAMPAIGNS/ELECTNS",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				{
					code: "CRM3310",
					name: "CRIME SCENE INVESTIGATION",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "REL2225",
					name: "THE APOCRYPHA",
					credits: "4",
					buckets: ["SW", "MV", "BAREL"],
				},
				{
					code: "POS3323",
					name: "INTERNATL ORGANIZATIONS",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				{
					code: "CHE1112",
					name: "PRIN OF CHEMISTRY II",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "CHE1111",
					name: "PRINCIPLES OF CHEMISTRY I",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "COM2400",
					name: "PRIN OF ADVERTISING & PR",
					credits: "4",
					buckets: ["BACOM"],
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
					code: "ARH2700",
					name: "THE CONTEMPORARY ARTIST",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "CHN2203",
					name: "SECOND YEAR CHINESE",
					credits: "4",
					buckets: ["BAFL"],
				},
				{
					code: "BIO1820",
					name: "OCEANOGRAPHY",
					credits: "4",
					buckets: ["BSNS"],
				},
				{
					code: "PHI2219",
					name: "WORLD RELIGIONS AND PHILO",
					credits: "4",
					buckets: ["BAPHI", "SW", "MV", "BAREL", "ST:QUAL"],
				},
				{
					code: "POS3315",
					name: "POLITICAL PARTIES",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				{
					code: "PED2018",
					name: "BASKETBALL",
					credits: "1",
					buckets: ["PW"],
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
					code: "PHI3309",
					name: "GREAT PHILOSOPHERS II",
					credits: "4",
					buckets: ["BAPHI", "MV", "ST:QUAL"],
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
					code: "POS2100",
					name: "INTRO COLLOQUIUM IN POLIT",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS"],
				},
				{
					code: "POS3550",
					name: "NAT'L/INTERNAT'L POL ECO",
					credits: "4",
					buckets: ["SW", "ST:QUAL", "BSSS"],
				},
				{
					code: "ART3510",
					name: "WEB DESIGN",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "CHE1000",
					name: "PREP FOR PRIN OF CHEMISTR",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "CHE2335",
					name: "ANALYTICAL CHEMISTRY",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "REL1108",
					name: "WHAT IS RELIGION",
					credits: "4",
					buckets: ["MV", "BAREL", "ST:QUAL"],
				},
				{
					code: "CHE1005",
					name: "CHEM OF FOOD & COOKING",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "ECO2205",
					name: "PRINCIPLES OF MICROECONOM",
					credits: "4",
					buckets: ["BSSS"],
				},
				{
					code: "CHE4999",
					name: "SENIOR RESEARCH",
					credits: "2",
					buckets: ["EffComC"],
				},
				{
					code: "ECO2207",
					name: "PRINCIPLES OF MACROECONOM",
					credits: "4",
					buckets: ["BSSS"],
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
					buckets: ["ST:QUAN", "BSQuan", "BSSS"],
				},
				{
					code: "HIS1300",
					name: "THE MODERN WORLD",
					credits: "4",
					buckets: ["SW", "BSSS", "EffComB"],
				},
				{
					code: "BUS3311",
					name: "LEGAL ENVIRONMENT OF BUSI",
					credits: "4",
					buckets: ["ST:QUAL"],
				},
				{
					code: "PHI2208",
					name: "LOGIC",
					credits: "4",
					buckets: ["BAPHI", "ST:QUAN", "BSQuan"],
				},
				{
					code: "POS4999",
					name: "THEORY/METHODS POLITAL SC",
					credits: "4",
					buckets: ["SW", "ST:QUAN", "BSQuan", "EffComC"],
				},
				{
					code: "BIO2800",
					name: "MARINE BIOLOGY",
					credits: "4",
					buckets: ["BSNS"],
				},
				{
					code: "PED2026",
					name: "BEGINNING TENNIS",
					credits: "1",
					buckets: ["PW"],
				},
				{
					code: "CRM4420",
					name: "METHODS OF SOCIAL RESEARC",
					credits: "4",
					buckets: ["SW", "ST:QUAN", "BSQuan"],
				},
				{
					code: "ART2310",
					name: "PRINTMAKING I",
					credits: "4",
					buckets: ["BAHA"],
				},
				{
					code: "CHE2221",
					name: "ORGANIC CHEMISTRY I",
					credits: "4",
					buckets: ["BSLab"],
				},
				{
					code: "POS1125",
					name: "AMERICAN POLITICAL SYSTEM",
					credits: "4",
					buckets: ["SW", "BSSS"],
				},
				{
					code: "PHI2204",
					name: "ETHICS",
					credits: "4",
					buckets: ["BAPHI", "MV", "ST:QUAL"],
				},
				{
					code: "CHE1011",
					name: "CHEMICAL FOUNDATIONS I",
					credits: "4",
					buckets: ["BSLab"],
				},
			];
			courses.forEach(async (course) => {
				await setDoc(doc(db, "courses", course.code), {
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
