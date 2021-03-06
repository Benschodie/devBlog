import React, {Component} from 'react'

import { Link } from 'gatsby'

import './navigation.scss'


class Navigation extends Component {

 constructor(props) {
  super(props);
  this.state = { clicked: true };
  // Hint: bind this to the function or use arrow function
  // this.toggleNavigation = this.toggleNavigation.bind(this);
 }

 animateMobileNavigation = e => {
  // Toggle Navigation
  this.setState({ clicked: !this.state.clicked });

  // Animate Links
  const navLinks = document.querySelectorAll('.navigation__list li');
   navLinks.forEach((link, index) => {
     if (link.style.animation) {
       link.style.animation = '';
     } else {
       link.style.animation = `navLinkFade 0.5s forwards ${index / 7 + 0.3}s`;
     }
   });
   //Burger Animation
   const burger = document.querySelector('.burger');
   burger.classList.toggle('toggle')
 }

  render() {
  return (
    <div className="navigation">
      <nav className="navigation__wrapper">
        <div className="navigation__logo">
          <h2>Life of a Noob</h2>
        </div>
        <ul className={this.state.clicked ? "navigation__list" : "navigation__list navigation__list--isOpen"}>
          <li>
            <Link className="navigation__item" activeClassName="active-navigation__item" to="/">Home</Link>
          </li>
          <li>
            <Link className="navigation__item" activeClassName="active-navigation__item" to="/blog">Blog</Link>
          </li>
          <li>
            <Link className="navigation__item" activeClassName="active-navigation__item" to="/about">About</Link>
          </li>
          <li>
            <Link className="navigation__item" activeClassName="active-navigation__item" to="/contact">Contact</Link>
          </li>
        </ul>
        <div onClick={this.animateMobileNavigation} className="burger">
          <div className="burger-item-1"></div>
          <div className="burger-item-2"></div>
          <div className="burger-item-3"></div>
        </div>
      </nav>
    </div>
  )
}}

export default Navigation