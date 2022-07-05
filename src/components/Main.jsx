import SomeBlogPosts from './SomeBlogPosts';
import ProductList from './ProductList';

const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="intro-slider-container slider-container-ratio mb-2">
                    <div className="intro-slider owl-carousel owl-simple owl-light owl-nav-inside" data-toggle="owl" data-owl-options='{"nav": false}'>
                        <div className="intro-slide">
                            <figure className="slide-image">
                                <picture>
                                    <source media="(max-width: 480px)" srcSet="assets/images/demos/demo-10/slider/slide-1-480w.jpg" />
                                    <img src="assets/images/demos/demo-10/slider/slide-1.jpg" alt="Image Desc" />
                                </picture>
                            </figure>{/* End .slide-image  */}

                            <div className="intro-content">
                                <h3 className="intro-subtitle">Deals and Promotions</h3>{/* End .h3 intro-subtitle  */}
                                <h1 className="intro-title text-white">Sneakers & Athletic Shoes</h1>{/* End .intro-title  */}

                                <div className="intro-price text-white">from $9.99</div>{/* End .intro-price  */}

                                <a href="category.html" className="btn btn-white-primary btn-round">
                                    <span>SHOP NOW</span>
                                    <i className="icon-long-arrow-right"></i>
                                </a>
                            </div>{/* End .intro-content  */}
                        </div>{/* End .intro-slide  */}

                        <div className="intro-slide">
                            <figure className="slide-image">
                                <picture>
                                    <source media="(max-width: 480px)" srcSet="assets/images/demos/demo-10/slider/slide-2-480w.jpg" />
                                    <img src="assets/images/demos/demo-10/slider/slide-2.jpg" alt="Image Desc" />
                                </picture>
                            </figure>{/* End .slide-image  */}

                            <div className="intro-content">
                                <h3 className="intro-subtitle">Trending Now</h3>{/* End .h3 intro-subtitle  */}
                                <h1 className="intro-title text-white">This Week's Most Wanted</h1>{/* End .intro-title  */}

                                <div className="intro-price text-white">from $49.99</div>{/* End .intro-price  */}

                                <a href="category.html" className="btn btn-white-primary btn-round">
                                    <span>SHOP NOW</span>
                                    <i className="icon-long-arrow-right"></i>
                                </a>
                            </div>{/* End .intro-content  */}
                        </div>{/* End .intro-slide  */}

                        <div className="intro-slide">
                            <figure className="slide-image">
                                <picture>
                                    <source media="(max-width: 480px)" srcSet="assets/images/demos/demo-10/slider/slide-3-480w.jpg" />
                                    <img src="assets/images/demos/demo-10/slider/slide-3.jpg" alt="Image Desc" />
                                </picture>
                            </figure>{/* End .slide-image  */}

                            <div className="intro-content">
                                <h3 className="intro-subtitle text-white">Deals and Promotions</h3>{/* End .h3 intro-subtitle  */}
                                <h1 className="intro-title text-white">Can’t-miss Clearance:</h1>{/* End .intro-title  */}

                                <div className="intro-price text-white">starting at 60% off</div>{/* End .intro-price  */}

                                <a href="category.html" className="btn btn-white-primary btn-round">
                                    <span>SHOP NOW</span>
                                    <i className="icon-long-arrow-right"></i>
                                </a>
                            </div>{/* End .intro-content  */}
                        </div>{/* End .intro-slide  */}
                    </div>{/* End .intro-slider owl-carousel owl-simple  */}
                    <span className="slider-loader"></span>{/* End .slider-loader  */}
                </div>{/* End .intro-slider-container  */}
            </div>{/* End .container  */}

            <div className="banner-group">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="banner banner-overlay">
                                        <a href="#">
                                            <img src="assets/images/demos/demo-10/banners/banner-1.jpg" alt="Banner" />
                                        </a>

                                        <div className="banner-content banner-content-right">
                                            <h4 className="banner-subtitle"><a href="#">New Arrivals</a></h4>{/* End .banner-subtitle  */}
                                            <h3 className="banner-title text-white"><a href="#">Sneakers & <br />Athletic Shoes</a></h3>{/* End .banner-title  */}
                                            <a href="#" className="btn btn-outline-white banner-link btn-round">Discover Now</a>
                                        </div>{/* End .banner-content  */}
                                    </div>{/* End .banner  */}
                                </div>{/* End .col-sm-6  */}

                                <div className="col-sm-6">
                                    <div className="banner banner-overlay banner-overlay-light">
                                        <a href="#">
                                            <img src="assets/images/demos/demo-10/banners/banner-2.jpg" alt="Banner" />
                                        </a>

                                        <div className="banner-content">
                                            <h4 className="banner-subtitle bright-black"><a href="#">Clearance</a></h4>{/* End .banner-subtitle  */}
                                            <h3 className="banner-title"><a href="#">Sandals</a></h3>{/* End .banner-title  */}
                                            <div className="banner-text"><a href="#">up to 70% off</a></div>{/* End .banner-text  */}
                                            <a href="#" className="btn btn-outline-gray banner-link btn-round">Shop Now</a>
                                        </div>{/* End .banner-content  */}
                                    </div>{/* End .banner  */}
                                </div>{/* End .col-sm-6  */}
                            </div>{/* End .row  */}

                            <div className="banner banner-large banner-overlay d-none d-sm-block">
                                <a href="#">
                                    <img src="assets/images/demos/demo-10/banners/banner-3.jpg" alt="Banner" />
                                </a>

                                <div className="banner-content">
                                    <h4 className="banner-subtitle text-white"><a href="#">On Sale</a></h4>{/* End .banner-subtitle  */}
                                    <h3 className="banner-title text-white"><a href="#">Slip-On Loafers</a></h3>{/* End .banner-title  */}
                                    <div className="banner-text text-white"><a href="#">up to 30% off</a></div>{/* End .banner-text  */}
                                    <a href="#" className="btn btn-outline-white banner-link btn-round">Shop Now</a>
                                </div>{/* End .banner-content  */}
                            </div>{/* End .banner  */}
                        </div>{/* End .col-lg-8  */}

                        <div className="col-lg-4 d-sm-none d-lg-block">
                            <div className="banner banner-middle banner-overlay">
                                <a href="#">
                                    <img src="assets/images/demos/demo-10/banners/banner-4.jpg" alt="Banner" />
                                </a>

                                <div className="banner-content banner-content-bottom">
                                    <h4 className="banner-subtitle text-white"><a href="#">On Sale</a></h4>{/* End .banner-subtitle  */}
                                    <h3 className="banner-title text-white"><a href="#">Amazing <br />Lace Up Boots</a></h3>{/* End .banner-title  */}
                                    <div className="banner-text text-white"><a href="#">from $39.00</a></div>{/* End .banner-text  */}
                                    <a href="#" className="btn btn-outline-white banner-link btn-round">Discover Now</a>
                                </div>{/* End .banner-content  */}
                            </div>{/* End .banner  */}
                        </div>{/* End .col-lg-4  */}
                    </div>{/* End .row  */}
                </div>{/* End .container  */}
            </div>{/* End .banner-group  */}

            <div className="icon-boxes-container icon-boxes-separator bg-transparent">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon text-primary">
                                    <i className="icon-rocket"></i>
                                </span>

                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Free Shipping</h3>{/* End .icon-box-title  */}
                                    <p>Orders $50 or more</p>
                                </div>{/* End .icon-box-content  */}
                            </div>{/* End .icon-box  */}
                        </div>{/* End .col-sm-6 col-lg-3  */}

                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon text-primary">
                                    <i className="icon-rotate-left"></i>
                                </span>

                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Free Returns</h3>{/* End .icon-box-title  */}
                                    <p>Within 30 days</p>
                                </div>{/* End .icon-box-content  */}
                            </div>{/* End .icon-box  */}
                        </div>{/* End .col-sm-6 col-lg-3  */}

                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon text-primary">
                                    <i className="icon-info-circle"></i>
                                </span>

                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Get 20% Off 1 Item</h3>{/* End .icon-box-title  */}
                                    <p>when you sign up</p>
                                </div>{/* End .icon-box-content  */}
                            </div>{/* End .icon-box  */}
                        </div>{/* End .col-sm-6 col-lg-3  */}

                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon text-primary">
                                    <i className="icon-life-ring"></i>
                                </span>

                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">We Support</h3>{/* End .icon-box-title  */}
                                    <p>24/7 amazing services</p>
                                </div>{/* End .icon-box-content  */}
                            </div>{/* End .icon-box  */}
                        </div>{/* End .col-sm-6 col-lg-3  */}
                    </div>{/* End .row  */}
                </div>{/* End .container  */}
            </div>{/* End .icon-boxes-container  */}

            <div className="bg-light pt-5 pb-10 mb-3">
                <div className="container">
                    <div className="heading heading-center mb-3">
                        <h2 className="title-lg">New Arrivals</h2>{/* End .title  */}

                        <ul className="nav nav-pills justify-content-center" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="new-all-link" data-toggle="tab" href="#new-all-tab" role="tab" aria-controls="new-all-tab" aria-selected="true">All</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="new-women-link" data-toggle="tab" href="#new-women-tab" role="tab" aria-controls="new-women-tab" aria-selected="false">Women's</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="new-men-link" data-toggle="tab" href="#new-men-tab" role="tab" aria-controls="new-men-tab" aria-selected="false">Men's</a>
                            </li>
                        </ul>
                    </div>{/* End .heading  */}

                    <div className="tab-content tab-content-carousel">
                        <div className="tab-pane tab-pane-shadow p-0 fade show active" id="new-all-tab" role="tabpanel" aria-labelledby="new-all-link">
                            <div className="owl-carousel owl-simple carousel-equal-height" data-toggle="owl"
                                data-owl-options='{
                                    "nav": false, 
                                    "dots": true,
                                    "margin": 0,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":2
                                        },
                                        "480": {
                                            "items":2
                                        },
                                        "768": {
                                            "items":3
                                        },
                                        "992": {
                                            "items":4
                                        },
                                        "1200": {
                                            "items":4,
                                            "nav": true
                                        }
                                    }
                                }'>
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-primary">Sale</span>
                                        <span className="product-label label-sale">30% off</span>
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-10/products/product-1.jpg" alt="Product image" className="product-image" />
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>{/* End .product-action-vertical  */}
                                    </figure>{/* End .product-media  */}

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Men’s</a>,
                                            <a href="#">Boots</a>
                                        </div>{/* End .product-cat  */}
                                        <h3 className="product-title"><a href="product.html">The North Face Back-To-Berkeley Remtlz Mesh</a></h3>{/* End .product-title  */}
                                        <div className="product-price">
                                            <span className="new-price">Now $50.00</span>
                                            <span className="old-price">$84.00</span>
                                        </div>{/* End .product-price  */}
                                    </div>{/* End .product-body  */}

                                    <div className="product-footer">
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val"  ></div>{/* End .ratings-val  */}
                                            </div>{/* End .ratings  */}
                                            <span className="ratings-text">( 4 Reviews )</span>
                                        </div>{/* End .rating-container  */}

                                        <div className="product-nav product-nav-dots">
                                            <a href="#" className="active"  ><span className="sr-only">Color name</span></a>
                                            <a href="#"  ><span className="sr-only">Color name</span></a>
                                        </div>{/* End .product-nav  */}

                                        <div className="product-action">
                                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                        </div>{/* End .product-action  */}
                                    </div>{/* End .product-footer  */}
                                </div>{/* End .product  */}

                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-10/products/product-2.jpg" alt="Product image" className="product-image" />
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>{/* End .product-action-vertical  */}
                                    </figure>{/* End .product-media  */}

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Men’s</a>,
                                            <a href="#">Sneakers</a>
                                        </div>{/* End .product-cat  */}
                                        <h3 className="product-title"><a href="product.html">Nike Air Zoom Wildhorse 4</a></h3>{/* End .product-title  */}
                                        <div className="product-price">
                                            $77.99
                                        </div>{/* End .product-price  */}
                                    </div>{/* End .product-body  */}

                                    <div className="product-footer">
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val"  ></div>{/* End .ratings-val  */}
                                            </div>{/* End .ratings  */}
                                            <span className="ratings-text">( 0 Reviews )</span>
                                        </div>{/* End .rating-container  */}

                                        <div className="product-action">
                                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                        </div>{/* End .product-action  */}
                                    </div>{/* End .product-footer  */}
                                </div>{/* End .product  */}

                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-primary">New</span>
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-10/products/product-3.jpg" alt="Product image" className="product-image" />
                                            <img src="assets/images/demos/demo-10/products/product-3-2.jpg" alt="Product image" className="product-image-hover" />
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>{/* End .product-action-vertical  */}
                                    </figure>{/* End .product-media  */}

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Women’s</a>,
                                            <a href="#">Sandals</a>
                                        </div>{/* End .product-cat  */}
                                        <h3 className="product-title"><a href="product.html">Eric Michael Joan</a></h3>{/* End .product-title  */}
                                        <div className="product-price">
                                            $35.99
                                        </div>{/* End .product-price  */}
                                    </div>{/* End .product-body  */}

                                    <div className="product-footer">
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val"  ></div>{/* End .ratings-val  */}
                                            </div>{/* End .ratings  */}
                                            <span className="ratings-text">( 2 Reviews )</span>
                                        </div>{/* End .rating-container  */}

                                        <div className="product-nav product-nav-dots">
                                            <a href="#" className="active"  ><span className="sr-only">Color name</span></a>
                                            <a href="#"  ><span className="sr-only">Color name</span></a>
                                        </div>{/* End .product-nav  */}

                                        <div className="product-action">
                                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                        </div>{/* End .product-action  */}
                                    </div>{/* End .product-footer  */}
                                </div>{/* End .product  */}

                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-primary">Out Of Stock</span>
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-10/products/product-4.jpg" alt="Product image" className="product-image" />
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>{/* End .product-action-vertical  */}
                                    </figure>{/* End .product-media  */}

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Women’s</a>,
                                            <a href="#">Sneakers</a>
                                        </div>{/* End .product-cat  */}
                                        <h3 className="product-title"><a href="product.html">Nike Air Max Motion LW Racer</a></h3>{/* End .product-title  */}
                                        <div className="product-price">
                                            <span className="out-price">$54.99</span>
                                        </div>{/* End .product-price  */}
                                    </div>{/* End .product-body  */}

                                    <div className="product-footer">
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val"  ></div>{/* End .ratings-val  */}
                                            </div>{/* End .ratings  */}
                                            <span className="ratings-text">( 3 Reviews )</span>
                                        </div>{/* End .rating-container  */}

                                        <div className="product-action">
                                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                        </div>{/* End .product-action  */}
                                    </div>{/* End .product-footer  */}
                                </div>{/* End .product  */}

                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-primary">Sale</span>
                                        <span className="product-label label-sale">40% off</span>
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-10/products/product-5.jpg" alt="Product image" className="product-image" />
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>{/* End .product-action-vertical  */}
                                    </figure>{/* End .product-media  */}

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Men’s</a>,
                                            <a href="#">Sneakers</a>
                                        </div>{/* End .product-cat  */}
                                        <h3 className="product-title"><a href="product.html">ASICS Tiger Gel-Lyte MT</a></h3>{/* End .product-title  */}
                                        <div className="product-price">
                                            <span className="new-price">Now $77.99</span>
                                            <span className="old-price">$130.00</span>
                                        </div>{/* End .product-price  */}
                                    </div>{/* End .product-body  */}

                                    <div className="product-footer">
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val"  ></div>{/* End .ratings-val  */}
                                            </div>{/* End .ratings  */}
                                            <span className="ratings-text">( 0 Reviews )</span>
                                        </div>{/* End .rating-container  */}

                                        <div className="product-action">
                                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                        </div>{/* End .product-action  */}
                                    </div>{/* End .product-footer  */}
                                </div>{/* End .product  */}
                            </div>{/* End .owl-carousel  */}
                        </div>{/* .End .tab-pane  */}
                        <div className="tab-pane tab-pane-shadow p-0 fade" id="new-women-tab" role="tabpanel" aria-labelledby="new-women-link">
                            <div className="owl-carousel owl-simple carousel-equal-height" data-toggle="owl"
                                data-owl-options='{
                                    "nav": false, 
                                    "dots": true,
                                    "margin": 0,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":2
                                        },
                                        "480": {
                                            "items":2
                                        },
                                        "768": {
                                            "items":3
                                        },
                                        "992": {
                                            "items":4
                                        },
                                        "1200": {
                                            "items":4,
                                            "nav": true
                                        }
                                    }
                                }'>
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-primary">Out Of Stock</span>
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-10/products/product-4.jpg" alt="Product image" className="product-image" />
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>{/* End .product-action-vertical  */}
                                    </figure>{/* End .product-media  */}

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Women’s</a>,
                                            <a href="#">Sneakers</a>
                                        </div>{/* End .product-cat  */}
                                        <h3 className="product-title"><a href="product.html">Nike Air Max Motion LW Racer</a></h3>{/* End .product-title  */}
                                        <div className="product-price">
                                            <span className="out-price">$54.99</span>
                                        </div>{/* End .product-price  */}
                                    </div>{/* End .product-body  */}

                                    <div className="product-footer">
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val"  ></div>{/* End .ratings-val  */}
                                            </div>{/* End .ratings  */}
                                            <span className="ratings-text">( 3 Reviews )</span>
                                        </div>{/* End .rating-container  */}

                                        <div className="product-action">
                                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                        </div>{/* End .product-action  */}
                                    </div>{/* End .product-footer  */}
                                </div>{/* End .product  */}

                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-primary">New</span>
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-10/products/product-3.jpg" alt="Product image" className="product-image" />
                                            <img src="assets/images/demos/demo-10/products/product-3-2.jpg" alt="Product image" className="product-image-hover" />
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>{/* End .product-action-vertical  */}
                                    </figure>{/* End .product-media  */}

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Women’s</a>,
                                            <a href="#">Sandals</a>
                                        </div>{/* End .product-cat  */}
                                        <h3 className="product-title"><a href="product.html">Eric Michael Joan</a></h3>{/* End .product-title  */}
                                        <div className="product-price">
                                            $35.99
                                        </div>{/* End .product-price  */}
                                    </div>{/* End .product-body  */}

                                    <div className="product-footer">
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val"  ></div>{/* End .ratings-val  */}
                                            </div>{/* End .ratings  */}
                                            <span className="ratings-text">( 2 Reviews )</span>
                                        </div>{/* End .rating-container  */}

                                        <div className="product-nav product-nav-dots">
                                            <a href="#" className="active"  ><span className="sr-only">Color name</span></a>
                                            <a href="#"  ><span className="sr-only">Color name</span></a>
                                        </div>{/* End .product-nav  */}

                                        <div className="product-action">
                                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                        </div>{/* End .product-action  */}
                                    </div>{/* End .product-footer  */}
                                </div>{/* End .product  */}

                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-primary">Sale</span>
                                        <span className="product-label label-sale">40% off</span>
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-10/products/product-5.jpg" alt="Product image" className="product-image" />
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>{/* End .product-action-vertical  */}
                                    </figure>{/* End .product-media  */}

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Men’s</a>,
                                            <a href="#">Sneakers</a>
                                        </div>{/* End .product-cat  */}
                                        <h3 className="product-title"><a href="product.html">ASICS Tiger Gel-Lyte MT</a></h3>{/* End .product-title  */}
                                        <div className="product-price">
                                            <span className="new-price">Now $77.99</span>
                                            <span className="old-price">$130.00</span>
                                        </div>{/* End .product-price  */}
                                    </div>{/* End .product-body  */}

                                    <div className="product-footer">
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val"  ></div>{/* End .ratings-val  */}
                                            </div>{/* End .ratings  */}
                                            <span className="ratings-text">( 0 Reviews )</span>
                                        </div>{/* End .rating-container  */}

                                        <div className="product-action">
                                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                        </div>{/* End .product-action  */}
                                    </div>{/* End .product-footer  */}
                                </div>{/* End .product  */}

                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-primary">Sale</span>
                                        <span className="product-label label-sale">30% off</span>
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-10/products/product-1.jpg" alt="Product image" className="product-image" />
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>{/* End .product-action-vertical  */}
                                    </figure>{/* End .product-media  */}

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Men’s</a>,
                                            <a href="#">Boots</a>
                                        </div>{/* End .product-cat  */}
                                        <h3 className="product-title"><a href="product.html">The North Face Back-To-Berkeley Remtlz Mesh</a></h3>{/* End .product-title  */}
                                        <div className="product-price">
                                            <span className="new-price">Now $50.00</span>
                                            <span className="old-price">$84.00</span>
                                        </div>{/* End .product-price  */}
                                    </div>{/* End .product-body  */}

                                    <div className="product-footer">
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val"  ></div>{/* End .ratings-val  */}
                                            </div>{/* End .ratings  */}
                                            <span className="ratings-text">( 4 Reviews )</span>
                                        </div>{/* End .rating-container  */}

                                        <div className="product-nav product-nav-dots">
                                            <a href="#" className="active"  ><span className="sr-only">Color name</span></a>
                                            <a href="#"  ><span className="sr-only">Color name</span></a>
                                        </div>{/* End .product-nav  */}

                                        <div className="product-action">
                                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                        </div>{/* End .product-action  */}
                                    </div>{/* End .product-footer  */}
                                </div>{/* End .product  */}

                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-10/products/product-2.jpg" alt="Product image" className="product-image" />
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>{/* End .product-action-vertical  */}
                                    </figure>{/* End .product-media  */}

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Men’s</a>,
                                            <a href="#">Sneakers</a>
                                        </div>{/* End .product-cat  */}
                                        <h3 className="product-title"><a href="product.html">Nike Air Zoom Wildhorse 4</a></h3>{/* End .product-title  */}
                                        <div className="product-price">
                                            $77.99
                                        </div>{/* End .product-price  */}
                                    </div>{/* End .product-body  */}

                                    <div className="product-footer">
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val"  ></div>{/* End .ratings-val  */}
                                            </div>{/* End .ratings  */}
                                            <span className="ratings-text">( 0 Reviews )</span>
                                        </div>{/* End .rating-container  */}

                                        <div className="product-action">
                                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                        </div>{/* End .product-action  */}
                                    </div>{/* End .product-footer  */}
                                </div>{/* End .product  */}
                            </div>{/* End .owl-carousel  */}
                        </div>{/* .End .tab-pane  */}
                        <div className="tab-pane tab-pane-shadow p-0 fade" id="new-men-tab" role="tabpanel" aria-labelledby="new-men-link">
                            <div className="owl-carousel owl-simple carousel-equal-height" data-toggle="owl"
                                data-owl-options='{
                                    "nav": false, 
                                    "dots": true,
                                    "margin": 0,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":2
                                        },
                                        "480": {
                                            "items":2
                                        },
                                        "768": {
                                            "items":3
                                        },
                                        "992": {
                                            "items":4
                                        },
                                        "1200": {
                                            "items":4,
                                            "nav": true
                                        }
                                    }
                                }'>
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-primary">Sale</span>
                                        <span className="product-label label-sale">40% off</span>
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-10/products/product-5.jpg" alt="Product image" className="product-image" />
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>{/* End .product-action-vertical  */}
                                    </figure>{/* End .product-media  */}

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Men’s</a>,
                                            <a href="#">Sneakers</a>
                                        </div>{/* End .product-cat  */}
                                        <h3 className="product-title"><a href="product.html">ASICS Tiger Gel-Lyte MT</a></h3>{/* End .product-title  */}
                                        <div className="product-price">
                                            <span className="new-price">Now $77.99</span>
                                            <span className="old-price">$130.00</span>
                                        </div>{/* End .product-price  */}
                                    </div>{/* End .product-body  */}

                                    <div className="product-footer">
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val"  ></div>{/* End .ratings-val  */}
                                            </div>{/* End .ratings  */}
                                            <span className="ratings-text">( 0 Reviews )</span>
                                        </div>{/* End .rating-container  */}

                                        <div className="product-action">
                                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                        </div>{/* End .product-action  */}
                                    </div>{/* End .product-footer  */}
                                </div>{/* End .product  */}

                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-primary">New</span>
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-10/products/product-3.jpg" alt="Product image" className="product-image" />
                                            <img src="assets/images/demos/demo-10/products/product-3-2.jpg" alt="Product image" className="product-image-hover" />
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>{/* End .product-action-vertical  */}
                                    </figure>{/* End .product-media  */}

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Women’s</a>,
                                            <a href="#">Sandals</a>
                                        </div>{/* End .product-cat  */}
                                        <h3 className="product-title"><a href="product.html">Eric Michael Joan</a></h3>{/* End .product-title  */}
                                        <div className="product-price">
                                            $35.99
                                        </div>{/* End .product-price  */}
                                    </div>{/* End .product-body  */}

                                    <div className="product-footer">
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val"  ></div>{/* End .ratings-val  */}
                                            </div>{/* End .ratings  */}
                                            <span className="ratings-text">( 2 Reviews )</span>
                                        </div>{/* End .rating-container  */}

                                        <div className="product-nav product-nav-dots">
                                            <a href="#" className="active"  ><span className="sr-only">Color name</span></a>
                                            <a href="#"  ><span className="sr-only">Color name</span></a>
                                        </div>{/* End .product-nav  */}

                                        <div className="product-action">
                                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                        </div>{/* End .product-action  */}
                                    </div>{/* End .product-footer  */}
                                </div>{/* End .product  */}

                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-10/products/product-2.jpg" alt="Product image" className="product-image" />
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>{/* End .product-action-vertical  */}
                                    </figure>{/* End .product-media  */}

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Men’s</a>,
                                            <a href="#">Sneakers</a>
                                        </div>{/* End .product-cat  */}
                                        <h3 className="product-title"><a href="product.html">Nike Air Zoom Wildhorse 4</a></h3>{/* End .product-title  */}
                                        <div className="product-price">
                                            $77.99
                                        </div>{/* End .product-price  */}
                                    </div>{/* End .product-body  */}

                                    <div className="product-footer">
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val"  ></div>{/* End .ratings-val  */}
                                            </div>{/* End .ratings  */}
                                            <span className="ratings-text">( 0 Reviews )</span>
                                        </div>{/* End .rating-container  */}

                                        <div className="product-action">
                                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                        </div>{/* End .product-action  */}
                                    </div>{/* End .product-footer  */}
                                </div>{/* End .product  */}

                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-primary">Out Of Stock</span>
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-10/products/product-4.jpg" alt="Product image" className="product-image" />
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>{/* End .product-action-vertical  */}
                                    </figure>{/* End .product-media  */}

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Women’s</a>,
                                            <a href="#">Sneakers</a>
                                        </div>{/* End .product-cat  */}
                                        <h3 className="product-title"><a href="product.html">Nike Air Max Motion LW Racer</a></h3>{/* End .product-title  */}
                                        <div className="product-price">
                                            <span className="out-price">$54.99</span>
                                        </div>{/* End .product-price  */}
                                    </div>{/* End .product-body  */}

                                    <div className="product-footer">
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val"  ></div>{/* End .ratings-val  */}
                                            </div>{/* End .ratings  */}
                                            <span className="ratings-text">( 3 Reviews )</span>
                                        </div>{/* End .rating-container  */}

                                        <div className="product-action">
                                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            <a href="popup/quickView.html" className="btn-product btn-quickview"><span>quick view</span></a>
                                        </div>{/* End .product-action  */}
                                    </div>{/* End .product-footer  */}
                                </div>{/* End .product  */}
                            </div>{/* End .owl-carousel  */}
                        </div>{/* .End .tab-pane  */}
                    </div>{/* End .tab-content  */}
                </div>{/* End .container  */}
            </div>{/* End .bg-light  */}

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-6 col-md-4">
                        <div className="banner banner-cat">
                            <a href="#">
                                <img src="assets/images/demos/demo-10/banners/banner-5.jpg" alt="Banner" />
                            </a>

                            <div className="banner-content banner-content-overlay text-center">
                                <h3 className="banner-title font-weight-normal">Women's</h3>{/* End .banner-title  */}
                                <h4 className="banner-subtitle">125 Products</h4>{/* End .banner-subtitle  */}
                                <a href="category.html" className="banner-link">SHOP NOW</a>
                            </div>{/* End .banner-content  */}
                        </div>{/* End .banner  */}
                    </div>{/* End .col-md-4  */}

                    <div className="col-sm-6 col-md-4">
                        <div className="banner banner-cat">
                            <a href="#">
                                <img src="assets/images/demos/demo-10/banners/banner-6.jpg" alt="Banner" />
                            </a>

                            <div className="banner-content banner-content-overlay text-center">
                                <h3 className="banner-title font-weight-normal">Men's</h3>{/* End .banner-title  */}
                                <h4 className="banner-subtitle">97 Products</h4>{/* End .banner-subtitle  */}
                                <a href="category.html" className="banner-link">SHOP NOW</a>
                            </div>{/* End .banner-content  */}
                        </div>{/* End .banner  */}
                    </div>{/* End .col-md-4  */}

                    <div className="col-sm-6 col-md-4">
                        <div className="banner banner-cat">
                            <a href="#">
                                <img src="assets/images/demos/demo-10/banners/banner-7.jpg" alt="Banner" />
                            </a>

                            <div className="banner-content banner-content-overlay text-center">
                                <h3 className="banner-title font-weight-normal">Kid's</h3>{/* End .banner-title  */}
                                <h4 className="banner-subtitle">48 Products</h4>{/* End .banner-subtitle  */}
                                <a href="category.html" className="banner-link">SHOP NOW</a>
                            </div>{/* End .banner-content  */}
                        </div>{/* End .banner  */}
                    </div>{/* End .col-md-4  */}
                </div>{/* End .row  */}
            </div>{/* End .container  */}

            <div className="mb-4"></div>{/* End .mb-4  */}



            <div className="mb-5"></div>{/* End .mb5  */}


             <ProductList />                       
            <SomeBlogPosts />
        </main>
    );
}

export default Main;