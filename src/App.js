import React from "react";
import Pages from "./pages";
import "./App.css";
import AuthProvider from "./providers/auth";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Pages />
      </AuthProvider>
    </div>
  );
};

export default App;
