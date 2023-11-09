import './App.css';
import React, {useState} from 'react';
import  Button  from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import  InstagramIcon  from '@mui/icons-material/Instagram';
import TwitterIcon  from '@mui/icons-material/Twitter';


const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  }
  const [quote, setQuote] = useState(quoteData)
 
  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote(data)
      });
  }

  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
    alert('copied')
  }

  return (
    <>
      <h1>Quote Generator React App</h1>
      
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">Copy</button>
          <button onClick={generateQuote}>Generate Another Quote</button>
       
          
        </div>
    
<Button><FacebookIcon sx={{color:"white"}}></FacebookIcon></Button>
<Button><InstagramIcon sx={{color:"white"}}></InstagramIcon></Button>
<Button><TwitterIcon sx={{color:"white"}}></TwitterIcon></Button>
      </div>
    </>

  )
  
}


export default App;
