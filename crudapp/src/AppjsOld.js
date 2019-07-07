import React ,{Component}from 'react';
import MyComponent from './MyComponent';
import './App.css';


class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = 
    {
      title:'inital title',
      name:'initial name'
    };

    this.onClick = this.onClick.bind(this);

  }


  onClick(){
    this.setState({
      title:'new title',
      name: 'new app name'
    });
  }

  onSubmit(event)
  {
    event.preventDefault();

    console.log(this.input.value);
  }

 

  

  render(){
  const title = 'This is my app';
  const anothertitle = 'another title';


  return (
    <div className="App">
      <h1>
      {this.state.title}
      </h1>
      <div onClick ={this.onClick}>click here</div>
    <MyComponent
      title= {this.state.title}
      name = {this.state.name}
      onClick = {this.onClick}
    />
    </div>
  );
}
}

export default App;
