import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/valorantButton.css'

const ValorantButton = ({ children = 'Valo Button', href }) => {
  return (
    <Link to={href}>
      <button className="outline valobutton small" type="button">
        <div className="label">
          <span className="hover-effect"></span>
          <span className="label-text small">{children}</span>
        </div>
      </button>
    </Link>
  )
}

export default ValorantButton