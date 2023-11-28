<script>
  import { onMount } from 'svelte';
  import { userName } from '$lib/stores/user';
  import Appbar from '../appbar.svelte';



  let cartItems = [];

  async function remove_from_cart(id) {
    console.log(id);
    const response = await fetch('https://angel-fenix.onrender.com/cart', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: $userName, item_id: id })
    });

    if (response.ok) {
        cartItems = cartItems.filter(item => item.id != id);
    }
    else {
        alert('error removing product');
    }
  }

  onMount(async () => {
    // Fetch data from the /cart endpoint
    const response = await fetch('https://angel-fenix.onrender.com/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: $userName }), // Assuming user store contains the username
    });

    if (response.ok) {
      cartItems = await response.json();
    } else {
      console.error('Failed to fetch cart data');
    }

    var counts = {}

    for (let item of cartItems) {
        if (item in counts) {
            counts[item] += 1;
            console.log('added');
        }
        else {
            counts[item] = 1;
        }
    }

    cartItems = []

    for (let id in counts) {
        console.log(id);
        const res = await fetch(`https://angel-fenix.onrender.com/products/${id}`, {
            method: 'GET',});
        if (res.ok) {
            var product = await res.json();
            console.log(product.name);
            console.log(counts[id]);
            product.quantity = counts[id];
            cartItems = [...cartItems, {id: product.id, name: product.name, quantity: product.quantity, price: product.price}]
        }
    }

  });
</script>

<Appbar/>

<main>
  <h1>Your Cart</h1>
    {#key cartItems}
  {#if cartItems.length > 0}
    <ul>
      {#each cartItems as item}
        <li>{item.name} @ ${item.price} x{item.quantity} units   <button class="remove_button" on:click={remove_from_cart(item.id)}>Remove</button></li>
      {/each}
    </ul>
  {:else}
    <p>Your cart is empty.</p>
  {/if}
  {/key}
</main>

<style>

  main {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }

  .remove_button {
		display: inline-block;
    margin-left: 2rem;
		padding: 2px 10px;
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

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
    font-size: large;
  }
</style>
