import React from 'react';
import TunsaASTRO from '../Assets/astro.png'
import TunsaMEET from '../Assets/meetimage.jpg'
import './Image.css'
import '../App.css'



const Image = () => {
 
  return (
    <div className='img-fluid'>
    <div >
    <img 
      className='float-right'
      src={TunsaASTRO}
      height={300}
      alt="TunsaASTRO"
      loading="lazy" 
      />
  </div>

<div className="post">
      <div className="image">
        
          <img className='imagemeet' src={TunsaMEET} alt="tunsameet"/>
    
      </div>
      <div className="texts">
      
        <h3>Lorem ipsum is simply dummy text </h3>
       
        <p className="info">
          <a className="author">wala</a>
          <time>26/04/2023</time>
        </p>
        <p className="summary">Lorem ipsum dolor sit amet. Qui voluptatem magni et tenetur repellat aut iste cumque. Ut eligendi distinctio 
             non itaque voluptatum ut tempore quas aut necessitatibus rerum. </p>
      </div>
    </div>


</div>
  );

  }

export default Image