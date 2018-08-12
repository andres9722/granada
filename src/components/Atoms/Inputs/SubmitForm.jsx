import React from 'react'

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

export default SubmitForm
