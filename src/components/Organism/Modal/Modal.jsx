import React from 'react'
import './Modal.scss'

const Modal = ({ show, children, closeModal }) => {
  if (!show) {
    return null
  }

  return (
    <div className='modal'>
      <div className='modal__content'>
        <span className='modal__close' onClick={() => closeModal()}> x </span>
        {children}
      </div>
    </div>
  )
}

export default Modal
