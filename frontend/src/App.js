import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './Pages/HomePage/Home';
import Login from './Pages/Auth/Login';
import Register from './Pages/Register/Register';
import Cart from './Pages/CartPage/Cart';
import NavBar from './components/NavBar/NavBar';
import AdReg from './Pages/Admin/Register/AdReg';
import UpdateProduct from './Pages/Admin/updateProduct/UpdateProduct';
import CreateProduct from './Pages/Admin/createProduct/CreateProduct';
import Profile from './Pages/Admin/Profile/Profile';
import DashBoard from './Pages/Admin/DashBoard/DashBoard';
import AdLogin from './Pages/Admin/Login/AdLogin';
import Error from './components/Error/Error';
import FullProduct from './Pages/FullProduct/FullProduct';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={<>
            <NavBar />
            <Home />
            <Footer />
          </>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/product' element={<>
            <NavBar />
            <FullProduct />
          </>} />
          <Route path='/cart' element={<>
            <NavBar />
            <Cart />
          </>} />

          {/* admin */}

          <Route path='/admin_register' element={< AdReg />} />
          <Route path='/admin_login' element={<AdLogin />} />
          <Route path='/dashboard' element={<>
            <NavBar />
            <DashBoard />
            <Footer />
          </>} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/createProduct' element={<CreateProduct />} />
          <Route path='/updateProduct' element={<UpdateProduct />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
