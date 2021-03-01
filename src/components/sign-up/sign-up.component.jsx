import React from 'react';

import './sign-up.styles.scss'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component,jsx";

import { auth,createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  componentDidMount() {

  }

  handleSubmit = async e => {
    console.log("hey im here")
    e.preventDefault()

   const {displayName, email, password, confirmPassword} = this.state;

    if(password !== confirmPassword) {
      console.log("hey, they differnet")
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
         email,
         password
      )

      await createUserProfileDocument(user, {displayName});

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (error) {
      console.error(error);
    }
  }

  handleChange = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }


  render() {
    const {displayName, email, password, confirmPassword} = this.state;

    return (
       <div className='sign-up'>
         <h2 className='title'>I don't have an account</h2>
         <span>Sign up with your email and password</span>
          <form className='sign-up-form' onSubmit={this.handleSubmit }>
            <FormInput
               name='displayName'
               type='text'
               label='Display Name'
               handleChange={this.handleChange}
               value={displayName}
               required
            />
            <FormInput
            name='email'
            type='email'
            label='Email'
            handleChange={this.handleChange}
            value={email}
            required
            />
            <FormInput
               name='password'
               type='password'
               label='Password'
               handleChange={this.handleChange}
               value={password}
               required
            />
            <FormInput
               name='confirmPassword'
               type='password'
               label='Confirm Password'
               handleChange={this.handleChange}
               value={confirmPassword}
               required
            />

            <CustomButton type='submit' >
              Sign in
            </CustomButton>
          </form>
       </div>

    )
  }
}

export default SignUp;