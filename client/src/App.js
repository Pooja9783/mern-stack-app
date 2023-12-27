import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ROUTE_STRINGS from "./utils/routes/routeString";
import SignUp from "./screens/authScreen/signup";
import AuthScreen from "./screens/authScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE_STRINGS.createAccount} element={<SignUp />} />
          <Route path={ROUTE_STRINGS.login} element={<AuthScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
