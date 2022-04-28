import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Footer from './Components/Footer/Footer';
import ForgetPass from './Components/ForgetPass/ForgetPass';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/reset-password' element={<ForgetPass></ForgetPass>}></Route>
      </Routes>

      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
