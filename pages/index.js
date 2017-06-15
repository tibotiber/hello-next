import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Layout from '../components/Layout'
import withLayout from '../utils/withLayout'

const { string } = PropTypes

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

PostLink.propTypes = {
  title: string
}

const Index = () => (
  <div>
    <h1>My Blog</h1>
    <ul>
      <PostLink title='Hello Next.js' />
      <PostLink title='Learn Next.js is awesome' />
      <PostLink title='Deploy apps with Zeit' />
    </ul>
  </div>
)

export default withLayout(Layout)(Index)
