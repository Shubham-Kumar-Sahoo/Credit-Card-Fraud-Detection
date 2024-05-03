import React from "react";
import { Routes, Route } from "react-router-dom";
import {Home,Result} from "./pages/index.ts"
const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/result" element={<Result/>} />
      </Routes>
    </>
  );
};

export default App;
