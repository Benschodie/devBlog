import React from "react"

import { Link } from "gatsby"
import Layout from '../components/layout'
import '../styles/index.scss'

const indexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>Im Benny -> frontend Developer</h2>
      <p>Need a Developer? <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}

export default indexPage
