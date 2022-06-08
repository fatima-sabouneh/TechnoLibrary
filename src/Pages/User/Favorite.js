import React,{useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {AiFillStar, AiOutlineStar, AiFillHeart, AiOutlineEye} from 'react-icons/ai';
import {BsPersonCircle} from 'react-icons/bs';
import {Tabs, Tab} from 'react-bootstrap';

const Favorite = () => {
    const owlOptions = {
        margin: 5,
        responsiveClass: true,
        dots: false,
        nav: true,
        loop: true,
        autoplay:true,
        autoplayTimeout:8000,
        autoplayHoverPause:false,
        responsive: {
          0: {
            items: 1,
          },
          400: {
            items: 1,
          },
          500: {
            items: 2,
          },
          600: {
            items: 2,
          },
          700: {
            items: 2,
          },
          800: {
            items: 3,
          },
          900: {
            items: 3,
          },
          1000: {
            items: 4,
          },
          1200: {
              items: 5,
          }
        },
      };
      useEffect(() => {
        document.title = "Techno - Favorites"
      }, [])
  return (
        <div className='Fav afterHeader'>
        <h3 className='TopLabel text-center mb-5'>Favorite List</h3>
        <div className='row mb-2'>
           <OwlCarousel {...owlOptions} className="owl-theme" id='HomeOwl'>
             <div class="item">
               <div className='card HomeOwlStyle'>
                  <div className='card-img-top'>
                    <img src='./images/book2.jpg'/>
                  </div>
                  <div className='card-body'>
                    <div className='row mt-1'>
                      <label className='Category'>Category Name</label>
                    </div>
                    <div className='row'>
                      <label className='Name'>Book Name</label>
                    </div>
                    <div className='row'>
                      <ul className='Stars'>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiOutlineStar/></li>
                      </ul>
                    </div>
                    <div className='row'>
                      <label className='Free'>Free</label>
                      <button className='removeBtn' name='remove'>Remove</button>
                    </div>
                    <div className='DisplayHover ExtraHoverFavorite'>
                      <button type='button'><AiFillHeart/></button>
                      <br/>
                      <button type='button'><AiOutlineEye/></button>
                    </div>
    
                  </div>
               </div>
             </div>
           </OwlCarousel>
         </div>
        
       </div>  
           
  )
}

export default Favorite