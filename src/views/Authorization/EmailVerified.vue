<template></template>

<script>
export default {
	mounted() {
		this.$notify({
			title: "Email Verified",
			text: "Please log in to complete registration!",
			type: "success",
		});
        this.$router.push("/");
	},
};
</script>

<style>
</style>