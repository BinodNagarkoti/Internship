import React from 'react'
import {Switch, Route} from 'react-router-dom'
import landingpage from './landingpage'
import we from './we'
import about from './about'
import mitra from './mitra'
import weather from './weather'

const Main = ()=>(
<Switch>
<Route exact path="/" component={landingpage}/> 
<Route path="/we" component={we}/> 
<Route path="/about" component={about}/> 
<Route path="/mitra" component={mitra}/> 
<Route path="/weather" component={weather}/> 
</Switch>
);
export default Main