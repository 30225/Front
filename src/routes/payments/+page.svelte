
<script>
	import { onMount } from 'svelte';
	import AppBar from '../appbar.svelte';
	const url = 'https://angel-fenix.onrender.com/payments';
	let data = [];

	const getproducts = async () => {
		const res = await fetch(url);
		data = await res.json();
	};

	onMount(() => {
		getproducts();
	});
</script>

<AppBar />

<main>
	{#each data as payment}
		<div class="card">
			<div class="card-body">
				<h3>{payment.id}</h3>
				<p>amount: {payment.amount}</p>
				<p>currency: {payment.currency}</p>
				<p>type: {payment.type}</p>
				<p>timestamp: {payment.timestamp}</p>
			</div>
		</div>
	{/each}
</main>

<style>
	main {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.card {
		width: 250px;
		height: 250px;
		margin: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
		box-shadow: 0 0 5px #ccc;
	}

	.card-body {
		padding: 10px;
	}

	.card-body h3 {
		margin: 0;
		padding: 0;
	}

	.card-body p {
		margin: 0;
		padding: 0;
	}

	/* .card-body img { */
	/* 	width: 100%; */
	/* 	height: 200px; */
	/* 	object-fit: cover; */
	/* } */
</style>
