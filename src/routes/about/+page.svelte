<script>
    import AppBar from '../appbar.svelte';
</script>

<AppBar />

<main>

    <div class="about_container">
        <h1 class="about__title">About</h1>

        <div class="about__subtitle">
            We want to offer the highest efficiency in payment processing and order management.
        </div>

        <div class="about__content">
                For the user's convenience, we maintain a simple operation in invertory storage.
        <br><br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae tenetur voluptates vel. Nulla accusantium, sapiente omnis voluptas maxime odio aspernatur officia illum explicabo labore, excepturi rem nisi sint libero suscipit.
        </div>

        <br><br>
        <div class="about__subtitle">
            As a result, we are able to provide the best service to our customers.
        </div>

        <div class="about__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae tenetur voluptates vel. Nulla accusantium, sapiente omnis voluptas maxime odio aspernatur officia illum explicabo labore, excepturi rem nisi sint libero suscipit.
        <br><br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae tenetur voluptates vel. Nulla accusantium, sapiente omnis voluptas maxime odio aspernatur officia illum explicabo labore, excepturi rem nisi sint libero suscipit.
        </div>

        <br><br>
        <div class="about__subtitle" style="font-size: 2rem;">
            We are a reliable company
        </div>

        <div class="about__subtitle" style="font-size: 1rem;">
            Members of the company:

        </div>

        <div class="picture-row">
            <img src="/images/1.jpg" alt="Logo" class="about__picture">
            <img src="/images/2.jpg" alt="Logo" class="about__picture">
            <img src="/images/3.jpg" alt="Logo" class="about__picture">
        </div>

    </div>



</main>


<style>


    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: 'Gelasio', serif;
    }

    .picture-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .about__picture {
        height: 15rem;
        width: 15rem;
        margin: 1rem;
        border-radius: 1rem;
        object-fit: cover;
    }

    .about_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50%;
        margin: 2rem;
        padding: 2rem;
        border-radius: 1rem;
        background-color: #dddddd;
    }

    .about__title {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .about__subtitle {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        justify-content: center;
    }

    .about__content {
        font-size: 1rem;
        margin-bottom: 1rem;
        align-items: center;
    }

    






</style>
