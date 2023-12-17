
import React from 'react'
import { connect } from 'react-redux'
import PostsList from './components/PostList';
import {fetchPosts} from "./state/actions-create/posts"
import propTypes from 'prop-types'
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts()) ;   /// to dispatch an action here to put post in loaded component 
  }
  render() {
    console.log('PROPS :', this.props) ; 
    const {posts} = this.props
    return (
      <div>

        <PostsList posts={posts}/>
      </div>
    )
  }
}
// export default App
const mapStateToProps = (state) => ({
    posts : state.posts,
})
App.propTypes = { 
  posts : propTypes.array.isRequired
}

export default connect(mapStateToProps)(App)