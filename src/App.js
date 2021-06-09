import './App.css';
import Home from './pages/home/home';
import {Route, Switch} from 'react-router-dom'
import Shop from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-&-sign-up-page/sign-in-&-sign-up-page';
import { Component } from 'react';
import { auth } from './firebase/firebase.utils';


class  App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }


  unsubscribeFromAuth = null
  
  componentDidMount(){
     this.unsubscribeFromAuth=  auth.onAuthStateChanged(user=>{
      this.setState({currentUser: user})
      console.log(user)
    })
  }

  componentWillUnmount(){

    this.unsubscribeFromAuth();
  }
  
  render(){

    return (
      <div className="App">
  
        <Header currentUser ={this.state.currentUser} />
  
        <Switch>
          <Route exact path='/' component ={Home} />
          <Route  path='/shop' component ={Shop} />
          <Route  path='/sign' component ={SignInAndSignUpPage} />
        </Switch>
      
      </div>
    );
  }
}

export default App;
