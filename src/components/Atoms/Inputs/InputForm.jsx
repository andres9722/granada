import React from 'react'
import PropTypes from 'prop-types'
import './InputForm.scss'

const InputForm = props => (
  <div className={props.classes}>
    <label className='form__label'>{props.label}</label>
    <input
      value={props.value}
      id={props.id}
      className={`form__input ${props.className}`}
      type={props.type}
      minLength={props.minLength}
      name={props.name}
      placeholder={props.placeholder}
      required={props.required}
      defaultValue={props.default}
      autoComplete={props.autoComplete}
      disabled={props.disabled}
      ref={props.ref}
      onChange={props.onChange}
    />
  </div>
)

InputForm.propTypes = {
  classes: PropTypes.string,
  label: PropTypes.string,
  minLength: PropTypes.number,
  className: PropTypes.string,
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

export default InputForm
