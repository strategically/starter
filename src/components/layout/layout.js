/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, Link, graphql } from "gatsby"

import './layout.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
          <main>{children}</main>
          <footer className="footer" id="sticky_footer">
              <div className="container">
                  <div className="row">
                      <div className="col-8">
                          <ul className="list-unstyled nav">
                              <li className="nav-item mx-2">© {new Date().getFullYear()}, {` `} <a href="https://strategically.co/">Strategically</a></li>
                              <li className="mx-2">
                                  <Link to="#">
                                  Bitbucket
                                  </Link>
                              </li>
                              <li className="mx-2">
                                  <Link to="#">
                                      Terms
                                  </Link>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
