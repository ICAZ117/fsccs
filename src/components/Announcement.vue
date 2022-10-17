<template>
	<!-- <div id="announcementParent" style="height: 500px; overflow: hidden !important"> -->
	<div class="announcementBox" ref="announcement">
		<div class="row">
			<div class="col-1">
				<img :src="pfp" class="pfp" />
			</div>
			<div class="col-11 fadeOut" :style="overflow">
				<span class="bold">{{ name }}</span>
				<br />
				<slot></slot>
			</div>
		</div>
		<button class="readMore" v-if="showCutoffButton">
			Read More <i class="fa-solid fa-arrow-right"></i>
		</button>
	</div>
	<!-- </div> -->
</template>

<script>
	export default {
		props: ["pfp", "name"],
		data() {
			return {
				showCutoffButton: false,
				overflow: "",
			};
		},
		mounted() {
			if (this.$refs.announcement.clientHeight > 500) {
				this.showCutoffButton = true;
				this.overflow = {
					height: "436px!important",
					overflow: "hidden!important",
					"-webkit-mask-image":
						"linear-gradient(to bottom, black 60%, rgba(0, 0, 0, 0.1) 80%, transparent 95%)",
					"mask-image":
						"linear-gradient(to bottom, black 60%, rgba(0, 0, 0, 0.1) 80%, transparent 95%)",
				};
			}
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
