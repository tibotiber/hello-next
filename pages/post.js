import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout.js'
import withLayout from '../utils/withLayout'

const { shape, string } = PropTypes

const Post = props => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
)

Post.propTypes = {
  url: shape({
    query: shape({
      title: string
    })
  })
}

export default withLayout(Layout)(Post)
