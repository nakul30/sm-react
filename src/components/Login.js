// import { faThList } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import { clearAuthState, login } from '../state/actions-create/auth';
// as if we dont have dispathc in login component so i have to connect the component to the store 
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

// import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';
class Login extends Component {
  constructor(props) {
    super(props);
    // this.emailInputRef = React.createRef();
    // this.passwordInputRef = React.createRef();
    this.state = {
        email: "",
        password: "",
      };
  }
  componentWillUnmount() {
    this.props.dispatch(clearAuthState())
  }
  handleformSubmit = (e) => {
    e.preventDefault();
    // console.log("this.emailinputref :" ,this.emailInputRef);
    // console.log("this.passwordinputref :",this.passwordInputRef);
    // above code is uncontrolled state but i need controlled one
    // controlled state is one which is mangaed by react not by dome.
    console.log("this state " , this.state ) ;
    const {email ,password} = this.state ; 
    if(email  && password){
      this.props.dispatch(login(email,password)) ;
    } 
    
  };
  handleEmailchange = (e) =>{
    // e.preventDefault();
    // console.log(e.target.value);
    this.setState({
        email: e.target.value,
    })
  }
  handlePasswordchange = (e) =>{
    // e.preventDefault();
    console.log(e.target.value);
    this.setState({
        password: e.target.value,
    })
  }
  render() {
    // after mapping i am writing this 
    const {error , inProgress , isLoggedin} = this.props.auth ; 
    if(isLoggedin){
      // return <Redirect to="/" />
      return <Navigate to="/" />

    }
    return (
      <form action="" className="login-form">
        <span className="login-signup-header"> Login</span>
        {error && <div className='alert error-dailog'>{error}</div>}
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            // ref={this.emailInputRef}
            // above was for unocontrolled one 
            onChange={this.handleEmailchange}
            value={this.state.email}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            // ref={this.passwordInputRef}
            onChange={this.handlePasswordchange}
            value={this.state.password}
          />
        </div>
      
        <div className="field">
          {inProgress ? 
          <button onClick={this.handleformSubmit} disabled={inProgress}>Logging in...</button> : 
          <button onClick={this.handleformSubmit} disabled={inProgress}>Login</button>
          }
          
        </div>
      </form>
    );
  }
}
function mapStateToProps(state){
  return{
    auth : state.auth
  }
}
// export default connect(mapStateToProps)(Login);
export default connect(mapStateToProps)(Login) ;
