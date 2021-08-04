import React from 'react'
import ContactsComp from '../../components/ContactsComp/ContactsComp'
import HeadContent from '../../components/HeadContent/HeadContent'

function Contacts() {
 const data={title:'Контакты'}
 return (
  <div>
   <HeadContent title={data.title}/>
   <ContactsComp/>
  </div>
 )
}

export default Contacts
