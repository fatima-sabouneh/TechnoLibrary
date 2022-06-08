import React,{useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import {AiFillStar, AiOutlineStar, AiFillHeart, AiOutlineEye} from 'react-icons/ai';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { variables } from '../../Variables/Variables';

const AuthorDetails = () => {
  const [author, setAuthor] = useState([]);
  const uid = useParams();
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

      const GetAuthor = async() => {
        await fetch(variables.API_URL + "Author/GetAuthor/" + uid.id, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        })
        .then((Response) => {
            if (Response.ok) return Response.json();
            else throw Error("Did Not Receive expected data");
        })
        .then((Result) => {
          setAuthor(Result);
        })
        console.log(author)
    }

    // Wishlist btn animation
  function WishlistAn(e){
    if(e.target.className === "wishlistBtn"){
          e.target.classList.remove("wishlistBtn");
          e.target.classList.add("in-wishlist");
        }
        else{
          e.target.classList.remove("in-wishlist");
          e.target.classList.add("wishlistBtn");
        }
  }
    useEffect(() => {
        document.title = "Techno - Author Details";
        GetAuthor();
      }, [])
  return (
    <div className='afterHeader'>
        <div className='TopBox'>
            <ul className='Path'>
                <li><Link to="/">Home </Link></li>/
                <li className='Name'> {author.authorName}</li>
            </ul>
        </div>
        <div className='container AuthorDetails'>
            <div className='row mb-3'>
                <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 Profile'>
                    <img src='../images/auth.jpg' />
                    {/* <img src={variables.PHOTO_URL + u.picturePath} alt='author'/> */}
                </div>
                <div className='col-12 col-sm-6 col-md-8 col-lg-9 col-xl-10 Info'>
                    <div className='row mb-1'>
                        <label className='Name'>{author.authorName}</label>
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
                        <label className='Books'>She has <span>{author.bookNumbers}</span> books</label>
                    </div>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='Bibliography'>
                    <h4><strong>Bibliography</strong></h4>
                    <p>{author.bibliography} </p>
                </div>
            </div>
            <div className='row mt-3 mb-4 text-center'>
                <label className='TopLabel'>Books of Author</label>
            </div>
            <div className='row mb-4'>
              <OwlCarousel {...owlOptions} className="owl-theme" id='HomeOwl'>
                <div class="item">
                  <div className='card HomeOwlStyle'>
                      <div className='card-img-top'>
                        <Link to="/BookDetails">
                          <img src='../images/book2.jpg' alt='book'/>
                        </Link>
                      </div>
                      <div className='card-body'>
                      <Link to="/BookDetails">
                        <div className='row mt-1'>
                          <label className='Category'>Category Name</label>
                        </div>
                        <div className='row'>
                          <label className='Name'>Book Name</label>
                        </div>
                        </Link>
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
                        </div>
                        <div className='DisplayHover'>
                          <div className="wishlistBtn" onClick={(e) => WishlistAn(e)}></div>
                          {/* <br/> */}
                          <button type='button'className="eyeBtn" ><AiOutlineEye/></button>
                        </div>
                      </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
        </div>
    </div>
  )
}

export default AuthorDetails