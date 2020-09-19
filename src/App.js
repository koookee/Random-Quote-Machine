import React, {Component} from 'react';
import QuoteBox from './Components/QuoteBox.js';

class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
    <div style={{height: "100%",position: "absolute",left: "0",width: "100%",overflow: "hidden",backgroundColor:"#D3DBFF"}}>
      <QuoteBox />
    </div>
  )}
}

export default App;
