import React from 'react'

import { Main } from './pages/Main/Main';
import { Design } from './pages/Design/Design';
import { LandscapeDesign } from './pages/LandscapeDesign/LandscapeDesign';
import { Projects } from './pages/Projects/Projects';
import { Buildings } from './pages/Buildings/Buildings';
import { Repairement } from './pages/Repairement/Repairement';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path='/Design' element={<Design />} />
          <Route path='/LandscapeDesign' element={<LandscapeDesign />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Buildings' element={<Buildings />} />
          <Route path='/Repairement' element={<Repairement />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
