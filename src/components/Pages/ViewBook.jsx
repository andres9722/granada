import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../Atoms/Button/Button.jsx'
import Modal from '../Organism/Modal/Modal.jsx'
import SubmitForm from '../Atoms/Inputs/SubmitForm.jsx'
import { showModal, removeBook } from '../../state/actionCreators'
import './ViewBook.scss'

const ViewBook = ({
  books,
  images,
  match,
  showModal,
  handleShowModal,
  removeBook
}) => (
  <div className='l-container'>
    <article className='book'>
      <img src={images[match.params.ID - 1]} alt='Book' className='book__img' />
      <div className='book__content'>
        <span className='book__title'> *Título: </span>
        <span className='book__description'>
          {books[match.params.ID - 1].Title}
        </span>
      </div>
      <div className='book__content--row'>
        <div className='book__content'>
          <span className='book__title'> *Fecha: </span>
          <span className='book__description'>
            {books[match.params.ID - 1].PublishDate.substring(0, 10)}{' '}
          </span>
        </div>
        <div className='book__content'>
          <span className='book__title'> N° páginas: </span>
          <span className='book__description'>
            {books[match.params.ID - 1].PageCount}
          </span>
        </div>
      </div>
      <div className='book__content'>
        <span className='book__title'> *Descripción: </span>
        <span className='book__description'>
          {books[match.params.ID - 1].Description}
        </span>
      </div>
      <div className='book__content'>
        <span className='book__title'> Extracto: </span>
        <p className='book__description'>
          {books[match.params.ID - 1].Excerpt}
        </p>
      </div>
    </article>
    <div className='book__buttons'>
      <Button
        onClick={() => handleShowModal()}
        value='Borrar'
        class='book__button book__button--delete'
      />
      <Link
        key={books[match.params.ID - 1].ID}
        to={`/book/${books[match.params.ID - 1].ID}/edit`}
      >
        <Button value='Editar' class='book__button book__button--edit' />
      </Link>
    </div>
    <Modal show={showModal} closeModal={handleShowModal}>
      <form
        className='modal__form'
        onSubmit={e => removeBook(e, books[match.params.ID - 1])}
      >
        <span>¿Está seguro de eliminar este libro?</span>
        <div className='modal__buttons'>
          <SubmitForm className='modal__submit' value='Confirmar' />
          <Button
            type='button'
            class='modal__cancel'
            onClick={() => handleShowModal()}
            value='Cancelar'
          />
        </div>
      </form>
    </Modal>
  </div>
)

const mapStateToProps = ({ books, images, showModal }) => ({
  books,
  images,
  showModal
})

const mapDispatchToProps = dispatch => ({
  handleShowModal () {
    dispatch(showModal())
  },
  removeBook (e, book) {
    dispatch(removeBook(e, book))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewBook)
