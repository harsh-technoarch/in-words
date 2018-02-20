import React, { Component } from 'react';
import calculate from './calculate';
import css from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    event.preventDefault();
  }

  handleSubmit(event) {
    const c = (calculate(this.state.value));
    event.preventDefault();

this.setState({calc : c});

  }

  render() {
    return (
      <div className="container">
                  <pre>Convert Number To Words (0-999)</pre>

         <div className="card cm-card"> 
      <form onSubmit={this.handleSubmit}>
            
            <div className="col-wd">
            <input type="text" placeholder="Enter Between 0 To 999" className="cm-btn" value={this.state.value} onChange={this.handleChange} />
            <input type="submit" value="Convert" className="cm-btn cm-btn-primary" />
            </div>
          </form>
              <p className="center">{this.state.calc}</p>
          </div>
      </div>
    );
  }
}

export default App;


