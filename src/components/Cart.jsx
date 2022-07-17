import { useContext, useEffect } from "react";
import { CartContext } from './context/MyContext';
import { Link } from 'react-router-dom';


const Cart = () => {

    useEffect(() => {
    }, [])

    const { cartList, setCartList } = useContext(CartContext)
    const calculateTotal = cartList.reduce(
        (previousValue, currentValue) => previousValue + parseInt(currentValue.price) * currentValue.quantity,
        0
    );

    return (
        <main className="main">

            <div className="page-header text-center" style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}>
                <div className="container">
                    <h1 className="page-title">Shopping Cart<span>Shop</span></h1>
                </div>{/* End .container */}
            </div>{/* End .page-header */}
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Shop</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Shopping Cart</li>
                    </ol>
                </div>{/* End .container */}
            </nav>{/* End .breadcrumb-nav */}

            <div className="page-content">
                <div className="cart">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <table className="table table-cart table-mobile">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {cartList.map((product) => (
                                            <tr key={product.id}>
                                                <td className="product-col">
                                                    <div className="product">

                                                        <Link to="">
                                                            <img className="--cart--image" src={`https://picsum.photos/id/${product.id + 500}/200/300`} alt={product.fullName} />
                                                        </Link>


                                                        <h3 className="product-title">
                                                            <a href="#">{product.fullName}</a>
                                                        </h3>{/* End .product-title */}
                                                    </div>{/* End .product */}
                                                </td>
                                                <td className="price-col">{`${product.price}$`}</td>
                                                <td className="quantity-col">
                                                    <div className="cart-product-quantity">
                                                        <input type="number" className="form-control" min="1" max="10" step="1" data-decimals="0" required value={product.quantity} onChange={(e) => {
                                                            setCartList(prevState => {
                                                                const newState = prevState.map(obj => {
                                                                    // 👇️ if id equals 2, update country property
                                                                    if (obj === product) {
                                                                        return { ...obj, quantity: parseInt(e.target.value) };
                                                                    }
                                                                    // 👇️ otherwise return object as is
                                                                    return obj;
                                                                });
                                                                console.log(product.quantity);
                                                                return newState;
                                                            });
                                                        }}
                                                        />
                                                    </div>{/* End .cart-product-quantity */}
                                                </td>
                                                <td className="total-col">{product.price * product.quantity}$</td>
                                                <td className="remove-col" onClick={()=>setCartList(prevList => prevList.filter((c)=>c.id !== product.id))}><button className="btn-remove"><i className="icon-close"></i></button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>{/* End .table table-wishlist */}

                                
                            </div>{/* End .col-lg-9 */}
                            <aside className="col-lg-3">
                                <div className="summary summary-cart">
                                    <h3 className="summary-title">Cart Total</h3>{/* End .summary-title */}

                                    <table className="table table-summary">
                                        <tbody>
                                            <tr className="summary-subtotal">
                                                <td>Total:</td>
                                                <td>{`${calculateTotal} $`}</td>
                                            </tr>{/* End .summary-subtotal */}
                                            
                                        </tbody>
                                    </table>{/* End .table table-summary */}

                                    <a href="#" className="btn btn-outline-primary-2 btn-order btn-block">PROCEED TO CHECKOUT</a>
                                </div>{/* End .summary */}

                                
                            </aside>{/* End .col-lg-3 */}
                        </div>{/* End .row */}
                    </div>{/* End .container */}
                </div>{/* End .cart */}
            </div>{/* End .page-content */}
        </main>
    );
}

export default Cart;