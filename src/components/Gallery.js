const Gallery = () => {
    return ( <>
        {/* <!-- Content --> */}
    <header className="bg-primary text-white text-center py-5">
      <h1>Gallery</h1>
      <p>Check out our amazing products</p>
  </header>
  
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img src="./images/i1.jpg" className="card-img-top" alt="Product 1"/>
              <div className="card-body">
                <h5 className="card-title">Product 1</h5>
                <p className="card-text">Accessories for newborns.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img src="./images/i2.jpg" className="card-img-top" alt="Product 2"/>
              <div className="card-body">
                <h5 className="card-title">Product 2</h5>
                <p className="card-text">Baby diapers.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img src="./images/i3.jpg" className="card-img-top" alt="Product 3"/>
              <div className="card-body">
                <h5 className="card-title">Product 3</h5>
                <p className="card-text">Powder milk for baby.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img src="./images/i4.jpg" className="card-img-top" alt="Product 3"/>
              <div className="card-body">
                <h5 className="card-title">Product 4</h5>
                <p className="card-text">baby organic cosmetic for bath.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img src="./images/i5.jpg" className="card-img-top" alt="Product 3"/>
              <div className="card-body">
                <h5 className="card-title">Product 5</h5>
                <p className="card-text">Baby accessories for bath.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* <!-- Content --> */}
    </>);
}
 
export default Gallery;