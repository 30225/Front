<script>
	import { onMount } from 'svelte';
	import { userName } from '$lib/stores/user';
	const url = 'https://angel-fenix.onrender.com/products';
	let data = [];

	const getproducts = async () => {
		const res = await fetch(url);
		data = await res.json();
		console.log('"Database" products: ', data);
	};

	onMount(() => {
		getproducts();
	});


	async function add_to_cart(itemId) {
		try {
			const response = await fetch('https://angel-fenix.onrender.com/cart', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ username: $userName, item_id: itemId }),
			});

			if (response.ok) {
				const cartItems = await response.json();
				alert('Item added successfully')
				return cartItems;
			} else {
				console.error('Failed to add item to cart');
				alert('Error adding item to cart');
				return null;
			}
		} catch (error) {
			console.error('Error adding item to cart:', error);
			alert('Error adding item to cart');
			return null;
		}
	}
</script>

<main>
{#key data}
	{#each data as product}
		<div class="item">
			<div class="card">
				<img class="card-pic" src={product.url} alt="{product.name}"/>
				<div class="card-body">
					<h3>{product.name}</h3>
					<p>price: {product.price} USD</p>
					<p>left in stock: {product.quantity}</p>
				</div>
			</div>
			<button class="cart_button" on:click={add_to_cart(product.id)}>Add to cart</button>
		</div>
	{/each}
{/key}
</main>


<style>
	main {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-bottom: 10rem;
	}





	.cart_button {
		display: inline-block;
		padding: 10px 20px;
		font-size: 16px;
		font-weight: bold;
		text-align: center;
		text-decoration: none;
		cursor: pointer;
		border: 2px solid #3498db;
		color: #3498db;
		background-color: #ffffff;
		border-radius: 5px;
		transition: background-color 0.3s, color 0.3s, border-color 0.3s;
	}

	.item {
		text-align: center;
	}
		.card {
	position: relative;
	width: 15rem;
	height: 15rem;
	margin: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	box-shadow: 0 0 5px #ccc;
	display: flex;
	justify-content: center;
	align-items: center;
	}

	.card-pic {
	position: absolute;
	top: 0;
	left: 5;
	width: 7rem;
	height: 7rem;
	object-fit: cover;
	z-index: 1;
	}

	.card-body {
	position: relative;
	align-self: flex-end;
	z-index: 2;
	padding: 10px;
	text-align: center;
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
