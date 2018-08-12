import React from 'react'
import { connect } from 'react-redux'
import InputForm from '../Atoms/Inputs/InputForm.jsx'
import TextAreaForm from '../Atoms/Inputs/TextAreaForm.jsx'
import SubmitForm from '../Atoms/Inputs/SubmitForm.jsx'
import { onUpdateBook } from '../../state/actionCreators'
import Loader from '../Atoms/Loader/Loader'
import ErrorMessage from '../Atoms/Messages/ErrorMessage'
import SuccessMessage from '../Atoms/Messages/SuccessMessage'

const EditBook = ({
  books,
  loading,
  error,
  success,
  images,
  match,
  handleOnUpdateBook
}) => {
  return (
    <div className='l-container'>
      <form className='form' onSubmit={e => handleOnUpdateBook(e)}>
        <img src={images[0]} alt='Book' className='book__img' />
        <input
          type='hidden'
          value={books[match.params.ID - 1].ID}
          name='ID'
          id='ID'
        />
        <InputForm
          classes='form__content'
          label='*Título: '
          type='text'
          default={books[match.params.ID - 1].Title}
          required
          id='title'
          name='title'
        />

        <InputForm
          classes='form__content'
          label='*Fecha: '
          type='date'
          default={books[match.params.ID - 1].PublishDate.substring(0, 10)}
          required
          id='date'
          name='date'
        />

        <InputForm
          classes='form__content'
          label='N° páginas: '
          type='number'
          default={books[match.params.ID - 1].PageCount}
          required
          id='pages'
          name='pages'
        />

        <InputForm
          classes='form__content'
          label='*Descripción: '
          type='text'
          default={books[match.params.ID - 1].Description}
          required
          id='description'
          name='description'
        />

        <TextAreaForm
          classes='form__content'
          label='Extracto: '
          default={books[match.params.ID - 1].Excerpt}
          required
          id='excerpt'
          name='excerpt'
        />

        <SubmitForm
          classes='form__content'
          className='form__submit'
          value='Guardar'
        />
      </form>
      {loading && <Loader />}
      {error && <ErrorMessage text='Error al crear' />}
      {success && <SuccessMessage text='Actualizado correctamente' />}
    </div>
  )
}

const mapStateToProps = ({ books, images, loading, error, success }) => ({
  books,
  images,
  loading,
  error,
  success
})

const mapDispatchToProps = dispatch => ({
  handleOnUpdateBook (event) {
    dispatch(onUpdateBook(event))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditBook)
