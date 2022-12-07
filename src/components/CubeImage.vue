<template>
	<img id="thugImg" :src="cubifiedPic" alt="" width="325" />
</template>

<script>
import * as canvas from "canvas";
import * as faceapi from "face-api.js";

export default {
	props: ["pic"],
	data() {
		return {
			cubifiedPic: "",
			glass_img: {},
		};
	},
	methods: {
		async cubify() {
			const img = await faceapi.fetchImage(this.pic);

            this.$store.state.showLoader = true;

			await this.startImage(img);
		},
		async startImage(img) {
			const canvas = document.createElement("canvas");

            canvas.focus();

			const displaySize = { 
                width: img.width, 
                height: img.height 
            };

			faceapi.matchDimensions(canvas, displaySize);

			var ctx = canvas.getContext("2d");
			ctx.drawImage(img, 0, 0, img.width, img.height);

			// document.body.append(canvas)
			const detections = await faceapi
				.detectAllFaces(img, new faceapi.TinyFaceDetectorOptions())
				.withFaceLandmarks();

			const resizedDetections = faceapi.resizeResults(
				detections,
				displaySize
			);
			// canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)

			// console.log(detections.length)

			if (detections.length > 0) {
				var landmarks = detections[0]["landmarks"];
				var left_eyebrow = landmarks["_positions"][17];
				var right_eyebrow = landmarks["_positions"][26];
				var left_eye = landmarks["_positions"][36];
				var right_eye = landmarks["_positions"][45];
				var lip = landmarks["_positions"][66];

				console.log(
					"\n\n\n\n\n----------------------------------------------\n\n"
				);

				console.log("LEFT EYEBROW", left_eyebrow);
				console.log("RIGHT EYEBROW", right_eyebrow);
				console.log("LEFT EYE", left_eye);
				console.log("RIGHT EYE", right_eye);
				console.log("LIPS", lip);
				console.log(
					"\n\n----------------------------------------------\n\n\n\n\n"
				);
				// center_x_glass = (left_eye.x + right_eye.x)/2
				// center_y_glass = (left_eye.y + right_eye.y)/2

				var glass_actual_length = Math.sqrt(
					Math.pow(left_eyebrow.x - right_eyebrow.x, 2) +
						Math.pow(left_eyebrow.y - right_eyebrow.y, 2)
				);
                
				var glass_img_width = 90;

				console.log("GLASSES WIDTH", glass_img_width);

				var scale_ratio = glass_actual_length / glass_img_width;
				var rotation_angle = Math.atan2(
					right_eye.y - left_eye.y,
					right_eye.x - left_eye.x
				);

				var rotated_glass = this.resize_and_rotate(
					this.glass_img,
					scale_ratio,
					rotation_angle
				);

				console.log(rotated_glass);
				console.log(this.glass_img);

				console.log(left_eyebrow.x);
				console.log(left_eyebrow.y);

				ctx.drawImage(rotated_glass, left_eyebrow.x, left_eyebrow.y);
			}

			// faceapi.draw.drawDetections(canvas, resizedDetections)
			// faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)

			var dataUrl = canvas.toDataURL("image/jpg");

			this.cubifiedPic = dataUrl;

            this.$store.state.showLoader = false;
		},

		resize_and_rotate(img, scale, rotation) {
			var canvasRot = document.createElement("canvas");
			var ctx1 = canvasRot.getContext("2d");
			var new_width = Math.ceil(img.width * scale);
			canvasRot.width = new_width;
			var new_height = Math.ceil(img.height * scale);
			canvasRot.height = new_height;

			// ctx1.drawImage(img, 0, 0, img.width, img.height);
			ctx1.setTransform(
				scale,
				0,
				0,
				scale,
				new_width / 2,
				new_height / 2
			); // sets scale and origin
			ctx1.rotate(rotation);
			ctx1.drawImage(img, -img.width / 2, -img.height / 2);
			var retImg = new Image();
            retImg.style = "display: none!important;"
			retImg.src = canvasRot.toDataURL("image/png");

			document.body.append(retImg);

			return retImg;
		},
	},
	async mounted() {
		this.cubifiedPic = this.pic;

		const res = this.$store.getters.getCubeLifeMode;

		if (res) {
			this.glass_img = new Image();
			this.glass_img.src = "/cubify/CubeGlasses.png";

			Promise.all([
				faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
				faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
			]).then(async () => await this.cubify());
		}
	},
};
</script>

<style>
</style>