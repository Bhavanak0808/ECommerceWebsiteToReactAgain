const Home = () => {
    return ( <>
    <hr></hr>
<header className="bg-secondary text-white text-center py-5">
    <h1>Welcome to Our HappySprouts Store</h1>
    <p>Find the best products here!</p>
    <div className="marquee">
        <marquee>Enjoy amazing deals on baby and kids products! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Enjoy up to 50% off on selected items! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Enjoy amazing deals on baby and kids products! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Enjoy up to 50% off on selected items! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Enjoy amazing deals on baby and kids products! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Enjoy up to 50% off on selected items! 
        </marquee>
    </div>
</header>
{/* <!-- Header -->
<!-- Carousel --> */}
<hr></hr>
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img src="./images/Screenshot 2024-05-31 065133.png" className="d-block  w-100 " alt="Screenshot 2024-05-31 065133.png" height="300px" width="100%"/>
        </div>
        <div className="carousel-item">
            <img src="./images/Screenshot 2024-05-31 065310.png" className="d-block  w-100" alt="Screenshot 2024-05-31 065310.png" height="300px" width="100%"/>
        </div>
        <div className="carousel-item">
            <img src="./images/Screenshot 2024-05-31 065343.png" className="d-block  w-100" alt="Screenshot 2024-05-31 065343.png" height="300px" width="100%"/>
        </div>
        <div className="carousel-item">
            <img src="./images/Screenshot 2024-05-31 065421.png" className="d-block  w-100" alt="Screenshot 2024-05-31 065421.png" height="300px" width="100%"/>
        </div>
        <div className="carousel-item">
            <img src="./images/Screenshot 2024-05-31 065937.png" className="d-block  w-100" alt="Screenshot 2024-05-31 065937.png" height="300px" width="100%"/>
        </div>
    </div>
    <button className="carousel-control-prev" type="button"  data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
</div>
<hr></hr>
{/* <!-- Content --> */}
<div className="container mt-5">
    <h2>Featured Products</h2>
    <div className="row">
        <div className="col-md-10">
            <div className="row mt-3">
                {/* <!-- Product Card 1 --> */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="./images/p1.jpg" className="card-img-top" alt="Product 1"/>
                        <div className="card-body">
                            <h5 className="card-title">Baby Onesie</h5>
                            <p className="card-text">Soft and comfortable baby onesie.</p>
                            <p className="card-text">₹ 500.00</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Product Card 2 --> */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="./images/p2.jpg" className="card-img-top" alt="Product 2"/>
                        <div className="card-body">
                            <h5 className="card-title">Baby Stroller</h5>
                            <p className="card-text">Lightweight and easy to maneuver.</p>
                            <p className="card-text">₹ 2,000.00</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Product Card 3 --> */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="./images/p3.jpg" className="card-img-top" alt="Product 3"/>
                        <div className="card-body">
                            <h5 className="card-title">Baby Bottle</h5>
                            <p className="card-text">BPA-free and leak-proof baby bottle.</p>
                            <p className="card-text">₹ 100.00</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Product Card 4 --> */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="./images/p4.jpg" className="card-img-top" alt="Product 4"/>
                        <div className="card-body">
                            <h5 className="card-title">Baby Crib</h5>
                            <p className="card-text">Safe and comfortable baby crib.</p>
                            <p className="card-text">₹ 3,000.00</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Product Card 5 --> */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="./images/p5.jpg" className="card-img-top" alt="Product 5"/>
                        <div className="card-body">
                            <h5 className="card-title">Baby Toy Set</h5>
                            <p className="card-text">Colorful and educational toy set.</p>
                            <p className="card-text">₹ 350.00</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Product Card 6 --> */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="./images/p6.jpg" className="card-img-top" alt="Product 6"/>
                        <div className="card-body">
                            <h5 className="card-title">Baby Blanket</h5>
                            <p className="card-text">Warm and cozy baby blanket.</p>
                            <p className="card-text">₹ 200.00</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Product Card 7 --> */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="./images/p7.jpg" className="card-img-top" alt="Product 7"/>
                        <div className="card-body">
                            <h5 className="card-title">Baby Monitor</h5>
                            <p className="card-text">High-quality audio and video baby monitor.</p>
                            <p className="card-text">₹ 900.00</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Product Card 8 --> */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="./images/p8.jpg" className="card-img-top" alt="Product 8"/>
                        <div className="card-body">
                            <h5 className="card-title">Baby Carrier</h5>
                            <p className="card-text">Ergonomic and comfortable baby carrier.</p>
                            <p className="card-text">₹ 450.00</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Product Card 9 --> */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="./images/p9.jpg" className="card-img-top" alt="Product 9"/>
                        <div className="card-body">
                            <h5 className="card-title">Baby Bath Tub</h5>
                            <p className="card-text">Safe and non-slip baby bath tub.</p>
                            <p className="card-text">₹ 1,500.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Product Categories --> */}
        <div className="col-md-2">
            <h5 className="mt-3">Product Categories</h5>
            <ul className="list-group">
                <li className="list-group-item">Clothing</li>
                <li className="list-group-item">Toys</li>
                <li className="list-group-item">Feeding</li>
                <li className="list-group-item">Nursery</li>
                <li className="list-group-item">Gear</li>
                <li className="list-group-item">Health & Safety</li>
                <li className="list-group-item">Toiletries</li>
            </ul>
        </div>
        {/* <!-- Product Cards --> */}
    </div>
</div>
{/* <!-- Content --> */}
    </> );
}
 
export default Home;