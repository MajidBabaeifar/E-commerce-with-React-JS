import { useContext } from 'react';
import { WishListContext, CartContext } from './../context/MyContext';

const WishList = () => {
    const { wishList, setWishList } = useContext(WishListContext)
    const { cartList, setCartList } = useContext(CartContext)

    return (
        <main className="main">
            <div className="page-header text-center" style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}>
                <div className="container">
                    <h1 className="page-title">Wishlist<span>Shop</span></h1>
                </div>{/* End .container */}
            </div>{/* End .page-header */}
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Shop</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Wishlist</li>
                    </ol>
                </div>{/* End .container */}
            </nav>{/* End .breadcrumb-nav */}

            <div className="page-content">
                <div className="container">
                    <table className="table table-wishlist table-mobile">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Stock Status</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {wishList.map((product) => (<tr>
                                <td className="product-col">
                                    <div className="product">
                                        <figure className="product-media">
                                            <a href="#">
                                                <img src={`https://picsum.photos/id/${product.id + 500}/200/300`} alt="Product image" />
                                            </a>
                                        </figure>

                                        <h3 className="product-title">
                                            <div>{product.name}</div>
                                        </h3>{/* End .product-title */}
                                    </div>{/* End .product */}
                                </td>
                                <td className="price-col">{product.price}</td>
                                <td className="stock-col">

                                    {product.isAvailable ?
                                        (<span className="in-stock">in stock</span>) :
                                        (<span className="out-of-stock">Out of stock</span>)
                                    }

                                </td>



                                {cartList.some(c => c.name === product.name)
                                    ?
                                    (
                                        <td className="action-col">
                                            <button
                                                onClick={() =>
                                                    setCartList((prevCart => prevCart.filter(c => c.name !== product.name)))
                                                }
                                                className="btn btn-block btn-outline-primary-2"
                                            >
                                                <i className="icon-cart-plus"></i>Remove From Cart
                                            </button>
                                        </td>
                                    ) : (
                                        <td className="action-col">
                                            <button
                                                onClick={() => setCartList(prevCart => {
                                                    console.log(cartList);
                                                    return [...prevCart, { ...product, quantity: 1 }]
                                                })}
                                                className="btn btn-block btn-outline-primary-2"
                                            >
                                                <i className="icon-cart-plus"></i>Add to Cart
                                            </button>
                                        </td>
                                    )}

                                <td className="remove-col"><button onClick={() => setWishList(prevWishList => prevWishList.filter(c => c.name !== product.name))} className="btn-remove"><i className="icon-close"></i></button></td>
                            </tr>))}
                        </tbody>
                    </table>{/* End .table table-wishlist */}
                    <div className="wishlist-share">
                        <div className="social-icons social-icons-sm mb-2">
                            <label className="social-label">Share on:</label>
                            <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                            <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                            <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                            <a href="#" className="social-icon" title="Youtube" target="_blank"><i className="icon-youtube"></i></a>
                            <a href="#" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></a>
                        </div>{/* End .soial-icons */}
                    </div>{/* End .wishlist-share */}
                </div>{/* End .container */}
            </div>{/* End .page-content */}
        </main>
    );
}

export default WishList;