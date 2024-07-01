import { Link } from "react-router-dom";

const Header = () => {
    return ( <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top mb-4">
    <Link className="navbar-brand" to="/">HappySprouts</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/product">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/gallery">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#loginModal" data-bs-toggle="modal" data-bs-target="#loginModal">Login</Link>
        </li>
      </ul>
    </div>
</nav>
{/* <!-- Login Modal --> */}
<div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="loginModalLabel">Login</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    </div>
</div>
{/* <!-- Login Modal --> */}
    </> );
}
 
export default Header;