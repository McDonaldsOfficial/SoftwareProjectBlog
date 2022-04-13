import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/MainPage/Main";
import Wait from "./Components/Wait"

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/wait" element={<Wait/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;