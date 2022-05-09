import React from 'react'
import Product from './Product'
const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleItem}>x</span>
        {props.content}
      </div>
    </div>
  )
}

export default Popup


