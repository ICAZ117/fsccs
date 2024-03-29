<template>
	<!-- HERO -->
	<SkewBox
		:leftBG="{
			backgroundImage: `url(${require('@/assets/img/PT_Medals.jpg')})`,
			'background-position': 'top',
			'background-size': 'cover',
			width: '54vw!important',
		}"
		:leftColor="'transparent'"
		:rightColor="'var(--blue-gradient-right)'"
		:height="500"
		:padding="'120px 0 60px 0'"
		class="red-section hero"
	>
		<template v-slot:right>
			<div class="center vertical-center">
				<h1 class="white customSizing">Programming Team</h1>
			</div>
		</template>
	</SkewBox>

	<!-- WHAT IS THE PROGRAMMING TEAM -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/Matrix6.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.6"
		:overlayColor="'0, 0, 0'"
		class="red-section"
	>
		<div class="container py-5">
			<h3 class="center white">What is the Programming Team?</h3>
			<Expandable>
				<p class="white justify-large">
					Just like colleges & universities have sports and esports
					teams, all good college will have a programming team. A
					programming team is a a group of students who work as a team
					and develop their problem-solving, coding, and communication
					skills (all things that are super helpful in industry and on
					the job) to solve a series of problems. Team members
					practice together and participate in national and
					international competitions.
				</p>
			</Expandable>
		</div>
	</Parallax>

	<!-- ACM ICPC -->
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/PT_Dinner.jpg')})`,
			'background-position': 'left',
			'background-size': 'cover',
			width: '55vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--red-gradient-left)'"
		:height="500"
		:maintainSkewbox="false"
		:pictureSide="'right'"
		:invert="false"
		class="red-section"
	>
		<template v-slot:left>
			<div class="vertical-center">
				<div class="container my-xl-0 my-5">
					<h3 class="center white">ACM ICPC</h3>
					<Expandable>
						<p class="white justify-large">
							The ACM ICPC contest is the "World Cup" of
							competitive programming and pits students against
							eight or more complex, real-world problems, with a
							challenging five-hour deadline. Huddled around a
							single computer, competitors race against the clock
							in a battle of logic, strategy, and mental
							endurance. Each year, FSC sends several teams to the
							regional contests, which are held every spring
							semester in Miami.
						</p>
					</Expandable>
				</div>
			</div>
		</template>
	</SkewBox>

	<!-- HOW TO PREPARE -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/PT_Drawing.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.6"
		:overlayColor="'0, 0, 0'"
		class="red-section"
	>
		<div class="m-auto container py-5 h-100">
			<h3 class="center white">How to Prepare</h3>
			<div id="rowRef" class="m-0 row g-md-0 g-sm-3 g-xs-3 g-3">
				<div class="col-xl-9 col-12">
					<Expandable class="mb-3">
						<p class="white justify-large pe-xl-3">
							Just like in any other contest, success comes by
							hard work and practice. So how can you prepare?
							Practice! And then? Practice more! Don't forget:
							have FUN! Here are some websites that have
							competition style programs, and they allow you to
							submit the programs online for immediate judging. We
							mainly use vJudge, as it is is a platform that pulls
							contest problems from a variety of external sources,
							including several of the other sites listed above.
							You will want to create an account at each of these
							websites. And a suggestion: register with the SAME
							username at each website, as this will allow you to
							easily follow your success at each site. Visit these
							sites. Practice the problems. And do it for fun! If
							you are participating, then you already know
							programming is problem solving, and problem solving
							is fun! So start coding, start solving problems, and
							start having fun.
						</p>
					</Expandable>
				</div>
				<div class="col-xl-3 col-lg-12">
					<div class="row g-1">
						<div class="col-xl-12 col-md-4 col-sm-6 col-12">
							<a
								href="https://vjudge.net/"
								target="_blank"
								class="btn btn-md btn-primary w-100"
							>
								vJudge
							</a>
						</div>
						<div class="col-xl-12 col-md-4 col-sm-6 col-12">
							<a
								href="http://codeforces.com/"
								target="_blank"
								class="btn btn-md btn-primary w-100"
							>
								Codeforces
							</a>
						</div>
						<div class="col-xl-12 col-md-4 col-sm-6 col-12">
							<a
								href="http://uva.onlinejudge.org/"
								target="_blank"
								class="btn btn-md btn-primary w-100"
							>
								UVa Online Judge
							</a>
						</div>
						<div class="col-xl-12 col-md-4 col-sm-6 col-12">
							<a
								href="http://train.usaco.org/usacogate"
								target="_blank"
								class="btn btn-md btn-primary w-100"
							>
								USACO Training
							</a>
						</div>
						<div class="col-xl-12 col-md-4 col-sm-6 col-12">
							<a
								href="https://leetcode.com/"
								target="_blank"
								class="btn btn-md btn-primary w-100"
							>
								LeetCode
							</a>
						</div>
						<div class="col-xl-12 col-md-4 col-sm-6 col-12">
							<a
								href="https://www.hackerrank.com/"
								target="_blank"
								class="btn btn-md btn-primary w-100"
							>
								HackerRank
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Parallax>

	<!-- FAQ -->
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/BG7.jpg')}`,
			'background-position': 'left middle',
		}"
		:height="'0'"
		:opacity="0.05"
		:overlayColor="'0, 0, 0'"
	>
		<div class="m-auto container py-5 h-100">
			<h3 class="center">FAQ</h3>
			<div id="rowRef" class="m-0 row g-xl-5 g-3">
				<div class="col-lg-6 col-12">
					<InfoCard
						:title="'Why Should I Join the Programming Team?'"
					>
						<ul>
							<li>Why not!? It's ton's of fun!</li>
							<li>
								Win prizes, compete with, and against, faculty
							</li>
							<li>
								Build community and comradery with your peers
								and faculty
							</li>
							<li>
								Learn a lot of super new tricks and techniques
							</li>
							<li>
								Participate in regional and national contests
							</li>
							<li>
								And, as a side effect, you hone the exact same
								set of skills demanded by software development
								companies…
							</li>
						</ul>
					</InfoCard>
				</div>
				<div class="col-lg-6 col-12">
					<InfoCard
						:title="'Interested in a Career in Software Development?'"
					>
						<ul>
							<li>
								Let's hear from top SE companies and other
								professionals on how to prepare and rock a
								Technical Interview:
							</li>
							<ul>
								<li>
									<a
										href="https://www.youtube.com/watch?v=8Myx-vy0csM&ab_channel=WorkingatMicrosoft"
										target="_blank"
										class="link"
									>
										How to prepare for Microsoft technical
										interviews
									</a>
								</li>
								<li>
									<a
										href="https://www.youtube.com/watch?v=ko-KkSmp-Lk&ab_channel=LifeatGoogle"
										target="_blank"
										class="link"
									>
										How to Prepare for a Google Engineering
										Interview
									</a>
								</li>
								<li>
									<a
										href="https://www.youtube.com/watch?v=FTN_93Px-Qc&ab_channel=mayuko"
										target="_blank"
										class="link"
									>
										How to prepare for Technical Interviews
									</a>
								</li>
								<li>
									<a
										href="https://www.youtube.com/watch?v=lDTKnzrX6qU&ab_channel=ChrisJereza"
										target="_blank"
										class="link"
									>
										How I Passed Coding Interviews at
										Facebook, Google, Lyft, Bloomberg
									</a>
								</li>
							</ul>
						</ul>
					</InfoCard>
				</div>
				<div class="col-lg-6 col-12">
					<InfoCard
						:title="'How does the Programming Team Help Me Get a Job?'"
					>
						<ul>
							<li>
								The <b>TOP</b> SE companies have all made it
								clear what they want:
							</li>
							<ol>
								<li>Great problem solvers</li>
								<li>
									Experts at
									<b> Data Structures and Algorithms </b>
								</li>
								<li>Excellent communication ability</li>
								<li>
									Team player, works well with others, etc.
								</li>
								<li>
									Demonstrated excitement about Computer
									Science
								</li>
							</ol>
							<li>
								Those are the exact skills we address on the
								programming team!
							</li>
						</ul>
					</InfoCard>
				</div>
				<div class="col-lg-6 col-12">
					<InfoCard :title="'How Do I Join the Programming Team?'">
						<ul>
							<li>Simple: come join the weekly practice!</li>
							<ul>
								<li>
									You wanna join and be on the team? Well, now
									you are on it!
								</li>
							</ul>
							<li>
								Although everyone is welcome to join, it may be
								difficult to participate without any programming
								experience. The best time to join is right after
								your first semester
							</li>
							<li>
								Lastly, it is tradition that the first
								Programming Team meetup every semester comes
								with fresh hot pizza!
							</li>
						</ul>
					</InfoCard>
				</div>
			</div>
		</div>
	</Parallax>
