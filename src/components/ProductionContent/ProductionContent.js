import React from "react";
import "./ProductionContent.css";
import lift1 from "../../img/lift3.jpg";
import lift2 from "../../img/lift4.jpg";
import lift3 from "../../img/lift-new.jpg";
import lift4 from "../../img/lift-new2.jpg";
import lift5 from "../../img/lift-new3.jpg";
import lift6 from "../../img/hospital-lift.jpg";
import lift7 from "../../img/hospital-lift2.jpg";
import lift8 from "../../img/box-lift.jpg";
import lift9 from "../../img/box-lift2.jpg";
function ProductionContent() {
  const handleBtn = (e) => {
    console.log(e.target.value);
    document
      .querySelectorAll(".active-btn")
      .forEach((item) => item.classList.remove("active-btn"));
    e.target.classList.add("active-btn");
    document.querySelectorAll('.content').forEach(item=>item.classList.remove('d-block'))
    document.querySelectorAll('.content')[e.target.value-1].classList.add('d-block')
  };
  return (
    <div className='product-cont'>
      <h1 className='pr-title'>Производство</h1>
      <div className='row w-100'>
        <div className='col-md-3'>
          <ul>
            <li
              value='1'
              onClick={handleBtn}
              className='product-btn active-btn'>
              Пассажирские лифты
            </li>
            <li value='2' onClick={handleBtn} className='product-btn'>
              Лифт для коттеджей
            </li>
            <li value='3' onClick={handleBtn} className='product-btn'>
              Больничный лифт
            </li>
            <li value='4' onClick={handleBtn} className='product-btn'>
              Грузовой лифт
            </li>
          </ul>
        </div>
        <div onChange={handleBtn} className='col-md-9'>
          <div className='content d-block'>
            <p className='produc-cont-title'>Пассажирские лифты</p>
            <p className='produc-cont-text'>
              Пассажирский лифт – это подъемный механизм, без которого почти
              невозможно представить себе высотное здание, а первый такой
              подъемник был установлен в Нью-Йорке еще в 1857 году. Устройство
              безопасности для лифтов Э.Г. Отиса, в сочетании с использованием
              стальных каркасов зданий, дало возможность строить высотные
              здания. С тех пор лифты постоянно совершенствуются и улучшаются,
              но для регулярных тестов требуются специальные высотные
              сооружения. Одним из таких сооружений является испытательная башня
              OSTEN.
            </p>
            <p className='produc-cont-title'>Пассажирский лифт-профиль</p>
            <p className='produc-cont-text'>
              В небольшом машинном отделении, пассажирский лифт Osten имеет
              только около 65% - 70% от традиционного машинного отделения. Это
              значи- тельно экономит строительное пространство и материал. Шкаф
              управления в машинном отделении выполнен в однослойной компоновке.
              Основная опорная балка может также использоваться в качестве
              сцепной пластины, что в значительной степени экономит пространство
              машинного отделения. По сравнению с традиционными лифтами, при
              условии обеспечения рабочего пространства, предусмотренного
              национальным стандартом, он эффективно контролирует высоту
              машинного отделения. Интенсивный эффект пространства дает больше
              свободы для архитекто- ров. Это предоставляет более широкое
              использова- ние пространства для строительства. Прекрасно
              сочетается с архитектурным стилем
            </p>
            <img className='produc-cont-img' src={lift1} alt='' />
            <p className='produc-cont-title'>
              Меньше занимаемого места, более устойчивая конструкция
            </p>
            <p className='produc-cont-text'>
              По сравнению с лифтом с машинным отделением от Osten, машинное
              отделение является лишь продол- жением лифта. Это обеспечивает
              более удобную установку, а также более низкую стоимость.
            </p>

            <p className='produc-cont-title'>
              Впечатляющая экономия энергии{" "}
            </p>
            <p className='produc-cont-text'>
              По сравнению с традиционной тяговой машиной, небольшой машинный
              лифт Osten потребляет мень- ше энергии и меньше потерь тепловой
              энергии.
            </p>
            <img className='produc-cont-img' src={lift2} alt='' />
          </div>
          <div className='content'>
            <p className='produc-cont-title'>Лифт для коттеджей</p>
            <p className='produc-cont-text'>
              <strong>Лифты Osten,</strong> предназначенные для коттеджей,
              придерживаются идеи дизайна защиты окружающей среды и
              энергосбережения, а также в настоящее время объединяются с
              новейшей лифтовой технологией для обеспечения безопасности и
              надежности продуктов компании. Элегантно спроектированная кабина
              лифта, тонкая и изысканная техника демонстрируют выдающуюся
              производительность лифтов Osten данной серии.
            </p>
            <img className='produc-cont-img' src={lift3} alt='' />
            <img className='produc-cont-img' src={lift4} alt='' />
            <img className='produc-cont-img' src={lift5} alt='' />
          </div>
          <div className='content'>
            <p className='produc-cont-title'>Больничный лифт</p>
            <p className='produc-cont-text'>
              Больничный лифт часто используется в огромных лечебных заведениях,
              современных лечебных центрах, санаториях, центрах медикосанитарной
              помощи и т. д., где лечение больных и спасение умирающих является
              основной обязанностью. Серия больничных лифтов Osten
              придерживается гуманного подхода, применяет технологию группового
              наблюдения из экспертной системы, а также сокращает время ожидания
              пациентов до минимума.
            </p>
            <img className='produc-cont-img' src={lift6} alt='' />
            <img className='produc-cont-img' src={lift7} alt='' />
          </div>
          <div className='content'>
            <p className='produc-cont-title'>Грузовой лифт</p>
            <p className='produc-cont-text'>
              Грузовой лифт Osten использует передовую технологию синхронного
              безредукторного тягового усилия с постоянными магнитами, без
              машинного отделения. Тяговая машина имеет преимущество в малом
              весе, малом объеме, экономит архитектурное пространство,
              значительно повышает производительность и качество, снижает
              энергопотребление, частоту отказов.
            </p>
            <p className='produc-cont-text'>
              Грузовой лифт Osten с меньшей высотой вала, уменьшает высоту
              конструкции фабрик и других зданий, может отвечать фактическим
              потребностям коммерческой. Самый лучший выбор для перевозки
              товаров на фабриках, складах, универмагах, центрах недвижимости,
              библиотек и т.д.
            </p>
            <img className='produc-cont-img' src={lift8} alt="" />
            <img className='produc-cont-img' src={lift9} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductionContent;
