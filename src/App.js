import './App.scss';

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header.tsx';
import ProjectSelectionPage from './pages/ProjectSelectionPage/ProjectSelectionPage.tsx';
import TasksPage from './pages/TasksPage/TasksPage.tsx';

function App() {
  return (
    <>
    <Header />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<ProjectSelectionPage />} />
          <Route path="/tasks" element={<TasksPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
