<template>
	<footer>
		<div class="top-bg">
			<div class="container">
				<div class="footer-content">
					<div class="row block-center">
						<div class="col-2">
							<router-link to="/">
								<img src="../assets/img/Cube.svg" class="cube" style="height: 196px" />
							</router-link>
						</div>
						<div class="col-1"></div>
						<div class="col-3">
							<h2 class="primary">About</h2>
							<hr class="primary-hr" />
							<ul style="list-style-type: none">
								<li>
									<router-link to="/about/department" class="primary link">
										About the Department
									</router-link>
								</li>
								<li>
									<router-link to="/about/faculty" class="primary link">
										Meet the Faculty
									</router-link>
								</li>
								<li>
									<router-link to="/about/degree-and-concentrations" class="primary link">
										Degree & Concentrations
									</router-link>
								</li>
								<li>
									<router-link to="/about/cs-building" class="primary link">
										About the CS Building
									</router-link>
								</li>
								<li>
									<router-link to="/virtual-tour" class="primary link">
										Virtual Tour
									</router-link>
								</li>
							</ul>
						</div>
						<div class="col-3">
							<h2 class="primary">Get Involved</h2>
							<hr class="primary-hr" />
							<ul style="list-style-type: none">
								<li>
									<router-link to="/get-involved/cs-club" class="primary link">
										CS Club
									</router-link>
								</li>
								<li>
									<router-link to="/get-involved/programming-team" class="primary link">
										Programming Team
									</router-link>
								</li>
								<li>
									<router-link to="/get-involved/ctf-team" class="primary link">
										CTF Team
									</router-link>
								</li>
							</ul>
						</div>
						<div class="col-3">
							<h2 class="primary">Resources</h2>
							<hr class="primary-hr" />
							<ul style="list-style-type: none">
								<li>
									<router-link to="/resources/advising" class="primary link">
										Advising
									</router-link>
								</li>
								<li>
									<router-link to="/resources/tutor-lab" class="primary link">
										Tutor Lab
									</router-link>
								</li>
								<li>
									<router-link to="/resources/calendar" class="primary link">
										Department Calendar
									</router-link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom-bg">
			<div class="container">
				<hr class="white-hr" />
				<p class="white">The Cube Life &copy; 2022</p>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		data() {
			return {
				email: "",
			};
		},
		methods: {
			showEM(userName, emServer) {
				userName = this.stringReverse(userName);
				emServer = this.stringReverse(emServer);

				var emLink = userName + "@" + emServer;
				return "<a class='link' href='mailto:" + emLink + "'>" + emLink + "</a>";
			},
			stringReverse(textString) {
				if (!textString) return "";
				var revString = "";
				for (let i = textString.length - 1; i >= 0; i--)
					revString += textString.charAt(i);
				return revString;
			},
		},
	};
</script>

<style>
	.top-bg {
		background-image: url("../assets/img/BG5.jpg"),
			linear-gradient(rgba(25, 25, 25, 0.05), rgba(25, 25, 25, 0.05));
		background-blend-mode: overlay;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: bottom;
		overflow: visible;
		padding-top: 50px;
		height: 150px;
        border-top: 5px solid var(--FSCred);
	}

	.bottom-bg {
		background-color: var(--primary);
		position: relative;
		z-index: -1;
		height: 235px;
	}

	.bottom-bg .container {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		text-align: center;
	}

	.footer-content {
		background-color: #fafafa;
		height: 260px;
		z-index: 10;
		left: 50%;
		border-radius: 30px;
		padding: 2rem;
	}

	.footer-content h2 {
		margin-bottom: 2px;
	}

	.icon {
		font-size: 1.2rem;
		text-align: center;
		margin: auto;
	}

	.col-10.mailing-list {
		padding-right: 0 !important;
	}

	.col-2.mailing-list {
		padding-left: 0 !important;
		height: 30px !important;
	}

	.mailing-list .btn,
	.mailing-list .btn:visited,
	.mailing-list .btn:active,
	.mailing-list .btn:focus,
	.mailing-list .btn:active:focus {
		background-color: var(--primary);
		color: rgb(255, 255, 255);
		border: none;
		outline: none;
		box-shadow: none;
		transition: all 0.25s ease-in-out;
		font-weight: 500;
		height: 30px !important;
		padding: 0;
		width: 100%;
		border-bottom-left-radius: 0 !important;
	}

	.mailing-list .btn:hover {
		background-color: var(--secondary);
	}

	.mailing-list input {
		border: none;
		border-bottom: 2px solid var(--primary);
		background-color: transparent;
		color: var(--primary);
		font-size: 1rem;
		font-weight: 500;
		padding: 0;
		width: 100%;
		outline: none;
		height: 30px !important;
	}
</style>
