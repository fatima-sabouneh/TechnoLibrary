import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import {HiOutlineBookOpen} from 'react-icons/hi';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';

const AboutUs = () => {
    useEffect(() => {
        document.title = "Techno - AboutUs"
      }, [])
  return (    

    <div className='afterHeader'> 
        <div className='TopBox'>
            <ul className='Path'>
                <li><Link to="/">Home </Link></li>/
                <li><Link to="/PersonalInfo"> Your Account </Link></li>/
                <li className='Name'> About Us</li>
            </ul>
        </div>
        <br />
        <div id="centerwrapper">
            <div id="titlewrapper">
                <h5 className='ml-3 font-weight-bold'>Welcome to</h5>
            </div>
            <div id="logowrapper">
                <img src='./images/Logo1.png' alt="logo" id="logopng" />
            </div>
        </div>

        <br />
        <br />
        <br />

        <div className='container'>
            <div className='row'>
                <div className='col-sm-7'>
                    <h6>Meet our founders:</h6>
                    <br />
                    
                    <div id="titlewrapper" className='mr-3'>
                        <p className='small'>Dana Kaj <br /> 
                            djk04@mail.aub.edu</p>
                    </div>
                    <div id="logowrapper">
                        <img src='./images/dana.png' alt="" className='imgs' />
                    </div>
                    
                    <br />
                    <br />

                    <div id="titlewrapper" className="mr-3">
                        <p class=" small">Fatima Sabbouneh <br /> 
                            frs04@mail.aub.edu</p>
                    </div>
                    <div id="logowrapper">
                        <img src='./images/fatima.png' alt="" className='imgs' />
                    </div>

                    <br />
                    <br />

                    <div id="titlewrapper" className='mr-2'>
                        <p className='small'>Mohammad Abdallah <br /> 
                            mha86@mail.aub.edu</p>
                    </div>
                    <div id="logowrapper">
                        <img src='./images/mhmd.jpeg' alt="" className='imgs' />
                    </div>

                    <br />
                    <br />


                </div>
    
                <div className='col-sm-5'>
                    <h6>Overview:</h6>
                    <p className='small'>
                        Techno Library is a web application 
                        that represents a book library, a 
                        catalog of books online. Offering 
                        a wide range of books, classified 
                        based on category, genre, age 
                        group, and so much more. Moreover, 
                        a user can login or sign in and 
                        eventually purchase a soft copy of 
                        the book, or even download it. He 
                        or she would have a wish list, or 
                        Favorite list where they can add 
                        whichever books they prefer. Based 
                        on that Favorite, we can suggest 
                        books of the same genre or “Books 
                        they might also like” which are 
                        very similar those in their 
                        corresponding Favorites’ list. 
                        Each book has a description, links 
                        from where the user might download 
                        it from, a favorite button, and 
                        much more. Moreover, the user has 
                        the ability to upload his or her 
                        books, to contribute to the library.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs