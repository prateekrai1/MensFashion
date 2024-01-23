import React from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import ImageSlider from "./Carousel/CarouselMenu";
import Bottom from "./BottomPart/Bottom";
import ProductCard from "./Products/ProductCard";
import HomeBanner from "./HomeBanner/HomeBanner";

const slides = [
  {
    url: "https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/TOOLBOX/PRE_SEASON/2023_s08/october_2023/TCM8051-3x2.jpg]&scale=size[1300]&sink=format[jpeg],quality[80]",
    title: "beach",
  },
  {
    url: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F67%2F6a%2F676aca336f9712e124987a04443f109a458e0a8d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    title: "boat",
  },
  {
    url: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F20%2Fa7%2F20a74bacddf79eee967c52b0e4d1c3cc55fd4572.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    title: "forest",
  },
  {
    url: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F01%2Fd9%2F01d9dd20ddef9fd701ad297fac4eb1096e639a0a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    title: "city",
  },
  {
    url: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fce%2Fc7%2Fcec7bbf7a58c9b15941b161c521047f5f418b642.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    title: "italy",
  },
];
const containerStyles = {
  width: "75vw",
  height: "45vh",
  margin: "0 auto",
  marginTop: "25px"
};

const Homepage = () => {
  return (
    <div className="home">
      <Router>
        <Navbar />
        <HomeBanner/>
        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
        <div>
        
        </div>
        </Router>
    </div>
  );
};

export default Homepage;
