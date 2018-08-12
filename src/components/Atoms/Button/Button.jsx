import React from 'react'
import PropTypes from 'prop-types'

const Button = props => (
  <button
    className={props.class}
    onClick={props.onClick}
    id={props.id}
    type={props.type}
  >
    {props.value}
  </button>
)

Button.propTypes = {
  value: PropTypes.string,
  click: PropTypes.func
}

export default Button
