import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { onSearch, mobileSearch } from '../../../state/actionCreators'
import logoMobile from '../../../assets/icono_granada.png'
import logoDesktop from '../../../assets/logo_granada.png'
import search from '../../../assets/search.svg'
import close from '../../../assets/cancel.svg'
import add from '../../../assets/add.svg'
import SearchInput from '../../Atoms/Inputs/SearchInput.jsx'
import Button from '../../Atoms/Button/Button.jsx'
import './Header.scss'

const Header = ({ handleOnSearch, handleMobileSearch, mobileSearch }) => (
  <header className='header'>
    <section className='header__container l-container'>
      <div className='logo'>
        <Link to='/'>
          <img
            className='logo__img logo__img--mobile'
            src={logoMobile}
            alt='Logo'
          />
          <img
            className='logo__img logo__img--desktop'
            src={logoDesktop}
            alt='Logo'
          />
        </Link>
        <span className='logo__text'>granada</span>
      </div>
      <div className='search'>
        <img
          className='search__img'
          src={mobileSearch ? close : search}
          alt='search'
          onClick={() => handleMobileSearch()}
        />
        <SearchInput
          placeholder='Buscar'
          label='Título: '
          className={
            mobileSearch ? 'search__input search__input--show' : 'search__input'
          }
          onChange={e => handleOnSearch(e)}
        />
      </div>
      <div className='add'>
        <Link to='/books/new'>
          <img className='add__img' src={add} alt='add' />
          <Button class='add__button' value='Crear Nuevo' />
        </Link>
      </div>
    </section>
  </header>
)

const mapStateToProps = ({ mobileSearch }) => ({ mobileSearch })

const mapDispatchToProps = dispatch => ({
  handleOnSearch (event) {
    dispatch(onSearch(event))
  },
  handleMobileSearch () {
    dispatch(mobileSearch())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
