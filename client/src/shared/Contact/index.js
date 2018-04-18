import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div class="addresses">
            <div className="deets">
                <h3>Chase Anderson</h3>
                <h3>Tel: 801-675-1703</h3>
            </div>
            <br />
            {/* <iframe className="embbAddress" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.716473453886!2d-111.94432221965292!3d41.16253767938688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875306723e831743%3A0xe656c6d6b76381b1!2s1490+E+5600+S%2C+Ogden%2C+UT+84403!5e0!3m2!1sen!2sus!4v1513742225623">Address</iframe> */}
            <iframe className="embbAddress" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.4554560691217!2d-111.91734468499155!3d41.14641201886272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875306fa6a33ed41%3A0xc15cacf60245189c!2s6391+Combe+Rd%2C+Ogden%2C+UT+84403!5e0!3m2!1sen!2sus!4v1524015233732">Address</iframe>
        </div>
    )
}

export default Contact
