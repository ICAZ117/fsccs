<template>
	<div class="w-100">
		<div class="quote white">
			<br /><slot></slot>
			<div class="author my-4 py-1">
				<div>{{ author }}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["author"],
	};
</script>

<style scoped>
	@keyframes slideInFromRight {
		0% {
			transform: translateX(100%);
            opacity: 0;
		}
		100% {
			transform: translateX(0);
            opacity: 1;
		}
	}

	.quote {
		background-color: rgba(146, 146, 146, 0.1);
		border-left: 10px solid var(--primary);
		margin: 1.5em 0 1.5em 2rem;
		padding: 2rem 2rem 4rem;
		quotes: "\201C""\201D";
		border-top-right-radius: 1rem;
		border-bottom-right-radius: 1rem;
		position: relative;
		animation: 0.2s ease-out 0s 1 slideInFromRight;
	}
	.quote:before {
		color: var(--primary);
		content: open-quote;
		font-size: 8em;
		line-height: 0.1em;
		margin-right: 0.25em;
		vertical-align: -0.4em;
		font-family: verdana;
	}

	.quote:after {
		color: white;
		content: close-quote;
		font-size: 8em;
		line-height: 0.1em;
		margin-right: 0.25em;
		font-family: verdana;
		position: absolute;
		transform: translateY(90px);
		right: 0;
	}

	.author {
		width: calc(100% + 3rem);
		clip-path: polygon(0 0, 100% 0%, 100% 100%, 2% 100%);
		background-color: var(--FSCred);
		padding-left: 5rem;
		position: absolute;
		transform: translateY(-1rem);
		right: 0;
		font-weight: bold;
	}

	.unskew {
		transform: skew(-20deg);
	}
</style>
