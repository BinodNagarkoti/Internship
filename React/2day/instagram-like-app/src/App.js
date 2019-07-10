import React,{useState} from 'react'
import SecondApp from './name' 
import './App.css'
function App(){
// function addCSSRule(sheet, selector, rules, index) {
// 	if("insertRule" in sheet) {
// 		sheet.insertRule(selector + "{" + rules + "}", index);
// 	}
// 	else if("addRule" in sheet) {
// 		sheet.addRule(selector, rules, index);
// 	}
// }
const [isClicked,setClick]= useState(true);
const [isCount,setCount]=useState(2000);
const card1=()=> {
    console.log("Count: "+isCount);
    // setRed(!isRed);
    setClick(false);
    
    if(isClicked){
      setCount(isCount+1);
      document.styleSheets[0].insertRule(".heart:before,.heart:after { background: White }", 1);
      // document.styleSheets[0].insertRule(". { background-color: RED }", 1);
      // addCSSRule(document.styleSheets[0], ".heart:before", "background-ground: RED");
      // addCSSRule(document.styleSheets[0], ".heart:after", "background-ground: RED");
    }else{
      setCount(isCount-1);
      setClick(true);

      document.styleSheets[0].insertRule(".heart:before,.heart:after { background: White }", 1);
      // addCSSRule(document.styleSheets[0], ".heart:before", "background-ground: White");
      // addCSSRule(document.styleSheets[0], ".heart:after", "background-ground: white");

    }
   
  }

  const [isClicked_2,setClick_2]= useState(true)
  const [isCount_2,setCount_2]=useState(2000);
  const card2=()=> {
    console.log("Count: "+isCount_2);
    // setRed(!isRed);
    setClick_2(false);
    
    if(isClicked_2){
      setCount_2(isCount_2+1);
    
    }else{
      setCount_2(isCount_2-1);
      setClick_2(true);

    }
   
  }

  const [isClicked_3,setClick_3]= useState(true)
const [isCount_3,setCount_3]=useState(2000);

  const card3=()=> {
    console.log("Count: "+isCount_3);
    // setRed(!isRed);
    setClick_3(false);
    
    if(isClicked_3){

      setCount_3(isCount_3+1);

    }else{
      setCount_3(isCount_3-1);
      setClick_3(true);
    
    }
    
   
  }
  return (
    <div className="this">
    {/* <h1 className={isClicked ? 'Red' : 'Blue'} >the number of times is clicked {isCount}</h1> */}
    <SecondApp numberOfLikes={isCount} name="Jdesh Vaidya" fn={card1}   heart={isClicked? 'heart-blank' : 'heart'} msg={isClicked? 'You Unliked Me' : 'You Like Me'}/>
    <br/>
    <SecondApp name="Sundar Tamanag" numberOfLikes={isCount_2} fn={card2}  heart={isClicked_2? 'heart-blank' : 'heart'} msg={isClicked_2? 'You Unliked Me' : 'You Like Me'} />
    
    <br/>
    <SecondApp name ="Binod Nagarkoti" numberOfLikes={isCount_3} fn={card3}   heart={isClicked_3? 'heart-blank' : 'heart'} msg={isClicked_3? 'You Unliked Me' : 'You Like Me'} />
    
    <br/>
  {/* 
    <button className = "btn" onClick = {card1} type="submit">Hello!</button>
     */}


    </div>
  
    )
}
export default App;
