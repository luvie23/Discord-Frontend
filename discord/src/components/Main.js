import React from "react";
import MainSidebar from "./MainSidebar";
import Chatbox from './Chatbox'

const Main = (props) => {
    let server = props.server
    return (
        <div className="flex w-full h-full">
            <MainSidebar name={server.name} image={server.image}/>
            <Chatbox/>
        </div>
    )
}

export default Main