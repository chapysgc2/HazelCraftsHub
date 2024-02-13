import { FaLinkedin, FaInstagram, FaEnvelope, FaPhoneAlt,FaWhatsapp } from 'react-icons/fa';

const ContactLinks: React.FC = () => {
  return (
    <div className="flex items-center justify-center mt-4">
      <a href="https://www.linkedin.com/in/hazel-alain-garc%C3%ADa-l%C3%B3pez-27220b223/" className="mr-4">
        <FaLinkedin size={24} />
      </a>
      <a href="tel:+9541451671" className="mr-4">
        <FaPhoneAlt size={24} />
      </a>
      <a href="https://api.whatsapp.com/send?phone=+529541451671&text=Hello,%20more%20information!" className="mr-4">
        <FaWhatsapp size={24} />
      </a>
      <a href="https://portafoliohazelalain.netlify.app/" className="mr-4">
        <FaInstagram size={24} />
      </a>
      <a href="mailto:hazelo235@gmail.com" className="mr-4">
        <FaEnvelope size={24} />
      </a>
      
    </div>
  );
};

export default ContactLinks;
