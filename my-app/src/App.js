import React, {Component} from 'react';
import Component1 from './Functional/Component1';

class App extends Component {

  render(){
     return (
    <div className="App">
    React
    <Component1 name="Mary" age="24"/>
    </div>
  );
}
}

export default App;
