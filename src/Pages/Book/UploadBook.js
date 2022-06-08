import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const UploadBook = () => {
    useEffect(() => {
        document.title = "Techno - UploadBook"
    }, [])
    return (
        <div className='afterHeader'>
           <div className='TopBox'>
            <ul className='Path'>
                <li><Link to="/">Home </Link></li>/
                <li className='Name'> Upload Book</li>
            </ul>
        </div>
        <div className='row mt-3 text-center'>
        <form action="#" className="ml-5" id="form1">
                <div className="form-group">
                    <label for="name" id='namelbl' >Name</label>
                    <input className='PersonalInput' type="text" name="" id="name" />
                </div>

                <div className="form-group">
                    <label for="author" id='authourlbl' >Author</label>
                    <input className='PersonalInput' type="text" name="" id="author" />
                </div>

                <div className="form-group">
                    <label for="ctg" className='text-center' id='ctglbl' >Category</label>
                    <input className='PersonalInput' type="text" name="" id="ctg" />
                </div>

                <div className="form-group">
                    <label for="dscrp" id='dsclbl' >Description</label>
                    <textarea  className='PersonalInput' id="dscrp" cols="30" rows="4"></textarea>
                </div>

                <div className="form-group">
                    <input className='PersonalInput' type="file" name="" id="uploadbtn" hidden />
                    <label for="uploadbtn" id="uploadbtnlabel">Choose File</label>
                    <input type="submit" value="Upload" name="" id="submitbtn" className="submitbtnclass" />
                </div>
            </form>
        </div>
        </div>
    )
}

export default UploadBook