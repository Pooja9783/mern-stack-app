import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ROUTE_STRINGS from "./utils/routes/routeString";
import Login from "./screens/login";
import SignUp from "./screens/signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE_STRINGS.login} element={<Login />} />
          <Route path={ROUTE_STRINGS.createAccount} element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
