import Sidebar from './components/Sidebar'
import Main from './components/Main';
import { useState } from 'react';
import servers from "./components/servers";

let serverList = servers

function App() {

  const [selectedServer, setSelectedServer] = useState(serverList[0])

  const handleClick = (index) =>{
    setSelectedServer(serverList[index])
    console.log(selectedServer)
  }

  return (
    <>
      <div className='flex bg-[#202226] h-screen'>
        <Sidebar handleClick={handleClick}/>
        <Main server={selectedServer}/>
      </div>
      
    </>
  );
}

export default App;
