import React from 'react';
import Navbar from 'hazel/components/navbar/navbar';
import Footer from 'hazel/components/footer/footer';
import InstagramBio from 'hazel/components/InstagramBio/InstagramBio';
import Gallery from 'hazel/components/gallery/gallery';
const Contact: React.FC = () => {
    return (
        <div>
            <Navbar />
            <br /><br />
            <br />
            <br />
            <br />

            <InstagramBio />
            <br />
            <br />
            <br /><br /><br /><br></br>
            <Gallery/>
            <br /><br />
            <Footer />    </div>
    );
};

export default Contact;
