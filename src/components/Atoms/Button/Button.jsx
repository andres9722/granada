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
  class: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
