<template>
	<!-- <div id="announcementParent" style="height: 500px; overflow: hidden !important"> -->
	<div class="announcementBox" ref="announcement">
		<div class="w-100 announcementRow" id="largeAnnouncement">
			<div class="announcementPic">
				<img :src="pfp" class="pfp" />
			</div>
			<div class="announcementBody">
				<span class="bold">{{ name }}</span
				><span class="small ms-2" style="color: grey">{{ date }}</span>
				<br />
				<div class="white-scroll-bar pe-1 message">
					<slot></slot>
				</div>
			</div>
		</div>

        <div class="w-100 announcementRow" id="smallAnnouncement">
			<div class="announcementPic">
				<img :src="pfp" class="pfp" />
			</div>
            <div class="announcementHeader">
                <span class="bold">{{ name }}</span>
				<br />
                <div style="color: grey; height: 18px; position: absolute">
                    <span class="small">{{ date }}</span>
                </div>
            </div>
		</div>
        <div class="w-100 announcementBody" id="smallAnnouncement">
            
            <div class="white-scroll-bar pe-1 message">
                <slot></slot>
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

<style>
.announcementBox .message a {
	word-break: break-all;
}
</style>

<style scoped>
#smallAnnouncement {
    display: none;
}
.announcementBox {
	--bg: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(5px);
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
	width: 50px !important;
	margin-right: 10px;
}

.announcementHeader {
    width: calc(100% - 60px);
}

.announcementBody {
	width: calc(100% - 60px);
}

.message {
	max-height: 350px;
	overflow-y: auto;
	hyphens: auto;
    overflow-wrap: break-word;
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

@media (max-width: 767.9px) {
	#smallAnnouncement {
        display: flex;
    }

    #largeAnnouncement {
        display: none;
    }
}
</style>
