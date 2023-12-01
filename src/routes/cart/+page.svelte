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
        <li> {item.url}    Product: {item.name}     Price:{item.price} $    Unit: {item.quantity}    <button class="remove_button" on:click={remove_from_cart(item.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
          </svg>
        </button></li>
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
		text-decoration: none;
		cursor: pointer;
		color: black;
		transition: 0.3s ease;
	}

  .remove_button:hover {
    color: red;
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
