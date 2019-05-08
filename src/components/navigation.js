import React from 'react'

import { Link } from 'gatsby'

import navigationStyles from './navigation.module.scss'

const Navigation = () => {
  return (
    <div className={navigationStyles.navigationWrapper}>
      <nav className={navigationStyles.navigation}>
        <div className= {navigationStyles.logo}>
          <h2>Life of a Noob</h2>
        </div>
        <ul className={navigationStyles.navList}>
          <li>
            <Link className={navigationStyles.navItem} activeClassName={navigationStyles.activeNavItem} to="/">Home</Link>
          </li>
          <li>
            <Link className={navigationStyles.navItem} activeClassName={navigationStyles.activeNavItem} to="/blog">Blog</Link>
          </li>
          <li>
            <Link className={navigationStyles.navItem} activeClassName={navigationStyles.activeNavItem} to="/about">About</Link>
          </li>
          <li>
            <Link className={navigationStyles.navItem} activeClassName={navigationStyles.activeNavItem} to="/contact">Contact</Link>
          </li>
        </ul>
        <div className={navigationStyles.burger}>
          <div className={navigationStyles.burgerItem1}></div>
          <div className={navigationStyles.burgerItem2}></div>
          <div className={navigationStyles.burgerItem3}></div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation