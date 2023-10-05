import React from 'react'

import { Main } from './pages/Main/Main';
import { Design } from './pages/Design/Design';
import { LandscapeDesign } from './pages/LandscapeDesign/LandscapeDesign';
import { Projects } from './pages/Projects/Projects';
import { Buildings } from './pages/Buildings/Buildings';
import { Repairement } from './pages/Repairement/Repairement';
import { Contact } from './pages/Contact/Contact';
import { OurTeam } from './pages/OurTeam/OurTeam';
import { Services } from './pages/Services/Services';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path='/Main' element={<Main />} />
          <Route path='/Design' element={<Design />} />
          <Route path='/LandscapeDesign' element={<LandscapeDesign />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Buildings' element={<Buildings />} />
          <Route path='/Repairement' element={<Repairement />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/OurTeam' element={<OurTeam />} />
          <Route path='/Services' element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
