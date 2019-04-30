import React from 'react'

import { Link } from 'gatsby'
import Layout from '../components/layout'

const aboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>About me</p>
      <p>Need a Developer? <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}

export default aboutPage
