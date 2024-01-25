// Homepage.js
import React from 'react';
import Header from './Header';
import Card from './Card';

const Homepage = () => {
  // Array of product image URLs
  const productImages = [
    'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ed35421359dd4f9989b6af310075e655_9366/Samba_Arsenal_Shoes_Red_HQ7033_HM1.jpg',
    '//extrabutterny.in/cdn/shop/files/Sneaker-Politics-Adidas-SambaOGCrywht-131-112707-WB-12.jpg?v=1694040567&amp;width=375" data-src="//extrabutterny.in/cdn/shop/files/Sneaker-Politics-Adidas-SambaOGCrywht-131-112707-WB-12.jpg?v=1694040567&amp;width=375',
    'https://images.journeys.com/images/products/1_784174_FS_ALT1C.JPG',
    'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/91ac1f872fc04b1b84551a775c04a2d5_9366/gazelle-85-shoes.jpg',
    'https://cms-cdn.thesolesupplier.co.uk/2023/05/adidas-samba-og-collegiate-green-white-gum-id2054_w672_h672_pad_.jpg.webp',
    'https://cdn.mos.cms.futurecdn.net/p8v5LkWE5MRiUDb2kk9v9A-320-80.jpg'
  ];

  // Array of product titles
  const productTitles = ['Product 1', 'Product 2', 'Product 3', /* Add more titles */];

  // Create an array of Card components with different images and titles
  const cardComponents = productImages.map((image, index) => (
    <Card key={index} image={image} title={productTitles[index]} />
  ));

  return (
    <div>
      <Header />
      <div className="card-container">
        {/* Render the array of Card components */}
        {cardComponents}
      </div>
    </div>
  );
};

export default Homepage;
