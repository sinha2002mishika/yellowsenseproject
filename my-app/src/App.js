import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JobsList from './components/JobsList';
import Bookmarks from './components/Bookmarks';
import JobDetails from './components/JobDetails';
import BottomNav from './components/BottomNav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<JobsList />} />
        <Route path="/jobs" element={<JobsList />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
      </Routes>
      <BottomNav />
    </div>
  );
}

export default App;
