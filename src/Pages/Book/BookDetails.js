import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {Tabs, Tab} from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import { variables } from '../../Variables/Variables';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {AiFillStar, AiOutlineStar, AiFillHeart, AiOutlineEye} from 'react-icons/ai';

const BookDetails = () => {
    const [book, setBook] = useState([]);
    const [author, setAuthor] = useState([]);
    const [category, setCategory] = useState([]);
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
      const GetBook = async() => {
        await fetch(variables.API_URL + "Book/GetBook/1" , {
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
          setBook(Result);
        })
        
        console.log(author)
    }
    useEffect(() => {
        document.title = "Techno - Book Details"
      }, [])
  return (
    <div className='afterHeader'>
        <div className='TopBox'>
            <ul className='Path'>
                <li><Link to="/">Home </Link></li>/
                <li><Link to="#"> Book Category </Link></li>/
                <li className='Name'> Book Name</li>
            </ul>
        </div>
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                    <img src='../images/bigbook.jpg' className='w-100' alt='book'/>
                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ps-5 mt-5 BookDetails'>
                    <div className='row'>
                        <label className='Name'>Book Name</label>
                    </div>
                    <div className='row mt-5 ms-1'>
                        <table className='Details'>
                            <tr>
                                <th>
                                    Author
                                    <span>:</span>
                                </th>
                                <td>
                                    Author Name
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Language
                                    <span>:</span>
                                </th>
                                <td>
                                    English
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Publisher
                                    <span>:</span>
                                </th>
                                <td>
                                    Publisher Name
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    ISBN
                                    <span>:</span>
                                </th>
                                <td>
                                    Number
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Release Date
                                    <span>:</span>
                                </th>
                                <td>
                                    Date
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Pages
                                    <span>:</span>
                                </th>
                                <td>
                                    Number
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Extension
                                    <span>:</span>
                                </th>
                                <td>
                                    PDF
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className='row mt-3 text-center'>
                        <div className='col-12'>
                            <button type='button' className='Options'>Read</button>  
                            <button type='button' className='Options'>Download</button>  
                            <button type='button' className='Options'>Rate</button>  
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-4 BookDet'>
            <Tabs defaultActiveKey="Description" id="Book Details Tabs" className="mb-3 CenterTabs" fill>
                <Tab eventKey="Description" title="Book Description" className='SingleTab'>
                    <div className='row'>
                        <h3><strong>Description</strong></h3>
                    </div>
                    <div className='row'>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                        containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                        </p>
                    </div>
                </Tab>
                <Tab eventKey="Rates" title='Rates' className='SingleTab'>
                    <div className='row'>
                        <h3><strong>Rates</strong></h3>
                    </div>
                    <div className='row'>
                        <ul className='Stars'>
                            <li><AiFillStar/></li>
                            <li><AiFillStar/></li>
                            <li><AiFillStar/></li>
                            <li><AiFillStar/></li>
                            <li><AiOutlineStar/></li>
                            <li className='Number'>(25 Rates)</li>
                      </ul>
                    </div>
                </Tab>
            </Tabs>
            </div>
            <div className='row mt-3 mb-4 text-center'>
                <label className='TopLabel'>You May Also Like</label>
            </div>
            <div className='row mb-4'>
                <OwlCarousel {...owlOptions} className="owl-theme" id='HomeOwl'>
                <div class="item">
                    <div className='card HomeOwlStyle'>
                    <div className='card-img-top'>
                        <Link to="/BookDetails">
                        <img src='../images/book2.jpg'  alt='book'/>
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

export default BookDetails