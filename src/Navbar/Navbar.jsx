import React from 'react'

import './Navbar.css';
import NetflixLogo from '../Assest/Netflix-Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [menu, setMenu] = useState(false);
  const [click, setClick] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setMenu(window.innerWidth >= 600); // Set isWide based on window width
    };

    const handleResize2 = () => {
      if (window.innerWidth >= 600) {
        setClick(false);
      }
      else if (window.innerWidth < 600) {
        setClick(true)
      }
    }

    handleResize(); // Call handleResize initially
    handleResize2()

    window.addEventListener('resize', handleResize); // Add event listener for window resize
    window.addEventListener('resize', handleResize2); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on component unmount
      window.removeEventListener('resize', handleResize2); // Cleanup on component unmount
    };
  }, []);

  const clickFunction = () => {
    setClick(!click);
  }
  return (
    <>
      {
        click ?
          <>
            <div className="super-container-2">
              <div className="respone-items">
                <div className="logo-item">
                  <img src={NetflixLogo} alt="Images-loaded-error!" />
                </div>
                <div className="response-menu-icon">
                  <FontAwesomeIcon icon={faBars} onClick={clickFunction} />

                </div>
              </div>
            </div>
          </> :
          <>
            <div className="Super-Container">

              <div className="Nav-items">
                <div className="Netflix-logo">
                  <Link className='same-nav-cls'to='/'>
                  <img src={NetflixLogo} alt="Images-loaded-error!" />
                  </Link>
                </div>
                <div className="Movies  ">
                  <Link className='same-nav-cls' to='/Movies'>Movies</Link>
                </div>
                <div className="Webseries  ">
                <Link className='same-nav-cls' to='/Webseries'>Webseries</Link>
                </div>
                <div className="Cricket  ">
                <Link className='same-nav-cls' to='/Contact-us'>Contact-us</Link>
                </div>
              </div>
              {
                menu ? '' :
                  <>
                    {
                      click ?
                        <div className="font-bar-icon">
                          <FontAwesomeIcon icon={faBars} onClick={clickFunction} />
                        </div>
                        :

                        <div className="font-bar-icon">
                          <FontAwesomeIcon icon={faX} onClick={clickFunction} />
                        </div>
                    }
                  </>
              }
            </div>
          </>
      }
    </>
  )
}

export default Navbar;