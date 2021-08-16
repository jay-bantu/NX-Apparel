import React from 'react'
import SignIn from '../../components/sign-in/sign-in'
import SignUp from '../../components/sign-up/sign-up'

import './sign-in-&-sign-up-page.scss'

const SignInAndSignUpPage = ()=>{


    return(
        <div className ='sign-in-and-sign-up-page'>
            {/* <h1>Sign In and Sign Up Page</h1> */}
            <SignIn/>
            <SignUp/>
        </div>
    )
}


export default SignInAndSignUpPage