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
      <h1>
        <Link className={headerStyles.title} to="/">{data.site.siteMetadata.title}</Link>
      </h1>
      <Navigation />
    </header>
  )
}

export default Header