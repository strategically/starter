import React, { Component } from "react"

import Layout from "../components/layout/layout"
import Logo from "../components/logo";

class IndexPage extends Component {
    render() {
        // const data = this.props.data

        return (
            <Layout>
                <div id="page_content" >
                    <Logo />
                    <section className="py-11">
                        <div className="container">
                            <div className="row justify-content-center py-5">
                                <div className="col-6 justify-content-center bg-contact-blue pt-5 px-4">
                                    <h1>Contact us</h1>
                                    <p>Please leave us a detailed message and we will respond shortly. Thank you.</p>
                                    <p><b>Enter your details below</b></p>

                                    <form className="ml-2" action="/thank-you" data-netlify="true" data-netlify-recaptcha="true">
                                        <div className="form-row">
                                            <div className="form-group col-auto">
                                                <label htmlFor="first_name" className="small text-secondary form-text">First name</label>
                                                <input type={'text'} className="form-control" id="first_name" placeholder={'David'} />
                                            </div>
                                            <div className="form-group col-auto">
                                                <label htmlFor="last_name" className="small text-secondary form-text">Last name</label>
                                                <input type={'text'} className="form-control " id="last_name" placeholder={'Hendricks'} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-auto">
                                                <label htmlFor="email" className="small text-secondary form-text">Work Email</label>
                                                <input type={'text'} className="form-control" placeholder={'david@bankuk.com'} />
                                            </div>
                                            <div className="form-group col-auto">
                                                <label htmlFor="phone" className="small text-secondary form-text">Phone Number</label>
                                                <input type={'text'} className="form-control" placeholder={'000-000-0000'} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-auto">
                                                <label htmlFor="company" className="small text-secondary form-text">Company</label>
                                                <input type={'text'} className="form-control" placeholder={'Bankuk'} />
                                            </div>
                                        </div>
                                        <div className="form-row mb-3">
                                            <div className='form-group col-10'>
                                                <label htmlFor="message" className="small text-secondary form-text">Your message</label>
                                                <textarea className="form-control" placeholder={'Tell us about your needs, timeline and any questions you have and we will be in contact shortly'} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-auto">
                                                <button type={"submit"} className="btn btn-primary">Get in touch</button>
                                            </div>
                                            <div className="form-group col">
                                                <p className="small">By clicking Submit, you agree to our terms. View our TOS and Privacy Policy</p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default IndexPage

// Set here the ID of the home page.
// export const pageQuery = graphql`
//   query {
//     allWordpressPage {
//       edges {
//         node {
//           id
//           title
//           excerpt
//           slug
//           date(formatString: "MMMM DD, YYYY")
//         }
//       }
//     }
//     allWordpressPost(sort: { fields: [date] }) {
//       edges {
//         node {
//           title
//           excerpt
//           slug
//         }
//       }
//     }
//   }
//   `
