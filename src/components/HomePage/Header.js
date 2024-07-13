import {Link} from "react-router-dom";
import React from "react";
import img1 from '../../static/images/banner/c4.jpg'
import img2 from '../../static/images/banner/c5.jpg'
import img3 from '../../static/images/banner/c6.jpg'

export const Header = ({onLogout}) => {
    const handleLogout = async () => {
        onLogout();
    };
    return (
        <>
            <div className="hero_area">
                <header className="header_section">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <Link className="navbar-brand" to="/">
                              <span style={{color: '#EC4899', fontSize: '250%'}}>
                                CHOPPII
                              </span>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className=""></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav  ">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span
                                        className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home/latestProduct">
                                        Shop
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home/whyUs">
                                        Why Us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home/testimonial">
                                        Testimonial
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home/contactUs">Contact Us</Link>
                                </li>
                            </ul>
                            <div className="user_option">
                                <Link to="/login">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                    <span>
                                        Login
                                    </span>
                                </Link>
                                <button className="btn btn-link mr-2" onClick={handleLogout}>
                                    <i className="fa fa-user mr-1" aria-hidden="true"></i>
                                    <span>Logout</span>
                                </button>
                                <Link to="/cart">
                                    <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                </Link>
                                <form className="form-inline ">
                                    <button className="btn nav_search-btn" type="submit">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </header>


                <section className="slider_section">
                    <div className="slider_container">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="detail-box">
                                                    <h1>
                                                        Welcome To
                                                        CHOPPII Shop
                                                    </h1>
                                                    <p>
                                                        <p>
                                                            At CHOPPI SHOP, we believe in the magic of gift-giving. Whether you're searching for the perfect present for a loved one or treating yourself to something special, we've got you covered. Our curated collection features a diverse range of handpicked items, from stylish accessories to delightful trinkets.
                                                        </p>
                                                        <p>
                                                            What sets us apart? It's our commitment to quality, creativity, and customer satisfaction. Each product in our store is carefully selected for its craftsmanship, uniqueness, and appeal. We strive to bring you not just products, but experiences that make every moment memorable.
                                                        </p>
                                                    </p>
                                                    <a href="">
                                                        Contact Us
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-5 ">
                                                <div className="img-box">
                                                    <img src={img1} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="detail-box">
                                                    <h1>
                                                        Welcome To
                                                        CHOPPII Shop
                                                    </h1>
                                                    <p>
                                                        <p>
                                                            Explore our website to discover a treasure trove of
                                                            one-of-a-kind finds. Whether you're into fashion, home
                                                            decor, or lifestyle accessories, there's something here for
                                                            everyone. From trendy pieces to timeless classics, we've got
                                                            the perfect match for your style and personality.
                                                        </p>
                                                        <p>
                                                            But CHOPPI SHOP is more than just a place to shop. It's a
                                                            community where creativity thrives and connections are made.
                                                            We're here to inspire you, uplift your spirits, and add a
                                                            touch of joy to your everyday life. Join us on this journey
                                                            of exploration and celebration!
                                                        </p>
                                                    </p>
                                                    <a href="">
                                                    Contact Us
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-5 ">
                                                <div className="img-box">
                                                    <img src={img2} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="detail-box">
                                                    <h1>
                                                        Welcome To
                                                        CHOPPII Shop
                                                    </h1>
                                                    <p>
                                                        <p>
                                                            Dive into a world of endless possibilities with our diverse range of products. From trendy fashion pieces to timeless classics, we've got everything you need to express your unique style and personality.
                                                        </p>
                                                        <p>
                                                            Join our community of passionate shoppers and discover new favorites with each visit. Let's embark on this journey together and create lasting memories, one gift at a time.
                                                        </p>
                                                    </p>
                                                    <a href="">
                                                        Contact Us
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-5 ">
                                                <div className="img-box">
                                                    <img src={img3} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel_btn-box">
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                                   data-slide="prev">
                                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <img src="images/line.png" alt=""/>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                                   data-slide="next">
                                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}