import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Layout from '../components/Layout'

const { string, arrayOf, shape } = PropTypes

const Index = ({ shows }) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.propTypes = {
  shows: arrayOf(
    shape({
      id: string,
      name: string
    })
  )
}

Index.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()
  return {
    shows: data
  }
}

export default Index
