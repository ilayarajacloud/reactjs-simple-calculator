import React from 'react'

const Button = ({ type, onClick, label }) => {
  return (
    <div className='btn-button'>
      <button
        type={type}
        onClick={onClick}
      >{label}</button>
    </div>
  )
}

export default Button