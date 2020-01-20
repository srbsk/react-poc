import React from 'react';
import './App.css';
// import './Homestyle.css';
import Home from './Home'
import AccountTransaction from './AccountTransaction';
import Menu from './Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Menu />  
        <switch>
          <Route path="/" exact component={Home} />
          <Route path="/accountTransaction" component={AccountTransaction} />
        </switch>
    </BrowserRouter>
  );
}


export default App;