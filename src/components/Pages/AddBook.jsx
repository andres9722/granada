import React, { Component } from 'react'
import { connect } from 'react-redux'
import InputForm from '../Atoms/Inputs/InputForm.jsx'
import book from '../../assets/book.jpg'
import TextAreaForm from '../Atoms/Inputs/TextAreaForm.jsx'
import Loader from '../Atoms/Loader/Loader.jsx'
import ErrorMessage from '../Atoms/Messages/ErrorMessage.jsx'
import SuccessMessage from '../Atoms/Messages/SuccessMessage.jsx'
import { onAddBook } from '../../state/actionCreators'
import SubmitForm from '../Atoms/Inputs/SubmitForm.jsx'
import './AddBook.scss'

class AddBook extends Component {
  handleOnChangeFile (e) {
    let file = e.target.files[0]
    let img = this.preview
    let text = this.fileName
    let name = file.name
    img.src = window.URL.createObjectURL(file)
    text.textContent = name
  }

  render () {
    const { handleOnAddBook, loading, error, success } = this.props
    return (
      <div className='l-container'>
        <form className='form' onSubmit={e => handleOnAddBook(e)}>
          <div className='preview'>
            <img
              src={book}
              alt='Libro'
              className='preview__img'
              ref={el => {
                this.preview = el
              }}
            />
          </div>
          <div className='form__content'>
            <label className='form__label form__label--file'>
              Cargar imagen
              <InputForm
                onChange={e => this.handleOnChangeFile(e)}
                type='file'
                id='image'
                name='files'
                className='form__input--file'
              />
              <p
                className='form__filename'
                ref={el => {
                  this.fileName = el
                }}
              />
            </label>
          </div>
          <InputForm
            classes='form__content'
            label='Título: '
            type='text'
            placeholder='Título'
            required
            id='title'
            name='title'
          />
          <InputForm
            classes='form__content'
            label='Fecha: '
            type='date'
            placeholder='Fecha'
            required
            id='date'
            name='date'
          />
          <InputForm
            classes='form__content'
            label='N° páginas: '
            type='number'
            placeholder='N° páginas'
            required
            id='pages'
            name='pages'
          />
          <InputForm
            classes='form__content'
            label='Descripción: '
            type='text'
            placeholder='Descripción'
            required
            id='description'
            name='description'
          />
          <TextAreaForm
            classes='form__content'
            label='Extracto: '
            type='text'
            placeholder='Extracto'
            required
            id='excerpt'
            name='excerpt'
          />
          <SubmitForm
            classes='form__content'
            className='form__submit'
            value='Crear'
          />
        </form>
        {loading && <Loader />}
        {error && <ErrorMessage text='Error al crear' />}
        {success && <SuccessMessage text='Creado correctamente' />}
      </div>
    )
  }
}

const mapStateToProps = ({ loading, error, success }) => ({
  loading,
  error,
  success
})

const mapDispatchToProps = dispatch => ({
  handleOnAddBook (event) {
    dispatch(onAddBook(event))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddBook)
