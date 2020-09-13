import React from 'react';
import styles from '../CSS/quoteBox.module.css';

function QuoteBox(){
  let center = "center";
  let flexEnd = "flex-end";
  function display(justify,align){ return {color:"#0033FF",
  backgroundColor:"#FF66CC",display:"flex", height:"200px",
  width:"50em",justifyContent:justify, alignItems:align,border:"solid black"}}
  return(
    <div>
      <div id="quote-box" style={display(center,center)}>
        <h1>Hello world</h1>
        <input type="button" value="Generate" />
      </div>
      <div>
        <p>hello</p>
      </div>
    </div>
  )
}

export default QuoteBox;
