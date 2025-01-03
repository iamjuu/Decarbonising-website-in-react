import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import './App.css';
import Loader from './common/loader';
const Sections = lazy(() => import('./pages/sections'));
const RegisterForm = lazy(() => import('./components/forms/registerFrom')); 
import Contact from './pages/contact'
import About from './pages/about'
import DetailsPage from './pages/detailsPage'
function App() {

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
        
          <Route path="/" element={<Sections />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/vehicle-details" element={<DetailsPage />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>

        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
