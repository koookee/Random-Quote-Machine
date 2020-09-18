import React from 'react';
import styles from '../CSS/quoteBox.module.css';
import Button from 'react-bootstrap/Button';

class QuoteBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quote:"Welcome to the random quote generator! Click on 'Generate' to display a new random quote",
      author:"Hussein El Mokdad",
      isLoading:false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({isLoading:true})
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => {
      let randomNum = Math.floor(Math.random() * 1643);
      //1643 is the arr length
      if(data[randomNum].author == null){
        this.setState({quote:data[randomNum].text,author:"Unknown"})
      }
      else{
        this.setState({quote:data[randomNum].text,author:data[randomNum].author,isLoading:false})}
    })
  }
render(){
  function boxDisplay(justifyType){ return {backgroundColor:"#FF66CC"
  ,margin:"6em",marginTop:"15em",marginBottom:"15em",display:"flex",height:"12em",
  justifyContent:justifyType, alignItems:"center",border:"solid black",flexWrap:"wrap"}}

  let textDisplay = {textAlign:"center",alignSelf:"stretch",flex:"2 10 auto",flexWrap:"wrap"};
  let authorDisplay = {flex:"4 0 auto"};
  let genDisplay = {height:"2em",flex:"4 1 0"};
  let twitterDisplay = {alignSelf:"flex-end",flex:"1 1 1"}

  let twitterLink = "https://twitter.com/intent/tweet?text=Quote of the day: " + this.state.quote + " - " + this.state.author;

  return(
    <div>
      <div>
        <div id="quote-box" style={boxDisplay("spaceAround")}>
          <p id="text" style={textDisplay}>{this.state.isLoading?"Fetching...":this.state.quote}</p>
          <p id="author" style={authorDisplay}> -{this.state.isLoading?"Thank you for waiting!":this.state.author}</p>
          {this.state.isLoading?null:<input id="new-quote" className={styles.genBox} type="button" style={genDisplay} value="Generate" onClick={this.handleClick} />}
          {this.state.isLoading?null:<a id="tweet-quote" href={twitterLink} target="_blank" style={twitterDisplay}>tweet</a>}
        </div>
      </div>
    </div>
  )}
}

export default QuoteBox;
