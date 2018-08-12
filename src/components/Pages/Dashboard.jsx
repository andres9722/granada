import React from 'react'
import { connect } from 'react-redux'
import Books from '../Organism/Books/Books.jsx'

const handleOnFilter = (filter, data) => {
  let regex = new RegExp(filter.search, 'i')
  return data.filter(q => regex.test(q.Title))
}

const Dashboard = ({ filter, books }) => (
  <div className='l-container'>
    <Books books={handleOnFilter(filter, books)} />
  </div>
)

const mapStateToProps = ({ filter, books }) => ({ filter, books })

export default connect(mapStateToProps, null)(Dashboard)
