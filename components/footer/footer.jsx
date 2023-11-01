import "./footer.css";
import Image from "next/image";
import whatsapp from "../../assets/WhatsApp.png";

const Footer = () => {
  return (
    <div className="footer" id="Contact">
      <div className="footer_line" />
      <div className="footer-title">
        <h1>Connect With US</h1>
        <p>We love our customers, feel free to visit</p>
        <div className="footer-button">
        
            <Image src={whatsapp} height={20} alt="whats-app" />
       
          <p>Message us on whatsapp</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
