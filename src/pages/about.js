import React from 'react'

import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const aboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
        <div className="about">
        <h1>About</h1>
        <p>About me</p>
        <p>Need a Developer? <Link to="/contact">Contact me</Link></p>
      </div>
    </Layout>
  )
}

export default aboutPage
