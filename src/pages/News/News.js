import React from 'react'
import HeadContent from '../../components/HeadContent/HeadContent'
import NewLifts from '../../components/NewLifts/NewLifts'
import Partners from '../../components/Partners/Partners'

function News() {
 const data={title:'Новости'}
 return (
  <div>
   <HeadContent title={data.title}/>
   <NewLifts/>
   <Partners/>
  </div>
 )
}

export default News
