import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/contact.css" 
import "../styles/common.css" 

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div id="contact-content">
      <form 
        name="contact" 
        method="post" 
        data-netlify="true" 
        data-netlify-honeypot="bot-field"
        action="/thank-you"
        className="contact-form-style"
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <div id="form-header">
            <h2>Contact us</h2>
            <p id="para1">Please leave us a detailed message and we will respond shortly. Thank you.</p>
            <p id="para2">Enter your details below</p>
        </div>
        <div className="form-row field-font-size">
            <div className="form-group col-6"> {/* col-sm-6 col-12 */}
                <label htmlFor="first_name" className="small text-secondary form-text">First name</label>
                <input type={'text'} className="form-control" id="first_name" placeholder={'David'} />
            </div>
            <div className="form-group col-6">
                <label htmlFor="last_name" className="small text-secondary form-text">Last name</label>
                <input type={'text'} className="form-control " id="last_name" placeholder={'Hendricks'} />
            </div>
        </div>
        <div className="form-row field-font-size">
            <div className="form-group col-6">
                <label htmlFor="email" className="small text-secondary form-text">Work Email</label>
                <input type={'text'} className="form-control" placeholder={'david@bankuk.com'} />
            </div>
            <div className="form-group col-6">
                <label htmlFor="phone" className="small text-secondary form-text">Phone Number</label>
                <input type={'text'} className="form-control" placeholder={'000-000-0000'} />
            </div>
        </div>
        <div className="form-row field-font-size">
            <div className="form-group col-12">
                <label htmlFor="company" className="small text-secondary form-text">Company</label>
                <input type={'text'} className="form-control" placeholder={'Bankuk'} />
            </div>
        </div>
        <div className="form-row field-font-size">
            <div className='form-group col-12'>
                <label htmlFor="message" className="small text-secondary form-text">Your message</label>
                <textarea className="form-control" placeholder={'Tell us about your needs, timeline and any questions you have and we will be in contact shortly'} />
            </div>
        </div>
        <div className="form-row mt-3 text-muted">
            <div className="form-group col-auto" id="touch-btn">
                <button type={"submit"} className="btn btn-primary">Get in touch</button>
            </div>
            <div id="info-icon" className="ml-1">&#9432;</div>
            <div className="form-group col mt-1">
                <p id="info">
                    By clicking Submit, you agree to our terms. View our TOS and Privacy Policy
                </p>
            </div>
        </div>
      </form> 
    </div>
  </Layout>
)

export default Contact
