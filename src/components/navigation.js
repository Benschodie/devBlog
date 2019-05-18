import React, {Component} from 'react'

import { Link } from 'gatsby'

import './navigation.scss'


class Navigation extends Component {

 constructor(props) {
  super(props);
  this.setState = {isToggleOn: false}
 }

 toggleNavigation () {
  this.setState(state => ({
    isToggleOn: !state.isToggleOn
  }));
}

  render() {
  return (
    <div className="navigation">
      <nav className="navigation__wrapper">
        <div className="navigation__logo">
          <h2>Life of a Noob</h2>
        </div>
        <ul className="navigation__list">
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
        <div onClick={this.toggleNavigation} className="burger">
          <div className="burger-item-1"></div>
          <div className="burger-item-2"></div>
          <div className="burger-item-3"></div>
        </div>
      </nav>
    </div>
  )
}}

export default Navigation