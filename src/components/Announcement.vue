<template>
    <!-- <div id="announcementParent" style="height: 500px; overflow: hidden !important"> -->
    <div class="announcementBox" ref="announcement">
        <div class="row">
            <div class="col-1">
                <img :src="pfp" class="pfp" />
            </div>
            <div class="col-11 fadeOut">
                <span class="bold">{{ name }}</span><span class="small ms-2" style="color: grey">{{ date }}</span>
                <br />
                <div class="white-scroll-bar" style="max-height: 350px; overflow: auto;">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["pfp", "name", "date"],
    data() {
        return {
            showCutoffButton: false,
            overflow: "",
        };
    },
};
</script>

<style scoped>
.announcementBox {
    --bg: rgba(0, 0, 0, 0.6);
    width: 70%;
    margin: auto;
    background-color: var(--bg);
    padding: 2rem;
    border-radius: 20px;
    color: white;
}

.pfp {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: white;
}

.readMore {
    width: 100%;
    background: transparent;
    border: none;
    color: white;
    font-weight: bold;
    z-index: 10;
    height: 30px;
}
</style>
