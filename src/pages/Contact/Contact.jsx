import React from 'react';
import "../../assets/css/contact.css"
const Contact = () => {
    return (
        <div className="background d-flex justify-content-center">
      

            <img src={require('../../assets/images/LableBox.png')} className ="input-box"/>
            <input type='text' className='nameinput' placeholder='name'/>
            <input type='text' className='noinput' placeholder='pone.no'/>
            <button type='submit' className='button1'>OK</button> 
        </div>
    );
};

export default Contact;