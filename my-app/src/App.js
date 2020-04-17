import React, {Component} from 'react';
import Component1 from './Functional/Component1';
import Container1 from './Containers/Container1';

class App extends Component {

  render(){
     return (
    <div className="App">
    React
    <Container1 nickname="Manamt"/>
    <Component1 name="Mary" age="24"/>
    </div>
  );
}
}

export default App;
