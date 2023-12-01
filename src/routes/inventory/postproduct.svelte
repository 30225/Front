<script>
    let id = '';
    let name = '';
    let price = '';
    let quantity = '';
  
    const handleSubmit = async () => {
      const productData = {
        id,
        name,
        price,
        quantity,
      };
  
      try {
        const response = await fetch('https://angel-fenix.onrender.com/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(productData),
        });
  
        if (response.ok) {
          console.log('Product added successfully');
          // You can redirect or perform other actions here after a successful POST request.
        } else {
          console.error('Failed to add product');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  </script>
  
  <form on:submit|preventDefault={handleSubmit}>
    <label>
      ID:
      <input bind:value={id} type="text" required />
    </label>
    <label>
      Name:
      <input bind:value={name} type="text" required />
    </label>
    <label>
      Price:
      <input bind:value={price} type="number" required />
    </label>
    <label>
      Quantity:
      <input bind:value={quantity} type="number" required />
    </label>
    <button type="submit">Submit</button>
  </form>

  <style>
    form {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  
    label {
      display: block;
      margin-bottom: 10px;
    }
  
    input {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
      box-sizing: border-box;
    }
  
    button {
      background-color: #4caf50;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #45a049;
    }
  </style>