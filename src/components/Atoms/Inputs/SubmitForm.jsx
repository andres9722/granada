import React from 'react'
import PropTypes from 'prop-types'

const SubmitForm = props => (
  <div className={props.classes}>
    <input
      type='submit'
      className={props.className}
      value={props.value}
      disabled={props.disabled}
    />
  </div>
)

SubmitForm.propTypes = {
  classes: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool
}

export default SubmitForm
