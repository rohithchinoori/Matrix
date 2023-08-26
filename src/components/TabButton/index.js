import './index.css'

const TabButton = props => {
  const {item, getActiveTab, isActive} = props
  const sendTab = () => {
    getActiveTab(item.displayText)
  }
  const activeButton = isActive ? 'but' : ''
  return (
    <li className="li">
      <button
        type="button"
        className={`but1 ${activeButton}`}
        onClick={sendTab}
      >
        <img src={item.imgUrl} alt="vector" className="vector" />
        {item.displayText}
      </button>
    </li>
  )
}
export default TabButton
