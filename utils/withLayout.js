import React from 'react'

export default Layout => WrappedComponent => props => (
  <div>
    <Layout>
      <WrappedComponent {...props} />
    </Layout>
  </div>
)
