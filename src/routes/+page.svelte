<script>
    import AppBar from './appbar.svelte';
    import Products from './products.svelte';
</script>

<AppBar />

<main>

    <div class="banner">
        <div class="banner__content">
            <h1 class="banner__title">E-Commerce Platform</h1>
            <button class="banner__button">Search</button>
        </div>
    </div>

    
    <Products />





</main>

<style>
    main {
        font-family: 'Gelasio', serif;
    }


    

    .banner {
        background-image: url('/images/banner.jpg');
        background-size: cover;
        background-position: center;
        height: 75vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .banner__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
    }

    .banner__title {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: #52ff00
    }

    .banner__button {
        padding: 1rem 2rem;
        border: none;
        border-radius: 5px;
        background-color: #52ff00;
        color: black;
        font-size: 1.2rem;
        cursor: pointer;
    }
</style>






