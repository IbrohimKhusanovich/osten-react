import React from 'react'
import HeadContent from '../../components/HeadContent/HeadContent'
import Partners from '../../components/Partners/Partners'
import ProductsComp from '../../components/ProductsComp/ProductsComp'

function Products() {
 const data={title:'ПРОДУКЦИЯ'}
 return (
  <div>
   <HeadContent title={data.title}/>
   <ProductsComp/>
   <Partners/>
  </div>
 )
}

export default Products
