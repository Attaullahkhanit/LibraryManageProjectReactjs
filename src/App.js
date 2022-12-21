import './App.css';
import {DatePicker, Button} from 'antd';

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Home from './Pages/Home/Home';
import DetailPage from './Pages/DetailPage/DetailPage';
import { useEffect } from 'react';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='/detailpage' element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
