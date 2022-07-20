
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { FilterContext } from '../context/MyContext';

const SearchQuery = () => {
    const { setSearchLetters } = useContext(FilterContext)

    return (
        <div className="header-search">
            <Link to="#" className="search-toggle" role="button"><i className="icon-search"></i></Link>
            <form >
                <div className="header-search-wrapper">
                    <label htmlFor="q" className="sr-only">Search</label>
                    <input onChange={(e) => setSearchLetters(e.target.value)} type="search" className="form-control" name="q" id="q" placeholder="Search in..." required />
                </div>{/* End .header-search-wrapper  */}
            </form>
        </div>
    );
}

export default SearchQuery;