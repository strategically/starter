import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import "../styles/thank-you.css";
import "../styles/common.css";

const ThankYouPage = ({ data }) => (
    <Layout>
        <SEO title="Thank You" keywords={[`strategically`, `seo`, `digital`]} />
        <section>
            <div className="container">
                <div className="row justify-content-center text-center px-5 py-5">
                    <div id="thank-you-content">
                        <h2 className="text-white">Thank You</h2>
                        <p id="para">
                            One of our specialists will be in contact
                            within 1 business day. 
                        </p>
                        <Link to={'/'} className="btn btn-primary">Return to website</Link>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)

export default ThankYouPage

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
