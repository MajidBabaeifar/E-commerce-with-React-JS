import { Link } from 'react-router-dom';
import { useContext, useRef } from 'react';
import { CartContext, PaginationContext, FilterContext } from './context/MyContext';
import Pagination from './pagination';
import Filters from './Filters';



const ProductList = () => {
    const { cartList, setCartList } = useContext(CartContext)
    const { currentPage } = useContext(PaginationContext)
    const { filterData, handleFilter, category, ProductsInThisPage } = useContext(FilterContext)
    const myRef = useRef(null)

    const executeScroll = () => myRef.current.scrollIntoView()
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
        <>
            {/* new productlist */}
            <main className="main">
                <div className="page-header text-center" style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}>
                    <div className="container">
                        <h1 className="page-title">Products<span>Shop</span></h1>
                    </div>{/* End .container */}
                </div>{/* End .page-header */}
                <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active"><Link to="/productlist">Products</Link></li>
                        </ol>
                    </div>{/* End .container */}
                </nav>{/* End .breadcrumb-nav */}

                <div ref={myRef} className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="toolbox">
                                    <div className="toolbox-left">
                                        <div className="toolbox-info">
                                            Showing <span>{`${((currentPage - 1) * 16) + 1} to ${(currentPage) * 16} of ${filterData().length}`}</span> Products
                                        </div>{/* End .toolbox-info */}
                                    </div>{/* End .toolbox-left */}

                                    <div className="toolbox-right">
                                        <div className="toolbox-sort">
                                            <label htmlFor="sortby">Sort by:</label>
                                            <div className="select-custom">
                                                <select name="sortBy" id="sortby" className="form-control" onChange={handleFilter} value={category.sortBy}>
                                                    <option value="" >--choose--</option>
                                                    <option value="pricea" >price ascending</option>
                                                    <option value="priced">price descending</option>
                                                    <option value="ratinga" >rating ascending</option>
                                                    <option value="ratingd" >rating descending</option>
                                                    <option value="title" >title</option>
                                                </select>
                                            </div>
                                        </div>{/* End .toolbox-sort */}

                                    </div>{/* End .toolbox-right */}
                                </div>{/* End .toolbox */}

                                <div className="products mb-3">
                                    <div className="row justify-content-center">

                                        {/* start product ***************************************************************************************/}

                                        {ProductsInThisPage.map((product) => (
                                            <div key={product.id} className="col-6 col-md-4 col-lg-4 --product-card" id="top--">
                                                <div className="product product-7 text-center">
                                                    <figure className="product-media">
                                                        {product.isNew && <span className="product-label label-new">New</span>}
                                                        <Link to="">
                                                            <img src={`https://picsum.photos/id/${product.id + 500}/200/300`} alt={product.name} className="product-image" />
                                                        </Link>

                                                        <div className="product-action-vertical">
                                                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                            <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                        </div>{/* End .product-action-vertical */}

                                                        <div className="cursor-pointer product-action">
                                                            {cartList.some(c => c.name === product.name)
                                                                ?
                                                                (<div
                                                                    className="cursor-pointer btn-product btn-cart btn-danger"
                                                                    onClick={() => setCartList((prevCart => prevCart.filter(c => c.name !== product.name)))}
                                                                >
                                                                    <span>remove from cart</span>
                                                                </div>)
                                                                :
                                                                (<div
                                                                    className=" btn-product btn-cart"
                                                                    onClick={() => setCartList(prevCart => {
                                                                        console.log(cartList);
                                                                        return [...prevCart, { ...product, quantity: 1 }]
                                                                    })}
                                                                >
                                                                    <span>add to cart</span>
                                                                </div>)
                                                            }
                                                        </div>{/* End .product-action */}
                                                    </figure>{/* End .product-media */}

                                                    <div className="product-body">
                                                        <div className="product-cat">
                                                            <Link to="#">{`${catrgoryDevider(product.group)} Collection`}</Link>
                                                        </div>{/* End .product-cat */}
                                                        <h3 className="product-title"><a href="product.html">{product.name}</a></h3>{/* End .product-title */}
                                                        <h5 className="product-title text-muted h5"><a href="product.html">{product.fullName}</a></h5>{/* End .product-title */}
                                                        <div className="product-price">
                                                            {`${product.price} US$`}
                                                        </div>{/* End .product-price */}
                                                        <div className="ratings-container">
                                                            <div className="ratings">
                                                                <div className="ratings-val" style={{ width: `${product.ratings * 20}%` }}></div>{/* End .ratings-val */}
                                                            </div>{/* End .ratings */}
                                                            <span className="ratings-text">( 2 Reviews )</span>
                                                        </div>{/* End .rating-container */}
                                                    </div>{/* End .product-body */}
                                                </div>
                                            </div>
                                        ))}
                                        {/* ************************************************************************************************** */}
                                    </div>{/* End .row */}
                                </div>{/* End .products */}

                                <Pagination
                                    executeScroll={executeScroll}
                                    filterData={filterData}
                                />
                            </div>{/* End .col-lg-9 */}
                            <Filters />
                        </div>{/* End .row */}
                    </div>{/* End .container */}
                </div>{/* End .page-content */}
            </main>{/* End .main */}

        </>
    );
}

export default ProductList;