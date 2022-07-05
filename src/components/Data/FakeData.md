import { faker } from '@faker-js/faker';

const FakeData = () => {
    const productList = [...Array(100)].map((_,i)=>({
        id : i,
        name : faker.commerce.product(),
        fullName : faker.commerce.productName(),
        price :faker.commerce.price(100, 200, 0),
        description : faker.commerce.productDescription(), 
        image : faker.image.fashion(1234, 2345, true),
        group : Math.floor(Math.random()*3+1),
        isAvailable : faker.datatype.boolean(),
        isNew : faker.datatype.boolean(),
        isOnOff: faker.datatype.boolean(),
        offPercent : Math.floor(Math.random()*3+1)*10,
        ratings : Math.floor(Math.random()*4+1)
    }))

    
    console.log(productList)
    return (  
        <div>hi</div>
    );
}
 
export default FakeData;


product categories

<div className="megamenu megamenu-sm">
                                        <div className="row no-gutters">
                                            <div className="col-md-6">
                                                <div className="menu-col">
                                                    <div className="menu-title">Product Details</div>{/* End .menu-title  */}
                                                    <ul>
                                                        <li><Link to="product.html">Default</Link></li>
                                                        <li><Link to="product-centered.html">Centered</Link></li>
                                                        <li><Link to="product-extended.html"><span>Extended Info<span className="tip tip-new">New</span></span></Link></li>
                                                        <li><Link to="product-gallery.html">Gallery</Link></li>
                                                        <li><Link to="product-sticky.html">Sticky Info</Link></li>
                                                        <li><Link to="product-sidebar.html">Boxed With Sidebar</Link></li>
                                                        <li><Link to="product-fullwidth.html">Full Width</Link></li>
                                                        <li><Link to="product-masonry.html">Masonry Sticky Info</Link></li>
                                                    </ul>
                                                </div>{/* End .menu-col  */}
                                            </div>{/* End .col-md-6  */}

                                            <div className="col-md-6">
                                                <div className="banner banner-overlay">
                                                    <Link to="category.html">
                                                        <img src="assets/images/menu/banner-2.jpg" alt="Banner" />

                                                        <div className="banner-content banner-content-bottom">
                                                            <div className="banner-title text-white">New Trends<br /><span><strong>spring 2019</strong></span></div>{/* End .banner-title  */}
                                                        </div>{/* End .banner-content  */}
                                                    </Link>
                                                </div>{/* End .banner  */}
                                            </div>{/* End .col-md-6  */}
                                        </div>{/* End .row  */}
                                    </div>{/* End .megamenu megamenu-sm  */}