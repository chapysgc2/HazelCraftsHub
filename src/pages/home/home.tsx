import React from "react";
import Navbar from "../../components/navbar/navbar";
import Tecnologias from "../../components/tecnologias/tecnologias";
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
      <br />
      <br />
      <Carousel />
      <br />
      <br /><br />
      <br />
      <Tecnologias />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
