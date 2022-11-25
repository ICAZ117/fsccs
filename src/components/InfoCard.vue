<template>
	<div class="card">
		<div class="card-body">
			<h5 class="card-title primary">
				{{ title }}
			</h5>
			<hr class="primary-hr" style="width: 50%" />
			<div class="card-text" style="text-align: left">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["title"],
};
</script>

<style scoped>
.card, .card .primary-hr, .card .card-title, .card a {
    transition: all ease 0.5s;
}

.card:hover {
    color: white!important;
    background-color: var(--FSCred);
    transform: scale(1.05);
}

.card:hover .primary-hr {
    border-color: white!important;
}

.card:hover .card-title {
    color: white!important;
}

.card:hover a {
    color: white!important;
}
</style>