import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/pages/Home/Home';
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/aboutUs' element={<div>aboutUs</div>}/>
          <Route path='*' element={<div>error</div>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;