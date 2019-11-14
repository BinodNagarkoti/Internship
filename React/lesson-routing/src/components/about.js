import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl'
class about extends Component{
render(){
    return(
<div className="about-page"> 
  <h1>I am</h1>
  <h1>Binod Nagarkoti</h1>
  <h3>i Do</h3>
 

  <div class="project">
    <Grid className="demo-grid-3">
        <Cell col={3}>Django</Cell>
        <Cell col={3}>React</Cell>
        <Cell col={3}>PHP</Cell>
        <Cell col={3}>Java</Cell>
    </Grid>
</div>



</div>

    );
}
}
export default about;