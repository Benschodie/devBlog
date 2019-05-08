import React from 'react'
import Navigation from './navigation'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)

  return (
    <header className={headerStyles.header}>
      <Navigation />
    </header>
  )
}

export default Header