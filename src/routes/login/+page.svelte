<script>
    import { onMount, goto } from 'svelte';
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

    </form>
  </main>
  
  <style>
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
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  </style>
