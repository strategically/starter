import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Logo from "../components/logo";

class IndexPage extends Component {
    render() {
        // const data = this.props.data

        return (
            <Layout>
                <div id="page_content">
                <Logo />
                <section>
                    <div className="container">
                        <div className="row justify-content-center text-center px-5 py-5">
                            <div id={'content'}>
                                <h2>Thank You</h2>
                                <p>One of our specialists will be in contact within 1 business day. </p>
                                <Link to={'/'} className="btn btn-primary">Return to website</Link>
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
