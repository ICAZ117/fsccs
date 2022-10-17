<template>
	<TextPage
		:title="'Degree & Concentration'"
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

		<div class="overview_text">
			<p>
				The Computer Science Department at Florida Southern College offers a wide variety
				of classes for students to take. Core classes are required for every student, 
				but a large portion of the major is comprised of electives. The CS faculty 
				has a passion for making their classes engaging, and this is especially 
				true for electives, since professors are able to infuse their specific interests 
				into the curriculum.<br><br>
				Some classes offered include:<br>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Object-Oriented Programming<br>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Software Engineering<br>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Analysis of Algorithms<br>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Senior Project<br><br>

				For a detailed list of the classes in the CS major, please check out FSC's 
				<a class="catalog_button" value="Catalog Link" href="https://www.flsouthern.edu/about/academics/catalog.aspx" target="_blank">Academic Catalog</a>
			</p>
			<p>
				In this department, there are three possible concentrations for students to choose from. 
				Each track includes three different classes in rising difficulty that allows 
				those who take them to gain a basis of knowledge in that field. All have their 
				benefits and allow students to pursue an education they are passionate about. 
				If all are too enticing, students are able to choose more than one, or pick up 
				classes from any concentration to fulfil their degree, allowing them to tailor 
				their schedule to their interests.<br><br>
			</p>
		</div>

		<div class="Title1">
			<h2>AI & Machine Learning</h2>
		</div>
		<div class="py-2"></div>

		<div class="wrapper_div">
		<p class="col-7 text_block" >
			In-depth examination of a current topic in artificial intelligence, 
			such as evolutionary computation, artificial neural networks, planning, 
			and gaming.<br><br>
			In <b>CSC 3510 Introduction to Artificial Intelligence</b>, you'll investigate 
			concepts and techniques related to artificial intelligence. This includes 
			a broad range of topics, such as representation, heuristic search, 
			machine learning, genetic algorithms, planning, and games.<br><br>
			
			<b>Concentration specific classes:</b><br>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Introduction to Artificial Intelligence<br>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Machine Learning<br>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Advanced Topics in Artificial Intelligence<br>

		</p>
		<img src="@/assets/img/ai.jpg" alt="" class="descriptor_pic col-4">
		</div>


		<div class="Title">
			<h2>Cybersecurity</h2>
		</div>
		<div class="py-2"></div>

		<div class="wrapper_div">
		<img src="@/assets/img/cyber.jpg" alt="" class="descriptor_pic col-4">
		<p class="col-7 text_block" >
			Cybersecurity analysts plan and carry out security measures to protect 
			an organization's computer networks and systems. One of the fastest-growing 
			fields within information technology, the Bureau of Labor Statistics 
			projects the number of jobs to grow by 33 percent before 2030.<br><br>
			As a cybersecurity student, you can learn to help make the internet a safer place.
			Information is just as important as the lives it represents. By protecting this 
			information you protect the livelihoods, productivity, privacy, and even 
			sometimes the physical safety of the denizens of the internet.<br><br>
			
			<b>Concentration specific classes:</b><br>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Introduction to Web Development<br>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Web Application Architectures<br>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Advanced Topics in Web Development<br>


		</p>
		</div>


		<div class="Title2">
			<h2>Web & Cloud Computing</h2>
		</div>
		<div class="py-2"></div>

		<div class="wrapper_div">
		<p class="col-7 text_block" >
			In-depth examination of a current topic in web development and cloud 
			computing, such as web security, user experience, mobile app development, 
			and web engineering.<br><br>
			In <b>CSC 3620 Web Application Architectures</b>, you'll examine concepts of 
			programming languages, such as JavaScript, the use of regular expressions 
			to search patterns of text, and security techniques to build large-scale 
			web applications.<br><br>
			
			<b>Concentration specific classes:</b><br>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Principles of Computer Networking<br>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Penetration Testing<br>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Threat Detection Engineering<br>


		</p>
		<img src="@/assets/img/web.jpg" alt="" class="descriptor_pic col-4">
		</div>
		

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

<style>
	.catalog_button{
		background-color: var(--FSCred);
		color: white;
		padding-left: 4px;
		padding-right: 4px;
		display: inline-block;
	}
	.catalog_button:hover {
		background-color: white;
		color: var(--FSCred);
	}
	.Title{
		background-color: var(--FSCred);
		margin-left: 0;
		margin-right: 0;
		height: 60px;
		text-align: center;
	}
	.Title1{
		background-color: var(--FSCblue);
		margin-left: 0;
		margin-right: 0;
		height: 60px;
		text-align: center;
	}
	.Title2{
		background-color: darkslategrey;
		margin-left: 0;
		margin-right: 0;
		height: 60px;
		text-align: center;
	}
	.wrapper_div{
		display: flex;
		align-items: center;
	}
	.descriptor_pic{
		display: inline-block;
		padding-bottom: 20px;
		margin-right: 20px;
		margin-left: 20px;
	}
	.text_block{
		display: inline-block;
	}
</style>
