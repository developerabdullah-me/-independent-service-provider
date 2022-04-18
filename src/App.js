import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import CheckOut from './pages/CheckOut/CheckOut';
import Home from './pages/HomeMethod/Home/Home';
import Login from './pages/LoginMethod/Login/Login';
import Register from './pages/LoginMethod/Register/Register';
import NotFownd from './pages/NotFownd/NotFownd';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import Footer from './pages/Share/Footer/Footer';
import Header from './pages/Share/Header/Header';
function App() {
  return (
    <div className="">
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/serviceDetails/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
      <Route path='/checkout' element={<RequireAuth><CheckOut></CheckOut></RequireAuth>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route></Route>
       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/register" element={<Register></Register>}></Route>
       <Route path="*" element={<NotFownd></NotFownd>}></Route>
     </Routes>

     
     <Footer></Footer>
    </div>
  );
}

export default App;
