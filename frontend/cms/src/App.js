import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

import { Main } from "./components/Main";
import { LoginForm } from "./components/LoginForm";
import { Header } from "./components/Header";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin",
  };

  const [user, setUser] = useState({ email: "" });
  const [error, setError] = useState("");

  if (!JSON.parse(localStorage.getItem("user"))) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  const Login = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        email: details.email,
      });
      localStorage.setItem("user", JSON.stringify(details));
      console.log(JSON.parse(localStorage.getItem("user")));
    } else {
      console.log("Details didn't match!");
      setError("Details didn't match!");
    }
  };

  const Logout = () => {
    console.log("Logged out");
    setUser({ email: "" });
    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify(user));
    console.log(JSON.parse(localStorage.getItem("user")));
  };

  return (
    <div className="App">
      {JSON.parse(localStorage.getItem("user")).email === "" ? (
        <LoginForm Login={Login} error={error} />
      ) : (
        <Router>
          <Header Logout={Logout} />
          <Main />
        </Router>
      )}
    </div>
  );
}

export default App;
