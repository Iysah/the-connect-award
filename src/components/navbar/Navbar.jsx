import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';
import "./modal.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalSign, setModalSign] = useState(false);


  // LOGIN MODAL
  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  // SIGNUP MODAL

  const toggleModalSign = () => {
    setModalSign(!modalSign);
  };

  if(modalSign) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


  return (
    <div className="theConnect__navbar">
        <div className="theConnect__navbar-links">
            <div className="theConnect__navbar-links_logo">
                <Link to="/">
                  <img  alt='The Connect Logo' src={logo} />
                </Link>
                
            </div>
            <div className="theConnect__navbar-links_container">
                <p><Link to="/categories">Categories</Link></p>
                <p><Link to="/past">Past editions</Link></p>
               <p><Link to="/future">Future editions</Link></p>
                <p><Link to="/about">About us</Link></p>
                <p><Link to="/donation">Make a donation</Link></p>
            </div>
        </div>

      <div className="theConnect__navbar-sign">
        <p className='login' onClick={toggleModal}>Log in</p>
        <button type="button" onClick={toggleModalSign} >Create an account</button>
      </div>

      <div className="theConnect__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenuLine color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
            <div className="theConnect__navbar-menu_container scale-up-center">
                <div className="theConnect__navbar-menu_container-links">
                      <p><Link to="/categories">Categories</Link></p>
                      <p><Link to="/past">Past editions</Link></p>
                      <p><Link to="/future">Future editions</Link></p>
                      <p><Link to="/about">About us</Link></p>
                      <p><Link to="/donate">Make a donation</Link></p>
                </div>
            <div className="theConnect__navbar-menu_container-links-sign">
                <button type="button" onClick={toggleModal} className='login'>Log In</button>
                <button onClick={toggleModalSign} type="button">Sign up</button>
            </div>
            </div>
        )}
      </div>
      <Outlet />

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className='theConnect__login section__padding active'>
              <h2>Let&apos;s pick up where we left off yeah?</h2>
              <h4>Log in to your account</h4>
              <p>Don&apos;t have an account? <span onClick={toggleModalSign} className='sign-link'>Sign Up</span></p>

              <div className='theConnect__login-form_container'>
                  <button className='theConnect__login-form_google'>Continue with google</button>
                  <div className='theConnect__login-form_divide'>
                      <div className='thin-line'></div>
                      <span className='line-text' >OR</span>
                      <div className='thin-line'></div>
                  </div>
                  <form action="" className='theConnect__login-form'>
                      <div className='theConnect__login-form_input'>
                          <label htmlFor="email">Email Address</label>
                          <input type="email" name="" id="" />
                      </div>
                      <div className='theConnect__login-form_input'>
                          <label htmlFor="password">Password</label>
                          <input type="password" name="" id="" />
                      </div>
                      <button className='theConnect__login-form_btn' type='button'>Log in</button>
                      <p className='theConnect__login'>Forget Password</p>
                  </form>
              </div>
            </div>

            <div className="theConnect__signup section__padding hidden">

            </div>
          </div>
        </div>
      )}

      {modalSign && (
        <div className="modal signup-modal">
          <div onClick={toggleModalSign} className="overlay"></div>
          <div className="signup__modal-content">
            <div className='theConnect__signup section__padding'>
              <h2>Time to vote your favourite Techie, <br /> let&apos;s make this amazing!</h2>
              <h4>Create an account</h4>
              <p>Have an account? <span className='sign-link'>Log in</span></p>

              <div className='theConnect__login-form_container'>
                  <button className='theConnect__login-form_google'>Continue with google</button>
                  <div className='theConnect__login-form_divide'>
                      <div className='thin-line'></div>
                      <span className='line-text' >OR</span>
                      <div className='thin-line'></div>
                  </div>
                  <form action="" className='theConnect__sigup-form'>
                      <div className="theConnect__signup-form_name">
                            <div className='theConnect__signup-name_input'>
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className='theConnect__signup-name_input'>
                                <label htmlFor="text">Last Name</label>
                                <input type="email" name="" id="" />
                            </div>
                      </div>

                      <div className='theConnect__signup-form_input'>
                          <label htmlFor="email">Email Address</label>
                          <input type="email" name="" id="" />
                      </div>

                      <div className='theConnect__signup-form_input'>
                          <label htmlFor="phoneNumber">Phone Number</label>
                          <input type="tel" name="" id="phoneNumber" />
                      </div>

                      <div className='theConnect__signup-form_input'>
                          <label htmlFor="password">Set Password</label>
                          <input type="password" name="" id="" />
                      </div>

                      <div className='theConnect__signup-form_input'>
                          <label htmlFor="gender">Gender</label>
                          <input type="email" name="" id="" />
                      </div>

                      <p className='theConnect__signup-btn_text'>By registering you agree to Techtrend Africa's <span className='sign-link'>Terms of Use</span> and <span className='sign-link'>Privacy Policy</span></p>
                      <button className='theConnect__signup-form_btn' type='button'>Create my account</button>
                      
                  </form>
              </div>
            </div>
          </div>
        </div>
      )}
     
    </div>
  );
};

export default Navbar;