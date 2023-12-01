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
        <a href="/inventory" class="appbar__link">Shop</a>
        <a href="/about" class="appbar__link">About</a>
        {#if isLoggedIn}
        <div class="username">
            {loggedInUsername}
        </div>
        <a href="/cart" class="appbar__link">
            Cart
        </a>
        {:else}
            <div class="nav_items">
                <a href="/login" class="appbar__link">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                </svg>
                </a>
                <a href="/cart">
                <img src="images\cart.png" alt="" class="nav_cart" />
                </a>
                <a class="num-cart" href="./cart.html">
                <span></span>
                </a>
            </div>
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