</template>

<script>
import SkewBox from "@/components/SkewBox.vue";
import Parallax from "@/components/Parallax.vue";
import InfoCard from "@/components/InfoCard.vue";
import Expandable from "@/components/Expandable.vue";

export default {
	components: {
		Expandable,
		SkewBox,
		Parallax,
		InfoCard,
		Expandable,
		Expandable,
	},
};
</script>

<style scoped>
.link,
.link:focus,
.link:active,
.link:visited,
.link:hover {
	color: var(--primary);
	font-weight: 500;
	transition: ease-in-out all 0.5s;
}

:deep(.card:hover) .link,
:deep(.card:hover) .link:focus,
:deep(.card:hover) .link:active,
:deep(.card:hover) .link:visited,
:deep(.card:hover) .link:hover {
	color: white;
	font-weight: 500;
}

/*
███    ███ ███████ ██████  ██  █████       ██████  ██    ██ ███████ ██████  ██ ███████ ███████ 
████  ████ ██      ██   ██ ██ ██   ██     ██    ██ ██    ██ ██      ██   ██ ██ ██      ██      
██ ████ ██ █████   ██   ██ ██ ███████     ██    ██ ██    ██ █████   ██████  ██ █████   ███████ 
██  ██  ██ ██      ██   ██ ██ ██   ██     ██ ▄▄ ██ ██    ██ ██      ██   ██ ██ ██           ██ 
██      ██ ███████ ██████  ██ ██   ██      ██████   ██████  ███████ ██   ██ ██ ███████ ███████ 
*/
/* 
BOOTSTRAP BREAKPOINTS:
  xs: 475px
  sm: 576px
  md: 768px
  lg: 992px
  xl: 1200px
  xxl: 1400px
*/
@media (max-width: 991.9px) {
	#rowRef.row {
		flex-direction: column;
		width: 100% !important;
		justify-content: center;
	}
}

@media (max-width: 575.9px) {
	.customSizing {
		font-size: 23pt !important;
	}
}

@media (max-width: 474.9px) {
	.customSizing {
		font-size: 19pt !important;
	}
}
</style>