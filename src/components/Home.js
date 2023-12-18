import React, { Component } from 'react'
import PostsList from './PostList'
// import { useParams, useLocation , useHistory } from 'react-router-dom'
export default class Home extends Component {
  render() {
    const {posts} = this.props
    console.log()
    return (
      <div>
        <PostsList posts={posts} />
      </div>
    )
  }
}
