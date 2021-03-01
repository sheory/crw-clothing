import React from 'react';

import './sign-up.styles.scss'

class SignUp extends React.Component {

  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return (
       <div>
         <h1>I don't have an account</h1>
         <p>Sign up with your email and password</p>
         <form >
           <label htmlFor="">Display Name</label>
           <input type='text'/>
           <label htmlFor="">Email</label>
           <input type='text' onChange={(e) => (this.setState({email: e.target.value}))}/>
           <p>{this.state.email}</p>
           <label htmlFor="">Password</label>
           <input type='password' onChange={(e) => (this.setState({password: e.target.value}))}/>
           <p>{this.state.password}</p>
           <label htmlFor="">Confirm Password</label>
           <input type='password' onChange={(e) => (this.setState({password: e.target.value}))}/>
           <p>{this.state.password}</p>
         </form>
         <button>SIGN UP</button>
       </div>

    )
  }
}

export default SignUp;