import React from 'react';
import { connect } from 'react-redux';
import Navbar from './components/Navbar';
import { fetchPosts } from './state/actions-create/posts';
import propTypes from 'prop-types';
import Page404 from './components/Page404';
import Settings from './components/Settings';
// import { useParams, useLocation, useHistory } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

import { jwtDecode } from 'jwt-decode';

import Signup from './components/Signup';
import { authenticateUser } from './state/actions-create/auth';
// import auth from './state/reducers/auth-reducer';

// const Settings = () => <div>Settings</div>;

const PrivateRoute = (privateRouteProps) => {
  //change location to path we are sending path not location
  const { isLoggedin, children, path } = privateRouteProps;
  // console.log("Private route --------------------------> " , privateRouteProps) ;
  console.log('element------------------> ', children);
  console.log('isloggedin--------------->', isLoggedin);
  // console.log('path------------------>', path);
  return isLoggedin ? children : <Navigate to="/login"></Navigate>;
};

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts()); /// to dispatch an action here to put post in loaded component
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwtDecode(token);
      console.log('user', user);
      this.props.dispatch(
        authenticateUser({
          email: user.email,
          _id: user._id,
          name: user.name,
        })
      );
    }
  }
  render() {
    console.log('PROPS :', this.props);
    const { posts, auth } = this.props;
    // const { posts, ...restProps } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home posts={posts} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route
              path="/settings"
              element={
                <PrivateRoute isLoggedin={auth.isLoggedin}>
                  <Settings />
                </PrivateRoute>
              }
            />
            <Route
              path="/user"
              element={
                <PrivateRoute isLoggedin={auth.isLoggedin}>
                  <UserProfile />
                </PrivateRoute>
              }
            ></Route>
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
// export default App
const mapStateToProps = (state) => ({
  posts: state.posts,
  auth: state.auth,
});
App.propTypes = {
  posts: propTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
