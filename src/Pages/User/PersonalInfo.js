import React,{useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PersonalInfo = () => {
    const [isAuth, setIsAuth] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Techno - PersonalInfo";
      }, [])
      return (  
    <>
    {sessionStorage.getItem("isAuth") != true ? (
        <div className='afterHeader'>
        <div className='TopBox'>
            <ul className='Path'>
                <li><Link to="/">Home /</Link></li>
                <li > Your Account /</li>
                <li className='Name'> Your Personal Information</li>
            </ul>
        </div>

        <br />
        <br />

        <h5 className='ml-3 font-weight-bold'>Your Personal Information</h5>

        <br />
        <br />
        <br />

        <form action="#" className='ml-5' id="form2">

            <div className='form-group'>
                <div className='row'>
                    <div className='col-1'>
                        <label className=''>Social Title</label>{/*  */}
                    </div>
                    <div className='col-10'>
                        <input className='PersonalCheckbox ml-3' type="radio" name="soctitle"  /> 
                        <label className='PersonalCheckboxLabel' >Mr</label>
                        <input className='PersonalCheckbox ml-3' type="radio" name="soctitle"  />
                        <label className='PersonalCheckboxLabel' >Mrs.</label> 
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label for="fname" className='rghtmrgn'>First Name</label>
                <input className='PersonalInput' type="text" name="" id="fname" />
            </div>
            <div className="form-group">
                <label for="lname" className='rghtmrgn'>Last Name</label>
                <input className='PersonalInput' type="text" name="" id="lname" />
            </div>
            <div className="form-group">
                <label for="eml" id='emllbl'>Email</label>
                <input className='PersonalInput' type="text" name="" id="eml" />
            </div>
            <div className="form-group">
                <label for="pass" id='passlbl'>Password</label>
                <input className='PersonalInput' type="text" name="" id="pass" />
            </div>
            <div className="form-group">
                <label for="date" id='datelbl'>Date</label>
                <input className='PersonalInput' type="date" name="" id="date" />
            </div>
            <div className="form-group">
                <input className='PersonalInput' type="submit" value="Save" name="" id="savebtn" />
            </div>

            <br />
            <br />
            <br />
            
        </form>

    </div>
    ):(
        window.location.href = "/Login"
    )}
    </>
  )
}

export default PersonalInfo