import { Link } from 'react-router-dom';
import data from './Data/Data.json'
import { useContext } from 'react';
import { CartContext, PaginationContext } from './context/MyContext';
import Pagination from './pagination';


const ProductList = () => {
    const { cartList, setCartList } = useContext(CartContext)
    const { currentPage } = useContext(PaginationContext)
    const ProductsInThisPage = data.slice((currentPage - 1) * 16, currentPage * 16)
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
                        <h1 className="page-title">Grid 3 Columns<span>Shop</span></h1>
                    </div>{/* End .container */}
                </div>{/* End .page-header */}
                <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Shop</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Grid 3 Columns</li>
                        </ol>
                    </div>{/* End .container */}
                </nav>{/* End .breadcrumb-nav */}

                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="toolbox">
                                    <div className="toolbox-left">
                                        <div className="toolbox-info">
                                            Showing <span>9 of 56</span> Products
                                        </div>{/* End .toolbox-info */}
                                    </div>{/* End .toolbox-left */}

                                    <div className="toolbox-right">
                                        <div className="toolbox-sort">
                                            <label htmlFor="sortby">Sort by:</label>
                                            <div className="select-custom">
                                                <select name="sortby" id="sortby" className="form-control">
                                                    <option value="popularity" >Most Popular</option>
                                                    <option value="rating">Most Rated</option>
                                                    <option value="date">Date</option>
                                                </select>
                                            </div>
                                        </div>{/* End .toolbox-sort */}

                                    </div>{/* End .toolbox-right */}
                                </div>{/* End .toolbox */}

                                <div className="products mb-3">
                                    <div className="row justify-content-center">

                                        {/* start product ***************************************************************************************/}

                                        {ProductsInThisPage.map((product) => (
                                            <div key={product.id} className="col-6 col-md-4 col-lg-4 --product-card">
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
                                                                <div className="ratings-val" style={{ width: "20%" }}></div>{/* End .ratings-val */}
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

                                <Pagination />
                            </div>{/* End .col-lg-9 */}
                            <aside className="col-lg-3 order-lg-first">
                                <div className="sidebar sidebar-shop">
                                    <div className="widget widget-clean">
                                        <label>Filters:</label>
                                        <a href="#" className="sidebar-filter-clear">Clean All</a>
                                    </div>{/* End .widget widget-clean */}

                                    <div className="widget widget-collapsible">
                                        <h3 className="widget-title">
                                            <a data-toggle="collapse" href="#widget-1" role="button" aria-expanded="true" aria-controls="widget-1">
                                                Category
                                            </a>
                                        </h3>{/* End .widget-title */}

                                        <div className="collapse show" id="widget-1">
                                            <div className="widget-body">
                                                <div className="filter-items filter-items-count">
                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="cat-1" />
                                                            <label className="custom-control-label" htmlFor="cat-1">Dresses</label>
                                                        </div>{/* End .custom-checkbox */}
                                                        <span className="item-count">3</span>
                                                    </div>{/* End .filter-item */}

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="cat-2" />
                                                            <label className="custom-control-label" htmlFor="cat-2">T-shirts</label>
                                                        </div>{/* End .custom-checkbox */}
                                                        <span className="item-count">0</span>
                                                    </div>{/* End .filter-item */}

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="cat-3" />
                                                            <label className="custom-control-label" htmlFor="cat-3">Bags</label>
                                                        </div>{/* End .custom-checkbox */}
                                                        <span className="item-count">4</span>
                                                    </div>{/* End .filter-item */}

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="cat-4" />
                                                            <label className="custom-control-label" htmlFor="cat-4">Jackets</label>
                                                        </div>{/* End .custom-checkbox */}
                                                        <span className="item-count">2</span>
                                                    </div>{/* End .filter-item */}

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="cat-5" />
                                                            <label className="custom-control-label" htmlFor="cat-5">Shoes</label>
                                                        </div>{/* End .custom-checkbox */}
                                                        <span className="item-count">2</span>
                                                    </div>{/* End .filter-item */}

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="cat-6" />
                                                            <label className="custom-control-label" htmlFor="cat-6">Jumpers</label>
                                                        </div>{/* End .custom-checkbox */}
                                                        <span className="item-count">1</span>
                                                    </div>{/* End .filter-item */}

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="cat-7" />
                                                            <label className="custom-control-label" htmlFor="cat-7">Jeans</label>
                                                        </div>{/* End .custom-checkbox */}
                                                        <span className="item-count">1</span>
                                                    </div>{/* End .filter-item */}

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="cat-8" />
                                                            <label className="custom-control-label" htmlFor="cat-8">Sportwear</label>
                                                        </div>{/* End .custom-checkbox */}
                                                        <span className="item-count">0</span>
                                                    </div>{/* End .filter-item */}
                                                </div>{/* End .filter-items */}
                                            </div>{/* End .widget-body */}
                                        </div>{/* End .collapse */}
                                    </div>{/* End .widget */}

                                    <div className="widget widget-collapsible">
                                        <h3 className="widget-title">
                                            <a data-toggle="collapse" href="#widget-2" role="button" aria-expanded="true" aria-controls="widget-2">
                                                Size
                                            </a>
                                        </h3>{/* End .widget-title */}

                                        <div className="collapse show" id="widget-2">
                                            <div className="widget-body">
                                                <div className="filter-items">
                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="size-1" />
                                                            <label className="custom-control-label" htmlFor="size-1">XS</label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="size-2" />
                                                            <label className="custom-control-label" htmlFor="size-2">S</label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" defaultChecked id="size-3" />
                                                            <label className="custom-control-label" htmlFor="size-3">M</label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" defaultChecked id="size-4" />
                                                            <label className="custom-control-label" htmlFor="size-4">L</label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="size-5" />
                                                            <label className="custom-control-label" htmlFor="size-5">XL</label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="size-6" />
                                                            <label className="custom-control-label" htmlFor="size-6">XXL</label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}
                                                </div>{/* End .filter-items */}
                                            </div>{/* End .widget-body */}
                                        </div>{/* End .collapse */}
                                    </div>{/* End .widget */}

                                    <div className="widget widget-collapsible">
                                        <h3 className="widget-title">
                                            <a data-toggle="collapse" href="#widget-3" role="button" aria-expanded="true" aria-controls="widget-3">
                                                Colour
                                            </a>
                                        </h3>{/* End .widget-title */}

                                        <div className="collapse show" id="widget-3">
                                            <div className="widget-body">
                                                <div className="filter-colors">
                                                    <a href="#" style={{ background: "#b87145" }}><span className="sr-only">Color Name</span></a>
                                                    <a href="#" style={{ background: "#f0c04a" }}><span className="sr-only">Color Name</span></a>
                                                    <a href="#" style={{ background: "#333333" }}><span className="sr-only">Color Name</span></a>
                                                    <a href="#" className="selected" style={{ background: "#cc3333" }}><span className="sr-only">Color Name</span></a>
                                                    <a href="#" style={{ background: "#3399cc" }}><span className="sr-only">Color Name</span></a>
                                                    <a href="#" style={{ background: "#669933" }}><span className="sr-only">Color Name</span></a>
                                                    <a href="#" style={{ background: "#f2719c" }}><span className="sr-only">Color Name</span></a>
                                                    <a href="#" style={{ background: "#ebebeb" }}><span className="sr-only">Color Name</span></a>
                                                </div>{/* End .filter-colors */}
                                            </div>{/* End .widget-body */}
                                        </div>{/* End .collapse */}
                                    </div>{/* End .widget */}

                                    <div className="widget widget-collapsible">
                                        <h3 className="widget-title">
                                            <a data-toggle="collapse" href="#widget-4" role="button" aria-expanded="true" aria-controls="widget-4">
                                                Brand
                                            </a>
                                        </h3>{/* End .widget-title */}

                                        <div className="collapse show" id="widget-4">
                                            <div className="widget-body">
                                                <div className="filter-items">
                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="brand-1" />
                                                            <label className="custom-control-label" htmlFor="brand-1">Next</label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="brand-2" />
                                                            <label className="custom-control-label" htmlFor="brand-2">River Island</label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="brand-3" />
                                                            <label className="custom-control-label" htmlFor="brand-3">Geox</label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="brand-4" />
                                                            <label className="custom-control-label" htmlFor="brand-4">New Balance</label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="brand-5" />
                                                            <label className="custom-control-label" htmlFor="brand-5">UGG</label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="brand-6" />
                                                            <label className="custom-control-label" htmlFor="brand-6">F&F</label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="brand-7" />
                                                            <label className="custom-control-label" htmlFor="brand-7">Nike</label>
                                                        </div>{/* End .custom-checkbox */}
                                                    </div>{/* End .filter-item */}

                                                </div>{/* End .filter-items */}
                                            </div>{/* End .widget-body */}
                                        </div>{/* End .collapse */}
                                    </div>{/* End .widget */}

                                    <div className="widget widget-collapsible">
                                        <h3 className="widget-title">
                                            <a data-toggle="collapse" href="#widget-5" role="button" aria-expanded="true" aria-controls="widget-5">
                                                Price
                                            </a>
                                        </h3>{/* End .widget-title */}

                                        <div className="collapse show" id="widget-5">
                                            <div className="widget-body">
                                                <div className="filter-price">
                                                    <div className="filter-price-text">
                                                        Price Range:
                                                        <span id="filter-price-range"></span>
                                                    </div>{/* End .filter-price-text */}

                                                    <div id="price-slider"></div>{/* End #price-slider */}
                                                </div>{/* End .filter-price */}
                                            </div>{/* End .widget-body */}
                                        </div>{/* End .collapse */}
                                    </div>{/* End .widget */}
                                </div>{/* End .sidebar sidebar-shop */}
                            </aside>{/* End .col-lg-3 */}
                        </div>{/* End .row */}
                    </div>{/* End .container */}
                </div>{/* End .page-content */}
            </main>{/* End .main */}

        </>
    );
}

export default ProductList;