import React, { Component } from "react"

import 'bootstrap/dist/js/bootstrap.min.js' // Carousel, etc.
import SLayout from "../components/slayout/slayout"
import Logo from "../components/logo";

class ServicesV2Page extends Component {
    render() {
        // const data = this.props.data

        return (
            <SLayout>
                <div id="page_content">
                    <Logo />
                    <header className="container-fluid page-header pb-p-lg pt-p-sm">
                        <div className="row align-items-center min-vh-100">
                            <div className="col col-12 col-md-12 relative">
                                <div className="text-center content pl-3 pr-3 pl-sm-0 pr-sm-0">
                                    <h2 className="display-4 font-weight-bold">
                                        Content your brand will be known for.<br />
                                        <span className="text-red">Results you won't question.</span>
                                    </h2>
                                        <br />
                                    <h3>
                                        <span className="display-5 mb-4 font-weight-lighter">Copy. Design. Video. Optimization. Promotion. Links.
                                        <br />Complete content marketing services under one roof.</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </header>
                    <section className="container-fluid">
                        <div className="row no-gutters">
                            <div className="col col-12 col-sm-12 col-xs-12 col-md-4 relative text-left text-white h-lg-vh">
                                <div className="content p-p-md relative h-100 w-100 bg-red">
                                    <div className="position-relative">
                                        <p className="h4 mb-4 text-white">We take a scientific approach to creating and promoting content that ranks.</p>
                                        <img src="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/watch-video.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-xs-12 col-md-8 relative bg-dark-gray h-lg-vh background-cover">
                                <div className="absolute-center">
                                    <img src="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/services/services-rocket.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="container-fluid">
                        <div className="row align-items-center min-vh-100">
                            <div className="col text-center">
                                <h2 className="display-4 font-weight-bold">
                                    Hundreds of campaigns.
                                    <br />
                                    Thousands of links.
                                    <br />
                                    Millions of views.<br />
                                    <span className="text-secondary">Zero guesswork.</span>
                                </h2>
                            </div>
                        </div>
                    </section>
                    <section className="container-fluid container-fluid-lg services-posts">
                        <article className="row service-post pb-p-xlg pb-5">
                            <div className="col col-12 col-sm-12 col-md-6 offset-md-1">
                                <div className="service-post-image bg-eb">
                                    <div className="align-items-center">
                                        <img src="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/content-strategy.svg" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-4 text-left pt-p-xxlg">
                                <div className="service-post-details">
                                    <p className="font-weight-bold">1.</p>
                                    <p
                                    className="h3 font-weight-bold"> Content<br /> strategy</p>
                                    <hr />
                                    <div className="lead line-height-3 mt-5">
                                        <p className="font-weight-bold small">First the science, then the fun.</p>
                                        <p className="text-light-gray small">
                                            We rip apart your vertical to
                                        find high-value ranking opportunities and popular content that data proves you
                                        can beat.
                                        </p>
                                        <p className="text-light-gray small">
                                            Then we give you a battle plan prioritized by achievable ROI.
                                        </p>
                                        <p className="text-light-gray small">
                                            If it won’t ever rank, it doesn’t get built.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="row service-post post-left pb-p-xlg">
                            <div
                                className="col col-12 col-sm-12 col-md-4 text-left pt-p-xxlg offset-md-1 service-post-details-wrapper">
                                <div className="service-post-details">
                                    <p className="font-weight-bold">2.</p>
                                    <p className="h3 font-weight-bold"> Content<br /> creation</p>
                                    <hr />
                                    <div className="lead line-height-3 mt-5">
                                        <p className="font-weight-bold small">Best in class or
                                        bust.</p>
                                        <p className="text-light-gray small">“Good content” is not good enough.
                                        Flimsy linkbait won’t last.</p>
                                        <p className="text-light-gray small">From writing and
                                        design to infographics and interactives, we build you branded assets that can
                                        outperform the top-ranking content in your niche.</p>
                                        <a href="/" className="small">See our work</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 service-post-image-wrapper">
                                <div className="service-post-image bg-black">
                                    <div className="align-content-center">
                                        <img src="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/infographic-content.svg" className="w-full" alt="" />
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="row service-post pb-p-xlg">
                            <div className="col col-12 col-sm-12 col-md-6 offset-md-1">
                                <div className="service-post-image bg-light-gray">
                                    <div className="align-content-center">
                                        <img
                                        src="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/infographic-promotions.svg"
                                         alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-4 text-left pt-p-xxlg">
                                <div className="service-post-details">
                                    <p className="font-weight-bold">3.</p>
                                    <p className="h3 font-weight-bold"> Content<br /> promotion</p>
                                    <hr />
                                    <div className="lead line-height-3 mt-5">
                                        <p className="font-weight-bold small">Unmissable
                                        coverage.<br /> Untouchable links.</p>
                                        <p className="text-light-gray small">You don’t have to cross your fingers.</p>
                                        <p className="text-light-gray small">We get our clients featured on the world’s biggest and best publications through personal outreach
                                        and professional PR.</p>
                                        <p className="text-light-gray small">And yes, it’s all handled
                                        in-house.</p>
                                        <a href="/" className="small">Link building services</a>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="row service-post post-left ">
                            <div
                                className="col col-12 col-sm-12 col-md-4 text-left pt-p-xxlg offset-md-1 service-post-details-wrapper">
                                <div className="service-post-details">
                                    <p className="font-weight-bold">4.</p>
                                    <p className="h3 font-weight-bold"> SEO<br /> consulting</p>
                                    <hr />
                                    <div className="lead line-height-3 mt-5">
                                        <p className="font-weight-bold small">Maximize your ROI.</p>
                                        <p className="text-light-gray small">Don’t let on-site issues ruin off-site
                                        gains.</p>
                                        <p className="text-light-gray small">We’ll work with you to solve the issues
                                        holding you back and give data-backed SEO recommendations that will actually
                                        move the needle.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 service-post-image-wrapper">
                                <div className="service-post-image bg-bright-blue">
                                    <div className="align-content-center">
                                        <img src="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/infographic-seo.svg"  alt="" className="w-full" />
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
                    <section className="container-fluid container-fluid-xxlg pb-p-lg pt-p-xlg">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-xs-12 text-left pb-p-sm text-center"><h2
                                className="display-5 t-medium">Our clients have been featured and seen on</h2></div>
                        </div>
                        <div className="row row-logos">
                            <div className="col col-6 col-sm-3 text-center"><img alt="" 
                                src="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-cbs.png"
                                srcSet="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-cbs.png 1x, https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-cbs-2x.png 2x" />
                            </div>
                            <div className="col col-6 col-sm-3 text-center"><img alt="" 
                                src="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-gizmodo.png"
                                srcSet="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-gizmodo.png 1x, https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-gizmodo-2x.png 2x" />
                            </div>
                            <div className="col col-6 col-sm-3 text-center"><img alt=""
                                src="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-fastcompany.png"
                                srcSet="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-fastcompany.png 1x, https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-fastcompany-2x.png 2x" />
                            </div>
                            <div className="col col-6 col-sm-3 text-center"><img alt=""
                                src="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-lifehacker.png"
                                srcSet="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-lifehacker.png 1x, https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-lifehacker-2x.png 2x" />
                            </div>
                        </div>
                        <div className="row row-logos">
                            <div className="col col-6 col-sm-3 text-center"><img alt=""
                                src="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-mashable.png"
                                srcSet="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-mashable.png 1x, https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-mashable-2x.png 2x" />
                            </div>
                            <div className="col col-6 col-sm-3 text-center"><img alt="" 
                                src="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-time.png"
                                srcSet="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-time.png 1x, https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-time-2x.png 2x" />
                            </div>
                            <div className="col col-6 col-sm-3 text-center"><img alt="" 
                                src="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-fortune.png"
                                srcSet="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-fortune.png 1x, https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-fortune-2x.png 2x" />
                            </div>
                            <div className="col col-6 col-sm-3 text-center"><img alt="" 
                                src="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-verge.png"
                                srcSet="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-verge.png 1x, https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-verge-2x.png 2x" />
                            </div>
                        </div>
                        <div className="row row-logos">
                            <div className="col col-6 col-sm-3 text-center"><img alt="" 
                                src="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-business-insider.png"
                                srcSet="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-business-insider.png 1x, https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-business-insider-2x.png 2x" />
                            </div>
                            <div className="col col-6 col-sm-3 text-center"><img alt="" 
                                src="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-entrepreneur.png"
                                srcSet="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-entrepreneur.png 1x, https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-entrepreneur-2x.png 2x" />
                            </div>
                            <div className="col col-6 col-sm-3 text-center"><img alt="" 
                                src="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-thrillist.png"
                                srcSet="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-thrillist.png 1x, https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-thrillist-2x.png 2x" />
                            </div>
                            <div className="col col-6 col-sm-3 text-center"><img alt="" 
                                src="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-yahoo.png"
                                srcSet="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-yahoo.png 1x, https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-yahoo-2x.png 2x" />
                            </div>
                        </div>
                        <div className="row row-logos">
                            <div className="col col-6 col-sm-3 text-center"><img alt="" 
                                src="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-fox.png"
                                srcSet="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-fox.png 1x, https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-fox-2x.png 2x" />
                            </div>
                            <div className="col col-6 col-sm-3 text-center"><img alt=""
                                src="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-huffpost.png"
                                srcSet="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-huffpost.png 1x, https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-huffpost-2x.png 2x" />
                            </div>
                            <div className="col col-6 col-sm-3 text-center"><img alt=""
                                src="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-marketwatch.png"
                                srcSet="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-marketwatch.png 1x, https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-marketwatch-2x.png 2x" />
                            </div>
                            <div className="col col-6 col-sm-3 text-center"><img alt=""
                                src="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-refinery29.png"
                                srcSet="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-refinery29.png 1x, https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/logos/logo-refinery29-2x.png 2x" />
                            </div>
                        </div>
                    </section>
                    <p>Clients section is over. Next carousel.</p>
                    <div className="col col-12 col-sm-12 col-xs-12 col-md-6  text-center pb-p-lg pt-p-lg">
                        <div className="carousel" >
                            <div className="carousel-inner">
                            <div data-slide="1" className="carousel-item active"><h2
                                className="display-5 t-medium line-height-1-1 mb-5"><span className="text-light-gray">“Month over month,</span> we
                                continue to see record-breaking traffic growth. <span className="text-light-gray">Siege Media are creatives at heart. They’re passionate about the work they’re doing, and they deliver measurable results.”</span>
                            </h2><p className="mb-3">Reuben Yonatan, Founder, GetVoIP</p></div>
                            <div data-slide="2" className="carousel-item"><h2
                                className="display-5 t-medium line-height-1-1 mb-5"><span className="text-light-gray">“I recommend Ross and the team at Siege Media and happily refer colleagues to his SEO and content marketing services knowing they will be in good hands with someone who gets it!</span> Ross
                                has been a great SEO thought partner for our business.”</h2><p className="mb-3">Patrick
                                Gavin, CEO at HigherEducation.com</p></div>
                            <div data-slide="3" className="carousel-item"><h2
                                className="display-5 t-medium line-height-1-1 mb-5"><span className="text-light-gray">“We were looking for a high quality partner to help with off-page optimization, and multiple people kept pointing us to Siege Media.</span> Working
                                with Ross and the Siege Media team has been fantastic.<span className="text-light-gray"> Super sharp people and fantastic to work with!”</span>
                            </h2><p className="mb-3">Tommy Griffith, SEO at AirBnB</p></div>
                            <div data-slide="4" className="carousel-item"><h2
                                className="display-5 t-medium line-height-1-1 mb-5"><span className="text-light-gray">“I’ve been impressed with Siege Media every time I’ve worked with them.</span> I
                                know that I can always trust their advice because they have research behind it and years
                                of industry experience.”</h2><p className="mb-3">Connor Hitchcock, Digital Marketing
                                Specialist, One Click</p></div>
                            </div>
                        </div>
                        <nav className="dot-nav">
                            <a data-slide-link="1" href="#" className="active"></a>
                            <a data-slide-link="2" href="#"></a>
                            <a data-slide-link="3" href="#"></a>
                            <a data-slide-link="4" href="#"></a>
                        </nav>
                    </div>
                    <footer role="contentinfo" className="page-footer bg-black text-white pt-p-lg pb-p-sm">
                        <div className="container-fluid pb-p-sm">
                            <div className="row justify-content-md-center">
                                <div className="col col-md-10 text-center pb-p-md"><h2
                                    className="display-3 mb-p-sm text-white create-something">Let’s create something amazing
                                    together</h2> <a href="https://www.siegemedia.com/contact">
                                    <img alt="" 
                                    src="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/icons/right-arrow.svg" />
                                </a></div>
                            </div>
                        </div>
                        <div className="container-fluid brd-t">
                            <div className="row footer-links pl-p-sm pr-p-sm">
                                <div className="col col-12 col-lg-2 pt-p-sm">
                                    <a href="https://www.siegemedia.com">
                                        <img alt="" 
                                    src="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/reversedAltWhite.png"
                                    srcSet="https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/reversedAltWhite.png 1x, https://www.siegemedia.com/wp-content/themes/SiegeMedia2017/assets/imgs/./reversedAltWhite-2x.png 2x" />
                                </a>
                                </div>
                                <div className="col col-12 col-lg-2 pt-p-sm"><p>GET AROUND</p>
                                    <div className="footer-nav links-list">
                                        <ul id="menu-footer-menu" className="menu">
                                            <li id="menu-item-10147"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10147">
                                                <a href="https://www.siegemedia.com/about">About</a></li>
                                            <li id="menu-item-15123"
                                                className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-15123">
                                                <a href="https://www.siegemedia.com/services/content-marketing">Services</a>
                                            </li>
                                            <li id="menu-item-6815"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6815">
                                                <a href="/work">Work</a></li>
                                            <li id="menu-item-45"
                                                className="menu-item menu-item-type-post_type menu-item-object-page current_page_parent menu-item-45">
                                                <a href="https://www.siegemedia.com/blog">Blog</a></li>
                                            <li id="menu-item-5891"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5891">
                                                <a href="https://www.siegemedia.com/careers">Careers</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col col-12 col-lg-2 pt-p-sm"><p>SERVICES</p>
                                    <div className="footer-nav links-list">
                                        <ul id="menu-footer-services" className="menu">
                                            <li id="menu-item-17243"
                                                className="menu-item menu-item-type-post_type menu-item-object-our_services current-menu-item menu-item-17243">
                                                <a href="https://www.siegemedia.com/services/content-marketing">Content
                                                    Marketing</a></li>
                                            <li id="menu-item-17244"
                                                className="menu-item menu-item-type-post_type menu-item-object-our_services menu-item-17244">
                                                <a href="https://www.siegemedia.com/services/link-building">Link
                                                    Building</a></li>
                                            <li id="menu-item-17246"
                                                className="menu-item menu-item-type-post_type menu-item-object-our_services menu-item-17246">
                                                <a href="https://www.siegemedia.com/services/seo">SEO Services</a></li>
                                            <li id="menu-item-17252"
                                                className="menu-item menu-item-type-post_type menu-item-object-our_services menu-item-17252">
                                                <a href="https://www.siegemedia.com/services/san-diego-video-production">Video
                                                    Production</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col col-12 col-lg-2 pt-p-sm"><p>SOCIAL</p>
                                    <div className="footer-nav links-list social-links">
                                        <ul id="menu-footer-social" className="menu">
                                            <li id="menu-item-12289"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-12289">
                                                <a href="https://www.youtube.com/c/SiegeMedia%20">YouTube</a></li>
                                            <li id="menu-item-10300"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-10300">
                                                <a href="https://twitter.com/siegemedia">Twitter</a></li>
                                            <li id="menu-item-11483"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11483">
                                                <a href="https://www.instagram.com/siege_media/">Instagram</a></li>
                                            <li id="menu-item-11484"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11484">
                                                <a href="https://dribbble.com/siegemedia">Dribbble</a></li>
                                            <li id="menu-item-10299"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-10299">
                                                <a href="https://www.linkedin.com/company/siege-media">LinkedIn</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col col-12 col-lg-3 pt-p-sm">
                                    <div className="footer-contact-wrapper">
                                        <p>
                                            <a
                                        href="https://www.siegemedia.com/contact">CONTACT</a></p><a
                                        href="tel:+16195014256"> <span>(619) 501-4256</span> </a>
                                        <nav className="links-list footer-mailto"><a
                                            href="mailto:hello@siegemedia.com">hello@siegemedia.com</a></nav>
                                        <span>624 Broadway #302, <span className="text-nowrap">San Diego, CA</span></span><br />
                                            <span>1023 Springdale Rd #10E,
                                                <span className="text-nowrap">Austin, TX</span>
                                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </SLayout>
        )
    }
}

export default ServicesV2Page
