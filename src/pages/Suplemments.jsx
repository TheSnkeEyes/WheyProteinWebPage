import React from 'react'
import Navbar from '../components/Navbar';
import '../pages/Supplements.css'
import {products} from '../Helpers/products'

function Suplemments() {
  return (
    <div>
      <Navbar/>
      <div className="products_nav">
        <div>
           <h3>Products</h3>
          <h1>Featured Products</h1>
        </div>
        <button >TOP RATING</button>
        <button>BEST SELLING</button>
        <button>FEATURED</button>
      </div>
      <div className="products_container">
        <div className="product">
          <div className="product_img">
            <img src={products[0].img} />
          </div>
          <h3>{products[0].name}</h3>
          <hr />
          <div className="stars">

          </div>
          <div className="price">
            <h4>${products[0].price}</h4>
            <button><i className="fa-solid fa-cart-plus"></i></button>
          </div>
        </div>
        <div className="product">
          <div className="product_img">
            <img src={products[1].img} />
          </div>
          <h3>{products[1].name}</h3>
          <hr />
          <div className="stars">

          </div>
          <div className="price">
            <h4>${products[1].price}</h4>
            <button><i className="fa-solid fa-cart-plus"></i></button>
          </div>
        </div>
        <div className="product">
          <div className="product_img">
            <img src={products[2].img} />
          </div>
          <h3>{products[2].name}</h3>
          <hr />
          <div className="stars">

          </div>
          <div className="price">
            <h4>${products[2].price}</h4>
            <button><i className="fa-solid fa-cart-plus"></i></button>
          </div>
        </div>
        <div className="product">
          <div className="product_img">
            <img src={products[3].img} />
          </div>
          <h3>{products[3].name}</h3>
          <hr />
          <div className="stars">

          </div>
          <div className="price">
            <h4>${products[3].price}</h4>
            <button><i className="fa-solid fa-cart-plus"></i></button>
          </div>
        </div>
        <div className="product">
          <div className="product_img">
            <img src={products[4].img} />
          </div>
          <h3>{products[4].name}</h3>
          <hr />
          <div className="stars">

          </div>
          <div className="price">
            <h4>${products[4].price}</h4>
            <button><i className="fa-solid fa-cart-plus"></i></button>
          </div>
        </div>
        <div className="product">
          <div className="product_img">
            <img src={products[5].img} />
          </div>
          <h3>{products[5].name}</h3>
          <hr />
          <div className="stars">

          </div>
          <div className="price">
            <h4>${products[5].price}</h4>
            <button><i className="fa-solid fa-cart-plus"></i></button>
          </div>
        </div>
        <div className="product">
          <div className="product_img">
            <img src={products[6].img} />
          </div>
          <h3>{products[6].name}</h3>
          <hr />
          <div className="stars">

          </div>
          <div className="price">
            <h4>${products[6].price}</h4>
            <button><i className="fa-solid fa-cart-plus"></i></button>
          </div>
        </div>
        <div className="product">
          <div className="product_img">
            <img src={products[7].img} />
          </div>
          <h3>{products[7].name}</h3>
          <hr />
          <div className="stars">

          </div>
          <div className="price">
            <h4>${products[7].price}</h4>
            <button><i className="fa-solid fa-cart-plus"></i></button>
          </div>
        </div>
        
        <div className="product">
          <div className="product_img">
            <img src={products[8].img} />
          </div>
          <h3>{products[8].name}</h3>
          <hr />
          <div className="stars">

          </div>
          <div className="price">
            <h4>${products[8].price}</h4>
            <button><i className="fa-solid fa-cart-plus"></i></button>
          </div>
        </div>
        <div className="product">
          <div className="product_img">
            <img src={products[9].img} />
          </div>
          <h3>{products[9].name}</h3>
          <hr />
          <div className="stars">

          </div>
          <div className="price">
            <h4>${products[9].price}</h4>
            <button><i className="fa-solid fa-cart-plus"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Suplemments;
