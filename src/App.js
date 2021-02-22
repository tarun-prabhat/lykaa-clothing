import React from 'react';
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage';
import './App.css';

const HatsPage =() => (<div>
  <h1>
    HatsPage
  </h1>
</div>
)
  

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop/hats' component={HatsPage}/>
      </Switch>
      
    </div>
  );
}

export default App;
