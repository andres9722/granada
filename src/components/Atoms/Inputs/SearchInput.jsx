import React from 'react'
import PropTypes from 'prop-types'

const SearchInput = props => (
  <div className={props.className}>
    <label className='search__label'>{props.label}</label>
    <input
      type='search'
      placeholder={props.placeholder}
      required={props.required}
      onChange={props.onChange}
      id='search'
      name='search'
    />
  </div>
)

SearchInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func
}

export default SearchInput
