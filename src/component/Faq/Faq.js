import React, { Component } from 'react';

class Faq extends Component {
  constructor(props){
    super(props)
    this.state= { };
    this.clicked = this.clicked.bind(this)
  }

  clicked(){
    this.setState({ text: this.refs.name.value, text1: this.refs.age.value })
  }

  render() {
    return (
      <div className="Faq">
        
        Name:<input type="text" ref="name" /> <br />
        Age:<input type="text" ref="age" /> <br />

          <button onClick = { this.clicked }>Submit</button>
          <div className="formtext">
              { this.state.text }<br />
              { this.state.text1 } <br/>
          </div>
      </div>
    );
  }
}

export default Faq;