import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Navigate,Route,Routes, useParams} from 'react-router-dom'
import Home from './components/home/Home';
import Auth from './auth/Auth';
import UserDetails from './components/UserDetails';

function App() {
  let { id } = useParams();
  const data =JSON.parse(localStorage.getItem('profile'))
  
  return (
    <div className="main">
       <BrowserRouter>
   
   <Routes>
   <Route path="/" exact element={<Navigate to="/auth" replace={true}/>} />
     <Route path='/home' element={<Home/>} />
      <Route path='/auth' element={<Auth/>} />
      <Route path={`/:${id}`} element={<UserDetails/>} />
   </Routes>
 </BrowserRouter> 
    </div>
  );
}

export default App;
