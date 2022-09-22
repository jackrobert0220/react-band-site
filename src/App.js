import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Music from './routes/Music';
import Shows from './routes/Shows';
import Videos from './routes/Videos';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/music' element={<Music />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/shows' element={<Shows />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
