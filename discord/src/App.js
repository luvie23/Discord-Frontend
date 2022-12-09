import Sidebar from './components/Sidebar'
import Main from './components/Main';
import { useState } from 'react';
import servers from "./components/servers";
import ServerForm from "./components/ServerForm";


function App() {
  const [serverList, setServerList] = useState(servers)
  const [selectedServer, setSelectedServer] = useState(serverList[0])
  const [showForm, setShowForm] = useState(false)

  const handleClick = (index) =>{
    setSelectedServer(serverList[index])
    console.log(selectedServer)
  }

  const generateId = () => {
    return serverList.length + 1
  }

  const createServer = (server) =>{
    server.id = generateId()
    setServerList(serverList.concat(server))
  }

  return (
    <>
      <div className='flex bg-[#202226] h-screen'>
        <Sidebar  servers={serverList} handleClick={handleClick}/>
        <Main server={selectedServer}/>
        <ServerForm createServer={createServer}/>
      </div>
      
    </>
  );
}

export default App;
