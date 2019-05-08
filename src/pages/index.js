import React from "react"

import { Link } from "gatsby"
import Layout from '../components/layout'
import '../styles/index.scss'
import Head from '../components/head'

const indexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h2>Im Benny -> frontend Developer</h2>
      <p>Need a Developer? <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}

export default indexPage
