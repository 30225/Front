<script>
    import AppBar from './appbar.svelte';
    import Items from './inventory/items.svelte';
    import Products from './products.svelte';
</script>

<AppBar />

<main>

    <div class="banner">
        <div class="banner__content">
            <h1 class="banner__title">E-Commerce Platform</h1>
            <button class="banner__button">Search</button>
        </div>
    </div>

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
          <img src="./image/Banner.png" alt="" class="header_img" />
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
  
    
    
    <Products />

    <Items/>






</main>

<style>
    main {
        font-family: 'Gelasio', serif;
    }

    .banner {
        background-image: url('/images/banner.jpg');
        background-size: cover;
        background-position: center;
        height: 75vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .banner__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
    }

    .banner__title {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: #52ff00
    }

    .banner__button {
        padding: 1rem 2rem;
        border: none;
        border-radius: 5px;
        background-color: #52ff00;
        color: black;
        font-size: 1.2rem;
        cursor: pointer;
    }




.header_container {
  width: 100%;
  display: flex;
  margin-top: 4rem;
}
.header_container img{
  width: 80%;
  height: 390px;
}
.header_filter {
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.header_filter_link {
  color:black;
}


/* section */
.section {
  margin-top: 10rem;
}

.section_category_p {
  border-left: 1.4rem solid #292626;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
  color: #292626;
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
</style>






