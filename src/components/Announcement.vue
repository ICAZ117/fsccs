<template>
    <!-- <div id="announcementParent" style="height: 500px; overflow: hidden !important"> -->
    <div class="announcementBox" ref="announcement">
        <div class="w-100 announcementRow">
            <div class="announcementPic">
                <img :src="pfp" class="pfp" />
            </div>
            <div class="announcementBody">
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
    margin: auto;
    background-color: var(--bg);
    padding: 2rem;
    border-radius: 20px;
    color: white;
}

.announcementRow {
    display: flex;
    flex-direction: row;
}

.announcementPic {
    width: 50px!important;
    margin-right: 10px;
}

.announcementBody {
    width: calc(100% - 60px);
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
