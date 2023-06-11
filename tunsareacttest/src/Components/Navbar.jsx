import React from 'react';
import tunsalogo from '../Assets/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





const Navbar = () => {
 
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img
        className='navimg'
          src={tunsalogo} 
        
          left="20"
          height="45"
          alt="TUNSALogo"
          loading="lazy"
        />
      </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
 
    
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
      </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <FontAwesomeIcon icon="fa-light fa-magnifying-glass" beat />

    </form>
    <div class="d-flex align-items-center">
  
  <a class="text-reset me-3" href="#">
    <i class="fas fa-shopping-cart"></i>
  </a>
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <button class="nav-link" href="#">Join Us</button>
        </li>
        <li class="nav-item">
          <button class="nav-link text-info" href="#">Donate</button>
        </li>
      
      </ul>

  

 
</div>

</div>
  
  
</nav>
   



   
    
  

   



  );
};

export default Navbar;