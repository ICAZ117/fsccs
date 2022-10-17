<template>
    <div class="p-0 m-0 card">
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
    </div>
</template>

<script>
export default {
    props: ["event", "color"],
    data() {
        return {};
    },
};
</script>

<style scoped>
.card {
    border: none;
    transition: all 0.3s ease;
    width: 15rem;
    overflow-x: hidden;
}

.card:hover {
    transform: translateY(-20px);
    box-shadow: 0px 10px 10px 0px v-bind(color);
}

/* Works on Chrome, Edge, and Safari */
::-webkit-scrollbar {
    width: 10px !important;
}

::-webkit-scrollbar-track {
    background: transparent !important;
}

::-webkit-scrollbar-thumb {
    background-color: v-bind(color) !important;
    border-radius: 100px !important;
    width: 4px !important;
    border: 3px solid v-bind(color) !important;
}

.card-title {
    font-weight: 600;
}

.card-img-top {
    height: 8rem;
}
</style>
