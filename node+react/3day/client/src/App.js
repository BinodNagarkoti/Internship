import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const [people,setPeople] = React.useState([])
  
  async function getData(){
    const result= document.getElementById('number').value
    console.log(result)
    const response = await fetch(`http://localhost:1000/get?results=${result}`)
    const jsonData = await response.json()
    setPeople(jsonData.results)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <input type="number"  placeholder="Enter the number of Person" name="number" id="number"/>
          <button type="submit"  onClick={getData} >get Data</button>
    
          </div>
        {people.map((person,id)=>
        <div className="person" key={id}>
          <div  > <img className="profile_pic" src={person.picture.large} alt={person.name.title}/> </div>
         <div className="details">
           <ul>
          <li>{person.name.title}. {person.name.first}{person.name.last} </li>
          <li>{person.dob.age} Years</li>
          <li>{person.email}</li>
          <li>{person.gender}</li>
          <li>{person.location.city}</li>
          </ul>
         </div>
        </div>
   
        )}
    
       
      </header>
    </div>
  );
}

export default App;
