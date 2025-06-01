import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import InstagramBio from '../../components/InstagramBio/InstagramBio';
import Gallery from 'hazel/components/gallery/gallery';
import CriptoComponent from '../../components/criptoComponent/criptoComponent'; // Ajusta la ruta según tu estructura

const Cripto: React.FC = () => {
        return (
            <div>
                    <Navbar />
                    <div className="mt-24 mb-12">

                    </div>

                    <div className="mb-12">
                            <CriptoComponent />
                    </div>

                    <Footer />
            </div>
        );
};

export default Cripto;
