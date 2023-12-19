import React from 'react'
import { connect } from 'react-redux'
import Navbar from './components/Navbar';
import {fetchPosts} from "./state/actions-create/posts"
import propTypes from 'prop-types';
import Page404 from './components/Page404';
// import { useParams, useLocation, useHistory } from 'react-router-dom';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
// import * as jwtDecode from 'jwt-decode'
import { jwtDecode } from 'jwt-decode';

import Signup from './components/Signup';
import { authenticateUser } from './state/actions-create/auth';

// const Settings = () => <div>Setting </div>
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts()) ;   /// to dispatch an action here to put post in loaded component 
    const token = localStorage.getItem('token') ; 
    if(token){
      const user = jwtDecode(token) ; 
      console.log('user',user);
      this.props.dispatch(authenticateUser({
        email: user.email , 
        _id : user._id , 
        name : user.name 
      }))
    }
  }
  render() {
    console.log('PROPS :', this.props) ; 
    const {posts} = this.props
    // const { posts, ...restProps } = this.props;
      return (
      <Router>
        <div>
          <Navbar/>
         <Routes>
          
            <Route exact path="/" element={<Home posts={posts}/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Signup/>} />
            {/* <Route exact path="/settings" element={ <PrivateRoute isLoggedin = {auth.isLoggedin} path={location.pathname}> <Settings/></PrivateRoute>}/> */}
            {/* <PrivateRoute path='/settings' element={<Setting/>}></PrivateRoute> */}
            <Route  path = "*" element ={<Page404 />} />
          </Routes>
          
        </div>
      </Router>
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