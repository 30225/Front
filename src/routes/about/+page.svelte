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
        The epitome of innovation and passion for technology. At TecXmart, we are driven by a relentless commitment to redefine your digital experience. Our story is one of a curated selection of cutting-edge gadgets and devices designed to seamlessly integrate into your lifestyle. With a focus on innovation and customer satisfaction, TecXmart is not just a marketplace; it's a journey into the future of tech. Join us as we explore, embrace, and elevate the possibilities that technology brings to your fingertips. Discover more than a store; discover TecXmart – where desires meet innovation :)
    </div>

        <br><br>
        <div class="about__subtitle">
            As a result, we are able to provide the best service to our customers.
        </div>

        <br><br>
        <div class="about__subtitle" style="font-size: 2rem;">
            We are a reliable company
        </div>

        <div class="about__subtitle" style="font-size: 1rem;">
            Members of the company:

        </div>

        <div class="picture-row">
            <a href="/about_saray">
                <img src="/images/avatarS.png" alt="Logo" class="about__picture">
                <h2>Saray Berrio</h2>
            </a>
            <a href="/about_agelo">
                <img src="/images/avatarS.png" alt="Logo" class="about__picture">
                <h2>angelo</h2>
            </a>
        </div>

    </div>

    <footer class="footer">
        <div class="container footer_container">
          <div class="footer_item">
            <a href="./index.html" class="footer_logo">TecXmart</a>
            <div class="footer_p">
              Explore a curated selection of cutting-edge technology that enhances your digital lifestyle. 
              Improve your expectations with TecXmart.
            </div>
          </div>
          <div class="footer_item">
            <h3 class="footer_item_titl">Contact</h3>
            <ul class="footer_list">
              <li class="li footer_list_item">Chipre, Cartagena, Colombia</li>
              <li class="li footer_list_item">sberrio@utb.edu.co</li>
              <li class="li footer_list_item">+57 3185793683</li>
              <li class="li footer_list_item">+57 3177933864</li>
            </ul>
          </div>
          <div class="footer_item">
            <h3 class="footer_item_titl">Options</h3>
            <ul class="footer_list">
              <a href="./sign-up.html">
                <li class="li footer_list_item">Login / Register</li>
              </a>
              <a href="./shop.html">
                <li class="li footer_list_item">Shop</li>
              </a>
              <a href="./about.html">
                <li class="li footer_list_item">About</li>
              </a>
              <a href="./cart.html">
                <li class="li footer_list_item">Cart</li>
              </a>
            </ul>
          </div>
          <div class="footer_item">
            <h3 class="footer_item_titl">Support</h3>
            <ul class="footer_list">
              <li class="li footer_list_item">Privacy policy</li>
              <li class="li footer_list_item">Terms of use</li>
              <li class="li footer_list_item">FAQ's</li>
              <li class="li footer_list_item">Contact</li>
            </ul>
          </div>
        </div>
        <div class="footer_bottom">
          <div class="container footer_bottom_container">
            <p class="footer_copy">
              Copyright TecXmart 2023. All right reserved
            </p>
          </div>
        </div>
      </footer>



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
  font-size: 1rem;
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

    .picture-row h2{
        display: flex;
        justify-content: center;
        
    }

    .picture-row a{
        color: black;
        text-decoration: none;
        
    }

    .picture-row a:visited{
        color: black;
        
    }

    .about__picture {
        height: 12rem;
        width: 12rem;
        margin: 1rem;
        border-radius: 1rem;
        object-fit: cover;
        margin-right: 30px;
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

    
.footer {
  margin-top: 10rem;
  background-color: var(--colo-dark-1);
}
.footer_container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  grid-gap: 3rem;
  padding: 5rem 0rem;
  color: var(--colo-white-1);
}
.footer_logo {
  font-size: 3rem;
  color: var(--colo-white-1);
  font-weight: 700;
}
.footer_p {
  margin-top: 1.2rem;
}
.footer_item_titl {
  margin-bottom: 1.2rem;
}
.footer_list_item {
  margin: 0.5rem 0rem;
  color: var(--colo-white-1);
}

.footer_list_item:visited {
  color: var(--colo-white-1);
}

.footer_bottom_container {
  width: 100%;
  text-align: center;
}
.footer_copy {
  color: var(--colo-dark-2);
  padding: 1.5rem 0rem;
}


    






</style>
