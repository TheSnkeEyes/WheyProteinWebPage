import React from 'react';
import '../components/bottom_main.css'
import {protein} from '../Helpers/protein_pictures';
function bottom_main() {
  return (
    <div className='bottom_main'>
        <div className='image'>
            <img src={protein.image1}></img>  
        </div>
        <div>
          <h3>Gold Standart 100%</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea at, ex numquam ut odio aperiam, consequatur, tenetur illum tempora officiis nulla quam vitae commodi nesciunt impedit aliquid laudantium. Voluptatum, sunt.</p>  
        </div>
        
        <button>Take Supplement</button>
    </div>
  )
}

export default bottom_main
