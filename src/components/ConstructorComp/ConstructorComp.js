import React from "react";
import "./ConstructorComp.css";
import lift from "../../img/3d-lift.png";
import oboy from "../../img/lift-stone1.jpg";
import oboy2 from "../../img/lift-stone2.jpg";
import oboy3 from "../../img/lift-stone3.jpg";
import glass1 from "../../img/lift-glass1.png";
import glass2 from "../../img/lift-glass2.png";
import glass3 from "../../img/lift-glass3.png";
import none from "../../img/lift-none.png";
import handleL from "../../img/lift-handle-left.jpg";
import handleR from "../../img/lift-handle-right.jpg";
import floor from "../../img/lift-floors01.jpg";
import potol1 from '../../img/lift-potolok1.jpg'
import potol2 from '../../img/lift-potolok2.jpg'
import potol3 from '../../img/lift-potolok3.jpg'
import lift3d from '../../img/3d-floor3.png'
import floors from '../../img/3d-floor.png'
import handle3dL from '../../img/3d-handle-left.png'
import handle3dR from '../../img/3d-handle-right.png'
import glass3d from '../../img/3d-glass1.png'
import glass3d2 from '../../img/3d-glass2.png'
import glass3d3 from '../../img/3d-glass3.png'
import left3d1 from '../../img/oboy-left-3d.png'
import left3d2 from '../../img/oboy-left-3d-2.png'
import left3d3 from '../../img/oboy-left-3d-3.png'
import right3d1 from '../../img/oboy-right-3d.png'
import right3d2 from '../../img/oboy-right-3d.-2png.png'
import right3d3 from '../../img/oboy-right-3d-3png.png'
import potol3d1 from '../../img/3d-floor2.png'
import potol3d2 from '../../img/3d-floor3.png'
import potol3d3 from '../../img/3d-floor4.png'
function ConstructorComp() {
  const ChangeRightOboy=(e)=>{
    let imgChage=[{src:right3d1,id:3},{src:right3d2,id:2},{src:right3d3,id:1}];
    const el=e.target.id;
    imgChage.map((item)=>item.id==el?document.querySelector('.constr-lift-r').src=item.src:'')
  }
  const ChangeLeftOboy=(e)=>{
    let imgChage=[{src:left3d1,id:3},{src:left3d2,id:2},{src:left3d3,id:1}];
    const el=e.target.id;
    imgChage.map((item)=>item.id==el?document.querySelector('.constr-lift-l').src=item.src:'')
  }
  const ChangeGlass=(e)=>{
    let imgChage=[{src:glass3d,id:1},{src:glass3d2,id:2},{src:glass3d3,id:3}];
    const el=e.target.id;
    imgChage.map((item)=>item.id==el?document.querySelector('.constr-lift-g').src=item.src:'')
  }
  const ChangeHandle=(e)=>{
    let imgChage=[{src:handle3dL,id:1},{src:handle3dR,id:2}];
    const el=e.target.id;
    imgChage.map((item)=>item.id==el?document.querySelector('.constr-lift-h').src=item.src:'')
  }
  const ChangeFloor=(e)=>{
    let imgChage=[{src:floors,id:1}];
    const el=e.target.id;
    imgChage.map((item)=>item.id==el?document.querySelector('.constr-lift-ch').src=item.src:'')
  }
  const ChangePotolok=(e)=>{
    let imgChage=[{src:potol3d1,id:3},{src:potol3d2,id:2},{src:potol3d3,id:1}];
    const el=e.target.id;
    imgChage.map((item)=>item.id==el?document.querySelector('.constr-lift-b').src=item.src:'')
  }
const None=(e)=>{
let none=e.target.id;
none=='non1'?document.querySelector('.constr-lift-g').src='':document.querySelector('.constr-lift-h').src=''
}
  return (
    <div className='constructor-comp mb-5'>
      <h1 className='cabin-lift'>Создайте интерьер своего лифта</h1>
      <div className='row w-100 '>
        <div className='col-md-5 px-5'>
          <div className='constr-lift'>
            <img className='constr-img' src={lift} alt='' />
            <img className='constr-lift-ch' src={''} alt="" />
            <img className='constr-lift-b' src={''} alt="" />
            <img className='constr-lift-h' src={''} alt="" />
            <img className='constr-lift-g' src={''} alt="" />

            <img className='constr-lift-r' src={''} alt="" />
            <img className='constr-lift-l' src={''} alt="" />
          </div>
        </div>
        <div className='col-md-7 px-5 '>
          <h4 className='constr-text'>
            Создайте свой собственный интерьер лифта онлайн уже сегодня.
            Выберите дизайн из коллекции "COMPANY NAME", комбинируйте материалы,
            освещение и аксессуары, чтобы создать уникальный интерьер лифта.
          </h4>
          <p className='constr-title'>
            <b>Шаг 1 </b>- Размеры подъемника
          </p>
          <form>
            <div className='row w-100 align-items-center'>
              <div className='col-form-label col-xl-3 form-group col-sm-4'>
                <label for='constr-input' className='constr-text-label'>
                  Высота (мм)
                </label>
              </div>
              <div className='col-xl-9 col-sm-8'>
                <input
                  id='constr-input'
                  className='constr-inpt'
                  placeholder='Высота'
                  type='text'
                />
              </div>
            </div>
            <div className='row w-100 align-items-center'>
              <div className='col-form-label col-xl-3 col-sm-4'>
                <label for='constr-input' className='constr-text-label'>
                  Глубина (мм) Боковые стенки
                </label>
              </div>
              <div className='col-xl-9 col-sm-8'>
                <input
                  id='constr-input'
                  className='constr-inpt'
                  placeholder='Глубина'
                  type='text'
                />
              </div>
            </div>
            <div className='row w-100 align-items-center'>
              <div className='col-form-label col-xl-3 col-sm-4'>
                <label for='constr-input' className='constr-text-label'>
                  Ширина (мм) Задние стенки
                </label>
              </div>
              <div className='col-xl-9 col-sm-8'>
                <input
                  id='constr-input'
                  className='constr-inpt'
                  placeholder='Ширина'
                  type='text'
                />
              </div>
            </div>
          </form>
          <p className='constr-title'>
            <b>Шаг 2</b>- Выберем цвет боковых стенок
          </p>
          <div className='constr-images'>
            <img  onClick={ChangeRightOboy} className='oboy' id='1' src={oboy} alt='' />
            <img id='2' onClick={ChangeRightOboy} className='oboy' src={oboy2} alt='' />
            <img id='3' onClick={ChangeRightOboy} className='oboy' src={oboy3} alt='' />
          </div>
          <p className='constr-title'>
            <b>Шаг 3</b>- Выберем цвет задней стенки
          </p>
          <div className='constr-images'>
            <img id='1' onClick={ChangeLeftOboy} className='oboy' src={oboy} alt='' />
            <img id='2' onClick={ChangeLeftOboy} className='oboy' src={oboy2} alt='' />
            <img id='3' onClick={ChangeLeftOboy} className='oboy' src={oboy3} alt='' />
          </div>
          <p className='constr-title'>
            <b>Шаг 4 </b>- Выберем стиль зеркала
          </p>

          <div className='constr-images'>
            <img onClick={ChangeGlass} id='1' className='oboy' src={glass1} alt='' />
            <img onClick={ChangeGlass} id='2' className='oboy' src={glass2} alt='' />
            <img id='3'  onClick={ChangeGlass} className='oboy' src={glass3} alt='' />
            <img onClick={None} id='non1' className='oboy' src={none} alt='' />
          </div>
          <p className='constr-title'>
            <b>Шаг 5 </b>- Возьмем поручни
          </p>

          <div className='constr-images'>
            <img onClick={ChangeHandle} id='1' className='oboy' src={handleL} alt='' />
            <img onClick={ChangeHandle} id='2' className='oboy' src={handleR} alt='' />
            <img id='non2' onClick={None} className='oboy' src={none} alt='' />
          </div>
          <p className='constr-title'>
            <b>Шаг 6 </b>- Выберем пол
          </p>

          <div className='constr-images'>
            <img onClick={ChangeFloor} id='1' className='oboy' src={floor} alt='' />
          </div>
          <p className='constr-title'>Тип пола</p>
          <div className='type-floor'>
            <p className='ty-fl'>Винил</p>
            <p className='ty-fl'>Резиновый</p>
          </div>
          <p className='constr-title'>
            <b>Шаг 7 </b> - Подберем потолочное освещение
          </p>

          <div className='constr-images'>
            <img onClick={ChangePotolok} id='1' className='oboy' src={potol1} alt='' />
            <img onClick={ChangePotolok} id='2' className='oboy' src={potol2} alt='' />
            <img onClick={ChangePotolok} id='3' className='oboy' src={potol3} alt='' />
          </div>
          <p className='constr-title'>
            <b>Шаг 8 </b>- Детали проекта
          </p>
          <form className='form'>
            <div className='row w-100 align-items-center'>
              <div className='col-form-label col-xl-3 form-group col-sm-4'>
                <label for='constr-input' className='constr-text-label'>
                Название проекта
                </label>
              </div>
              <div className='col-xl-9 col-sm-8'>
                <input
                  id='constr-input'
                  className='constr-inpt'

                  type='text'
                />
              </div>
            </div>
            <div className='row w-100 align-items-center'>
              <div className='col-form-label col-xl-3 col-sm-4'>
                <label for='constr-input' className='constr-text-label'>
                Название компании
                </label>
              </div>
              <div className='col-xl-9 col-sm-8'>
                <input
                  id='constr-input'
                  className='constr-inpt'
                  type='text'
                />
              </div>
            </div>
            <div className='row w-100 align-items-center'>
              <div className='col-form-label col-xl-3 col-sm-4'>
                <label for='constr-input' className='constr-text-label'>
                Контактное лицо
                </label>
              </div>
              <div className='col-xl-9 col-sm-8'>
                <input
                  id='constr-input'
                  className='constr-inpt'
                  type='text'
                />
              </div>
            </div>
            <div className='row w-100 align-items-center'>
              <div className='col-form-label col-xl-3 col-sm-4'>
                <label for='constr-input' className='constr-text-label'>
                Адрес
                </label>
              </div>
              <div className='col-xl-9 col-sm-8'>
                <input
                  id='constr-input'
                  className='constr-inpt'
                  type='text'
                />
              </div>
            </div>
            <div className='row w-100 align-items-center'>
              <div className='col-form-label col-xl-3 col-sm-4'>
                <label for='constr-input' className='constr-text-label'>
                Почтовый индекс

                </label>
              </div>
              <div className='col-xl-9 col-sm-8'>
                <input
                  id='constr-input'
                  className='constr-inpt'
                  type='text'
                />
              </div>
            </div>
            <div className='row w-100 align-items-center'>
              <div className='col-form-label col-xl-3 col-sm-4'>
                <label for='constr-input' className='constr-text-label'>
                Номер телефона
                </label>
              </div>
              <div className='col-xl-9 col-sm-8'>
                <input
                  id='constr-input'
                  className='constr-inpt'
                  type='text'
                />
              </div>
            </div>
            <div className='row w-100 align-items-center'>
              <div className='col-form-label col-xl-3 col-sm-4'>
                <label for='constr-input' className='constr-text-label'>
                Электронной почты
                </label>
              </div>
              <div className='col-xl-9 col-sm-8'>
                <input
                  id='constr-input'
                  className='constr-inpt'
                  type='text'
                />
              </div>
            </div>

          <button className='form-btn'>Отправить запрос</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ConstructorComp;
