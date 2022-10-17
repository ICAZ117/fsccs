<template></template>

<script>
	import { getAuth, signOut } from "firebase/auth";
	export default {
		async beforeMount() {
			signOut(getAuth()).then(() => {
				this.$router.push("/");
			});
		},
	};
</script>

<style></style>
