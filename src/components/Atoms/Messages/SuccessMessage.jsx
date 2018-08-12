import React from 'react'
import PropTypes from 'prop-types'
import './SuccessMessage.scss'

const SuccessMessage = props => (
  <div className='success'>
    <span className='success__message'>
      {props.text}
    </span>
  </div>
)

SuccessMessage.propTypes = {
  text: PropTypes.string
}

export default SuccessMessage
