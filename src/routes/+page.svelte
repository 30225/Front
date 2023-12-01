<script>
    import AppBar from './appbar.svelte';
    import Items from './inventory/items.svelte';
</script>

<AppBar />

<main>
    <header class="header">
        <div class="container header_container">
          <div class="header_filter">
            <a href="#" class="header_filter_link">Samsung</a>
            <a href="#" class="header_filter_link">Apple</a>
            <a href="#" class="header_filter_link">Xiaomi</a>
            <a href="#" class="header_filter_link">Oppo</a>
            <a href="#" class="header_filter_link">JBL</a>
            <a href="#" class="header_filter_link">Sennheiser</a>
            <a href="#" class="header_filter_link">Sony</a>
            <a href="#" class="header_filter_link">Bose</a>
            <a href="#" class="header_filter_link">Beats by Dre</a>
          </div>
          <img src="images/Banner.png" alt="" class="header_img" />
        </div>
      </header>
  
      <section class="section">
        <div class="container">
          <div class="section_category">
            <p class="section_category_p">categories</p>
          </div>
          <div class="section_header">
            <h3 class="section_title">Browse by Category</h3>
          </div>
          <div class="categories">
            <div class="category">
              <a class="categories-btns" href="#"> 
                <svg class="category_icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M13 16.5a11.003 11.003 0 0 0 4.041 3.93l1.459.82v.25h-13v-.25l1.459-.82A11.003 11.003 0 0 0 11 16.5m-9.5-3h21m0-11h-21v14h21v-14Z"/></svg>
                <p class="category_name">Computers</p>
              </a>
            </div>
            <div class="category">
              <a class="categories-btns" href="#">
                <svg class="category_icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" stroke-linecap="round" d="M21 15v-3a9 9 0 1 0-18 0v3"/><path fill="currentColor" d="M3 15v-.5h-.5v.5H3Zm0 .5h3v-1H3v1Zm3.5.5v3h1v-3h-1Zm-3 3v-4h-1v4h1ZM5 20.5A1.5 1.5 0 0 1 3.5 19h-1A2.5 2.5 0 0 0 5 21.5v-1ZM6.5 19A1.5 1.5 0 0 1 5 20.5v1A2.5 2.5 0 0 0 7.5 19h-1ZM6 15.5a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 6 14.5v1Zm15-.5h.5v-.5H21v.5Zm-3 .5h3v-1h-3v1Zm2.5-.5v4h1v-4h-1Zm-3 4v-3h-1v3h1Zm1.5 1.5a1.5 1.5 0 0 1-1.5-1.5h-1a2.5 2.5 0 0 0 2.5 2.5v-1Zm1.5-1.5a1.5 1.5 0 0 1-1.5 1.5v1a2.5 2.5 0 0 0 2.5-2.5h-1ZM18 14.5a1.5 1.5 0 0 0-1.5 1.5h1a.5.5 0 0 1 .5-.5v-1Z"/></g></svg>
                <p class="category_name">Headphones</p>
              </a>
            </div>
            <div class="category">
              <a class="categories-btns" href="#">
                <svg class="category_icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="currentColor"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/><path d="M8 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2z"/></g></svg>
                <p class="category_name">Phones</p>
              </a>
            </div>
          </div>
        </div>
      </section>
  

      <section class="section">
        <div class="container">
          <div class="trending">
            <div class="trending_content">
              <p class="trending_p">Trending</p>
              <h2 class="trending_title">Enhance Your Music Experience</h2>
              <a href="./shop.html" class="trending_btn">Shop Now!</a>
            </div>
            <img src="images\speaker.png" alt="" class="trending_img" />
          </div>
        </div>
      </section>
  
      <section class="section">
        <div class="container services_container">
          <div class="service">
            <img src="images\service-1.png" alt="" class="service_img" />
            <h3 class="service_title">FAST AND FREE DELIVERY</h3>
            <p class="service_p">For a satisfied customer.</p>
          </div>
          <div class="service">
            <img src="images\service-2.png" alt="" class="service_img" />
            <h3 class="service_title">24/7 SUPPORT</h3>
            <p class="service_p">Contact us, we are available </p>
            <p class="service_p">24 hours a day.</p>
          </div>
          <div class="service">
            <img src="images\service-3.png" alt="" class="service_img" />
            <h3 class="service_title">MONEY BACK GUARANTY</h3>
            <p class="service_p">If you are not satisfied,</p>
            <p class="service_p">we will refund your money.</p>
          </div>
        </div>
      </section>
  


    <Items/>
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
              <a href="/login">
                <li class="li footer_list_item">Login / Register</li>
              </a>
              <a href="/shop">
                <li class="li footer_list_item">Shop</li>
              </a>
              <a href="/about">
                <li class="li footer_list_item">About</li>
              </a>
              <a href="/cart">
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


.header_container {
  width: 100%;
  display: flex;
  margin-top: 4rem;
}
.header_container img{
  width: 70%;
  height: 390px;
}
.header_filter {
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-decoration: none;
}
.header_filter_link {
  color:var(--colo-dark-1);
}


/* section */
.section {
  margin-top: 10rem;
}

.section_category_p {
  border-left: 1.4rem solid var(--colo-primary);
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--colo-primary);
  font-size: 1.3rem;
}
.section_header {
  display: flex;
  align-items: flex-end;
  margin-bottom: 4rem;
}
.section_title {
  margin-right: 2rem;
  font-size: 2.6rem;
}
#demo {
  font-size: 1.8rem;
}

/* categories */
.categories {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  grid-gap: 2rem;
}
.category {
  text-align: center;
  padding: 3rem;
  border: 1px solid ;
  transition: all 0.3s ease;
  cursor: pointer;
  background-color: var(--colo-white-2);
  border-color: var(--colo-white-2);

}
.category:hover {
  background-color: var(--colo-dark-2);
  color: var(--colo-white-1);
}

.category a:visited {
  color: var(--colo-dark-1);
}

.category_icon {
  width: 3.5rem;
  height: auto;
  color: var(--colo-dark-1);
}

.category_name {
    color: var(--colo-dark-1);
}

/* footer */
.footer {
  margin-top: 10rem;
  background-color: var(--colo-dark-1);
}
.footer_container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
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

@media only screen and (max-width: 1070px) {
  .header_container {
    flex-direction: column;
  }
  .header_filter {
    display: none;
  }
}
.hamburger {
  display: none;
  cursor: pointer;
}
.hamburger > svg {
  width: 4.5rem;
  height: 4.5rem;
}
@media only screen and (max-width: 800px) {
  .top_nav {
    display: none;
  }
  .nav_list {
    display: none;
  }
  .nav_items {
    display: none;
  }
  .hamburger {
    display: block;
  }
}
@media only screen and (max-width: 800px) {
  .gallery {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}

/* trending */
.trending {
  background-color: var(--colo-dark-1);
  padding: 8rem 4rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  grid-gap: 2rem;
  align-items: center;
}
.trending_img {
  width: 100%;
}
.trending_p {
  color: var(--color-green);
}
.trending_title {
  color: var(--colo-white-1);
  font-size: 4rem;
  margin-top: 1rem;
  margin-bottom: 3rem;
}
.trending_btn {
  background-color: var(--color-green);
  padding: 1rem 2rem;
  color: var(--colo-white-1);
}
.products {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  grid-gap: 2rem;
}

/* services */
.services_container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  grid-gap: 3rem;
}
.service {
  text-align: center;
}
.service_title {
  margin: 1.5rem 0rem;
}

</style>






