import React from 'react';
import './App.css';
import { BrowserRouter ,Switch, Route,} from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import CompetitionRules from './Components/CompetitionRules';
import Authentication from './Components/Authentication';
import FAQ from './Components/FAQ';
import Submission from './Components/Submission';
import Category from './Components/Category';
import logo from './logo.png';

function App() {
    return (
      
      <BrowserRouter>
        <div className="App">
          <img className='App-logo' src={logo} alt="Logo" />
          <Switch>
            <Route path='/Components/Authentication'>
              <Authentication />
            </Route>
            <Route path='/Components/Category'>
              <Category />
            </Route>
            <Route path='/Components/Submission'>
              <Submission />
            </Route>
            <Route path="/">
            <Header /> 
            <CompetitionRules />
            <FAQ />
            <Footer />
            </Route>
          </Switch>
       </div>
      </BrowserRouter>
    );
}

export default App;
