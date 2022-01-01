import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import {AiOutlineSearch,AiOutlineInfoCircle,AiOutlinePhone,AiOutlineWarning} from "react-icons/ai"
function App() {
  return (
    <div className="App">
    <Header/>
    <div className='vv'>

<div><AiOutlineInfoCircle size={20}color='white'/></div>
<div><AiOutlineSearch size={20}color='white'/></div>
<div><AiOutlinePhone size={20}color='white'/></div>
<div style={{background:"red"}}><AiOutlineWarning size={20}color='white'/></div>
    </div>
    </div>
  );
}

export default App;
