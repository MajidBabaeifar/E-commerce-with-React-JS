import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext, LoginRegister } from './../context/MyContext';

const SimpleHedear = () => {
    const { cartList, setCartList } = useContext(CartContext)
    const { userName, setUserName } = useContext(LoginRegister)

    const calculateTotal = cartList.reduce(
        (previousValue, currentValue) => previousValue + parseInt(currentValue.price) * currentValue.quantity,
        0
    );


    return (
        <header className="header header-8">
            <div className="header-top">
                <div className="container">
                    <div className="header-right">
                        <ul className="top-menu">
                            <li>
                                <Link to="#">Links</Link>
                                <ul>
                                    <li><Link to="#"><i className="icon-phone"></i>Call: +0123 456 789</Link></li>
                                    <li><Link to="#"><i className="icon-heart-o"></i>My Wishlist<span>(3)</span></Link></li>
                                    <li><Link to="#">About Us</Link></li>
                                    <li><Link to="#">Contact Us</Link></li>
                                    <li><Link to="/registerandlogin"><i className="icon-user"></i>{userName ? userName.toLowerCase() : "Login"}</Link></li>
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

                        <Link to="/" className="logo">
                            <h6 className="--logo">majid babaeifar</h6>
                        </Link>
                    </div>{/* End .header-left  */}

                    <div className="header-right">
                        <nav className="main-nav">
                            <ul className="menu sf-arrows">
                                <li className="megamenu-container">
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


                        <div className="dropdown cart-dropdown">
                            <div className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                <i className="icon-shopping-cart"></i>
                                <span className="cart-count">{cartList.length}</span>
                            </div>

                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-cart-products">
                                    {cartList.map((product) => (
                                        <div className="product --dropdown--item">
                                            <div className="product-cart-details">
                                                <h4 className="product-title">
                                                    <Link to="product.html">{product.name}</Link>
                                                </h4>

                                                <span className="cart-product-info">
                                                    <span className="cart-product-qty">{product.quantity}</span>
                                                    {`x $${product.price}`}
                                                </span>
                                            </div>{/* End .product-cart-details  */}

                                            <figure className="product-image-container">
                                                <Link to="product.html" className="product-image">
                                                    <img className="--cart--image" src={`https://picsum.photos/id/${product.id + 500}/200/300`} />
                                                </Link>
                                            </figure>
                                            {/* <Link to="" className="d-inline btn-remove" title="Remove Product"><i className="icon-close"></i></Link> */}
                                        </div>
                                    ))}


                                </div>{/* End .cart-product  */}

                                <div className="dropdown-cart-total">
                                    <span>Total</span>

                                    <span className="cart-total-price">{`${calculateTotal} $`}</span>
                                </div>{/* End .dropdown-cart-total  */}

                                <div className="dropdown-cart-action">
                                    <Link to="/cart" className="btn btn-primary">View Cart</Link>

                                </div>{/* End .dropdown-cart-total  */}
                            </div>{/* End .dropdown-menu  */}
                        </div>{/* End .cart-dropdown  */}
                    </div>{/* End .header-right  */}
                </div>{/* End .container  */}
            </div>{/* End .header-middle  */}
        </header>
    );
}

export default SimpleHedear;