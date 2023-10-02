import './index.css'

const TabItem = props => {
  const {tabDetails, tabClicked} = props
  const {displayText, tabId} = tabDetails

  const clickOnTab = () => {
    tabClicked(tabId)
  }
  return (
    <li key={tabId} className="tab-items-list">
      <button className="tab-button" type="button" onClick={clickOnTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
