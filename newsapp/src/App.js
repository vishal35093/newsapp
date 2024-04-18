import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const pageSize = 9;

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<News key="general" pageSize={pageSize} country='in' category="general" />}
          />
          <Route
            path="/business"
            element={<News key="business" pageSize={pageSize} country='in' category="business" />}
          />
          <Route
            path="/entertainment"
            element={<News key="entertainment" pageSize={pageSize} country='in' category="entertainment" />}
          />
          <Route
            path="/health"
            element={<News key="health" pageSize={pageSize} country='in' category="health" />}
          />
          <Route
            path="/science"
            element={<News key="science" pageSize={pageSize} country='in' category="science" />}
          />
          <Route
            path="/sports"
            element={<News key="sports" pageSize={pageSize} country='in' category="sports" />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
