<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import Appbar from '../appbar.svelte';
    import { loginStatus } from '$lib/stores/login';
    import { userName } from '$lib/stores/user';
  
    let username = '';
    let password = '';
  
    const registerUser = async () => {
      // Your registration logic here
    };
  
    let loginUsername = '';
    let loginPassword = '';
  
    const loginUser = async () => {
      const response = await fetch('https://angel-fenix.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: loginUsername, password: loginPassword }),
      });
  
      if (response.ok) {
        const userData = await response.json();
        console.log('Login successful!', userData);
        loginStatus.set(true);
        userName.set(userData.username);
        goto('/');
        console.log('hello');
      } else {
        console.error('Login failed.');
        // Handle login failure (e.g., show error message)
      }
    };
  
    onMount(() => {
      // Your initialization code here
    });
  </script>

  <Appbar/>
  
  <main>
    <h1>Login</h1>
  
    <form on:submit|preventDefault={loginUser}>
      <label for="login-username">Username:</label>
      <input type="text" id="login-username" bind:value={loginUsername} required />
  
      <label for="login-password">Password:</label>
      <input type="password" id="login-password" bind:value={loginPassword} required />
  
      <button type="submit">Login</button>

      <span
      >Don't have an account?
      <a href="/register" class="form_auth_link"
        >Register</a
      ></span
    >

    </form>
  </main>
  
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


    main {
      max-width: 400px;
      margin: 2rem auto 0;
      padding: 2rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  
    h1 {
      text-align: center;
      margin-bottom: 1rem;
    }
  
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  
    label {
      font-weight: bold;
    }
  
    input {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  
    button {
      padding: 0.75rem;
      background-color: var(--colo-primary);
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 10px;
      margin-bottom: 20px;
    }
  
    button:hover {
      background-color: var(--colo-dark-2);
    }
  </style>
