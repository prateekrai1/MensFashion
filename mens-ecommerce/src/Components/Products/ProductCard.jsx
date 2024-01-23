import React from "react";
import {
  FaShoppingCart,
  FaRegBookmark,
  FaStar,
  FaFireAlt,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";

const ProductCard = (props) => {
  return (
    <div className="products-home-container">
      <div key={props.id} className="productCard-container">
        <h1 className="featured-heading">Winter Favourites</h1>
        <div className="products-line">
        <div className="product-card">
          <img
            src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F67%2F6a%2F676aca336f9712e124987a04443f109a458e0a8d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
            alt=""
            className="productImage"
          />
          <div className="product-options">
            <FaShoppingCart className={"productCard_cart"} />
            <FaHeart className={"wishlist_option"} />
          </div>
          <div className="productCard_content">
            <h3 className="productName">Classic Brown Tshirt</h3>
            <div className="priceContainer">
              <div className="price">
                <MdCurrencyRupee className="" />
                800
              </div>
            </div>
          </div>
        </div>
        <div className="product-card">
          <img
            src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F20%2Fa7%2F20a74bacddf79eee967c52b0e4d1c3cc55fd4572.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
            alt=""
            className="productImage"
          />
          <div className="product-options">
            <FaShoppingCart className={"productCard_cart"} />
            <FaHeart className={"wishlist_option"} />
          </div>
          <div className="productCard_content">
            <h3 className="productName">Classic Brown Tshirt</h3>
            <div className="priceContainer">
              <div className="price">
                <MdCurrencyRupee className="" />
                800
              </div>
            </div>
          </div>
        </div>
        <div className="product-card">
          <img
            src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F01%2Fd9%2F01d9dd20ddef9fd701ad297fac4eb1096e639a0a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]"
            alt=""
            className="productImage"
          />
          <div className="product-options">
            <FaShoppingCart className={"productCard_cart"} />
            <FaHeart className={"wishlist_option"} />
          </div>
          <div className="productCard_content">
            <h3 className="productName">Classic Brown Tshirt</h3>
            <div className="priceContainer">
              <div className="price">
                <MdCurrencyRupee className="" />
                800
              </div>
            </div>
          </div>
        </div>
        <div className="product-card">
          <img
            src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fce%2Fc7%2Fcec7bbf7a58c9b15941b161c521047f5f418b642.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            alt=""
            className="productImage"
          />
          <div className="product-options">
            <FaShoppingCart className={"productCard_cart"} />
            <FaHeart className={"wishlist_option"} />
          </div>
          <div className="productCard_content">
            <h3 className="productName">White Winter Casual Shirt</h3>
            <div className="priceContainer">
              <div className="price">
                <MdCurrencyRupee className="currency"/>
                1200
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
