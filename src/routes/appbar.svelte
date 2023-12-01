<script>
    import { loginStatus } from '$lib/stores/login';
    import { userName } from '$lib/stores/user';
    $: isLoggedIn = $loginStatus;
    $: loggedInUsername = $userName;
</script>


<div class="appbar">
    <div class="appbar__left">
        <a href="/">
            <a href="/" class="appbar__logo">TecXmart</a>

        </a>
    </div>
    <div class="appbar__right">
        <a href="/" class="appbar__link">Home</a>
        <a href="/inventory" class="appbar__link">Inventory</a>
        <a href="/orders" class="appbar__link">Orders</a>
        <a href="/payments" class="appbar__link">Payments</a>
        <a href="/about" class="appbar__link">About</a>
        <a href="/addProduct" class="appbar__link">Add product</a>
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

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;500;600;700;800;900&display=swap");
:root {
  --font-main: "Inter", sans-serif;
  --colo-primary: #292626;
  --colo-dark-1: #000000;
  --colo-dark-2: #7d8184;
  --colo-white-1: #ffffff;
  --colo-white-2: #f5f5f5;
  --color-green: #00d656;
}


* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-size: 1rem;
  font-family: var(--font-main);
}

a {
  text-decoration: none;
}
ul {
  list-style: none;
}
.container {
  max-width: 114rem;
  margin: 0 auto;
  padding: 0rem 1rem;
}
.w-6 {
  width: 2rem;
  height: 2rem;
}
.h-6 {
  fill: rgb(239, 140, 1);
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
        font-size: 1.3rem;
    }
    .appbar__logo:visited {
        color: #000;
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

