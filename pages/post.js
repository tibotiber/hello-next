import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout.js'

const { shape, string, object } = PropTypes

const Post = ({ show }) => (
  <Layout>
    <h1>{show.name}</h1>
    <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={show.image.medium} />
  </Layout>
)

Post.propTypes = {
  show: shape({
    name: string,
    summary: string,
    image: object
  })
}

Post.getInitialProps = async function ({ query }) {
  const { id } = query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()
  return { show }
}

export default Post
