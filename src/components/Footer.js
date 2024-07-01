import { Link } from "react-router-dom";
const Footer = () => {
    return ( <>
     {/* <!-- Footer --> */}
            <footer className="bg-light text-center text-lg-start mt-4">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Happy Sprouts</h5>
                            <p>Find the perfect product for every occasion at HappySprouts.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">links</h5>
                            <ul className="list-unstyled mb-0">
                                    <li className="nav-item">
                                      <Link className="nav-Link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-Link" to="about">About Us</Link>
                                      </li>
                                      <li className="nav-item">
                                        <Link className="nav-Link" to="product">Products</Link>
                                      </li>
                                    <li className="nav-item">
                                      <Link className="nav-Link" to="gallery">Gallery</Link>
                                    </li>
                                    <li className="nav-item">
                                      <Link className="nav-Link" to="contact">Contact Us</Link>
                                    </li>
                                    <li className="nav-item">
                                      <Link className="nav-Link" to="#loginModal" data-bs-toggle="modal" data-bs-target="#loginModal">Login</Link>
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2020 HappySprouts. All Rights Reserved.
                </div>
            </footer>
    {/* <!-- Footer --> */}
    </> );
}
 
export default Footer;
