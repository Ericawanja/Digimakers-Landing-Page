import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Team from './components/pages/Team';


class App extends Component {

  
  render() {
    return (
      <Router>
        <div className='main-view'>
          <h1>Welcome to DigiMakers</h1>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/team'component={Team}/>
          <Route path='/contact' component={Contact}/>
          <Footer/>
        </div>
     </Router>
    );
  }
}

export default App;
