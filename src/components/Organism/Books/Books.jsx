import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Book from '../../Molecules/Book/Book.jsx'
import Loader from '../../Atoms/Loader/Loader.jsx'
import './Books.scss'

const Books = ({ books, images, loading }) => (
  <Fragment>
    <ul className='books'>
      {books &&
        books.map(book => (
          <Link key={book.Title} to={`/book/${book.ID}`}>
            <Book book={book} Image={images[book.ID]} />
          </Link>
        ))}
    </ul>
    {loading && <Loader />}
  </Fragment>
)

const mapStateToProps = ({ images, loading }) => ({ images, loading })

export default connect(mapStateToProps, null)(Books)
