import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.css";
import "../styles/common.css";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`strategically`, `seo`, `digital`]} />
    <div>
        <main id="index-main">
            <p id="para1"> 
                <span id="line1">Hi, I'm Purple Page.</span><br/>
                <span id="line2">A simple Gatsby starter.</span>
            </p>
            <div id="para2">
                A simple home page and contact page built with Gatsby.js, Bootstrap 4, Wordpress for a headless CMS and deployed to Netlify.
            </div>
            <p id="para3">
                <Link className="btn btn-primary" to="/contact">
                    BOOK YOUR STRATEGY CALL
                </Link>
            </p>
        </main>
    </div>
  </Layout>
)

export default IndexPage