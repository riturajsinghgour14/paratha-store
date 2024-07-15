import React from 'react'
import img1 from '../assets/img-1.jpg'
import img2 from'../assets/img-2.webp'
import img3 from'../assets/img-3.jpg'
import img4 from '../assets/img-4.jpg'
import plain from '../assets/plain.jpg'
import sev from '../assets/sev.jpg'
import methi from '../assets/methi.jpg'
import veg from '../assets/veg.jpg'
import gobhi from '../assets/gobhi.jpg'
import aloo from '../assets/aloo.jpg'
import cheese from '../assets/cheese.jpg'
import corn from '../assets/corn.jpg'

const Home = () => {
  return (

 <div className='container-fliud'>
      <div id="carouselExample" class="carousel slide ">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1}class="d-block w-100" data-slide-to="0" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" data-slide-to="0" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" data-slide-to="0" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img4} class="d-block w-100"  data-slide-to="0" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div className="container-fluid" id='ab'>
   <div className='shadow-lg'>
   <h1 className='text-center' id='abo'>About</h1>
   <h6 className='text-center' id='about'>Welcome to the best Paratha store in town. <br />
    We serve authentic and delicious parathas made with fresh ingredients. <br />
    Visit us to enjoy a variety of flavors.</h6>
   </div>
</div>

<div className="container" id='container'> 
  <h1 className='text-center p-5'>Our Popular Parathas</h1>
<div class="row g-5">
    <div class=" col-md-3 col-sm-12" >
    <div className="card p-3 text-dark text-center shadow-lg">
    <img src={plain} class="card-img-top" alt="..."/>
         <h5 className='text-danger p-1'>Plaint Paratha</h5>
          <span className='text-warning'>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          </span>
          <span>
            <h3><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>40 <i class="fa-solid fa-cart-shopping"></i></h3>
          </span>
       </div>
    </div>

    <div class=" col-md-3 col-sm-12" >
    <div className="card p-3 text-dark text-center shadow-lg">
    <img src={aloo} class="card-img-top" alt="..."/>
         <h5 className='text-danger p-1'>Aloo Paratha</h5>
          <span className='text-warning'>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          </span>
          <span>
            <h3><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>50 <i class="fa-solid fa-cart-shopping"></i></h3>
          </span>
       </div>
    </div>

    <div class=" col-md-3 col-sm-12 " >
    <div className="card p-3 text-center text-dark shadow-lg">
    <img src={veg} class="card-img-top" alt="..."/>
         <h5 className='text-danger p-1'>Veg Paratha</h5>
          <span className='text-warning'>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          </span>
          <span>
            <h3><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>60 <i class="fa-solid fa-cart-shopping"></i></h3>
          </span>
       </div>
    </div>
    <div class=" col-md-3 col-sm-12 " >
    <div className="card p-3 text-dark text-center shadow-lg">
    <img src={cheese} class="card-img-top" alt="..."/>
         <h5 className='text-danger p-1'>Cheese Paratha</h5>
          <span className='text-warning'>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          </span>
          <span>
            <h3><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>80 <i class="fa-solid fa-cart-shopping"></i></h3>
          </span>    
       </div>
    </div>
    </div>

 {/* Row 2  */}

    <div class="row my-5 g-5">
    <div class=" col-md-3 col-sm-12" >
    <div className="card p-3 text-dark text-center shadow-lg">
    <img src={corn} class="card-img-top" alt="..."/>
         <h5 className='text-danger p-1'>Corn Paratha</h5>
          <span className='text-warning'>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          </span>
          <span>
            <h3><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>90 <i class="fa-solid fa-cart-shopping"></i></h3>
          </span>
       </div>
    </div>

    <div class=" col-md-3 col-sm-12" >
    <div className="card p-3 text-dark text-center shadow-lg">
    <img src={methi} class="card-img-top" alt="..."/>
         <h5 className='text-danger p-1'> Methi Paratha</h5>
          <span className='text-warning'>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          </span>
          <span>
            <h3><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>100 <i class="fa-solid fa-cart-shopping"></i></h3>
          </span>
       </div>
    </div>
     
    <div class=" col-md-3 col-sm-12" >
    <div className="card p-3 text-dark text-center shadow-lg">
    <img src={gobhi} class="card-img-top" alt="..."/>
         <h5 className='text-danger p-1'> Gobhi Paratha</h5>
          <span className='text-warning'>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          </span>
          <span>
            <h3><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>10 <i class="fa-solid fa-cart-shopping"></i></h3>
          </span>
       </div>
    </div>

    <div class=" col-md-3 col-sm-12" >
    <div className="card p-3 text-dark text-center shadow-lg">
    <img src={sev} class="card-img-top" alt="..."/>
         <h5 className='text-danger p-1'> Sev Paratha</h5>
          <span className='text-warning'>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          </span>
          <span>
            <h3><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>110 <i class="fa-solid fa-cart-shopping"></i></h3>
          </span>
       </div>
    </div>
  
  </div>
</div>


<div className="container-fliud bg-warning my-10  ">
    <div className='display-3 p-5 text-center' id="fonth">
    We Provide Best Service <br />for our Customer
    </div>
     <div className='display-6 text-center' id="font">
     Foodie Restaurant and Enjoy The Food
     </div>
</div>

  <div>

  <footer class="footer" >
    <div class="container">
      <div class="row">
       {/* Contact Info  */}
        <div class="col-md-6">
          <h5>Contact Us</h5>
          <ul class="list-unstyled">
            <li><i class="fa fa-map-marker"></i> 123 Paratha Street, Indore</li>
            <li><i class="fa fa-phone"></i> (123) 456-7890</li>
            <li><i class="fa fa-envelope"></i> info@parathastore.com</li>
          </ul>
        </div>
        {/* Social Media Links */}
        <div class="col-md-6">
          <h5>Follow Us</h5>
          <div class="social-icons" >
            <a href="#"><i class="fa-brands fa-facebook-f" id='icon'></i></a>
            <a href="#"><i class="fa-brands fa-twitter" id='icon'></i></a>
            <a href="#"><i class="fa-brands fa-instagram" id='icon'></i></a>
            <a href="#"><i class="fa-brands fa-youtube" id='icon'></i></a>
          </div>
        </div>
      </div>
      <hr/>
      <div class="row">
        <div class="col-md-12 text-center">
          <p class="mb-0">&copy; 2024 Paratha Store. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
  </div>

 </div>


    
  )
}

export default Home
