import React from 'react'
import './UsServices.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilRuler, faToolbox, faTools } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import { keyframes } from "@emotion/react";
import { fab } from '@fortawesome/free-brands-svg-icons'
import Reveal from 'react-awesome-reveal';
library.add(faPencilRuler, faToolbox,faTools,fab);
const data=[
 {iconca:'pencil-ruler',
  title:'ПРОЕКТИРОВАНИЕ',
  text:'ПОДРОБНО ПРО ПРОЕКТИРОВАНИЕ'
},
{iconca:'toolbox',
title:'МОНТАЖ',
text:'ПОДРОБНО ПРО МОНТАЖ'
},
{iconca:['fab','creative-commons-share'],
  title:'ЗАПАСНЫЕ ЧАСТИ',
  text:'ПОДРОБНО ПРО ЗАПАСНЫЕ ЧАСТИ'
},
 {iconca:'tools',
  title:'РЕМОНТ',
  text:'ПОДРОБНО ПРО РЕМОНТ'
}
]
function UsServices() {
 const cardAnimat=keyframes`
 from{
 opacity:0;
 transform: translateY(100px);
 }
 to{
  opacity:1;
 transform: translateY(0);
 }
 `
 return (
  <div className='us-services'>
<h1 className='us-service-text'>Наши услуги</h1>
<div className="container wdth ">
 <div className=" row ">
{data.map((item,idx)=>{
 console.log(item.iconca);
 return(
 <>
  <Reveal className='service my-3 mx-3 col-xl-3 col-lg-6 col-md-6' key={idx} keyframes={cardAnimat}>
 <>
<FontAwesomeIcon className='icon-service' icon={item.iconca} />
<h1 className='serv-title'>{item.title}</h1>
<h1 className='serv-text'>{item.text}</h1>
 </>
 </Reveal>
 </>
 )
})}
</div>
</div>
  </div>
 )
}

export default UsServices
