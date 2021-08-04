import React from 'react'
import HeadContent from '../../components/HeadContent/HeadContent'
import Partners from '../../components/Partners/Partners'
import ServiceComp from '../../components/ServiceComp/ServiceComp'

function Services() {
  const data={title:'Услуги'}
 return (
  <div>
    <HeadContent title={data.title}/>
<ServiceComp/>
<Partners/>
  </div>
 )
}

export default Services
