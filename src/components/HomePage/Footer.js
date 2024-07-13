import React from "react";
import {MDBIcon} from "mdb-react-ui-kit";

export function Footer() {
    return (
        <>
            <section className="info_section layout_padding2-top mt-4">
                <div className="social_container">
                    <div className="social_box">
                        <a href="">
                            <MDBIcon fab icon='facebook-f' />
                        </a>
                        <a href="">
                            <MDBIcon fab icon='twitter' />
                        </a>
                        <a href="">
                            <MDBIcon fab icon='instagram' />
                        </a>
                        <a href="">
                            <MDBIcon fab icon='youtube' />
                        </a>
                    </div>
                </div>
                <div className="info_container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-3">
                                <h6>ABOUT US</h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit
                                    amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
                                </p>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="info_form">
                                    <h5>Newsletter</h5>
                                    <form action="#">
                                        <input type="email" placeholder="Enter your email"/>
                                        <button>Subscribe</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <h6>NEED HELP</h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit
                                    amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
                                </p>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <h6>CONTACT US</h6>
                                <div className="info_link-box">
                                    <a href="">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <span> Gb road 123 london Uk </span>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                        <span>+01 12345678901</span>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        <span> demo@gmail.com</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer section */}
                <footer className="footer_section">
                    <div className="container">
                        <p>
                            &copy; <span id="displayYear"></span> All Rights Reserved By
                            <a href="https://html.design/">Free Html Templates</a>
                        </p>
                    </div>
                </footer>
                {/* footer section */}
            </section>
        </>
    )
}