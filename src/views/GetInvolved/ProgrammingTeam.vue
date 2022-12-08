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
				<h1 class="white">Programming Team</h1>
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
		class="red-section intro"
	>
		<div class="h-100 pb-2">
			<center>
				<div class="m-auto faculty container py-5 h-100">
					<h1 class="center white mt-2 mb-4 pb-1">
						What is the Programming Team?
					</h1>
					<p
						class="white"
						style="text-align: justify; line-height: 2 !important"
					>
						Just like colleges & universities have sports and
						esports teams, all good college will have a programming
						team. A programming team is a a group of students who
						work as a team and develop their problem-solving,
						coding, and communication skills (all things that are
						super helpful in industry and on the job) to solve a
						series of problems. Team members practice together and
						participate in national and international competitions.
					</p>
				</div>
			</center>
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
		class="red-section skew"
	>
		<template v-slot:left>
			<div class="h-100 pb-2 vertical-center">
				<center>
					<div class="m-auto container h-100">
						<h1 class="center white mt-2 mb-4 pb-1">ACM ICPC</h1>
						<p
							class="white"
							style="
								text-align: justify;
								line-height: 2 !important;
							"
						>
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
					</div>
				</center>
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
		<div class="h-100 pb-2 prepare">
			<center>
				<div class="m-auto container py-5 h-100">
					<h1 class="center white mt-2 mb-4 pb-1">How to prepare</h1>
					<div class="m-0 row">
						<div class="col-9">
							<p class="white" style="text-align: justify">
								Just like in any other contest, success comes by
								hard work and practice. So how can you prepare?
								Practice! And then? Practice more! Don't forget:
								have FUN! Here are some websites that have
								competition style programs, and they allow you
								to submit the programs online for immediate
								judging. We mainly use vJudge, as it is is a
								platform that pulls contest problems from a
								variety of external sources, including several
								of the other sites listed above. You will want
								to create an account at each of these websites.
								And a suggestion: register with the SAME
								username at each website, as this will allow you
								to easily follow your success at each site.
								Visit these sites. Practice the problems. And do
								it for fun! If you are participating, then you
								already know programming is problem solving, and
								problem solving is fun! So start coding, start
								solving problems, and start having fun.
							</p>
						</div>
						<div class="col-3">
							<a
								href="https://vjudge.net/"
								target="_blank"
								class="btn btn-md btn-primary w-100 mb-1"
							>
								vJudge
							</a>
							<a
								href="http://codeforces.com/"
								target="_blank"
								class="btn btn-md btn-primary w-100 mb-1"
							>
								Codeforces
							</a>
							<a
								href="http://uva.onlinejudge.org/"
								target="_blank"
								class="btn btn-md btn-primary w-100 mb-1"
							>
								UVa Online Judge
							</a>
							<a
								href="http://train.usaco.org/usacogate"
								target="_blank"
								class="btn btn-md btn-primary w-100 mb-1"
							>
								USACO Training
							</a>
							<a
								href="https://leetcode.com/"
								target="_blank"
								class="btn btn-md btn-primary w-100 mb-1"
							>
								LeetCode
							</a>
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
			</center>
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
		<div class="h-100 pb-2">
			<center>
				<div class="m-auto container py-5 h-100">
					<h1 class="center mt-2">FAQ</h1>
					<div class="m-0 row g-5">
						<div class="col-6 info-card">
							<InfoCard
								:title="'Why Should I Join the Programming Team?'"
							>
								<ul>
									<li>Why not!? It's ton's of fun!</li>
									<li>
										Win prizes, compete with, and against,
										faculty
									</li>
									<li>
										Build community and comradery with your
										peers and faculty
									</li>
									<li>
										Learn a lot of super new tricks and
										techniques
									</li>
									<li>
										Participate in regional and national
										contests
									</li>
									<li>
										And, as a side effect, you hone the
										exact same set of skills demanded by
										software development companies…
									</li>
								</ul>
							</InfoCard>
						</div>
						<div class="col-6 info-card">
							<InfoCard
								:title="'Interested in a Career in Software Development?'"
							>
								<ul>
									<li>
										Let's hear from top SE companies and
										other professionals on how to prepare
										and rock a Technical Interview:
									</li>
									<ul>
										<li>
											<a
												href="https://www.youtube.com/watch?v=8Myx-vy0csM&ab_channel=WorkingatMicrosoft"
												target="_blank"
												class="link"
											>
												How to prepare for Microsoft
												technical interviews
											</a>
										</li>
										<li>
											<a
												href="https://www.youtube.com/watch?v=ko-KkSmp-Lk&ab_channel=LifeatGoogle"
												target="_blank"
												class="link"
											>
												How to Prepare for a Google
												Engineering Interview
											</a>
										</li>
										<li>
											<a
												href="https://www.youtube.com/watch?v=FTN_93Px-Qc&ab_channel=mayuko"
												target="_blank"
												class="link"
											>
												How to prepare for Technical
												Interviews
											</a>
										</li>
										<li>
											<a
												href="https://www.youtube.com/watch?v=lDTKnzrX6qU&ab_channel=ChrisJereza"
												target="_blank"
												class="link"
											>
												How I Passed Coding Interviews
												at Facebook, Google, Lyft,
												Bloomberg
											</a>
										</li>
									</ul>
								</ul>
							</InfoCard>
						</div>
						<div class="col-6 info-card">
							<InfoCard
								:title="'How does the Programming Team Help Me Get a Job?'"
							>
								<ul>
									<li>
										The <b>TOP</b> SE companies have all
										made it clear what they want:
									</li>
									<ol>
										<li>Great problem solvers</li>
										<li>
											Experts at
											<b>
												Data Structures and Algorithms
											</b>
										</li>
										<li>Excellent communication ability</li>
										<li>
											Team player, works well with others,
											etc.
										</li>
										<li>
											Demonstrated excitement about
											Computer Science
										</li>
									</ol>
									<li>
										Those are the exact skills we address on
										the programming team!
									</li>
								</ul>
							</InfoCard>
						</div>
						<div class="col-6 info-card">
							<InfoCard
								:title="'How Do I Join the Programming Team?'"
							>
								<ul>
									<li>
										Simple: come join the weekly practice!
									</li>
									<ul>
										<li>
											You wanna join and be on the team?
											Well, now you are on it!
										</li>
									</ul>
									<li>
										Although everyone is welcome to join, it
										may be difficult to participate without
										any programming experience. The best
										time to join is right after your first
										semester
									</li>
									<li>
										Lastly, it is tradition that the first
										Programming Team meetup every semester
										comes with fresh hot pizza!
									</li>
								</ul>
							</InfoCard>
						</div>
					</div>
				</div>
			</center>
		</div>
	</Parallax>
