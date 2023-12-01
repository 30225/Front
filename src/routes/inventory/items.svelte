<script>
	import { onMount } from 'svelte';
	import { userName } from '$lib/stores/user';
	import { admin } from'$lib/stores/admin';
	const url = 'https://angel-fenix.onrender.com/products';
	let data = [];

	const getproducts = async () => {
		const res = await fetch(url);
		data = await res.json();
	};

	onMount(() => {
		getproducts();
	});

	async function remove_product(itemId) {
		try {
			const response = await fetch(`https://angel-fenix.onrender.com/products/${itemId}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			res = await response.json();

			console.log(res);

			if (response.ok) {
				alert('successful');
			}

		} catch (error) {
			alert('Error deleting product');
			return null;
		}

	}


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
				alert('Item added successfully');
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
				<img class="card-pic" src="https://angel-fenix.onrender.com/images/{product.id}" alt="{product.name}"/>
				<div class="card-body">
					<h3>{product.name}</h3>
					<p>price: {product.price} USD</p>
					<p>left in stock: {product.quantity}</p>
					{#key $admin}
					{#if $admin}
						<button class="cart_button" on:click={remove_product(product.id)}>
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
								<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
							</svg>
						</button>
					{/if}
					{/key}
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
