<template>
	<div>
		<div class="event-body white" id="largeEvent">
			<div class="m-0 row block-center h-100">
				<div class="col-2 center icon h-100">
					<i :class="icon + ' m-auto vertical-center'"></i>
				</div>
				<div
					class="col-10 px-4 py-2 h-100"
					:style="hasDescription ? '' : 'transform: translateY(35px)'"
				>
					<h5>{{ title }}</h5>
					<div class="row block-center">
						<div
							class="my-0"
							style="width: fit-content"
							v-if="location"
						>
							<i class="fa-solid fa-location-dot me-2"></i>
							{{ location }}
						</div>
						<div style="width: fit-content" v-if="date">
							<i class="fa-solid fa-calendar me-2"></i> {{ date }}
						</div>
						<div style="width: fit-content" v-if="time">
							<i class="fa-solid fa-clock me-2"></i> {{ time }}
						</div>
					</div>
					<p
						v-if="hasDescription"
						style="
							max-height: 60px;
							overflow-y: auto;
							margin-top: 0.5rem;
						"
					>
						<slot></slot>
					</p>
				</div>
			</div>
		</div>

		<div id="smallEvent">
			<div class="card white">
				<div class="m-0 h-100">
					<div
						class="icon card-img-top center py-5"
						style="height: 200px"
					>
						<i :class="icon + ' m-auto vertical-center'"></i>
					</div>
					<div
						class="card-body px-4 py-4"
						:style="
							hasDescription ? '' : 'transform: translateY(30px)'
						"
					>
						<h5>{{ title }}</h5>
						<div class="row block-center">
							<div
								class="my-0"
								style="width: fit-content"
								v-if="location"
							>
								<i class="fa-solid fa-location-dot me-2"></i>
								{{ location }}
							</div>
							<div style="width: fit-content" v-if="date">
								<i class="fa-solid fa-calendar me-2"></i>
								{{ date }}
							</div>
							<div style="width: fit-content" v-if="time">
								<i class="fa-solid fa-clock me-2"></i>
								{{ time }}
							</div>
						</div>
						<p
							v-if="hasDescription"
							style="
								max-height: 60px;
								overflow-y: auto;
								margin-top: 0.5rem;
							"
						>
							<slot></slot>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- <div class="p-0 m-0 card">
        <div class="card-img-top" :style="'background-color: ' + color">
            <div class="center py-4 white">
                <h5>{{ event.month }}</h5>
                <h3 style="font-weight: 700">{{ event.date.split("/")[1] }}</h3>
            </div>
        </div>
        <div class="card-body">
            <h5 class="card-title" :style="'color: ' + color">{{ event.title }}</h5>
            <i class="fa-solid fa-location-dot me-2" :style="'color: ' + color" v-if="event.location"></i>
            {{ event.location }}
            <br v-if="event.location"/>
            <i class="fa-solid fa-clock me-2" :style="'color: ' + color" v-if="event.time"></i>
            {{ event.time }}
            <div class="card-scroll-bar" style="max-height: 96px; overflow-y: auto">
                <p class="card-text" v-if="event.description">
                    {{ event.description }}
                </p>
            </div>
        </div>
    </div> -->
</template>

<script>
export default {
	props: ["title", "icon", "location", "date", "time", "hasDescription"],
};
</script>

<style scoped>
#smallEvent {
	display: none;
}
.event-body {
	background-color: rgb(36, 73, 97);
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
	background-color: rgba(75, 83, 149, 0.2);
}

@media (max-width: 1199.9px) {
	#smallEvent {
		display: flex;
	}

	#largeEvent {
		display: none;
	}

	.card {
		background-color: rgb(24, 44, 56);
		width: 77vw;
		max-width: 400px;
		height: 400px;
		transition: all ease-in-out 0.3s;
	}

	.card:hover {
		box-shadow: 0px 0px 10px 5px var(--FSCblue);
	}

	.card:hover .icon i {
		text-shadow: 0px 0px 30px var(--FSClightblue);
	}
}
</style>
