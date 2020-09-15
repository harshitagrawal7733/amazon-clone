import React from 'react';
import './Home.css'
import './App.css';
import Product from './Product';
function Home() {
  return (
    <div className="home">

    <div className="home_container">
         <img alt="Amazon-banner" className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>


        <div className="home_row">
          <Product
          id="1212"
          title='The monk who sold his ferrari'
          image1="https://images-na.ssl-images-amazon.com/images/I/61Iz2yy2CKL.jpg"
          rating={5}
          price={250.00}/>
          <Product
          id="12123"
          title='Apple iPhone 11 (256GB) - Green'
          image1='https://m.media-amazon.com/images/I/510gwFgjz5L._AC_UY218_.jpg'
          rating={5}
          price={60050.00}/>


            {/*Product*/}

        {/*Product*/}
      </div>
      <div className="home_row">
      <Product
      id="123453"
      title='ASGARD® 3 Layer Protective Face Mask with NOSE CLIP, Certified by CE, ISO & GMP with Bacterial…'
      image1='https://m.media-amazon.com/images/I/510gwFgjz5L._AC_UY218_.jpg'
      rating={2}
      price={60050.00}
       />
      <Product
      id="123"
      title='true wireless earbuds'
      image1='https://m.media-amazon.com/images/I/61jSqYYo6YL._AC_UY218_.jpg'
      rating={3}
      price={2000}
      />
      <Product
      id="1234"
      title='apple airpods white color'
      image1='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYfUCBTyBwZUIUPWhGcwaF3lF4jUMB-HUWcm00r8N-u3laKGw5IKM_vLhLLC8AQwcJMNmRSqlW&usqp=CAc'
      rating={4}
      price={14500}/>

        {/*Product*/}
          {/*Product*/}
      </div>
      <div className="home_row">
        <Product
        id="12345"
        title='apple watch series 5'
        image1='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTt3Nm8ePduouthKfhS47cbmZaHX6M_vGh6evnRwvLeP2670ZqFkyuevm4aujqa5eGCzrsmrl0&usqp=CAc'
        rating={4}
        price={60050.00}/>
        {/*Product*/}
          {/*Product*/}
      </div>
    </div>
  </div>



  );
}

export default Home;
