import React from 'react';
// import VideoHero from './containers/VideoHero';
// import Header from './components/Header'
import VideoHero from './containers/VideoHero';
// import { HashRouter, Route } from 'react-router-dom'
// import Login from './containers/Login';
// import Search from './containers/Search';
// import Signup from './containers/Signup'



class App extends React.Component {
  render() {
    return (
     
      <div>
        <VideoHero />
      
        {/* <HashRouter>
         <Header /> 
         <Route path='/' exact component={VideoHero}></Route>
         
         <Route path='/login' component={Login} ></Route>
         <Route path='/search' component={Search} ></Route>
         <Route path='/signup' component={Signup} ></Route>
        </HashRouter> */}
  
      </div>
    );
  }
}

export default App;
