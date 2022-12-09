import {React, useState} from "react";

const ServerForm = (props) => {
    const [serverName, setServerName] = useState('')
    const [channel1, setChannel1] = useState('')
    const [channel2, setChannel2] = useState('')
    const [channel3, setChannel3] = useState('')

    let channels = []

    const inputChangeHandler = (setFunction, event) => {
        setFunction(event.target.value)
    }


    const generateId = () => {
        return Math.floor(1000 + Math.random() * 9000)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (!serverName) {
            alert('Please input a server name')
            return
        }
        if (channel1){
            let prop1 = {name:channel1, subchannels: [{name: channel1 + '#' + generateId()}]}
            channels.push(prop1)

        }
        if (channel2){
            let prop2 = {name:channel2, subchannels: [{name:channel2 + '#' + generateId()}]}
            channels.push(prop2)

        }
        if (channel3){
            let prop3 = {name:channel3, subchannels: [{name:channel3 + '#' + generateId()}]}
            channels.push(prop3)

        }

        
        props.createServer({name: serverName, channels: channels})
        console.log(channels)
    }


    return (
        <div className="absolute top-1/3 left-1/3  h-[320px] w-56 bg-[#202226] rounded-lg flex items-center justify-center">
            <form className=" flex flex-col  gap-3 items-center" onSubmit={handleSubmit} >
                <p className="text-[#93959B] font-bold">Server Name:</p>
                <input className="h-5 w-32" type="text" name="name" onChange={(e)=>inputChangeHandler(setServerName, e)}/>
                <p className="text-[#93959B] font-bold">Channels:</p>
                <input className="h-5 w-32" onChange={(e)=>inputChangeHandler(setChannel1, e)}></input>
                <input className="h-5 w-32" onChange={(e)=>inputChangeHandler(setChannel2, e)}></input>
                <input className="h-5 w-32" onChange={(e)=>inputChangeHandler(setChannel3, e)}></input>
                <button className="border rounded-md w-32 bg-[#B8BCBF]" type="submit" >Create Server</button>
            </form>
        </div>

    )
}

export default ServerForm

// name: 'Cool Server',
// id: '1',
// image: coolServerImage,
// channels: [
//     {
//         name: 'Cool Food',
//         subchannels: [
//             {name: 'Filipino'},
//             {name: 'Indian'}
//         ]
//     },