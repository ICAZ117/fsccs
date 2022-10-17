<template>
	<div class="event-body white">
		<div class="m-0 row block-center h-100">
			<div class="col-2 center icon h-100">
				<i :class="icon + ' m-auto vertical-center'"></i>
			</div>
			<div class="col-10 px-4 py-2 h-100" :style="hasDescription ? '' : 'transform: translateY(35px)'">
				<h5>{{ title }}</h5>
				<div class="row block-center">
					<div class="my-0" style="width: fit-content" v-if="location">
						<i class="fa-solid fa-location-dot me-2"></i> {{ location }}
					</div>
					<div style="width: fit-content" v-if="date"><i class="fa-solid fa-calendar me-2"></i> {{ date }}</div>
					<div style="width: fit-content" v-if="time"><i class="fa-solid fa-clock me-2"></i> {{ time }}</div>
				</div>
				<p v-if="hasDescription" style="max-height: 60px; overflow-y: auto; margin-top: 0.5rem">
					<slot></slot>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["title", "icon", "location", "date", "time", "hasDescription"],
	};
</script>

<style scoped>
	.event-body {
		background-color: rgb(24, 44, 56);
		width: 90%;
		margin: auto;
		height: 150px;
		border-radius: 20px;
		/* box-shadow: 0px 0px 10px 1px var(--FSCblue); */
		overflow: hidden;
		transition: all ease-in-out 0.3s;
	}

	.event-body:hover {
		box-shadow: 0px 0px 10px 5px var(--FSCblue);
		transform: scale(1.05);
	}

	.event-body:hover .icon i {
		text-shadow: 0px 0px 30px var(--FSClightblue);
	}

	.icon i {
		font-size: 80px;
		display: flex;
		transition: all ease-in-out 0.3s;
	}

	.icon {
		background-color: rgba(67, 73, 119, 0.2);
	}
</style>
