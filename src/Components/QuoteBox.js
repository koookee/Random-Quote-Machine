import React from 'react';
import styles from '../CSS/quoteBox.module.css';

function QuoteBox(){
  let center = "center";
  let flexEnd = "flex-end";

  function boxDisplay(justify){ return {backgroundColor:"#FF66CC"
  ,margin:"6em",marginTop:"15em",marginBottom:"15em",display:"flex",height:"12em",
  justifyContent:"space-around", alignItems:"center",border:"solid black",flexWrap:"wrap"}}

  let textDisplay = {border:"solid black",textAlign:"center",alignSelf:"stretch",flex:"2 10 auto"};
  let authorDisplay = {border:"solid black",alignSelf:"flexEnd",flex:"4 0 auto"};
  let genDisplay = {height:"2em",border:"solid black",flex:"4 1 0"};
  return(
    <div>
      <div>
        <div id="quote-box" style={boxDisplay("spaceAround")}>
          <p id="text" style={textDisplay}>Text zz text qqq qqq qqqqq qqq, qqqqqqq, qqqqqqqqq, QQQQQQQQQQQQQQQ  qqqqqqqqqq</p>
          <p id="author" style={authorDisplay}> - Test Testing  </p>
          <input id="new-quote" className={styles.genBox} type="button" style={genDisplay} value="Generate" />
        </div>
      </div>
    </div>
  )
}

export default QuoteBox;
