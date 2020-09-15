import React from 'react';
import styles from '../CSS/quoteBox.module.css';

function QuoteBox(){
  let center = "center";
  let flexEnd = "flex-end";

  function boxDisplay(justify){ return {backgroundColor:"#FF66CC"
  ,margin:"6em",marginTop:"15em",marginBottom:"15em",display:"flex",height:"10em",
  justifyContent:"space-around", alignItems:"center",border:"solid black",flexWrap:"wrap"}}

  let textDisplay = {flexGrow:4, border:"solid black",textAlign:"center",alignSelf:"stretch",flexShrink:1};
  let authorDisplay = {flexGrow:4,border:"solid black",alignSelf:"flexEnd",flexShrink:1};
  let genDisplay = {flexGrow:0,width:"8em",border:"solid black",flexShrink:1};

  return(
    <div>
      <div>
        <div id="quote-box" style={boxDisplay("spaceAround")}>
          <p id="text" style={textDisplay}>Today is bla bla bla blaaa bla, swvfiwf, WNKVBYIWABV, ABWIHYVBYIWVBguvg  sgabcgadbcadw</p>
          <p id="author" style={authorDisplay}> - author </p>
          <input id="new-quote" type="button" style={genDisplay} value="Generate" />
        </div>
      </div>
    </div>
  )
}

export default QuoteBox;
