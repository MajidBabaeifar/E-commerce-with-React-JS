import data from './Data/Data.json'
import { useContext } from 'react';
import { PaginationContext } from "./context/MyContext";

const Pagination = () => {
    const { currentPage, setCurrentPage } = useContext(PaginationContext)
    const numberOfPages = Math.ceil(data.length / 16)
    const emptyArrayForMapping = [...Array(numberOfPages)]
    const nextPage = () => {
        if (currentPage === numberOfPages) {
            return
        } else {
            setCurrentPage(prev => prev + 1)
        }
    }
    const previousPage = () => {
        if (currentPage === 1) {
            return
        } else {
            setCurrentPage(prev => prev - 1)
        }
    }
    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                <li
                    className={currentPage == 1 ? "page-item disabled" : "page-item"}
                    onClick={previousPage}
                >
                    <div className="page-link page-link-prev">
                        <span aria-hidden="true"><i className="icon-long-arrow-left"></i></span>Prev
                    </div>
                </li>
                {emptyArrayForMapping.map((_, i) => (
                    <li
                        className={currentPage == i + 1 ? "page-item active" : "page-item"}
                        onClick={() => setCurrentPage(i + 1)}
                    >
                        <span className="page-link" >{i + 1}</span>
                    </li>
                ))}
                <li className={currentPage == numberOfPages ? "page-item disabled" : "page-item"}>
                    <div
                        className="page-link page-link-next"
                        onClick={nextPage}
                    >
                        Next <span aria-hidden="true"><i className="icon-long-arrow-right"></i></span>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;