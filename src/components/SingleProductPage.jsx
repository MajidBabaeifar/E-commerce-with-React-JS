import { useParams } from "react-router";
import { FilterContext, CartContext } from './context/MyContext';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Ratings from './Ratings';

const SingleProductPage = () => {
    const { productId } = useParams();
    const [pId, setpId] = useState(productId)
    const { data } = useContext(FilterContext)
    const { cartList, setCartList } = useContext(CartContext)
    const product = data.find((elmnt) => elmnt.id === parseInt(pId))
    const [selectedImage, setSelectedImage] = useState(0)

    const catrgoryDevider = (num) => {
        switch (num) {
            case 1:
                return "Men"
            case 2:
                return "Women"
            case 3:
                return "Kids"
            default:
                break;
        }
    }

    return (
        <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
                <div className="container d-flex align-items-center">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/productlist">Products</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Default</li>
                    </ol>

                    <nav className="product-pager ml-auto" aria-label="Product">
                        <Link onClick={()=>setpId(prev => prev>0 ? parseInt(prev) - 1 : prev)} className="product-pager-link product-pager-prev" to={`/productlist/${pId>0 ? parseInt(pId) - 1 : pId}`} aria-label="Previous" tabIndex="-1">
                            <i className="icon-angle-left"></i>
                            <span>Prev</span>
                        </Link>

                        <Link onClick={()=>setpId(prev => prev<data.length ? parseInt(prev) + 1 : prev)} className="product-pager-link product-pager-next" to={`/productlist/${ pId<data.length ? parseInt(pId) + 1 : pId}`} aria-label="Next" tabIndex="-1">
                            <span>Next</span>
                            <i className="icon-angle-right"></i>
                        </Link>
                    </nav>{/* End .pager-nav */}
                </div>{/* End .container */}
            </nav>{/* End .breadcrumb-nav */}

            <div className="page-content">
                <div className="container">
                    <div className="product-details-top">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="product-gallery product-gallery-vertical">
                                    <div className="row">
                                        <figure className="product-main-image">
                                            
                                            <img id="product-zoom" src={`https://picsum.photos/id/${product.id + 500}/200/300`} alt="product image" />

                                            <a href="#" id="btn-product-gallery" className="btn-product-gallery">
                                                <i className="icon-arrows"></i>
                                            </a>
                                        </figure>{/* End .product-main-image */}

                                        <div id="product-zoom-gallery" className="product-image-gallery">
                                            {[...Array(4)].map((_, i) => (
                                                <Link className={selectedImage == i ? "product-gallery-item active" : "product-gallery-item"}
                                                    to=""
                                                    onClick={() => {
                                                        setSelectedImage(i)
                                                    }}
                                                >
                                                    <img
                                                        className="product-gallery-item-image"
                                                        src={`https://picsum.photos/id/${product.id + 500}/200/300`}
                                                        alt="product side"
                                                    />
                                                </Link>
                                            ))
                                            }
                                        </div>{/* End .product-image-gallery */}
                                    </div>{/* End .row */}
                                </div>{/* End .product-gallery */}
                            </div>{/* End .col-md-6 */}

                            <div className="col-md-6">
                                <div className="product-details">
                                    <h1 className="product-title">{product.name}<br />{product.fullName}</h1>{/* End .product-title */}

                                    <Ratings product={product} />

                                    <div className="product-price">
                                        ${product.price}
                                    </div>{/* End .product-price */}

                                    <div className="product-content">
                                        <p>{product.description}</p>
                                    </div>{/* End .product-content */}

                                    <div className="details-filter-row details-row-size">
                                        <label>Color:</label>

                                        <div className="product-nav product-nav-thumbs">
                                            <a href="#" className="active">
                                                <img style={{ height: "100%" }} src={`https://picsum.photos/id/${product.id + 500}/200/300`} alt="product desc" />
                                            </a>
                                            <a href="#">
                                                <img style={{ height: "100%" }} src={`https://picsum.photos/id/${product.id + 500}/200/300`} alt="product desc" />
                                            </a>
                                        </div>{/* End .product-nav */}
                                    </div>{/* End .details-filter-row */}
                                    <div className="product-details-action">
                                        {cartList.some(c => c.name === product.name)
                                            ?
                                            (<div
                                                style={{ cursor: "pointer" }}
                                                className="cursor-pointer btn-product btn-cart"
                                                onClick={() =>
                                                    setCartList((prevCart => prevCart.filter(c => c.name !== product.name)))
                                                }
                                            >
                                                <span>remove from cart</span>
                                            </div>)
                                            :
                                            (<div
                                                style={{ cursor: "pointer" }}
                                                className="cursor-pointer btn-product btn-cart"
                                                onClick={() => setCartList(prevCart => {
                                                    console.log(cartList);
                                                    return [...prevCart, { ...product, quantity: 1 }]
                                                })}
                                            >
                                                <span>add to cart</span>
                                            </div>)
                                        }

                                        <div className="details-action-wrapper">
                                            <a href="#" className="btn-product btn-wishlist" title="Wishlist"><span>Add to Wishlist</span></a>
                                        </div>{/* End .details-action-wrapper */}
                                    </div>{/* End .product-details-action */}

                                    <div className="product-details-footer">
                                        <div className="product-cat">
                                            <span>Category:</span>
                                            {`${catrgoryDevider(product.group)} Collection`}
                                        </div>{/* End .product-cat */}

                                        <div className="social-icons social-icons-sm">
                                            <span className="social-label">Share:</span>
                                            <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                                            <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                                            <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                                            <a href="#" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></a>
                                        </div>
                                    </div>{/* End .product-details-footer */}
                                </div>{/* End .product-details */}
                            </div>{/* End .col-md-6 */}
                        </div>{/* End .row */}
                    </div>{/* End .product-details-top */}

                    <div className="product-details-tab">
                        <ul className="nav nav-pills justify-content-center" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="product-desc-link" data-toggle="tab" href="#product-desc-tab" role="tab" aria-controls="product-desc-tab" aria-selected="true">Description</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="product-info-link" data-toggle="tab" href="#product-info-tab" role="tab" aria-controls="product-info-tab" aria-selected="false">Additional information</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="product-shipping-link" data-toggle="tab" href="#product-shipping-tab" role="tab" aria-controls="product-shipping-tab" aria-selected="false">Shipping & Returns</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="product-review-link" data-toggle="tab" href="#product-review-tab" role="tab" aria-controls="product-review-tab" aria-selected="false">Reviews (2)</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="product-desc-tab" role="tabpanel" aria-labelledby="product-desc-link">
                                <div className="product-desc-content">
                                    <h3>Product Information</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. </p>
                                    <ul>
                                        <li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit. </li>
                                        <li>Vivamus finibus vel mauris ut vehicula.</li>
                                        <li>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</li>
                                    </ul>

                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. </p>
                                </div>{/* End .product-desc-content */}
                            </div>{/* .End .tab-pane */}
                            <div className="tab-pane fade" id="product-info-tab" role="tabpanel" aria-labelledby="product-info-link">
                                <div className="product-desc-content">
                                    <h3>Information</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. </p>

                                    <h3>Fabric & care</h3>
                                    <ul>
                                        <li>Faux suede fabric</li>
                                        <li>Gold tone metal hoop handles.</li>
                                        <li>RI branding</li>
                                        <li>Snake print trim interior </li>
                                        <li>Adjustable cross body strap</li>
                                        <li> Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm</li>
                                    </ul>

                                    <h3>Size</h3>
                                    <p>one size</p>
                                </div>{/* End .product-desc-content */}
                            </div>{/* .End .tab-pane */}
                            <div className="tab-pane fade" id="product-shipping-tab" role="tabpanel" aria-labelledby="product-shipping-link">
                                <div className="product-desc-content">
                                    <h3>Delivery & returns</h3>
                                    <p>We deliver to over 100 countries around the world. htmlFor full details of the delivery options we offer, please view our <a href="#">Delivery information</a><br />
                                        We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. htmlFor full details of how to make a return, please view our <a href="#">Returns information</a></p>
                                </div>{/* End .product-desc-content */}
                            </div>{/* .End .tab-pane */}
                            <div className="tab-pane fade" id="product-review-tab" role="tabpanel" aria-labelledby="product-review-link">
                                <div className="reviews">
                                    <h3>Reviews (2)</h3>
                                    <div className="review">
                                        <div className="row no-gutters">
                                            <div className="col-auto">
                                                <h4><a href="#">Samanta J.</a></h4>
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: "80%" }}></div>{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                </div>{/* End .rating-container */}
                                                <span className="review-date">6 days ago</span>
                                            </div>{/* End .col */}
                                            <div className="col">
                                                <h4>Good, perfect size</h4>

                                                <div className="review-content">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!</p>
                                                </div>{/* End .review-content */}

                                                <div className="review-action">
                                                    <a href="#"><i className="icon-thumbs-up"></i>Helpful (2)</a>
                                                    <a href="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</a>
                                                </div>{/* End .review-action */}
                                            </div>{/* End .col-auto */}
                                        </div>{/* End .row */}
                                    </div>{/* End .review */}

                                    <div className="review">
                                        <div className="row no-gutters">
                                            <div className="col-auto">
                                                <h4><a href="#">John Doe</a></h4>
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{ width: "100%" }}></div>{/* End .ratings-val */}
                                                    </div>{/* End .ratings */}
                                                </div>{/* End .rating-container */}
                                                <span className="review-date">5 days ago</span>
                                            </div>{/* End .col */}
                                            <div className="col">
                                                <h4>Very good</h4>

                                                <div className="review-content">
                                                    <p>Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!</p>
                                                </div>{/* End .review-content */}

                                                <div className="review-action">
                                                    <a href="#"><i className="icon-thumbs-up"></i>Helpful (0)</a>
                                                    <a href="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</a>
                                                </div>{/* End .review-action */}
                                            </div>{/* End .col-auto */}
                                        </div>{/* End .row */}
                                    </div>{/* End .review */}
                                </div>{/* End .reviews */}
                            </div>{/* .End .tab-pane */}
                        </div>{/* End .tab-content */}
                    </div>{/* End .product-details-tab */}
                </div>{/* End .container */}
            </div>{/* End .page-content */}
        </main>
    );
}

export default SingleProductPage;