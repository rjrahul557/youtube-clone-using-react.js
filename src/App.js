import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideo from './RecommendedVideo';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SearchPage from './SearchPage';
function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Routes>
          <Route path="/search/:searchTerm" element={
              <div className='app_page'>
              <Sidebar />
              <SearchPage />
              </div>
          }/>
           
          
          <Route path="/" element={
              <div className='app_page'>
              <Sidebar />
              <RecommendedVideo />
              </div>
          }/>
            
          
        </Routes>
      </Router>
      
      
      
      
    </div>
  );
}

export default App;
