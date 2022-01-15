import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from '../components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AssignmentsList, ClassesList } from '../pages';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/classes/list' element={<ClassesList />} />
        <Route path='/assignments/list' element={<AssignmentsList />} />
      </Routes>
    </Router>
  );
}
