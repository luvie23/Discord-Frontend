import Sidebar from './components/Sidebar'
import Main from './components/Main';
import Chatbox from './components/Chatbox'

function App() {
  return (
    <>
      <div className='flex bg-[#202226]'>
        <Sidebar/>
        <Main/>
        <Chatbox />
      </div>
      
    </>
  );
}

export default App;
