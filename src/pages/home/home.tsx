import React from "react";
import Navbar from "../../components/navbar";
import Menu from "../../components/menu/menu";
import Gallery from "hazel/components/gallery/gallery";
import Carousel from "hazel/components/carousel/Carousel";
import Footer from "hazel/components/footer/footer";
import SloganWithImage from "hazel/components/sloganWithImage/SloganWithImage";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <SloganWithImage />
      <br />
      <Carousel />
      <br />
      <br />
      <Gallery />
      <Menu />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
