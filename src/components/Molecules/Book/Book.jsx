import React from 'react'
import './Book.scss'

const Book = ({ book, Image }) => {
  return (
    <li className='book-item'>
      {Image &&
        <div className='book-item__container'>
          <figure className='book-item__figure'>
            <img src={Image} alt='Book' className='book-item__img' />
            <figcaption className='book-item__description'>
              {book.Description}
            </figcaption>
          </figure>
          <p className='book-item__title'> <b> {book.Title} </b> </p>
          <p className='book-item__date'>
            {book.PublishDate.substring(0, 4)}
          </p>
        </div>}
    </li>
  )
}

export default Book
