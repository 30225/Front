
<script>
	import { onMount } from 'svelte';
	import AppBar from '../appbar.svelte';
	const url = 'https://angel-fenix.onrender.com/orders';
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
	{#each data as order}
		<div class="card">
			<div class="card-body">
			<h3>{order.id}</h3>
			<br>
				<p>Customer: {order.customer_id}</p>
				<br>
				<p>Products - Quantity</p>
				{#each Object.entries(order.quantity) as [product, quantity]}
					<p>{product} - {quantity}</p>
				{/each}
				<br>
				<p>Address: {order.address}</p>
				<br>
				<p>Status: {order.status}</p>
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
		width: 300px;
		height: 300px;
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
