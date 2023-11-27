<script>
  import { onMount } from 'svelte';
  import { userName } from '$lib/stores/user';
  import Appbar from '../appbar.svelte';

  let cartItems = [];

  onMount(async () => {
    // Fetch data from the /cart endpoint
    const response = await fetch('/cart', {
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
  });
</script>

<main>
  <h1>Your Cart</h1>

  {#if cartItems.length > 0}
    <ul>
      {#each cartItems as item (item.id)}
        <li>{item.name} - {item.price}</li>
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
