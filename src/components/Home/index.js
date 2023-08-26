import {Component} from 'react'
import {BiLogoFacebook, BiLogoLinkedin} from 'react-icons/bi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {IoMdSearch} from 'react-icons/io'
import TabButton from '../TabButton'
import TokenPair from '../TokenPair'

import './index.css'

const tabs = [
  {
    tabId: 1,
    displayText: 'Token Address',
    imgUrl:
      'https://res.cloudinary.com/dsyljcxpu/image/upload/v1693046467/Vector_1_oxjvxx.png',
  },
  {
    tabId: 2,
    displayText: 'Pair Address',
    imgUrl:
      'https://res.cloudinary.com/dsyljcxpu/image/upload/v1693046559/Vector_2_opahfb.png',
  },
]

class Home extends Component {
  state = {activeTab: tabs[0].displayText, search: '', pairData: []}

  getSearchQuery = event => {
    this.setState({search: event.target.value})
  }

  getActiveTab = value => {
    this.setState({activeTab: value})
  }

  renderTokenPair = async () => {
    const {search} = this.state
    const response = await fetch(
      `https://api.dexscreener.com/latest/dex/search?q=${search}`,
    )
    console.log(response)
    const data = await response.json()

    this.setState({pairData: data})
  }

  showCards = () => {
    const {pairData} = this.state
    const {pairs} = pairData
    console.log(pairs)
    return (
      <ul>
        {pairData.length !== 0 ? (
          pairs.map(eachVal => (
            <TokenPair key={eachVal.url} details={eachVal} />
          ))
        ) : (
          <li>No Data</li>
        )}
      </ul>
    )
  }

  render() {
    const {activeTab} = this.state
    return (
      <div className="bg">
        <div className="slider">
          <div>
            <div className="top-slide">
              <img
                src="https://res.cloudinary.com/dsyljcxpu/image/upload/v1693045494/Vector_lugils.png"
                alt="vector"
                className="logo"
              />
              <img
                src="https://res.cloudinary.com/dsyljcxpu/image/upload/v1693045533/NFTify_pma054.png"
                alt="vector"
              />
            </div>
            <ul className="top-but">
              {tabs.map(eachItem => (
                <TabButton
                  key={eachItem.tabId}
                  item={eachItem}
                  getActiveTab={this.getActiveTab}
                  isActive={activeTab === eachItem.displayText}
                />
              ))}
            </ul>
          </div>
          <div className="icon-cont">
            <BiLogoFacebook className="icon" />
            <BiLogoLinkedin className="icon" />
            <AiOutlineTwitter className="icon" />
          </div>
        </div>
        <div className="bg-1">
          <div className="search-cont">
            <div className="input-cont">
              <input
                type="search"
                className="input"
                placeholder="Search"
                onChange={this.getSearchQuery}
                onKeyDown={this.getKeyDown}
              />
              <button
                type="button"
                className="search-but"
                onClick={this.renderTokenPair}
              >
                {' '}
                <IoMdSearch className="search-icon" />
              </button>
            </div>
            <button type="button" className="connect">
              Connect
            </button>
          </div>
          <h1 className="head">{activeTab} Search Results</h1>
          {this.showCards()}
        </div>
      </div>
    )
  }
}
export default Home
