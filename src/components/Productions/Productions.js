import React from 'react'
import './Productions.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAccusoft, fab } from '@fortawesome/free-brands-svg-icons'
import { keyframes } from "@emotion/react";
import { faCheck, faListOl, faThumbsUp, faUser } from '@fortawesome/free-solid-svg-icons';
import Reveal from 'react-awesome-reveal';
library.add(faAccusoft,faCheck,faListOl,faThumbsUp,faUser,fab)
function Productions() {
 const slider=keyframes`
 from{
  opacity:0;
  transform:translateY(100px)
 }
 to{
  opacity:1;
  transform:translateY(0)
 }
 `
 const data=[
  {icon:['fab','accusoft'],
  title:'Поиск и инновации',
  text:'Мы ведем постоянный поиск и внедряем инноваций'
 },
 {icon:'thumbs-up',
 title:'Качество и цена',
 text:'Предложение лифтов и эскалаторов высокого качества по конкурентным ценам'
},
 {icon:'user',
 title:'Индивидуальный подход',
 text:'Индивидуальный и гибкий подход к каждому клиенту'
},
  {icon:'list-ol',
  title:'Широкий ассортимент',
  text:'Начиная с решений, оптимизированных для жилых и офисных зданий, заканчивая сложными проектами с эскалаторами и высокоскоростными лифтами'
 },
 {icon:'check',
 title:'Гибкость',
 text:'Гибкость технологических решений и собственных прогнозов, ориентированных на потребности каждого здания'
},
 ]
 let sum=100;
 return (
  <div className='productions'>
   <h1 className='pr-title'>Преимущества</h1>
<div className="pr-icons row">
 {
  data.map((item,idx)=>{
   return(
   <div className="item-pr px-5 col-xl-4 col-lg-6 px-3 py-2">
<Reveal delay={sum+=100} keyframes={slider}>
    <div className="pr-icon my-3">
    <FontAwesomeIcon className='icon-child' icon={item.icon}/>
    </div>
    <h3 className='item-title '>{item.title}</h3>
    <p className='pr-text my-3 text-center'>{item.text}</p>
   </Reveal>
   </div>
    )  })
 }
</div>
  </div>
 )
}

export default Productions
