const NewsLetter = () => {
    return (
        <div className="cta bg-image bg-dark pt-4 pb-5 mb-0"  >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-10 col-md-8 col-lg-6">
                        <div className="cta-heading text-center">
                            <h3 className="cta-title text-white">Subscribe for Our Newsletter</h3>{/* End .cta-title  */}
                            <p className="cta-desc text-white">and receive <span className="font-weight-normal">$20 coupon</span> for first shopping</p>{/* End .cta-desc  */}
                        </div>{/* End .text-center  */}

                        <form action="#">
                            <div className="input-group input-group-round">
                                <input type="email" className="form-control form-control-white" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                                <div className="input-group-append">
                                    <button className="btn btn-white" type="submit"><span>Subscribe</span><i className="icon-long-arrow-right"></i></button>
                                </div>{/* .End .input-group-append  */}
                            </div>{/* .End .input-group  */}
                        </form>
                    </div>{/* End .col-sm-10 col-md-8 col-lg-6  */}
                </div>{/* End .row  */}
            </div>{/* End .container  */}
        </div>
    );
}

export default NewsLetter;
