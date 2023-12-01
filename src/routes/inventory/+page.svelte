<script>
    import { onMount } from "svelte";
    import Appbar from "../appbar.svelte";
    import Modal from "./Modal.svelte";
    import Items from "./items.svelte";
    import Postproduct from "./postproduct.svelte";
    import { userName } from '$lib/stores/user';

    let admin = false;

    let showModal  = false;

    onMount(async () => {
        const response = await fetch('https://angel-fenix.onrender.com/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: $userName })
        });
        
        let body = await response.json();
        
        if (body.admin == 'true') {
            admin = true;
        }


    });
</script>

<Appbar/>

<Items/>

{#key admin}
    {#if admin}
        <div class="button_container">
            <button class="add_button" on:click={() => {showModal = true}}> Add Product </button>
        </div>
    {/if}
{/key}

<Modal bind:showModal>
    <Postproduct/>
</Modal>

<style>

    .button_container {
        align-items: center;
        justify-content: center;
        align-content: center;
        display: flex;
    }

    .add_button {
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
</style>