import React, { Component } from 'react';


class Home extends Component {
  
  constructor(props ){
    super(props)
    this.state = { show: true};
    this.handleclick = this.handleclick.bind(this)
  }

handleclick = () => {
  const { show } =this.state;
  this.setState({ show: !show })
}

  render() {
    return (
      <div className="Home">
         <button onClick={this.handleclick}>Toggle</button>
          <br />
          <br />
          { this.state.show && <Box />}
          
      </div>
    );
  }
}
class Box extends Component{
  render(){
      return(
        <div>Home PAGE RENDERDER</div> 
      )
  }
}

export default Home;