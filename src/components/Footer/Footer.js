import { faFacebook, faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Link } from "react-router-dom";
import './Footer.css'
function Footer() {
  return (
    <div className='footer-box'>
      <div className='row w-100'>
        <div className='col-lg-4 mb-5'>
          <h3 className='foot-text1'>О НАС</h3>
          <p className='foot-text2'>
            «Osten» — уникальный производитель, лифтов и эскалаторов в Средней
            Азии Компания «Osten» была основана в 2019 году!
          </p>
          <h3 className='foot-text3'>МЫ В СОЦ.СЕТЯХ:</h3>
          <div className="social-icon">
           <FontAwesomeIcon className='icon-soc' icon={faFacebook}/>
           <FontAwesomeIcon className='icon-soc' icon={faInstagram}/>
           <FontAwesomeIcon className='icon-soc' icon={faTelegram}/>
          </div>
        </div>
        <div className=' col-lg-4 mb-5'>
         <h3 className='foot-text4'>ПОСЛЕДНИЕ НОВОСТИ</h3>
         <Link className='d-block foot-ancer' to='/news'>Построен новый лифт</Link>
         <Link className='d-block foot-ancer' to='/news'>РЕМОНТ И ОБСЛУЖИВАНИЕ ЭСКАЛАТОРОВ</Link>
         <Link className='d-block foot-ancer' to='/news'>ДИСПЕТЧЕРИЗАЦИЯ</Link>
        </div>
        <div className='col-lg-4 mb-5'>
         <h3 className='foot-text5'>КОНТАКТЫ</h3>
         <p className='contact-menu'><strong>Номер телефона:</strong>+998 (93) 511-11-17 +998 (91) 791-51-15</p>
         <p className='contact-menu'><strong>Электронная почта:</strong>info@uzlift.uz</p>
         <p className='contact-menu'><strong>Адрес:</strong>100077, город Ташкент, улица Мухаммад Юсуф 1А.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
