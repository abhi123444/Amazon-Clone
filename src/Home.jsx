import React from "react";
import './Home.css';
import Product from './Product'
function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <img
            className="home_image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" alt="" />

        </div>
      </div>

      <div className="row">
        <div className="col-sm">
          <Product
            id="1"
            title='ASUS VivoBook 15 F515 Thin and Light Laptop, 15.6” FHD Display, Intel Core i3-1005G1 Processor, 4GB DDR4'
            price={27932}
            image='https://m.media-amazon.com/images/I/81oVSSITRQL._AC_UY218_.jpg'
            rating={5}
          />
        </div>
        <div className="col-sm">
          <Product
            id="2"
            title='ASUS F512JA-AS34 VivoBook 15 Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM'
            price={21062}
            image='https://m.media-amazon.com/images/I/61HhDR1prgL._AC_UY218_.jpg'
            rating={4}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <Product
            id="3"
            title='SAMSUNG XE350XBA-K01US Chromebook 4 + Chrome OS 15.6" Full HD Intel Celeron Processor N4000 4GB'
            price={17473}
            image='https://m.media-amazon.com/images/I/61haL7447DL._AC_UY218_.jpg'
            rating={5}
          />
        </div>
        <div className="col-sm">
          <Product
            id="4"
            title='2021 Newest CHUWI GemiBook 13 inch Windows 10 Laptop,Intel Celeron J4115 Quad Core 12GB RAM'
            price={30196}
            image='https://m.media-amazon.com/images/I/41Y3xKzOWwL._AC_UY218_.jpg'
            rating={4}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <Product
            id="5"
            title='2019 Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz Intel Core i9) - Space Gray'
            price={196208}
            image='https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY218_.jpg'
            rating={5}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm">
          <Product
            id="6"
            title='Apple MacBook Pro 16" with Touch Bar, 9th-Gen 8-Core Intel i9 2.4GHz, 64GB RAM, 4TB SSD, AMD Radeon'
            price={354745}
            image='https://m.media-amazon.com/images/I/61Xq37IX8uL._AC_UY218_.jpg'
            rating={5}
          />
        </div>
        <div className="col-sm">
          <Product
            id="7"
            title='Apple MacBook Air 13.3" Retina Display, 1.1GHz Quad-Core Intel Core i5, 8GB Memory, 256GB SSD'
            price={73983}
            image='https://m.media-amazon.com/images/I/61wLbRLshAL._AC_UY218_.jpg'
            rating={4}
          />
        </div>
      </div>

    </div>
  )
}

export default Home;