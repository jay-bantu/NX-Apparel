import './App.css';
import Home from './pages/home/home';
import {Route, Switch} from 'react-router-dom'


const HatsPage = ()=>{
  return(
    <div>HatsPage</div>
  )
}

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path='/' component ={Home} />
        <Route  path='/shop/hats' component ={HatsPage} />
      </Switch>
    
    </div>
  );
}

export default App;
