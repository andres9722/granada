import React from 'react'
import PropTypes from 'prop-types'

const TextAreaForm = props => (
  <div className={props.classes}>
    <label className='form__label'>{props.label}</label>
    <textarea
      value={props.value}
      id={props.id}
      className={`form__input ${props.className}`}
      name={props.name}
      placeholder={props.placeholder}
      required={props.required}
      defaultValue={props.default}
      autoComplete={props.autoComplete}
      disabled={props.disabled}
      ref={props.ref}
      onChange={props.onChange}
      rows='5'
    />
  </div>
)

TextAreaForm.propTypes = {
  classes: PropTypes.string,
  label: PropTypes.string,
  minLength: PropTypes.number,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  defaultValue: PropTypes.string,
  autoComplete: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default TextAreaForm
