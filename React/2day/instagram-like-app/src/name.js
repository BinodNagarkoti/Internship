import React from 'react'
import './App.css'
import img from './image/index.jpg'
function SecondApp(props){
    
    
    return (
        <div className="post">
            <h2 className="name">{ props.name}</h2><p className="dot"> <h2>...</h2> </p>
            <img src={img} alt="" srcset=""/>
            <div id="here">
            <button onClick={props.fn} type="submit" class = "btn btn-primary">Like  </button><span className="numLike">{props.numberOfLikes} </span> <span className={props.heart} id="heart"></span>
            </div>
            <h4>Comments</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt corporis vel explicabo commodi deleniti illo aliquam et labore tenetur, laudantium similique deserunt laboriosam aut, sint voluptatibus in quae corrupti quis!</p>
        </div>

    )
}
export default SecondApp;