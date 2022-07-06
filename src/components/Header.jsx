import { Link } from "react-router-dom";

const Hedear = () => {
    return (
        <header className="header header-8">
            <div className="header-top">
                <div className="container">
                    <div className="header-left">
                        <div className="header-dropdown">
                            <Link to="#">USD</Link>
                            <div className="header-menu">
                                <ul>
                                    <li><Link to="#">Eur</Link></li>
                                    <li><Link to="#">Usd</Link></li>
                                </ul>
                            </div>{/* End .header-menu  */}
                        </div>{/* End .header-dropdown  */}

                        <div className="header-dropdown">
                            <Link to="#">Eng</Link>
                            <div className="header-menu">
                                <ul>
                                    <li><Link to="#">English</Link></li>
                                    <li><Link to="#">French</Link></li>
                                    <li><Link to="#">Spanish</Link></li>
                                </ul>
                            </div>{/* End .header-menu  */}
                        </div>{/* End .header-dropdown  */}
                    </div>{/* End .header-left  */}

                    <div className="header-right">
                        <ul className="top-menu">
                            <li>
                                <Link to="#">Links</Link>
                                <ul>
                                    <li><Link to="tel:#"><i className="icon-phone"></i>Call: +0123 456 789</Link></li>
                                    <li><Link to="wishlist.html"><i className="icon-heart-o"></i>My Wishlist . <span>(3)</span></Link></li>
                                    <li><Link to="about.html">About Us</Link></li>
                                    <li><Link to="contact.html">Contact Us</Link></li>
                                    <li><Link to="#signin-modal" data-toggle="modal"><i className="icon-user"></i>Login</Link></li>
                                </ul>
                            </li>
                        </ul>{/* End .top-menu  */}
                    </div>{/* End .header-right  */}
                </div>{/* End .container  */}
            </div>{/* End .header-top  */}

            <div className="header-middle sticky-header">
                <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler">
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars"></i>
                        </button>

                        <Link to="index.html" className="logo">
                            <img src="assets/images/demos/demo-10/logo.png" alt="Molla Logo" width="105" height="25" />
                        </Link>
                    </div>{/* End .header-left  */}

                    <div className="header-right">
                        <nav className="main-nav">
                            <ul className="menu sf-arrows">
                                <li className="megamenu-container active">
                                    <Link to="/" className="sf-with-ul">Home</Link>
                                </li>

                                <li className="">
                                    <Link to="/productlist" className="sf-with-ul">Products</Link>

                                </li>
                                
                                <li>
                                    <Link to="/blogpostslist" className="sf-with-ul">Blog</Link>

                                </li>
                                
                            </ul>{/* End .menu  */}
                        </nav>{/* End .main-nav  */}

                        <div className="header-search">
                            <Link to="#" className="search-toggle" role="button"><i className="icon-search"></i></Link>
                            <form action="#" method="get">
                                <div className="header-search-wrapper">
                                    <label htmlFor="q" className="sr-only">Search</label>
                                    <input type="search" className="form-control" name="q" id="q" placeholder="Search in..." required />
                                </div>{/* End .header-search-wrapper  */}
                            </form>
                        </div>{/* End .header-search  */}

                        <div className="dropdown cart-dropdown">
                            <Link to="/cart" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                <i className="icon-shopping-cart"></i>
                                <span className="cart-count">2</span>
                            </Link>

                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-cart-products">
                                    <div className="product">
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <Link to="product.html">Beige knitted elastic runner shoes</Link>
                                            </h4>

                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">1</span>
                                                x $84.00
                                            </span>
                                        </div>{/* End .product-cart-details  */}

                                        <figure className="product-image-container">
                                            <Link to="product.html" className="product-image">
                                                <img src="assets/images/products/cart/product-1.jpg" alt="product" />
                                            </Link>
                                        </figure>
                                        <Link to="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></Link>
                                    </div>{/* End .product  */}

                                    <div className="product">
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <Link to="product.html">Blue utility pinafore denim dress</Link>
                                            </h4>

                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">1</span>
                                                x $76.00
                                            </span>
                                        </div>{/* End .product-cart-details  */}

                                        <figure className="product-image-container">
                                            <Link to="product.html" className="product-image">
                                                <img src="assets/images/products/cart/product-2.jpg" alt="product" />
                                            </Link>
                                        </figure>
                                        <Link to="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></Link>
                                    </div>{/* End .product  */}
                                </div>{/* End .cart-product  */}

                                <div className="dropdown-cart-total">
                                    <span>Total</span>

                                    <span className="cart-total-price">$160.00</span>
                                </div>{/* End .dropdown-cart-total  */}

                                <div className="dropdown-cart-action">
                                    <Link to="cart.html" className="btn btn-primary">View Cart</Link>
                                    <Link to="checkout.html" className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right"></i></Link>
                                </div>{/* End .dropdown-cart-total  */}
                            </div>{/* End .dropdown-menu  */}
                        </div>{/* End .cart-dropdown  */}
                    </div>{/* End .header-right  */}
                </div>{/* End .container  */}
            </div>{/* End .header-middle  */}
        </header>
    );
}

export default Hedear;