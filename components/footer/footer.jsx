import "./footer.css";
import Image from "next/image";
import whatsapp from "../../assets/WhatsApp.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer" id="Contact">
      <div className="footer_line" />
      <div className="footer-title">
        <h1>Connect With US</h1>
        <p>We love our customers, feel free to visit</p>
        <Link href="https://wa.link/q8syo5" style={{textDecoration: "None"}}>
          <div className="footer-button">
            <Image src={whatsapp} height={20} alt="whats-app" />
            <p>Message us on whatsapp</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
