import React, { Component } from "react"

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
                <section id="about_us">
                    <div className="container">
                        <div className="row justify-content-center my-5">
                            <div className="col-10">
                                <p>Strategically was started for two reasons: to provide clear data backed digital strategies and to help companies build effective technology which enables them to scale.</p>
                                <p>Our small team comes from a range of backgrounds — startups, management consultancies, agencies, data science firms. Many of us are self-taught engineers and designers. We value craft and skill above all, and learn from each other.</p>
                                <p>What’s radically different? We actually like our clients. It helps that we are choosy about the product work we take on in the first place. The kind that are aligned with our values and really ship, every time.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="service_blocks">
                    <div id={'expandable_blocks'}>
                        <div className="container">
                            <ServicesList />
                        </div>
                    </div>
                </section>
                <section id="expertise">
                    <ExpertiseBlock />
                </section>
                    <div id={'footer'}>
                        <p>Here be array of links</p>
                    </div>
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
