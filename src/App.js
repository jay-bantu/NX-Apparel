import './App.css';
import Home from './pages/home/home';
import {Route, Switch} from 'react-router-dom'
import Shop from './pages/shop/shop';
import Header from './components/header/header';




const HatsPage = ()=>{
  return(
    <div> <h1>Hats Page</h1> </div>
  )
}

function App() {
  return (
    <div className="App">

      <Header/>

      <Switch>
        <Route exact path='/' component ={Home} />
        <Route  path='/shop' component ={Shop} />
      </Switch>
    
    </div>
  );
}

export default App;
