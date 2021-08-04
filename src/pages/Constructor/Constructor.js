import React from 'react'
import ConstructorComp from '../../components/ConstructorComp/ConstructorComp'
import HeadContent from '../../components/HeadContent/HeadContent'

function Constructor() {
 const data={title:'КОНСТРУКТОР'}
 return (
  <div>
<HeadContent title={data.title}/>
<ConstructorComp/>
  </div>
 )
}

export default Constructor
