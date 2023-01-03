<template>
	<Renderer
		resize="window"
		:orbit-ctrl="{
			enableDamping: true,
			dampingFactor: 0.05,
			autoRotate: true,
            autoRotateSpeed: 5,
		}"
		shadow
		ref="renderer"
	>
		<Camera :position="{ y: 1, z: 1.75 }" />
		<Scene background="#323232">
			<PointLight :position="{ y: 50, z: 100 }" :intensity="0.7" />
			<PointLight :position="{ y: 50, z: -50 }" :intensity="0.7" />
			<PointLight :position="{ y: 50, x: 50 }" :intensity="0.7" />
			<PointLight :position="{ y: 50, x: -50 }" :intensity="0.7" />
			<GltfModel src="/GLTFs/Cube.gltf" />
			<h1
				style="
					position: absolute;
					color: white;
					transform: translate(-50%, -25vh);
					left: 50%;
				"
			>
				Loading...
			</h1>
		</Scene>
	</Renderer>
</template>
  
  <script>
import {
	Box,
	Camera,
	LambertMaterial,
	PointLight,
	Renderer,
	Scene,
	AmbientLight,
	GltfModel,
} from "troisjs";
import { defineComponent, ref } from "vue";

export default defineComponent({
	components: {
		Box,
		Camera,
		LambertMaterial,
		PointLight,
		Renderer,
		Scene,
		AmbientLight,
		GltfModel,
	},
	setup() {
		const renderer = ref(null);

		return {
			renderer,
		};
	},
});
</script>