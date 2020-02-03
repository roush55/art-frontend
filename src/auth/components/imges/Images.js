import React, { Component } from 'react';
class Images extends Component {
   
    render() { 
        return ( 
            
            <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-interval="10000">
      <img src="https://images.pexels.com/photos/889839/pexels-photo-889839.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-interval="2000">
      <img src="https://images.pexels.com/photos/3354675/pexels-photo-3354675.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src='https://images.pexels.com/photos/1340502/pexels-photo-1340502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' className="d-block w-100" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

            
         );
    }
}
 
export default Images;