</template>

<script>
import SkewBox from "@/components/SkewBox.vue";
import Parallax from "@/components/Parallax.vue";
import InfoCard from "@/components/InfoCard.vue";

export default {
	components: {
		SkewBox,
		Parallax,
		InfoCard,
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

p {
	line-height: 2;
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
@media (max-width: 1199.9px) {
	.hero {
		height: calc(500px * 0.7) !important;
	}
}

@media (max-width: 991.9px) {
	.intro .intro-text {
		font-size: medium;
	}

	.community .community-text {
		font-size: medium;
	}
	.community .com-title {
		font-size: small;
		margin: 0 !important;
	}
}

@media (max-width: 767.9px) {
	.intro .intro-text {
		font-size: medium !important;
	}

	.prepare {
		font-size: smaller;
	}
	.prepare a {
		font-size: smaller;
	}

	.info-card {
		width: 100%;
	}
}

@media (max-width: 575.9px) {
	.hero {
		height: calc(500px * 0.6) !important;
	}

	.intro .intro-text {
		font-size: small !important;
	}

	.show-576 {
		display: flex;
	}

	.prepare {
		line-height: 1 !important;
	}

	.prepare a {
		font-size: xx-small;
	}

	.info-card li {
		font-size: smaller;
	}

	.skew {
		font-size: smaller;
	}
}

@media (max-width: 399.9px) {
}
</style>