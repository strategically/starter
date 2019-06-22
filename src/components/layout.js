/**
This is default layout component of the site 
which contains a sticky footer
*/

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import "../styles/layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query MySiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div id="layout-container">
            <div id="layout-main" className="common-width-style">
                <Header siteTitle={ data.site.siteMetadata.title } />
                { children }
            </div>
            <div id="layout-footer">
                <Footer />
            </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
