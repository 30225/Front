<script>
  import { onMount } from 'svelte';
  import { userName } from '$lib/stores/user';
  import Appbar from '../appbar.svelte';



  let cartItems = [];

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
            counts.item += 1;
        }
        else {
            counts.item = 1;
        }
    }

    cartItems = []

    for (let id in counts) {
        const res = await fetch('https://angel-fenix.onrender.com/products${id}', {
            method: 'GET',});
        if (res.ok) {
            const product = await res.json();
            product.quantity = counts.id;
            cartItems.push(product);
        }
    }

  });
</script>

<Appbar/>

<main>
  <h1>Your Cart</h1>

  {#if cartItems.length > 0}
    <ul>
      {#each cartItems as item}
        <li>{item.name} @ {item.price} x {item.quantity}</li>
      {/each}
    </ul>
  {:else}
    <p>Your cart is empty.</p>
  {/if}
</main>

<style>
  /* Add your cart page styling here */
  main {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
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
  }
</style>
