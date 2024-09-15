import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBarComponent from "./component/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <React.Fragment>
      <NavBarComponent />
      <Routes>
            <Route path="/" Component={HomePage}>
                <Route path="users" Component={UserPage}/>
            </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
