import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    useEffect(() => {
        document.title = "Techno - ContactUs"
      }, [])
  return (   
      
    <div className='afterHeader'>
        <div className='TopBox'>
            <ul className='Path'>
                <li><Link to="/">Home </Link></li>/
                <li><Link to="/PersonalInfo"> Your Account </Link></li>/
                <li className='Name'> Contact Us</li>
            </ul>
        </div>

        <h5 className='ml-3 font-weight-bold text-center'>Send a Request</h5>
        <br />

        <form action="#" id="form3">

            <div className='form-group'>
                <label for="subject">Subject</label>
                <br />
                <input className='PersonalInput' type="text" name="" id="subject" />
            </div>

            <div className='form-group'>
                <label for="cupeml">Email Address</label>
                <br />
                <input className='PersonalInput' type="text" name="" id="cupeml" />
            </div>

            <div className='form-group'>
                <label for="cupfu">Attachment</label>
                <br />
                <input className='PersonalInput' type="file" id="cupfu" />
            </div>

            <div className='form-group'>
                <label for="msg">Message</label>
                <br />
                <textarea className='PersonalInput' name="" id="msg" cols="30" rows="5"></textarea>
            </div>

            <div className='form-group'>
                <input className='PersonalInput' type="submit" value="Send" name="" id="cupsbmt" />
            </div>
        </form>


    </div>
    
    
  )
}
export default ContactUs