import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <div>
          <input
            type="text"
            onChange={() => {
              console.log('I am clicked');
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
