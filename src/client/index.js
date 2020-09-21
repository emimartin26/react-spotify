import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CssBaseLine from "@material-ui/core/CssBaseline";

function Main() {

  return (
    <>
      <CssBaseLine />
      <App />
    </>
  );
}



ReactDOM.render(<Main />, document.getElementById("root"));
