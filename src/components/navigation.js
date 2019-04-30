import React from 'react'
import { Link } from 'gatsby'

import navigationStyles from './navigation.module.scss'

const Navigation = () => {
  return (
    <div>
      <nav>
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
      </nav>
    </div>
  )
}

export default Navigation