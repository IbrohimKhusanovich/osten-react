import React from "react";
import "./ContactComp.css";
import { GoogleMap, withScriptjs, withGoogleMap,Marker } from "react-google-maps";

function Map(){
  return(
    <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 41.33956627604483, lng: 69.20551056912487 }}
  >
    <Marker position={{lat:41.33956627604483,lng:69.20551056912487}}/>
  </GoogleMap>
  )
}
const WrappedMap = withScriptjs(withGoogleMap(Map));
function ContactsComp() {
  return (
    <div className='contact-comp'>
      <h1 className='cabin-lift'>Контакты</h1>
      <div className="map-cont">
      <WrappedMap
        googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
      </div>
      <div className="contact-texts w-100 mt-5">
      <h3 className='contact-time mb-3'>Режим работы с 09:00 до 18:00</h3>
      <div className='emails w-100'>
        <p>
          <b>Наш адрес:</b>город Ташкент ...
        </p>
        <p>
          <b>Телефон: </b> (+99897) 123-45-67, (+99897) 123-45-67
        </p>
        <p>
          <b>Emai: </b> info@lift.uz
        </p>
        </div>
        <form className='contact-form'>
          <label htmlFor="nameinpt">Ваше имя (обязательно)</label>
          <input id='nameinpt' type="text"  />
          <label htmlFor="emailinpt">Ваш e-mail (обязательно)</label>
          <input id='emailinpt' type="text"  />
          <label htmlFor="messageinpt">Сообщение</label>
          <input id='messageinpt' type="text"  />
        </form>
        <div className="btn-form">
        <button className='form-btn'>Отправить</button>
        </div>
      </div>
    </div>
  );
}
export default ContactsComp;
