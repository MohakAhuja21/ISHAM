import React from "react";
import "./Home.css";
import banner from "../src/source/website banner.png";
import Product from "./Product";
// import Filter from "./Filter";

function Home() {
  return (
    <div className="Home">
      <div className="home__container">
        <img className="home__image" src={banner}></img>
        <div className="home__row">
          <Product
            id="01275438"
            heading="Isham"
            title="Women's Kashmiri handicraft shawl"
            price={20}
            image="https://m.media-amazon.com/images/I/71phdBitodL._UL1400_.jpg"
          />
          <Product
            id="98633682"
            heading="Isham"
            title="Women's Kashmiri Aari embroidered wool stole"
            price={10}
            image="https://m.media-amazon.com/images/I/61DTAp-sRiL._UL1400_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="13771550"
            heading="Isham"
            title="Weaving Border Soft Light Weight Warm Shawl"
            price={15}
            image="https://m.media-amazon.com/images/I/81yC5RL2NUL._UY879_.jpg"
          />
          <Product
            id="18660865"
            heading="Isham"
            title="100% Soft Viscose Woven Women's Scarf, Stoles"
            price={40}
            image="https://m.media-amazon.com/images/I/81Lke5Svk6L._UL1500_.jpg"
          />
          <Product
            id="58930009"
            heading="Isham"
            title="Pashmina Silk Paisley Design Shawls, Stoles"
            price={32}
            image="https://m.media-amazon.com/images/I/810GPoyLp6L._UX569_.jpg"
          />
        </div>
        <div className="home__row home__rowBestSeller">
          <Product
            id="58930009"
            heading="Isham's Bestseller"
            title=" Pure Cashmilon Wool Kashmiri Aari Embroidery Women's Stole/ Shawl/ Wrap for Winter"
            price={50}
            image="https://m.media-amazon.com/images/I/81Vqz7vjFCL._UL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
