// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItemDetails, onClickTabItemChangeActiveTab, isActive} = props
  const {displayText, tabId} = tabItemDetails
  const onClickTabItem = () => {
    onClickTabItemChangeActiveTab(tabId)
  }
  const isTabActive = isActive ? 'active-tab' : ''
  return (
    <li>
      <button
        className={`tab-item ${isTabActive}`}
        type="button"
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
