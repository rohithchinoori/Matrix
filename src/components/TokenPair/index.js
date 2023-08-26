import './index.css'
import {AiOutlineInfoCircle, AiOutlineDollarCircle} from 'react-icons/ai'

const TokenPair = props => {
  const {details} = props
  return (
    <li className="list">
      <div className="card">
        <h1 className="head1">Basic Info</h1>
        <p>
          Pair created at <span>{details.pairCreatedAt}</span>
        </p>
        <p>
          Symbol <span>{details.baseToken.symbol}</span>
        </p>
        <p>
          Dex ID <span>{details.dexId.slice(0, 6)}</span>
        </p>
        <p>
          Pair Address <span>{details.pairAddress.slice(0, 5)}</span>
        </p>
        <div className="card-logo">
          {' '}
          <AiOutlineInfoCircle />
        </div>
      </div>
      <div className="card">
        <h1 className="head1">Base Token</h1>
        <p>
          Name <span>{details.baseToken.name}</span>
        </p>
        <p>
          Symbol <span>{details.baseToken.symbol}</span>
        </p>
        <p>
          Address <span>{details.baseToken.address.slice(0, 5)}</span>
        </p>
        <div className="card-logo1">
          <img
            src="https://res.cloudinary.com/dsyljcxpu/image/upload/v1693062526/material-symbols_token-outline_qqjdjm.png"
            alt="logo"
          />
        </div>
      </div>
      <div className="card">
        <h1 className="head1">Quote Token</h1>
        <p>
          Name <span>{details.quoteToken.name}</span>
        </p>
        <p>
          Symbol <span>{details.quoteToken.symbol}</span>
        </p>
        <p>
          Address <span>{details.quoteToken.address.slice(0, 5)}</span>
        </p>
        <div className="card-logo1">
          <img
            src="https://res.cloudinary.com/dsyljcxpu/image/upload/v1693062526/material-symbols_token-outline_qqjdjm.png"
            alt="logo"
          />
        </div>
      </div>
      <div className="card">
        <h1 className="head1">Price</h1>
        <p>
          PriceNative <span>{details.priceNative.slice(3, 7)}M</span>
        </p>
        <p>
          PriceUSD <span>{details.priceUsd.slice(3, 7)}M</span>
        </p>
        <div className="card-logo2">
          <AiOutlineDollarCircle />
        </div>
      </div>
    </li>
  )
}
export default TokenPair
