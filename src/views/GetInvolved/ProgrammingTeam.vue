<template>
	<TextPage
		:title="'Programming Team'"
		:heroImage="{
			backgroundImage: `url(${require('@/assets/img/WCS3.jpg')})`,
			'background-position': 'bottom',
			'background-size': 'cover',
		}"
		:background="{
			backgroundImage: `url(${require('@/assets/img/BG7.jpg')})`,
			'background-position': 'center',
		}"
        :opacity="0.9"
	>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae mattis
			magna. Maecenas ligula sapien, euismod vel tempor at, facilisis quis lacus. Etiam
			accumsan odio tortor, non tristique ex laoreet eget. Ut aliquam, neque sed egestas
			tincidunt, felis lectus euismod turpis, quis venenatis nisl est ac enim. Sed
			venenatis nisi at orci imperdiet accumsan. Nam quis arcu dignissim, cursus odio non,
			imperdiet urna. Quisque ac hendrerit lacus. Quisque dapibus laoreet augue, ut
			convallis arcu rutrum ut. In quis metus mauris. Class aptent taciti sociosqu ad
			litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum gravida velit
			mi, at malesuada enim elementum quis. Aenean blandit pretium nulla at rhoncus.
			Integer ut elit est. Morbi nec suscipit nunc, ut volutpat felis.
		</p>

		<p>
			Aenean hendrerit fermentum urna at venenatis. Nullam tincidunt metus elit, quis
			mollis nibh venenatis et. Vestibulum nec blandit massa. Sed vestibulum vestibulum
			tellus ut varius. Maecenas consectetur sit amet neque eget ultricies. Mauris non
			lorem ac metus fringilla ornare. Mauris commodo, tortor at efficitur condimentum,
			orci lacus tempus sapien, ut blandit mi est in ex. Quisque vel auctor erat. Sed eget
			interdum est, id fermentum quam. Etiam a tincidunt arcu, non porta leo. Vivamus
			eleifend ipsum vulputate, mattis elit nec, ornare libero. Donec sollicitudin ante
			nec risus tempus, eget porttitor risus tempus. Suspendisse consectetur lacus id
			lectus laoreet fermentum.
		</p>

		<p>
			Aliquam iaculis nec erat eu vehicula. Vivamus iaculis est at gravida vestibulum.
			Pellentesque cursus tellus et aliquet mattis. Integer tristique interdum sem, vitae
			pellentesque lacus iaculis id. Curabitur lorem dolor, convallis a pulvinar nec,
			congue ut tortor. Etiam semper turpis ut ligula elementum, id sollicitudin quam
			laoreet. Aliquam vel felis sit amet dui sollicitudin euismod in at purus. Vivamus
			suscipit nec odio quis imperdiet. Cras nulla magna, pulvinar id leo ut, pretium
			varius nisi. Ut nisl metus, sagittis vitae tempor vel, condimentum interdum orci.
			Phasellus risus erat, molestie sit amet cursus sed, congue sollicitudin felis.
		</p>

		<p>
			Nulla eu odio commodo dolor convallis porttitor dignissim at tortor. Ut feugiat nec
			est ut ornare. Maecenas vitae viverra neque. Curabitur eget diam at nunc molestie
			condimentum ut in leo. Cras sed vestibulum risus. Duis congue ipsum eget nisl
			semper, sed tempor erat laoreet. Praesent ut eleifend purus, eget lacinia ante.
		</p>

		<p>
			Curabitur aliquam, nisl et blandit sollicitudin, nisl turpis euismod dolor, nec
			mattis augue neque sed nibh. Aenean in iaculis ligula. Nunc interdum purus vel erat
			venenatis vestibulum. Pellentesque consequat nisl sed lacus accumsan aliquet.
			Vestibulum gravida magna id sollicitudin commodo. Suspendisse vitae lacus a enim
			scelerisque tristique non ac nulla. Nam elementum dictum nulla sed blandit. Nullam
			vestibulum massa et aliquet suscipit. Donec placerat lectus in pellentesque maximus.
			Proin risus augue, elementum in cursus semper, interdum id magna. Donec sollicitudin
			non tellus sed ornare. Pellentesque habitant morbi tristique senectus et netus et
			malesuada fames ac turpis egestas. Curabitur vestibulum nisi id est gravida, sit
			amet elementum metus tincidunt. Aliquam sed vulputate ex, quis vestibulum tortor. In
			aliquam ac massa ut laoreet.
		</p>
	</TextPage>
</template>

<script>
	import TextPage from "../../components/TextPage.vue";

	export default {
		components: {
			TextPage,
		},
	};
</script>

<style></style>
