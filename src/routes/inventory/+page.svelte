<script>
	import { onMount } from 'svelte';
	import AppBar from '../appbar.svelte';
	const url = 'https://angel-fenix.onrender.com/products';
	let data = [];

	const getproducts = async () => {
		const res = await fetch(url);
		data = await res.json();
	};

	onMount(() => {
		getproducts();
	});

	const addProduct = async (id, name, price, quantity) => {
		const newproduct = {
			id: id,
			name: name,
			price: price,
			quantity: quantity,
		};
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newproduct),
		});

		if (res.ok) {
			data = [...data, newproduct];
		}

	};
</script>

<AppBar />

<!-- Button to add a new product -->
<button on:click={() => addProduct(9, 'test', 10, 10)}>Add product</button>

<main>
{#key data}
	{#each data as product}
		<div class="card">
			<div class="card-body">
				<h3>{product.name}</h3>
				<p>price: {product.price} USD</p>
				<p>left in stock: {product.quantity}</p>
			</div>
		</div>
	{/each}
{/key}
</main>


<style>
	main {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.card {
		width: 150px;
		height: 150px;
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
