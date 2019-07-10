import React from 'react'
import {Switch, Route} from 'react-router-dom'
import landingpage from './landingpage'
import we from './we'
import about from './about'
import mitra from './mitra'
const Main = ()=>(
<Switch>
<Route exact path="/" component={landingpage}/> 
<Route path="/we" component={we}/> 
<Route path="/about" component={about}/> 
<Route path="/mitra" component={mitra}/> 
</Switch>
);
export default Main