import React from 'react';
import {protein} from '../Helpers/protein_pictures';
import '../components/Main.css'

function Main() {
  return (
    <div className='Main'>
      <div className="main_paragraph">
        <h1>Dealing <span className='with_letter'>With</span><span className='vigo_letter'>VIGO</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, optio. Ratione inventore distinctio blanditiis, repellat amet sint reiciendis velit expedita unde? Fugit sint dicta sapiente tempore sequi blanditiis minima quas.</p>
        <button>Buy Supplements </button>
      </div>
      <div className="image_section">
        <div className='back_img'>
            <img src={protein.image2} alt="" />
        </div>
        <div className='front_img'>
            <img src={protein.image1} alt="" />
        </div>
        <div className='second_back_img'>
            <img src={protein.image3} alt="" />
        </div>
      </div>    
    </div>
  )
}

export default Main;
