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
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled mb-0">
                                    <li className="nav-item">
                                      <a className="nav-link" href="index.html">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="about.html">About Us</a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link" href="products.html">Products</a>
                                      </li>
                                    <li className="nav-item">
                                      <a className="nav-link" href="contact.html">Contact Us</a>
                                    </li>
                                    <li className="nav-item">
                                      <a className="nav-link" href="#loginModal" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a>
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