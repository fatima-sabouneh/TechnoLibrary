import React from 'react';
import {BsTelephoneInboundFill, BsEnvelope} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='FooterBackground'>
        <div className='container'>
            <div className='row'>
                <div className='col-3 d-none d-lg-block  LogoBorder'>
                    <a href='/'>
                        <img src='./images/Logo2.png' className='FooterLogo' alt='Logo'/>
                    </a>
                </div>
                <div className='col-3 ms-5'>
                    <div className='row mt-4 mb-4'>
                        <h4 className='fw-bold'>Contact Us</h4>
                    </div>
                    <div className='row mb-3'>
                        <label><BsTelephoneInboundFill className='FooterIcons'/> +961 123 123</label>
                    </div>
                    <div className='row'>
                        <p>Monday – Friday: 9:00-20:00 <br/>Saturday: 11:00 – 15:00</p>
                    </div>
                    <div className='row'>
                        <label><BsEnvelope className='FooterIcons'/> techno@gmail.com</label>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='row mt-4 mb-4'>
                        <h4 className='fw-bold'>My Account</h4>
                    </div>
                    <div className='row mb-3'>
                        <label><a href='#'>Profile</a></label>
                    </div>
                    <div className='row mb-3'>
                        <label><a href='#'>Favorite</a></label>
                    </div>
                    <div className='row'>
                        <label><a href='#'>Settings</a></label>
                    </div>
                </div>
                <div className='col-2'>
                    <div className='row mt-4 mb-4'>
                        <h4 className='fw-bold'>Categories</h4>
                    </div>
                    <div className='row mb-3'>
                        <label><a href='#'>Action</a></label>
                    </div>
                    <div className='row mb-3'>
                        <label><a href='#'>Romance</a></label>
                    </div>
                    <div className='row mb-3'>
                        <label><a href='#'>Fantasy</a></label>
                    </div>
                    <div className='row'>
                        <label><a href='#'>Horror</a></label>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer