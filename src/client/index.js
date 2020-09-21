import React from "react";
import ReactDOM from "react-dom";
import CssBaseLine from "@material-ui/core/CssBaseline";

import App from "./App";

function Main() {

  return (
    <>
      <CssBaseLine />
      <App />
    </>
  );
}



ReactDOM.render(<Main />, document.getElementById("root"));
