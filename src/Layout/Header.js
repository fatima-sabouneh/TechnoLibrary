import React,{useState} from 'react'
import {Navbar,Container, Nav, Modal} from "react-bootstrap";
import {BsHouseDoor, BsDiagram3, BsPeople, BsList, BsPerson, BsGear, BsFillPersonFill} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';
import {FiX} from 'react-icons/fi';
import {FcAbout} from 'react-icons/fc';
import {MdContactMail} from 'react-icons/md';
import {HiUpload} from 'react-icons/hi';

const Header = () => {
  const [modalState, setModalState] = useState("close");

  const handleShowModalOne = () => {
    setModalState("modal-one");
  };
  const handleClose = () => {
    setModalState("close");
  };
  document.getElementsByTagName("body")[0].onscroll = function () {
    if (document.documentElement.scrollTop > 80) {
        var x = document.getElementById("headerhover");
        x.classList.add("headerOpacity");
      } else {
        var x = document.getElementById("headerhover");
        x.classList.remove("headerOpacity");
      }
};
  return (
    <header id='headerhover' className='HeaderBackground'>
        <div className='container'>
          <div className='row'>
            <div className='col-4 col-sm-4 col-md-4 col-lg-2'>
              <a href='/'>
                <img src='./images/Logo1.png' className='logoimg' alt='Logo' />
              </a>
            </div>
            <div className='col-2 col-sm-2 col-md-2 col-lg-8'>
              <Navbar className='HeaderNavbar' expand="lg">
                <Container>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                    <Nav.Link href="/"> <BsHouseDoor/> Home</Nav.Link>
                      <Nav.Link href="/Categories"><BsDiagram3/> Book Categories</Nav.Link>
                      <Nav.Link href="/Authors"><BsPeople/> Authors</Nav.Link>
                      <Nav.Link href="#"  onClick={handleShowModalOne}><BsList/> Menu</Nav.Link>
                      <Modal className="modalMenu" show={modalState === "modal-one"} onHide={handleClose} >
                          <Modal.Body>
                            <div className="container">
                              <div className="col-12">
                                <div className="row ">
                                  <a href="/PersonalInfo" className="MenuItems"><BsFillPersonFill/> Profile</a>
                                </div>
                                <div className="row mt-2">
                                  <a href="/Aboutus" className="MenuItems"><FcAbout/> About Us</a>
                                </div>
                                <div className="row mt-2">
                                  <a href="/Contactus" className="MenuItems"><MdContactMail/> Contact Us</a>
                                </div>
                                <div className="row mt-2">
                                  <a href="/UploadBook" className="MenuItems"><HiUpload/> Upload Book</a>
                                </div>
                                <hr/>
                                <div className="row">
                                  <button onClick={handleClose} className="CloseModal"> <FiX/> Close</button>
                                </div>
                              </div>
                            </div>
                          </Modal.Body>
                        </Modal>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
            <div className='col-4 col-sm-4 col-md-4 col-lg-2'>
              <div className='row float-end'>
                <ul className='RightNav'>
                  <li>
                    <a href="/Login"><BsPerson/></a>
                  </li>
                  <li>
                    <a href="/Favorite"><AiOutlineHeart/></a>
                  </li>
                  <li>
                    <a href="/PersonalInfo"><BsGear/></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header