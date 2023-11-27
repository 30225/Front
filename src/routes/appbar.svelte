<script>
    import { loginStatus } from '$lib/stores/login';
    import { userName } from '$lib/stores/user';
    $: isLoggedIn = $loginStatus;
    $: loggedInUsername = $userName;
</script>


<div class="appbar">
    <div class="appbar__left">
        <a href="/">
            <img src="/images/logo.png" alt="Logo" class="appbar__logo">
        </a>
    </div>
    <div class="appbar__right">
        <a href="/inventory" class="appbar__link">Inventory</a>
        <a href="/orders" class="appbar__link">Orders</a>
        <a href="/payments" class="appbar__link">Payments</a>
        <a href="/about" class="appbar__link">About</a>
        {#if isLoggedIn}
        <div class="username">
            {loggedInUsername}
        </div>
        <a href="/cart" class="appbar__link">
            Cart
        </a>
        {:else}
            <a href="/login" class="appbar__link">Login</a>
            <a href="/register" class="appbar__link">Register</a>
        {/if}
        
    </div>
</div>

<style>

    div {
        font-family: 'Gelasio', serif;
    }

    .appbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        height: 4rem;
        background-color: #ffffff;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    }

    .appbar__left {
        display: flex;
        align-items: center;
    }

    .appbar__logo {
        height: 3rem;
    }

    .appbar__right {
        display: flex;
        align-items: center;
        column-gap: 2rem;
    }

    .appbar__link {
        margin-left: 1rem;
        color: #000;
        text-decoration: none;
    }
</style>

