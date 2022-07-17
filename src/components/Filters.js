import PriceFilter from './PriceFilter';
import { useContext } from 'react';
import { FilterContext } from './context/MyContext';

const Filters = () => {
    const { value1, setValue1, category, setCategory, handleFilter, noOfMen, noOfWoman, noOfKids } = useContext(FilterContext)

    return (
        <aside className="col-lg-3 order-lg-first">
            <div className="sidebar sidebar-shop">
                <div className="widget widget-clean">
                    <label >Filters:</label>
                    <p className="sidebar-filter-clear" onClick={() => {
                        setValue1([0, 500])
                        setCategory({
                            isWoman: true,
                            isMen: true,
                            isKids: true,
                            sortBy: ""
                        })
                    }
                    }>Clean All</p>
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
                                        <input onChange={(e) => handleFilter(e)} type="checkbox" name="isWoman" className="custom-control-input" id="woman" checked={category.isWoman} />
                                        <label className="custom-control-label" htmlFor="woman">Women</label>
                                    </div>{/* End .custom-checkbox */}
                                    <span className="item-count">{noOfWoman}</span>
                                </div>{/* End .filter-item */}

                                <div className="filter-item">
                                    <div className="custom-control custom-checkbox">
                                        <input onChange={(e) => handleFilter(e)} type="checkbox" name="isMen" checked={category.isMen} className="custom-control-input" id="men" />
                                        <label className="custom-control-label" htmlFor="men">Men</label>
                                    </div>{/* End .custom-checkbox */}
                                    <span className="item-count">{noOfMen}</span>
                                </div>{/* End .filter-item */}

                                <div className="filter-item">
                                    <div className="custom-control custom-checkbox">
                                        <input onChange={(e) => handleFilter(e)} type="checkbox" name="isKids" checked={category.isKids} className="custom-control-input" id="kids" />
                                        <label className="custom-control-label" htmlFor="kids">Kids</label>
                                    </div>{/* End .custom-checkbox */}
                                    <span className="item-count">{noOfKids}</span>
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
                                {/* <div>
                            <label htmlFor="price">minPrice</label>
                            <input type="range" id="price" name="cowbell"
                                min="0" max="100" value="90" step="10" />
                            <label htmlFor="price">maxPrice</label>
                        </div> */}
                                <PriceFilter value1={value1} setValue1={setValue1} />
                            </div>{/* End .filter-price */}
                        </div>{/* End .widget-body */}
                    </div>{/* End .collapse */}
                </div>{/* End .widget */}
            </div>{/* End .sidebar sidebar-shop */}
        </aside>
    )
}

export default Filters;