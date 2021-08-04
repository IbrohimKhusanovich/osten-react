import React from 'react'
import './ProductsComp.css'
function ProductsComp() {
  const handleBtn = (e) => {
    document
      .querySelectorAll(".active-cm-btn")
      .forEach((item) => item.classList.remove("active-cm-btn"));
    e.target.classList.add("active-cm-btn");
  };
 return (
  <div className='products-comp'>
<h1 className='cabin-lift'>ПРОДУКЦИЯ</h1>
<div className="products-comp-btns">
  <p onClick={handleBtn} className='product-comp-btn active-cm-btn'>Поручни лифтов</p>
  <p onClick={handleBtn} className='product-comp-btn'>Опции</p>
  <p onClick={handleBtn} className='product-comp-btn'>Кабины лифтов</p>
</div>
  </div>
 )
}

export default ProductsComp
