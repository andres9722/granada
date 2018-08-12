import React from 'react'
import PropTypes from 'prop-types'
import './ErrorMessage.scss'

const ErrorMessage = props => (
  <div className='error'>
    <span className='error__message'>
      {props.text}
    </span>
  </div>
)

ErrorMessage.propTypes = {
  text: PropTypes.string
}

export default ErrorMessage
