import React from "react";

import ContactForm from "../components/contactform";
import ContactInfo from "../components/contactInfo";
import ContactMap from "../components/contactMap";
import ContactHeader from "../components/contactHeader";

const Contact = () => {
  return (
    <div className="container-fluid p-0">
      <ContactHeader />
      <div className='container'>
         <div className='d-flex flex-wrap'>
        <div className='col-lg-6'>
            <ContactInfo/>   
        </div>
        <div className='col-lg-6'>
            <ContactForm/>
        </div>
    </div>
      </div>
     
        <ContactMap/>
    </div>
  );
};
export default Contact;
