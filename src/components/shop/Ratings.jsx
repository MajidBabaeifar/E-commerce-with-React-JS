const Ratings = ({product}) => {
    return (
        <div className="ratings-container">
            <div className="ratings">
                <div className="ratings-val" style={{ width: `${product.ratings * 20}%` }}></div>{/* End .ratings-val */}
            </div>{/* End .ratings */}
            <span className="ratings-text">( 2 Reviews )</span>
        </div>
    );
}

export default Ratings;