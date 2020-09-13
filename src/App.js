import React, {Component} from 'react';
import QuoteBox from './Components/QuoteBox.js';

class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
    <div>
      <QuoteBox />
    </div>
  )}
}

export default App;
