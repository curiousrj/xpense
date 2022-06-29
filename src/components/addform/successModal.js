import React from 'react'
import { Link } from 'react-router-dom'
import './successModal.css'

const SuccessModal = () => {
  return (
    <div className="success-message-container">
          <div className="success-message not-found">
          <label>Xpense added successfully</label>
          <img
            src={require("../../assets/images/added-image.png")}
            alt="Xpense Added"
            className="added-image not-found-image"
          />
          <Link to="/">
            <div className="take-home-button border-button">
              <i className="fa-solid fa-house button-icon-margin-right"></i>
              <label>Home</label>
            </div>
          </Link>
        </div>
        </div>
  )
}

export default SuccessModal