import './App.css';
import ChatAi from './componant/ChatWithAi/chaiAi';
import Home from './componant/home/home';
import { Routes,Route } from 'react-router-dom';
import GetApp from './componant/GetApp/GetApp';

const App = ()=>(

  <Routes>


<Route path='/' element ={<Home/>} ></Route>
<Route path='/chaiAi' element ={<ChatAi/>} ></Route>
<Route path='/app' element ={<GetApp/>} ></Route>



  </Routes>

)


export default App;