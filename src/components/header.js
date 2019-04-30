import React from 'react'
import Navigation from './navigation'
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">Life of a Noob</Link>
      </h1>
      <Navigation />
    </header>
  )
}

export default Header