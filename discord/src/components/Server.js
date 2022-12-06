import React from "react";

const Server = (props) => {
    return (
        <>
            <img className="w-10 h-10 my-5 rounded-full" 
        alt={props.name} src={props.serverImage}/>
       </>
    )
}

export default Server