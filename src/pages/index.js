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
                <span id="line1">We create content that ranks and</span><br/>
                <span id="line2">help you grow.</span>
            </p>
            <p id="para2">
                Our content marketing services are SEO-focused, <br />customer-driven and 
                proven to deliver. <br />We'll get you the traffic, links and rankings that
                drive big growth.
            </p>
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