import React, { } from "react";
import Navbar from "../../components/navbar"; // Assuming "./Navbar.tsx" is the path to your component
import Menu from "../../components/menu/menu"
import Gallery from "hazel/components/gallery/gallery";
import Carousel from "hazel/components/carousel/Carousel";
import Footer from "hazel/components/footer/footer";
import SloganWithImage from "hazel/components/sloganWithImage/SloganWithImage";
const images = [
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
];

const Home: React.FC = () => {
  return (
    <div>
      {/* Display the Navbar */}
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <SloganWithImage />
      <br />


      <Carousel images={images} />
      <br />
      <br />
      <Gallery />
      <Menu />

      {/* Rest of your home component content */}
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </div>
  );
};


export default Home;
