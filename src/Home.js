import React, { useEffect } from "react";
import "./Home.css";
import Product from "./Product";

// const Home=()=>{
//   useEffect(()=> Slider(0),[]);
// }

function Home() {
  // making home__slide functional
  useEffect(() => Slider(0), []);

  return (
    <div className="Home">
      <div className="home__container">
        {/* <img className="home__image" src={banner}></img> */}
        <div className="home__sliderContainer">
          <div className="home__slide">
            <img
              className="home__img"
              src="https://cdn.shopify.com/s/files/1/0519/4573/4305/files/main-slide-3_2048x2048.jpg?v=1635627943"
            ></img>
          </div>
          <div className="home__slide">
            <img
              className="home__img"
              src="https://cdn.shopify.com/s/files/1/0155/8131/files/1-1_774d99ac-cec1-45e6-9985-0955bbc8707a.jpg?v=1667825312&width=1300"
            ></img>
          </div>
          <div className="home__slide">
            <img
              className="home__img"
              src="https://admin.ahujasons.com/banner/1671009789ahujasons-banner-shawls_onlineex.webp"
            ></img>
          </div>
        </div>
        {/* products listing on homepage starts here.! */}
        <div className="home__row">
          <Product
            id="01275438"
            heading="Isham"
            title="Women's Kashmiri handicraft shawl"
            price={20}
            image="https://m.media-amazon.com/images/I/810GPoyLp6L._UX569_.jpg"
          />
          <Product
            id="98633682"
            heading="Isham"
            title="Women's Kashmiri Aari embroidered wool stole"
            price={10}
            image="https://i.etsystatic.com/11949436/c/2250/1788/0/0/il/4331cc/3929253609/il_340x270.3929253609_61b4.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="13771550"
            heading="Isham"
            title="Weaving Border Soft Light Weight Warm Shawl"
            price={15}
            image="https://st2.depositphotos.com/1000824/6085/i/600/depositphotos_60858437-stock-photo-beauty-woman-in-the-national.jpg"
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
            image="https://cdn.shopify.com/s/files/1/2429/1673/files/Metallic_Gold_700x700.png?v=1657963704"
          />
        </div>
        <div className="home__row home__rowBestSeller">
          <Product
            id="58930009"
            heading="Isham's Bestseller"
            title=" Pure Cashmilon Wool Kashmiri Aari Embroidery Women's Stole/ Shawl/ Wrap for Winter"
            price={50}
            image="https://www.ahujasons.com/images/ahuja/JPEG/brand3.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="01275438"
            heading="Isham"
            title="Women's Kashmiri handicraft shawl"
            price={20}
            image="https://m.media-amazon.com/images/I/71GLoJyJJ9L._UX679_.jpg"
          />
          <Product
            id="98633682"
            heading="Isham"
            title="Women's Kashmiri Aari embroidered wool stole"
            price={10}
            image="https://i.pinimg.com/736x/a0/66/17/a06617290f81322e805bedcade47f9a0.jpg"
          />
        </div>
      </div>
    </div>
  );
}

// making home__slide functional
function Slider(counter) {
  const slides = document.querySelectorAll(".home__img");
  slides.forEach((slide, index) => {
    if (index !== counter) {
      slide.style.visibility = "hidden";
      slide.classList.add(`image-${index}`);
    }
  });
  moveCarousal(counter, slides, slides.length);
}

// defining function moveCarousal(from above)
function moveCarousal(counter, slides, len) {
  if (slides) {
    if (counter >= len - 1) counter = 0;
    else counter += 1;

    slides.forEach((slide, index) => {
      if (index === counter) {
        slide.style.visibility = `visible`;
      } else {
        slide.style.visibility = `hidden`;
      }
    });
  }
  setTimeout(() => {
    moveCarousal(counter, slides, len);
  }, 5000);
}

export default Home;
