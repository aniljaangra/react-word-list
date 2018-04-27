import React, { Component } from 'react';
import  { Switch , Route , Redirect  } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './components/Home';
import Login from './containers/Login';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Layout>
         
         <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/login'  component={Login}/>
         <Route path='/dashboard'  component={Dashboard}/>
           </Switch>
         </Layout>
      </div>
    );
  }
}

export default App;
