import './index.css'

const TabItem = props => {
  const {tabDetails, updateActviveTabID, isActve} = props
  const {tabId, displayText} = tabDetails

  const activeTabClassName = isActve ? 'active-tab-btn' : ''

  const onClickTabItem = () => {
    updateActviveTabID(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
