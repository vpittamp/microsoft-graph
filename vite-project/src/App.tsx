import React from 'react';
import './App.css'
import AuthComponent from './AuthComponent';
import UserComponent from './UserComponent';
import Search from './Search';
import SearchResultsComponent from './SearchResultsComponent';
import TodoComponent from './TodoComponent';
import { Routes, Route } from "react-router-dom";

// create Login component
export const App = () => {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Routes>
        <Route path="/login" element={<AuthComponent />} />
        <Route path="/user" element={<UserComponent />} />
        <Route path="/search" element={<><Search /><SearchResultsComponent/></>}/>
        <Route path="/todo" element={<TodoComponent />} />
      </Routes>
    </div>
  );
}

export default App;