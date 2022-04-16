import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/LoginMethod/Login/Login';
import Register from './pages/LoginMethod/Register/Register';
import Services from './pages/Services/Services';
import Header from './pages/Share/Header/Header';
function App() {
  return (
    <div className="">
      <Header></Header>
     <Routes>
       <Route path="/services" element={<Services></Services>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/register" element={<Register></Register>}></Route>
     </Routes>
    </div>
  );
}

export default App;
