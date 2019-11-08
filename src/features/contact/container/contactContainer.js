import React from 'react'

import ContactForm from '../components/contactform'
import ContactInfo from '../components/contactInfo'
import ContactMap from '../components/contactMap'


const Contact = ()=>{
    return(
<div className='container-fluid'>
    Contact
    <ContactForm/>
    <ContactInfo/>
    <ContactMap/>
</div>
    )
}
export default Contact