import React, { useState } from "react";
import ReactDOM from "react-dom";
import ButtonLogin from "./components/ButtonLogin";
import Search from "./components/Search";

import getHash from "./utils/getHash";

export default function App() {
  const token = getHash().access_token;

  return (
    <>
      {!token && <ButtonLogin />}
      {token && <Search token={token} />}
    </>
  );
}

