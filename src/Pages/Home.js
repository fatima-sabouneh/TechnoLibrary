import React,{useEffect, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {AiFillStar, AiOutlineStar, AiFillHeart, AiOutlineEye} from 'react-icons/ai';
import {BsPersonCircle} from 'react-icons/bs';
import {Tabs, Tab} from 'react-bootstrap';
import { variables } from '../Variables/Variables';
const Home = () => {
  const [books, setBooks] = useState([]);
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

  // Home slide function
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

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

  function GetBooks() {
    fetch(variables.API_URL + "Book/GetBooks", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": variables.API_URL,
        },
    })
    .then((Response) => {
        if (Response.ok) return Response.json();
        else throw Error("Did Not Receive expected data");
    })
    .then((Result) => {
        setBooks(Result)
    })
}

  useEffect(() => {
    document.title = "Techno - Home";
    GetBooks();
  }, [])
  // console.log(books)
  
  return (
    <div className='container-fluid p-0 afterHeader'>
       <div className='row mt-2'>
           <Carousel id="HomeCarousel" controls={false} indicators={false} >
                <Carousel.Item>
                    <img className="d-block w-100" src="./images/slider.jpg" alt="Home Slider" />
                <Carousel.Caption>
                  <div className='row'>
                    <label className='HomeAuthor'>Book Author</label>
                  </div>
                  <div className='row mt-3'>
                    <label className='HomeBook'>Book Name</label>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-12'>
                      <button type='button' className='HomeSliderBtn'>Read Now</button>
                    </div>
                  </div>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
       </div>
       <div className='container'>
         <section className='reveal'>
          <div className='row mt-3 mb-4'>
            <div className='col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3'>
              <label className='TopLabel'>Top Rating Books</label>
            </div>
            <div className='col-lg-6 col-xl-7 d-none d-lg-block '>
              <hr/>
            </div>
            <div className='col-6 col-sm-6 col-md-6 col-lg-3 col-xl-2'>
              <Link to="#" className="ViewAllBtn">View All Books</Link>
            </div>
          </div>
          <div className='row mb-2'>
            <OwlCarousel {...owlOptions} className="owl-theme" id='HomeOwl'>
              <div class="item">
                <div className='card HomeOwlStyle'>
                    <div className='card-img-top'>
                      <Link to="/BookDetails/1">
                        <img src='./images/book2.jpg' alt='book'/>
                      </Link>
                    </div>
                    <div className='card-body'>
                    <Link to="/BookDetails/1">
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
         </section>
         <section className='reveal'>
          <div className='row mt-5 mb-5'>
            <div className='col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3'>
              <label className='TopLabel'>Top 10 This Week</label>
            </div>
            <div className='col-lg-6 col-xl-7 d-none d-lg-block '>
              <hr/>
            </div>
            <div className='col-6 col-sm-6 col-md-6 col-lg-3 col-xl-2'>
              <Link to="#" className="ViewAllBtn">View All Books</Link>
            </div>
          </div>
          <div  className='row HomeTop10 mb-5'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-9 HomeTop10'>
              <img src='./images/top10.jpg' className='w-100'  alt='book'/>
              <div className='HomeTop10Info text-center'>
                <div className='row'>
                  <label className='HomeAuthor text-dark'>Book Author</label>
                </div>
                <div className='row mt-3'>
                  <label className='HomeBook text-dark'>Book Name</label>
                </div>
                <div className='row mt-3'>
                  <div className='col-12'>
                    <button type='button' className='HomeSliderBtn'>Read Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-2'>
              <div className='row'>
                <div className='col-12 col-sm-6 col-md-6 col-lg-12'>
                  <div className='row mt-5'>
                    <div className='card HomeOwlStyle'>
                      <div className='card-img-top'>
                        <Link to="/BookDetails/1">
                          <img src='./images/book2.jpg'  alt='book'/>
                        </Link>
                      </div>
                      <div className='card-body'>
                      <Link to="/BookDetails/1">
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
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-12">
                  <div className='row mt-5'>
                    <div className='card HomeOwlStyle'>
                      <div className='card-img-top'>
                        <Link to="/BookDetails/1">
                          <img src='./images/book2.jpg'  alt='book'/>
                        </Link>
                      </div>
                      <div className='card-body'>
                      <Link to="/BookDetails/1">
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
                </div>
              </div>
            </div>
          </div>
         </section>
         <section className='reveal'>
          <div className='row mt-3 mb-4 text-center'>
              <label className='TopLabel'>Featured Books</label>
          </div>
          <div className='row'>
            <Tabs defaultActiveKey="Most Viewed" id="HomeTabs" className="mb-3 CenterTabs" fill>
              <Tab eventKey="Most Viewed" title="Most Viewed" className='SingleTab'>
                <OwlCarousel {...owlOptions} className="owl-theme" id='HomeOwl'>
                <div class="item">
                  <div className='card HomeOwlStyle'>
                    <div className='card-img-top'>
                      <Link to="/BookDetails/1">
                        <img src='./images/book2.jpg'  alt='book'/>
                      </Link>
                    </div>
                    <div className='card-body'>
                    <Link to="/BookDetails/1">
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
              </Tab>
              <Tab eventKey="Most Downloaded" title="Most Downloaded">
                <OwlCarousel {...owlOptions} className="owl-theme" id='HomeOwl'>
                <div class="item">
                  <div className='card HomeOwlStyle'>
                    <div className='card-img-top'>
                      <Link to="/BookDetails/1">
                        <img src='./images/book2.jpg'  alt='book'/>
                      </Link>
                    </div>
                    <div className='card-body'>
                    <Link to="/BookDetails/1">
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
              </Tab>
              <Tab eventKey="Featured" title="Featured" >
                <OwlCarousel {...owlOptions} className="owl-theme" id='HomeOwl'>
                <div class="item">
                  <div className='card HomeOwlStyle'>
                    <div className='card-img-top'>
                      <Link to="/BookDetails/1">
                        <img src='./images/book2.jpg'  alt='book'/>
                      </Link>
                    </div>
                    <div className='card-body'>
                    <Link to="/BookDetails/1">
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
              </Tab>
            </Tabs>
          </div>
         </section>
         <section className='row mt-5 mb-5 reveal'>
           <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
             <div className='HomeAuthorBox'>
              <div className='row'>
                <label className='Title'>Popular Authors</label>
              </div>
              <hr className='Line'/>
              <div>
                <div className='row mt-2'>
                  <div className='col-2'>
                    <img src='./images/smallAuth.png' alt='author' />
                  </div>
                  <div className='col-8'>
                    <Link to="/AuthorDetails" className="Name">Author Name</Link>
                  </div>
                  <div className='col-2'>
                    <Link to="#"><BsPersonCircle/></Link>
                  </div>
                </div>
              </div>
              <div>
                <div className='row mt-2'>
                  <div className='col-2'>
                    <img src='./images/smallAuth.png'  alt='author' />
                  </div>
                  <div className='col-8'>
                    <Link to="/AuthorDetails" className="Name">Author Name</Link>
                  </div>
                  <div className='col-2'>
                    <Link to="#"><BsPersonCircle/></Link>
                  </div>
                </div>
              </div>
              <div>
                <div className='row mt-2'>
                  <div className='col-2'>
                    <img src='./images/smallAuth.png' alt='author' />
                  </div>
                  <div className='col-8'>
                    <Link to="/AuthorDetails" className="Name">Author Name</Link>
                  </div>
                  <div className='col-2'>
                    <Link to="#"><BsPersonCircle/></Link>
                  </div>
                </div>
              </div>
              <div>
                <div className='row mt-2'>
                  <div className='col-2'>
                    <img src='./images/smallAuth.png' alt='author' />
                  </div>
                  <div className='col-8'>
                    <Link to="/AuthorDetails" className="Name">Author Name</Link>
                  </div>
                  <div className='col-2'>
                    <Link to="#"><BsPersonCircle/></Link>
                  </div>
                </div>
              </div>
              <div>
                <div className='row mt-2'>
                  <div className='col-2'>
                    <img src='./images/smallAuth.png' alt='author' />
                  </div>
                  <div className='col-8'>
                    <Link to="/AuthorDetails" className="Name">Author Name</Link>
                  </div>
                  <div className='col-2'>
                    <Link to="#"><BsPersonCircle/></Link>
                  </div>
                </div>
              </div>
              <div>
                <div className='row mt-2'>
                  <div className='col-2'>
                    <img src='./images/smallAuth.png' alt='author' />
                  </div>
                  <div className='col-8'>
                    <Link to="/AuthorDetails" className="Name">Author Name</Link>
                  </div>
                  <div className='col-2'>
                    <Link to="#"><BsPersonCircle/></Link>
                  </div>
                </div>
              </div>
             </div>
           </div>
           <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
             <div className='HomeGenreBox '>
              <div className='row'>
                  <div className='col-8'>
                    <label className='Title'>Popular Categories</label>
                  </div>
                  <div className='col-4 viewAll'>
                    <Link to="/Authors" className='ViewAllBtn float-end'>View All</Link>
                  </div>
                </div>
                <hr className='Line'/>
                <div className='row Single'>
                  <img src='./images/scifi.jpg' alt='genre'/>
                  <label className='Name'>Sci-Fi</label>
                </div>
                <div className='row mt-3 Single'>
                  <img src='./images/romance.jpg' alt='genre'/>
                  <label className='Name'>Romance</label>
                </div>
             </div>
           </div>
         </section>
       </div>
    </div>
  )
}

export default Home