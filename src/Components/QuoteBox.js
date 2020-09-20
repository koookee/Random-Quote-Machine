import React from 'react';
import styles from '../CSS/quoteBox.module.css';
//import Button from 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';


class QuoteBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quote:"Welcome to the random quote generator! Click on \"Generate\" to display a new random quote",
      author:"Hussein El Mokdad",
      isLoading:false,
      showTwitterLink:false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    //Shows twitter link when user clicks on generate
    this.setState({isLoading:true, showTwitterLink:true})
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
  function boxDisplay(justifyType){ return {backgroundColor:"#FE91CA",display:"flex",height:"12em",
  margin:"5em 5em",justifyContent:justifyType, alignItems:"center",border:"solid black",flexWrap:"wrap"}}

  let textDisplay = {textAlign:"center",alignSelf:"stretch",flex:"2 10 auto",flexWrap:"wrap",fontFamily:"Arial"};
  let authorDisplay = {flex:"4 0 auto",fontStyle:"oblique"};
  let genDisplay = {flex:"4 1 0"};
  let twitterDisplay = {alignSelf:"flex-end",flex:"1 1 1"}

  let twitterLink = "https://twitter.com/intent/tweet?text=Quote of the day: " + this.state.quote + " - " + this.state.author;

  return(
    <div>
      <div>
        <div id="quote-box" style={boxDisplay("spaceAround")}>
          <p id="text" style={textDisplay}>{this.state.isLoading?"Fetching...":this.state.quote}</p>
          <p id="author" style={authorDisplay}> -{this.state.isLoading?"Thank you for waiting!":this.state.author}</p>
          {this.state.isLoading?null:<Button id="new-quote" variant="dark" className={styles.genBox} style={genDisplay} onClick={this.handleClick}>Generate</Button>}
          {this.state.isLoading?null:(this.state.showTwitterLink?<Button variant="primary" size="sm" id="tweet-quote" href={twitterLink} target="_blank" style={twitterDisplay}>Tweet</Button>:null)}
        </div>
      </div>
    </div>
  )}
}

export default QuoteBox;
