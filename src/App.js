import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/menu';
import Home from './components/home';
import Todo from './components/Todo';
import Other from './components/other'
import { Global } from './GlobalState'; 

const App = (props) => {
  return (
    <Router>
      <Global Root={() => (
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/todo" element={<Layout><Todo /></Layout>} />
          <Route path="/Other" element={<Layout><Other /></Layout>} />
        </Routes>
      )} />
    </Router>
  );
};

export default App;

