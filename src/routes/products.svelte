
    <div class="container">
        <div class="products__title">Featured Products</div>
        <div class="products">
        <a class="product" href="/keyboards">
            <div class="keybs">
                <div class="product__content">
                    <h3 class="product__title">Keyboards</h3>
                </div>
            </div>
        </a>
        <a class="product" href="/headphones">
            <div class="hphones">
                <div class="product__content">
                    <h3 class="product__title">Headphones</h3>
                </div>
            </div>
        </a>
        <a class="product" href="/pcs">
            <div class="pcs">
                <div class="product__content">
                    <h3 class="product__title">PCs</h3>
                </div>
            </div>
        </a>
        </div>
    </div>



<style>
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem 2rem;
        /*center items*/
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 2rem;
        margin-bottom: 2rem;
    }


    .products__title {
        font-size: 2.5rem;
        font-weight: bold;
    }
    .products {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 7rem;
    }

    .product {
    width: 30rem;
    }

    .product__title {
        font-size: 2rem;
        font-weight: bold;
        color: #fff;
        position: absolute;
        bottom: -1rem;
        left: 50%;
        transform: translateX(-50%);
    }


    .keybs {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-size: cover;
        background-position: center;
        text-align: center;
        padding: 1rem;
        border: 1px solid #ccc;
        background-color: #fff;
        border-radius: 5px;
        height: 20rem;
        position: relative;
        background-image: url('/images/1.jpg');
    }

    .hphones {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: url('/images/2.jpg');
        background-size: cover;
        background-position: center;
        text-align: center;
        padding: 1rem;
        border: 1px solid #ccc;
        background-color: #fff;
        border-radius: 5px;
        height: 20rem;
        position: relative;
    }
    .pcs {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-size: cover;
        background-position: center;
        text-align: center;
        padding: 1rem;
        border: 1px solid #ccc;
        background-color: #fff;
        border-radius: 5px;
        height: 20rem;
        position: relative;
        background-image: url('/images/3.jpg');
    }
</style>
