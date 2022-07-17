
import { Link } from 'react-router-dom';

const SearchQuery = () => {

    return (
        <div className="header-search">
            <Link to="#" className="search-toggle" role="button"><i className="icon-search"></i></Link>
            <form >
                <div className="header-search-wrapper">
                    <label htmlFor="q" className="sr-only">Search</label>
                    <input type="search" className="form-control" name="q" id="q" placeholder="Search in..." required />
                </div>{/* End .header-search-wrapper  */}
            </form>
        </div>
    );
}

export default SearchQuery;