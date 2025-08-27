
import { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './tailwind.css';
import App5 from './App5.jsx';
import App6 from './App6.jsx';
import App7 from './App7.jsx';
import App8 from './App8.jsx';
import App9 from './App9.jsx';
import SuccessPage from './SuccessPage.jsx';
import HomePage from './App10.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app5" element={<App5 />} />
        <Route path="/app6" element={<App6 />} />
        <Route path="/app7" element={<App7 />} />
        <Route path="/app8" element={<App8 />} />
        <Route path="/app9" element={<App9 />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
