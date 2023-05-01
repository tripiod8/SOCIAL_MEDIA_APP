import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home  from "./components/home/Home";
import Login from "./components/Auth/Login"

import './App.css';

export const UserContext = React.createContext()


export const App = (response) => {
  
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={user}>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/login' element={<Login />} />

      </Routes>
    </UserContext.Provider>
  );
}

export default App;
