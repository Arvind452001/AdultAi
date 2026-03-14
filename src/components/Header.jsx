import React, { useState, useEffect } from 'react'
import logo from '../assets/img/logos/logo.png'
import logoInner from '../assets/img/logos/logo-inner.png'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [logoSrc, setLogoSrc] = useState(logoInner)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop <= 50) {
        setScrolled(false)
        setLogoSrc(logoInner)
      } else {
        setScrolled(true)
        setLogoSrc(logo)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header-style1 menu_area-light ${scrolled ? 'scrollHeader' : 'fixedHeader'}`}>
      <div className="navbar-default border-bottom border-color-light-white">
        <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
          <div className="row align-items-center">
            <div className="col-12 col-lg-12">
              <div className="menu_area alt-font">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                  <div className="navbar-header navbar-header-custom">
                    <a href="/" className="navbar-brand">
                      <img id="logo" src={logoSrc} alt="logo" style={{ maxWidth: '150px' }} />
                    </a>
                  </div>

                  <button 
                    className="navbar-toggler bg-primary"
                    type="button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <ul 
                    className="navbar-nav ms-auto"
                    id="nav"
                    style={{ display: mobileMenuOpen ? 'flex' : 'none' }}
                  >
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About us</a></li>
                    <li><a href="#blogs">Blogs</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                  </ul>

                  <div className="attr-nav align-items-xl-center ms-xl-auto main-font">
                    <ul>
                      <li className="d-xl-inline-block">
                        <a href="#login" className="btn-style1 white-hover medium rounded-3">
                          <span><i className="fa fa-user"></i> Login</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
