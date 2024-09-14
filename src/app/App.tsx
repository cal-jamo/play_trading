import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './page';
import InvestNowContainer from './components/invest_now/InvestNowContainer';
import SportsNewsContainer from './components/sports_news/SportsNewsContainer';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="src/app/invest_now/page.tsx" element={<InvestNowContainer />} />
        <Route path="src/app/sports_news/page.tsx" element={<SportsNewsContainer />} />      {/* Add other routes here */}
    </Routes>
  );
};

export default App;
