import React from "react";

export function ContactUs() {
    return (
        <>
            <section className="contact_section">
                <div className="container px-0">
                    <div className="heading_container">
                        <h2>Contact Us</h2>
                    </div>
                </div>
                <div className="container container-bg">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 px-0">
                            <div className="map_container">
                                <div className="map-responsive">
                                    <iframe
                                        src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Eiffel+Tower+Paris+France"
                                        width="600" height="300" frameBorder="0"
                                        style={{border: '0', width: '100%', height: '100%'}} allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-5 px-0">
                            <form action="#">
                                <div>
                                    <input type="text" placeholder="Name"/>
                                </div>
                                <div>
                                    <input type="email" placeholder="Email"/>
                                </div>
                                <div>
                                    <input type="text" placeholder="Phone"/>
                                </div>
                                <div>
                                    <input type="text" className="message-box" placeholder="Message"/>
                                </div>
                                <div className="d-flex">
                                    <button>
                                        SEND
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}