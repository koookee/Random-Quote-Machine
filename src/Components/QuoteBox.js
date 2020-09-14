import React from 'react';
import styles from '../CSS/quoteBox.module.css';

function QuoteBox(){
  let center = "center";
  let flexEnd = "flex-end";
  function boxDisplay(justify){ return {backgroundColor:"#FF66CC",display:"flex",justifyContent:justify, alignItems:"center",border:"solid black",flexWrap:"wrap"}}
  let textDisplay = {flexGrow:0, border:"solid black",textAlign:center,alignSelf:"center",height:"7em"};
  let authorDisplay = {border:"solid black"};
  let genDisplay = {width:"10em",height:"3em",border:"solid black",alignSelf:"flex-end"};
  return(
    <div>
      <div style={{display:"flex",justifyContent:"center", alignItems:"center",backgroundColor:"blue" }}>
        <div id="quote-box" style={boxDisplay(center,center)}>
          <p id="text" style={textDisplay}>Hello world</p>
          <p id="author" style={authorDisplay}> - author </p>
          <input id="new-quote" type="button" style={genDisplay} value="Generate" />
        </div>
      </div>
    </div>
  )
}

export default QuoteBox;
