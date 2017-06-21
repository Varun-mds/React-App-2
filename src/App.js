import React, { Component } from 'react';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Faq from './component/Faq/Faq';
import AboutUs from './component/About Us/AboutUs';
import Services from './component/Services/Services';
import Login from './component/Login/Login';
import NewUser from './component/NewUser/NewUser';


import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
       
        <Route exact={true} path="/" component={Home} />
        <Route path="/faq" component={Faq} />
        <Route path="/about" component={AboutUs} />
        <Route path="/Services" component={Services} />
        <Route path="/NewUser" component={NewUser} />
        <Route path="/login" component={Login} />

        <Footer />
      </div>
    );
  }
}

export default App;
