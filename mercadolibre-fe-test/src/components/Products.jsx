import React from 'react';
import "../assets/styles/components/Products.scss"

const Products = () => (
<section class="products">
    <div class="products-container">
        <div class="item">
            <div class="images">
            <img
                src="https://cdn.pixabay.com/photo/2018/01/08/02/34/technology-3068617_960_720.jpg"
                alt=""
            />
            </div>
            <div class="info">
            <div class="price">
                <h2>$ 1.980</h2>
            </div>
            <div class="description">
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes,
                </p>
                <h3>Capital federal</h3>
            </div>
            </div>
        </div>
    </div>
</section>
);

export default Products;