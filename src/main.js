import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { initializeApp } from "firebase/app";
import Notifications from "@kyvg/vue3-notification";
import Markdown from 'vue3-markdown-it';
import { TroisJSVuePlugin } from 'troisjs';

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
initializeApp(firebaseConfig);

const app = createApp(App);
app.use(store);
app.use(router);
app.use(Markdown);
app.use(Notifications);
app.use(TroisJSVuePlugin);
app.mount("#app");
