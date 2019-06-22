import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Navbar from "../components/navbar";
import ExpertiseBlock from "../components/expertise-block";
import ServicesList from "../components/services-list";

class IndexPage extends Component {
    render() {
        // const data = this.props.data

        return (
            <Layout>
                <div id="page_content">
                <Navbar />
                <section className="py-11">
                    <div className="container">
                        <div className="row align-items-center my-5 py-5">
                            <div id='part1'>
                                <h1>WE BUILD</h1>
                                <h1 className="text-white">BEAUTIFUL PRODUCTS</h1>
                                <p>Get the strategic direction, technology and growth marketing you need to scale your company.</p>
                                <Link to={'/contact'} className="btn btn-primary">Schedule a strategy call</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-8 my-8 bg-white text-black-50 h-50">
                    <div className="container">
                        <div className="row align-items-center">
                            <div id='part2' className="col-8 h-50 my-5 py-5">
                                <h1>WHAT WE DO</h1>
                                <p>
                                    Strategically scales customer acquisition for high growth companies.
                                </p>
                                <p>
                                    We quietly work alongside a small number of fast growing disruptive companies and help them grow, faster.
                                </p>
                                <hr />
                            </div>
                            <div id="what_we_solve" className="col-8 h-50 py-2 my-5">
                                <h1>WHAT WE SOLVE</h1>
                                <p>We're Strategically</p>
                                <p>We provide strategy, technology, marketing & growth guidance for fast-growing companies</p>
                                <p>With 15+ combined years of product development and marketing experience, and 7+ combined years of SaaS experience we complement your subject matter expertise with the technology, customer development, messaging & positioning, marketing & growth strategy, and scaling expertise needed to help your company reach its next phase of growth.</p>
                                <p>No more spinning your wheels, trying to tackle a major challenge all on your own. No more pulling your hair out over which projects to prioritize, or how to execute. We provide the support, strategic direction, and outside perspective you need to generate outsize results for your company</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-8 my-8 h-50">
                    <div className="container">
                        <ServicesList />
                        <ExpertiseBlock />
                    </div>
                </section>
                <section id="footer" className="py-8 my-8 h-50 bg-white text-black-50">
                        <div className="h-25">
                            <p>Strategically London</p>
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
