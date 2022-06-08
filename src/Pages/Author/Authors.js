import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {HiOutlineBookOpen} from 'react-icons/hi';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';
import { variables } from '../../Variables/Variables';
const Authors = () => {
    const [authors, setAuthors] = useState([]);
    const [categories, setCategories] = useState([]);

    const GetAuthors = async() => {
        await fetch(variables.API_URL + "Author/GetAllAuthors", {
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
            setAuthors(Result);
        })
    }
    const GetCategories = async() => {
        await fetch(variables.API_URL + "Category/GetAllCategories", {
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
            setCategories(Result);
        })
    }
    useEffect(() => {
        GetAuthors();
        GetCategories();
        document.title = "Techno - Authors"
      }, [])
  return (
    <div className='afterHeader'>
        <div className='container'>
            <div className='row mt-5'>
                <label className='AuthorsTitle'>Authors of Books</label>
            </div>
            <div className='row mt-2'>
                <div className='col-12'>
                    <label className='AuthorsNumbers'>123,456 Authors</label>
                </div>
            </div>
            <div className='row mt-4 mb-5'>
                <div className='col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9'>
                    <div className='row'>
                        {authors.map((u) => (
                            <div className='col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4' key={u.authorId}>
                                <div className='card SingleAuthorBox'>
                                    <div className='card-img-top'>
                                        <Link to={"/AuthorDetails/"+u.authorId}>
                                            {/* <img src={variables.PHOTO_URL + u.picturePath} alt='author'/> */}
                                            <img src='./images/authors.jpg' alt='author'/>
                                        </Link>
                                    </div>
                                    <div className='card-body text-center'>
                                        <div className='row'>
                                            <Link to="/AuthorDetails">
                                                <label className='Name'>{u.authorName}</label>
                                            </Link>
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
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='col-3 d-none d-lg-block'>
                    <div className='AuthorsAsideBox'>
                        <div className='row'>
                            <div className='col-12'>
                                <Link to="#" className='Title'>Book Categories</Link>
                            </div>
                        </div>
                        
                        {categories.map((u) =>(
                            <div className='row mt-3' key={u.categoryId}>
                                <div className='col-9'>
                                    <Link to="#" className='Category'>{u.categoryName}</Link>
                                </div>
                                <div className='col-3'>
                                    <HiOutlineBookOpen/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Authors