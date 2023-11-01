import Image from 'next/image'
import goldbar from "../../assets/goldbar.jpg"
import './metatrading.css'
import Link from 'next/link';

const MetaTrading = () => {
  const handleclick = () => {
    Navigator
  }
  return (
    <div className="meta-trading">
      <div className="meta-trading_image">
        <h1>META TRADING </h1>
        <Image src={goldbar} alt='gold-bar-promotion' />
      </div>
      <div className="meta-trading_title">
        <h1>META TRADING </h1>
        <p>
          Meta Trading is a popular trading platform that empowers traders with
          the tools and resources they need to participate in financial markets
          effectively.
        </p>
          <Link href="/meta-trading">
        <button>

          Click Here
        </button>
          </Link>
      </div>
    </div>
  );
}

export default MetaTrading