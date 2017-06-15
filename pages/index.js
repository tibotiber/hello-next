import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Layout from '../components/Layout'

function getPosts () {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
  ]
}

const { shape, string } = PropTypes

const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }
      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }
      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
)

PostLink.propTypes = {
  post: shape({
    id: string,
    title: string
  })
}

const Index = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {getPosts().map(post => <PostLink key={post.id} post={post} />)}
    </ul>
    <style jsx>{`
      h1, a {
        font-family: "Arial";
      }
      ul {
        padding: 0;
      }
    `}</style>
  </Layout>
)

export default Index
