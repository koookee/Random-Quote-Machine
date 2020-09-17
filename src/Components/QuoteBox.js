import React from 'react';
import styles from '../CSS/quoteBox.module.css';
import Button from 'react-bootstrap/Button';

class QuoteBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quote:"Testing"
    }
  }
render(){
  function boxDisplay(justifyType){ return {backgroundColor:"#FF66CC"
  ,margin:"6em",marginTop:"15em",marginBottom:"15em",display:"flex",height:"12em",
  justifyContent:justifyType, alignItems:"center",border:"solid black",flexWrap:"wrap"}}

  let textDisplay = {border:"solid black",textAlign:"center",alignSelf:"stretch",flex:"2 10 auto"};
  let authorDisplay = {border:"solid black",alignSelf:"flexEnd",flex:"4 0 auto"};
  let genDisplay = {height:"2em",border:"solid black",flex:"4 1 0"};

  let twitterLink = "https://twitter.com/intent/tweet?text=Quote of the day: " + this.state.quote;

  return(
    <div>
      <div>
        <div id="quote-box" style={boxDisplay("spaceAround")}>
          <p id="text" style={textDisplay}>Text zz text qqq qqq qqqqq qqq, qqqqqqq, qqqqqqqqq, QQQQQQQQQQQQQQQ  qqqqqqqqqq</p>
          <p id="author" style={authorDisplay}> - Test Testing  </p>
          <input id="new-quote" className={styles.genBox} type="button" style={genDisplay} value="Generate" />
          <a id="tweet-quote" href={twitterLink} target="_blank">tweet</a>
        </div>
      </div>
    </div>
  )}
}

export default QuoteBox;
