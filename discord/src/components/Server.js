import React from "react";

const Server = (props) => {
    return (
        <>
            <img className="w-10 h-10 my-5 rounded-full hover:cursor-pointer" 
        alt={props.name} title={props.name} src={props.serverImage} onClick={props.handleClick}/>
       </>
    )
}

export default Server