import React from 'react'

import './header.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'


const Header =({currentUser})=>{

    return(

    <div className ="header">

        <Link to='/' className ='logo-container'>
            <Logo className = 'logo'></Logo>
        </Link>

        <div className='options'>
            <Link to='/shop' className ='option'>
                Shop
            </Link>
            <Link to='/shop' className ='option'>
                Contact
            </Link>
        {
            currentUser ? 
            <div className ='option' onClick={()=> auth.signOut()} >Sign Out</div>
            :
            <Link className ='option' to ='/sign'>
            Sign in
            </Link>
        }
        </div>
        
        

    </div>
    )

}

export default Header;