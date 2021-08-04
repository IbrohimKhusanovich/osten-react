import React from 'react'
import HeadContent from '../../components/HeadContent/HeadContent'
import Partners from '../../components/Partners/Partners'
import ProductionContent from '../../components/ProductionContent/ProductionContent'

function Production() {
 const data={title:'Производство'}
 return (
  <div>
   <HeadContent title={data.title}/>
   <ProductionContent/>
   <Partners/>
  </div>
 )
}

export default Production
