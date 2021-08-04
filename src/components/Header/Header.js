import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/download.svg'
import './Header.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons';
function Header() {
 function handleIcon(){
  document.querySelector('.pages-nav').classList.toggle('active')
 }
 return (
  <>
  <div className='containers container'>
   <Link to='/'>
   <img className='logo' src={logo} alt="logo" />
   </Link>
   <div className="hamburger-menu">
   </div>
  <FontAwesomeIcon onClick={handleIcon} className='faicon' icon={faBars}/>
   <div className="pages-nav">

    <Link className='page-nav' to='/'>
     <h2 >ГЛАВНАЯ</h2>
    </Link>
    <Link className='page-nav' to='/about'>
     <h2 >О НАС</h2>
    </Link>
    <Link className='page-nav' to='/productions'>
     <h2 >ПРОИЗВОДСТВО</h2>
    </Link>
    <Link className='page-nav' to='/services'>
     <h2 >УСЛУГИ</h2>
    </Link>
    <Link className='page-nav' to='/products'>
     <h2 >ПРОДУКЦИЯ</h2>
    </Link>
    <Link className='page-nav' to='/constructor'>
     <h2 >КОНСТРУКТОР</h2>
    </Link>
    <Link className='page-nav' to='/news'>
     <h2 >НОВОСТИ</h2>
    </Link>
    <Link className='page-nav' to='/contacts'>
     <h2 >КОНТАКТЫ</h2>
    </Link>
   </div>
  </div>
  </>
 )
}

export default Header
