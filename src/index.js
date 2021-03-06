import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import Test from "./Test";
import Login from "./Login";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Accueil from "./Accueil";
import ProtectedRoute from "./ProtectedRoute";
import "react-pro-sidebar/dist/css/styles.css";
import LookHollidays from "./LookHollidays";
import AskHollidays from "./AskHollidays";


const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route
          path="/accueil"
          element={
            <ProtectedRoute>
              <Accueil />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/LookHollidays" 
          element={
            <ProtectedRoute>
              <LookHollidays/>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/AskHollidays" 
          element={
            <ProtectedRoute>
              <AskHollidays/>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
