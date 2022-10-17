<template>
	<TextPage
		:title="'About the Department'"
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
		<div class="wrapper_div">
		<h1 class="col-2 small_pic"><i class="fa-solid fa-computer"></i></h1>
		<p class="col-10 text_block" >
			Computer science provides you with a sound theoretical background and 
			the opportunities for individual and collaborative exploration of real-world 
			computing problems. Whether you choose to pursue a B.S. or a B.A. in Computer 
			Science, you'll find yourself working in state-of-the-art labs while mastering 
			programming languages like Python and Java. Once you've built a foundation, 
			your coursework will center on creating solutions. You'll develop robotics 
			applications, create websites, and engineer software. You'll also take courses 
			in a specific niche preparing you for more specialized opportunities when you 
			graduate.
		</p>
		</div>

		<div class="wrapper_div">
		<p class="col-9 text_block" >
			The program gives students the opportunity for hands-on experience while they 
			explore and apply the theoretical underpinnings of the discipline. Students have 
			the option to choose from three different concentrations: <b>AI and Machine 
			Learning</b>, <b>Cybersecurity</b>, and <b>Web & Cloud Computing</b>. Choosing 
			a concentration allows students to get a more specialized look into their interests. 
			Those with extra time in their schedule can pick up more than one for a broader view 
			of what the Computer Science department has to offer!
		</p>
		<h1 class="col-3 small_pic center"><i class="fa-solid fa-book-open"></i></h1>
		</div>

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
	<div>
		<div class="degree_square">
			<div class="py-4 px-5">
				<div class="inner_square">
					<div class="textandimg">
					<img src="@/assets/img/person_computer.jpg" alt="" class="degree_pic">
					<a href="/about/degree-and-concentrations">
						<div class="py-5">
							<h4 class="inner_square text">
								Explore the Degree<br>& Concentrations
							</h4>
						</div>
					</a>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import TextPage from "../../components/TextPage.vue";

	export default {
		components: {
			TextPage,
		},
		data() {
			return {
				windowHeight: 0,
				windowWidth: 0,
			};
		},
		async beforeMount() {
			// Get window height
			this.windowHeight = window.innerHeight;
			this.windowWidth = window.innerWidth;
		},
	};
</script>

<style>
	.text_block{
		display: inline-block;
	}
	.small_pic{
		display: inline-block;
	}
	.degree_square{
		background-color: var(--FSCred);
		margin-left: 0;
		margin-right: 0;
		height: 375px;
	}
	.inner_square{
		background-color: rgba(47, 79, 79, 0.515);
		margin-left: 20%;
		margin-right: 20%;
		height: 300px;
		padding-top: 1rem;
	}
	.inner_square.text{
		position: absolute;
		background-color: rgba(81, 65, 65, 0.884) !important;
		color: white !important;
		bottom: 15px;
		height: 100px !important;
		width: 260px;
		margin-left: 1rem !important;
		margin-bottom: 1rem;
	}
	.inner_square.text:hover{
		background-color: rgba(254, 254, 254, 0.884) !important;
		color: var(--FSCred) !important;
	}
	.degree_pic{
		display: block;
		width: 80%;
  		margin-left: auto;
  		margin-right: auto;
	}
	.textandimg{
		position: relative;
  		text-align: center;
	}
</style>
