import React ,{Component}from 'react';
import MyComponent from './MyComponent';
import Toolbar from './Component/Toolbar/Toolbar.js'
import SideDrawer from './Component/SideDrawer/SideDrawer.js'
import BackDrop from './Component/Backdrop/Backdrop.js'
import { thisTypeAnnotation } from '@babel/types';
import About from './About.js';
import Home from './Home';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';



class App extends Component {
state=
{
  sideDrawerOpen:false
};

drawerToggleClickHandler =() =>
{
  this.setState((prevState) => 
  {
      return {sideDrawerOpen : !prevState.sideDrawerOpen}
  });
};

backDropClickHandler = () =>
{
  this.setState({sideDrawerOpen:false})
}

  render(){


    let backdrop;

    if(this.state.sideDrawerOpen)
    {
   
      backdrop = <BackDrop click={this.backDropClickHandler}/>
    }

  return (
    <div style={{height:'100%'}} className="App">
      <Router>
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backdrop}
      <main style={{marginTop:'64px'}}>
      
        <Switch>
        <Route path="/" exact component={Home}/> 
        <Route path="/about" component={About}/>
        </Switch>

        
      </main>
      </Router>
    </div>
  );
}
}

export default App;
