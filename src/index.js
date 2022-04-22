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
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import LookHollidays from "./LookHollidays";


const Root = () => {
  return (
    <Router>
      {/* <ProSidebar>
        <Menu iconShape="square">
          <MenuItem>Accueil <Link to="/accueil" /></MenuItem>
          <MenuItem>Test <Link to="/test" /></MenuItem>
          <MenuItem>Dashboard</MenuItem>
        </Menu>
      </ProSidebar> */}
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
        <Route path="/LookHollidays" element={<LookHollidays/>} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
