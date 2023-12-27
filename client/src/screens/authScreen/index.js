import "./style.css";
import React from "react";
import Login from "./login";

export default function AuthScreen() {
  return (
    <div className="auth-container">
      <div className="auth-content">
        <Login />
      </div>
    </div>
  );
}
