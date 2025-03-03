'use client';
import React, { useEffect } from 'react';

function Navbar() {
  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (bodyScroll > 300) navbar.classList.add('nav-scroll');
    else navbar.classList.remove('nav-scroll');
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget
      .querySelector('.dropdown-menu')
      .classList.remove('show');
  }
  function handleToggleNav() {
    if (
      document
        .querySelector('.navbar .navbar-collapse')
        .classList.contains('show')
    ) {
      document
        .querySelector('.navbar .navbar-collapse')
        .classList.remove('show');
    } else if (
      !document
        .querySelector('.navbar .navbar-collapse')
        .classList.contains('show')
    ) {
      document.querySelector('.navbar .navbar-collapse').classList.add('show');
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container o-hidden">
        <a className="logo icon-img-100" href="/">
          <img src="/assets/imgs/logo-light.png" alt="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleNav}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
          <li className="nav-item">
              <a className="nav-link" href="/">
                <span className="rolling-text">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/hackathon">
                <span className="rolling-text">Hackathon</span>
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/page-404">
                <span className="rolling-text">FAQ</span>
              </a>
            </li> */}
          </ul>
        </div>

        <div className="contact-button">
          <a
            href="https://wustl.presence.io/organization/washington-university-chinese-groundbreakers"
            className="butn butn-sm butn-bg main-colorbg radius-5"
          >
            <span className="text">Join US</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
