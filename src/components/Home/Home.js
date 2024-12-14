import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import pic1 from '../../assets/pexels-christa-grover-977018-1909656.jpg'
import pic2 from '../../assets/pexels-kelly-1179532-2869215.jpg'
import pic3 from '../../assets/pexels-lamiko-3616760.jpg'
import video from '../../assets/video/bgvideoHeroSection.mp4'
import logo from '../../assets/download.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Home() {


  const animation =()=>{
    AOS.init();
  }
  animation();
 


  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-center d-flex flex-column justify-content-center align-items-center">
        <h1 className="mb-4">Welcome to <span style={{color:'red'}}>Tiles</span> Showroom</h1>
        <p className="mb-4">Discover the finest <span style={{color:'red',fontWeight:'700'}}>Tiles</span> for every space in your home or office.</p>
        <Link to="/catalog" className="btn btn-dark buttonExplore">Explore Our Tiles</Link>
      </section>

      {/* Slider Section */}
      <section className="slider-section d-flex justify-content-center align-items-center">
        <div className="container">
        <h1 style={{color:'black',textAlign:'center'}}>Our Design</h1>

          <div id="tileCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={pic1} className="d-block w-100" alt="Slider 1" />
              </div>
              <div className="carousel-item">
                <img src={pic2} className="d-block w-100" alt="Slider 2" />
              </div>
              <div className="carousel-item">
                <img src={pic3} className="d-block w-100" alt="Slider 3" />
              </div>
              <div className="carousel-item">
                <img src="https://images.pexels.com/photos/3416547/pexels-photo-3416547.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="Slider 4" />
              </div>
              <div className="carousel-item">
                <img src="https://images.pexels.com/photos/29690217/pexels-photo-29690217/free-photo-of-abstract-red-railings-on-green-tiled-wall.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="Slider 5" />
              </div>
              <div className="carousel-item">
                <img src="https://images.pexels.com/photos/29690174/pexels-photo-29690174/free-photo-of-bright-abstract-yellow-and-green-geometric-facade.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="Slider 6" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#tileCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#tileCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* Card Section */}
      <section className="card-section d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <h2 className="text-center mb-4">Our Popular Tiles</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="https://images.pexels.com/photos/29738131/pexels-photo-29738131/free-photo-of-interlocking-concrete-and-grass-paver-design.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="Tile 1" />
                <div className="card-body">
                  <h5 className="card-title">Floor Tile A</h5>
                  <p className="card-text">High-quality tiles for your floor.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://images.pexels.com/photos/137625/pexels-photo-137625.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="Tile 2" />
                <div className="card-body">
                  <h5 className="card-title">Wall Tile B</h5>
                  <p className="card-text">Elegant tiles for your walls.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://images.pexels.com/photos/29680672/pexels-photo-29680672/free-photo-of-intricate-red-and-beige-brick-wall-pattern.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="Tile 3" />
                <div className="card-body">
                  <h5 className="card-title">Outdoor Tile C</h5>
                  <p className="card-text">Durable tiles for outdoor spaces.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <h2 className="text-center mb-4">What Our Customers Say</h2>
          <div className="row">
            <div className="col-md-6">
              <blockquote className="blockquote">
                <p className="mb-3">The tiles are amazing! My living room looks fantastic.</p>
                <footer className="blockquote-footer">Sundhar_Sunil</footer>
              </blockquote>
            </div>
            <div className="col-md-6">
              <blockquote className="blockquote">
                <p className="mb-3">Great quality and fast delivery. Highly recommend!</p>
                <footer className="blockquote-footer">Vaanmathi</footer>
              </blockquote>
            </div>
            <div className="col-md-6">
              <blockquote className="blockquote">
                <p className="mb-3">Great quality  Highly recommend!</p>
                <footer className="blockquote-footer">Sunitha_Kumari</footer>
              </blockquote>
            </div><div className="col-md-6">
              <blockquote className="blockquote">
                <p className="mb-3"> fast delivery. Highly recommend!</p>
                <footer className="blockquote-footer">Kumaravel_Murugan</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="About" className="about-section d-flex flex-column justify-content-center align-items-center">
  <div className="container position-relative">
    <video className="background-video" autoPlay loop muted>
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="overlay-content">
      <h2 className="text-center mb-4">About Us</h2>
      <p className="text-center mb-4">
        We are a leading tile showroom offering a wide variety of tiles for all your needs. With years of experience in the industry, we are committed to providing the best quality and service.
      </p>
      <div className="row">
        <div className="col-md-6 col-12 mb-3">
          <img
            src="https://images.pexels.com/photos/8134845/pexels-photo-8134845.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="img-fluid rounded shadow aboutPic"
            alt="Showroom"
          />
        </div>
        <div className="col-md-6 col-12 mb-3">
          <img
            src="https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="img-fluid rounded shadow aboutPic"
            alt="Tiles"
          />
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Contact Section */}
          <section id='Contact' className="contact-section d-flex align-items-center">
            <div className="container">
              <div className="row align-items-center">
                {/* Logo */}
                <div className="text-center mb-4">
                  <img src={logo} alt="Logo" className="contact-logo" />
                </div>
                {/* Image Section */}
                <div className="col-md-6 mb-4 mb-md-0">
                  <img 
                    src="https://images.pexels.com/photos/4156284/pexels-photo-4156284.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Contact Us" 
                    className="img-fluid rounded shadow aboutImage"
                  />
                </div>
                {/* Form Section */}
                <div className="col-md-6">
                  <h2 className="text-center mb-4">Get in Touch</h2>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Your Name" 
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="Your Email" 
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea 
                        className="form-control" 
                        id="message" 
                        rows="4" 
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>


    </div>
  );
}

export default Home;
