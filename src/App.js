import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddProduct from './Components/AddProduct/AddProduct';
import Footer from './Components/Footer/Footer';
import ForgetPass from './Components/ForgetPass/ForgetPass';
import Home from './Components/Home/Home';
import InvalidPage from './Components/InvalidPage/InvalidPage';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import Navbar from './Components/Navbar/Navbar';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import ScrollButton from './Components/ScrollButton/ScrollButton';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar></Navbar>

      <ScrollToTop>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/reset-password' element={<ForgetPass></ForgetPass>}></Route>
          <Route path='/inventory' element={<Inventory></Inventory>}></Route>
          <Route path='/inventory/:productId' element={
            <RequireAuth>
              <ProductDetail></ProductDetail>
            </RequireAuth>}></Route>

          <Route path='/manage-inventory' element={
            <RequireAuth>
              <ManageInventory></ManageInventory>
            </RequireAuth>
          }></Route>

          <Route path='/add-product' element={
            <RequireAuth>
              <AddProduct></AddProduct>
            </RequireAuth>
          }></Route>
          <Route path='*' element={<InvalidPage></InvalidPage>}></Route>
        </Routes>

      </ScrollToTop>

      <ScrollButton></ScrollButton>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
