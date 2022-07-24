import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer footer-dark">

            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-6">
                            <div className="widget widget-about">
                                <Link to="/" className="logo">
                                    <h6 className="text-uppercase --logo">majid babaeifar</h6>
                                </Link>
                                <p> The HTML and CSS presented by Molla, the react functionality added by Majid Babaeifar. </p>
                            </div>{/* End .widget about-widget  */}
                        </div>{/* End .col-sm-6 col-lg-3  */}
                        <div className="col-sm-6 col-lg-6 social-icons d-flex justify-content-center">
                            <a href="https://www.linkedin.com/in/majid-babaeifar-781919245" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                            <a href="https://www.linkedin.com/in/majid-babaeifar-781919245" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                            <a href="https://www.linkedin.com/in/majid-babaeifar-781919245" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/majid-babaeifar-781919245" className="social-icon" title="Youtube" target="_blank"><i className="icon-youtube"></i></a>
                            <a href="https://www.linkedin.com/in/majid-babaeifar-781919245" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></a>
                        </div>{/* End .soial-icons  */}
                    </div>{/* End .row  */}
                </div>{/* End .container  */}
            </div>{/* End .footer-middle  */}

            <div className="footer-bottom">
                <div className="container">
                    <p className="footer-copyright">Copyright © 2022. All Rights Reserved.</p>{/* End .footer-copyright  */}
                </div>{/* End .container  */}
            </div>{/* End .footer-bottom  */}
        </footer>
    );
}

export default Footer;