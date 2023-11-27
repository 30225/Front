<script>
    import Appbar from "../appbar.svelte";

    let username = "";
    let email = "";
    let password = "";
  
    const registerUser = async () => {
      // You should implement your API endpoint for user registration
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
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
    </form>
  </main>

  <style>
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
    }
  
    input {
      padding: 0.5rem;
      margin-bottom: 1rem;
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