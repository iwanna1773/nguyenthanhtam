import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import github from '../img/github-icon.svg'

const NavbarStyled = styled.nav`
  .container{
    .navbar-brand{
      align-items: center;
      width: 100%;
    }
  }
`
const NavMenuStyled = styled.div`
  &#navMenu{
    position: fixed;
    top: 0;
    bottom: 0;
    width: 75%;
    height: 100%;
    right: 100%;
    cursor: pointer;
    visibility: hidden;
    opacity: 1;
    display: block;
    transition: all .4s cubic-bezier(.445,.050,.55,.95);
    transition-duration: .4s;
    z-index: 5;

    &.is-active{
      position: fixed;
      right: 30%;
      visibility: visible;
      transition: all .4s cubic-bezier(.445,.050,.55,.95);
      transition-duration: .4s;
    }

    div {
      .navbar-item{
        padding: 10px 60px;
        color: #333;
        text-decoration: none;
        font-size: 19px;
        text-transform: uppercase;
        text-align: left;
        font-weight: 300;
      }
    }
  }
`
const MobileMenuOverlayStyle = styled.div`
  transition: all 140ms cubic-bezier(.445,.050,.55,.95);

  &.is-active{
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,.5);
    z-index: 4;
    cursor: pointer;
    transition: all 140ms cubic-bezier(.445,.050,.55,.95);
  }
`
const NavbarBurger = styled.div`
  &.navbar-burger{
    height: 3.8rem;
    width: 4rem;
    &.is-active{

    }
    div{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      span{
        height: 1px;
        width: 1.6rem;
        left: auto;
        background-color: #00b19e;
        &:not(.is-active) {
          &:nth-child(1){
            top: 24%;
          }
          &:nth-child(2){
            top: 40%;
          }
          &:nth-child(3){
            top: 56%;
          }
        }
      }
    }
  }
`





const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }


  render() {
    const {navBarActiveClass} = this.state
    return (
      <NavbarStyled
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <MobileMenuOverlayStyle className={`mobile-menu-overlay ${navBarActiveClass}`} onClick={this.toggleHamburger}/>
        <div className="container">
          <div className="navbar-brand">
          <div className="navbar-item">
              <a
                className="navbar-item"
                href="https://github.com/iwanna1773/nguyenthanhtam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
            {/* Hamburger menu */}
            <NavbarBurger
              className={`navbar-burger burger ${navBarActiveClass} navbar-item`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
            <div>
              <span className={navBarActiveClass}/>
              <span className={navBarActiveClass}/>
              <span className={navBarActiveClass}/>
            </div>
            
            </NavbarBurger>

          </div>
          <NavMenuStyled
            id="navMenu"
            className={`navbar-menu ${navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
            </div>
          </NavMenuStyled>
        </div>
      </NavbarStyled>
    )
  }
}

export default Navbar
