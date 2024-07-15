import React from 'react'
import plain from '../assets/plain.jpg'
import aloo from '../assets/aloo.jpg'
import veg from '../assets/veg.jpg'
import cheese from '../assets/cheese.jpg'
import corn from '../assets/corn.jpg'
import methi from '../assets/methi.jpg'
import gobhi from '../assets/gobhi.jpg'
import sev from '../assets/sev.jpg'
import lacha from '../assets/lacha.jpg'
import palak from '../assets/palak.jpg'
import onion from '../assets/onion.jpg'
import paner from '../assets/paner.jpg'



const Menu = () => {
  return (
    <div  className='container p-3'>
        <h1 className="text-center p-4">Paratha Menu</h1>
        <div class="container text-center">
  {/* Row 1 */}
  <div class="row g-5">
    <div class=" col-md-3 col-sm-12" >
    <div className="card p-3 text-dark text shadow-lg">
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
    <div className="card p-3 text-dark shadow-lg">
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
    <div className="card p-3 text-dark shadow-lg">
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
    <div className="card p-3 text-dark shadow-lg">
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
    <div className="card p-3 text-dark text shadow-lg">
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
    <div className="card p-3 text-dark text shadow-lg">
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
    <div className="card p-3 text-dark  shadow-lg">
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
            <h3><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>100 <i class="fa-solid fa-cart-shopping"></i></h3>
          </span>
       </div>
    </div>

    <div class=" col-md-3 col-sm-12" >
    <div className="card p-3 text-dark  shadow-lg">
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
    
{/* Roe 3 */}

  <div class="row my-5 g-5">
    <div class=" col-md-3 col-sm-12" >
    <div className="card p-3 text-dark  shadow-lg">
    <img src={lacha} class="card-img-top" alt="..."/>
         <h5 className='text-danger p-1'>Lacha Paratha</h5>
          <span className='text-warning'>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          </span>
          <span>
            <h3><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>130 <i class="fa-solid fa-cart-shopping"></i></h3>
          </span>
       </div>
    </div>

    <div class=" col-md-3 col-sm-12" >
    <div className="card p-3 text-dark  shadow-lg">
    <img src={palak} class="card-img-top" alt="..."/>
         <h5 className='text-danger p-1'> Palak Paratha</h5>
          <span className='text-warning'>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          </span>
          <span>
            <h3><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>130 <i class="fa-solid fa-cart-shopping"></i></h3>
          </span>
       </div>
    </div>
     
    <div class=" col-md-3 col-sm-12" >
    <div className="card p-3 text-dark  shadow-lg">
    <img src={onion} class="card-img-top" alt="..."/>
         <h5 className='text-danger p-1'> Onion Paratha</h5>
          <span className='text-warning'>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          </span>
          <span>
            <h3><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>130 <i class="fa-solid fa-cart-shopping"></i></h3>
          </span>
       </div>
    </div>

    <div class=" col-md-3 col-sm-12" >
    <div className="card p-3 text-dark  shadow-lg">
    <img src={paner} class="card-img-top" alt="..."/>
         <h5 className='text-danger p-1'> Paner Paratha</h5>
          <span className='text-warning'>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          </span>
          <span>
            <h3><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>150 <i class="fa-solid fa-cart-shopping"></i></h3>
          </span>
       </div>
    </div>
  
  </div>

</div>
    </div>
  )
}

export default Menu;
