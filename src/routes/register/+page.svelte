<script>
    import Appbar from "../appbar.svelte";

    let username = "";
    let password = "";
  
    const registerUser = async () => {
      // You should implement your API endpoint for user registration
      const response = await fetch('https://angel-fenix.onrender.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'mode': 'no-cors'
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        alert('User registered successfully!');
        // You can redirect the user to another page after successful registration
      } else {
        const errorMessage = await response.text();
        alert(`Registration failed: ${errorMessage}`);
      }
    };
  </script>

  <Appbar/>


  <main>
    <h1>Register</h1>
  
    <form on:submit|preventDefault={registerUser}>
      <label for="username">Username:</label>
      <input type="text" id="username" bind:value={username} required />
  
      <label for="password">Password:</label>
      <input type="password" id="password" bind:value={password} required />
  
      <button type="submit">Register</button>

      <span
      >Already have an account?
      <a href="/login" class="form_auth_link">Login</a></span
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
      margin: 4rem auto 0; /* Add top margin here */
      padding: 2rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  
    h1 {
      text-align: center;
    }
  
    form {
      display: flex;
      flex-direction: column;
    }
  
    label {
      margin-bottom: 0.5rem;
      margin-top: 10px;
    }
  
    input {
      padding: 0.5rem;
      margin-bottom: 1rem;
    }
  
    button {
      padding: 0.75rem;
      background-color: var(--colo-primary);
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  
    button:hover {
      background-color: var(--colo-dark-2);
    }

  </style>