import React from 'react'
import './NewLifts.css'
import newlift1 from '../../img/new-lift1.jpg'
import newlift2 from '../../img/new-lift2.jpg'
import newlift3 from '../../img/new-lift3.jpg'
import newlift4 from '../../img/new-lift4.png'
function NewLifts() {
 return (
  <div className='new-lifts'>
<h1 className='cabin-lift'>Новости</h1>
<div className="row w-100">
 <div className="col-md-4">
  <div className="card-box">
   <img className='nlift-img' src={newlift1} alt="" />
   <h4 className='nlift-title'>Построен новый лифт</h4>
  </div>
 </div>
 <div className="col-md-4">
   <div className="card-box">
   <img className='nlift-img' src={newlift2} alt="" />
   <h4 className='nlift-title'>РЕМОНТ И ОБСЛУЖИВАНИЕ</h4>
  </div>
 </div>
 <div className="col-md-4">
   <div className="card-box">
   <img className='nlift-img' src={newlift3} alt="" />
   <h4 className='nlift-title'>ДИСПЕТЧЕРИЗАЦИЯ</h4>
  </div>
 </div>
 <div className="col-md-4">
   <div className="card-box">
   <img className='nlift-img' src={newlift4} alt="" />
   <h4 className='nlift-title'>ПАССАЖИРСКИЕ ЛИФТЫ</h4>
  </div>
 </div>
</div>
  </div>
 )
}

export default NewLifts
