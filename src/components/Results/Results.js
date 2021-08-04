import React from 'react'
import './Results.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGlobeAsia, faRunning, faSortAmountUp } from '@fortawesome/free-solid-svg-icons';
library.add(faGlobeAsia,faRunning,faSortAmountUp)
const data=[
 {icon:'sort-amount-up',
  number:300,
  text:'лифтов в год'
},
 {icon:'globe-asia',
  number:2,
  text:'года на рынке'
},
 {icon:'running',
  number:200,
  text:'эскалаторов в год'
}

]
function Results() {
 return (
  <div className='result-box'>
   <div className="justify-content-center zindex container">
<h1 className='result-title'>Результаты</h1>
<div className="result-icons">
{
data.map((item,idx)=>{
 return(
 <div className="cards-res">
 <FontAwesomeIcon className='icon-res' icon={item.icon}/>
 <h1 className='res-title'>{item.number}</h1>
 <p className='res-text'>{item.text}</p>
 </div>)
})
}
</div>
</div>
  </div>
 )
}

export default Results
