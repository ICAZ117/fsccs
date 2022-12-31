<template>
	<div :class="'card ' + (hover ? 'card-hover' : '')">
		<div class="card-body">
			<h5 class="card-title center primary">
				{{ title }}
			</h5>
			<hr class="primary-hr mx-auto" style="width: 50%" />
			<div class="card-text" style="text-align: left">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
        title: {
            type: String,
            required: true
        },
        hover: {
            type: Boolean,
            default: true,
            required: false,
        }
    },
};
</script>

<style scoped>
.card-hover,
.card-hover .primary-hr,
.card-hover .card-title,
.card-hover a {
	transition: all ease 0.5s;
}

.card-hover:hover {
	color: white !important;
	background-color: var(--FSCred);
	transform: scale(1.05);
}

.card-hover:hover .primary-hr {
	border-color: white !important;
}

.card-hover:hover .card-title {
	color: white !important;
}

.card-hover:hover a {
	color: white !important;
}
</style>