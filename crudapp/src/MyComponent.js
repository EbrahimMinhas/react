import React ,{Component}from 'react';
import PropTypes from 'prop-types'

const propTypes = 
{
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
        title: PropTypes.string.isRequired
}

const defaultProps= 
{
    name : 'default name of app'
}

class MyComponent extends Component {

shouldComponentUpdate(nextProps,nextState)
{
    return false;
}

render(){

    const {title,name,onClick} = this.props;

  return (
    <div className="MyComponent">
        <h1>title: {title}</h1>
        <h2>Name : {name}</h2>
        <div onClick={onClick}>on click me</div>
    </div>
  );
}
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;
