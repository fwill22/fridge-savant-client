import React from "react";
import Pages from "./pages";
import "./App.css";
import StoreProvider from "./providers/store";
import FlashProvider from "./providers/Flash";

const App = () => {
  return (
    <div className="App">
      <StoreProvider>
        <FlashProvider>
          <Pages />
        </FlashProvider>
      </StoreProvider>
    </div>
  );
};

export default App;
