import React from "react";
import { Grid } from "@material-ui/core";

import ButtonLogin from "./components/ButtonLogin";
import Search from "./components/Search";
import getHash from "./utils/getHash";

export default function App() {
  const token = getHash().access_token;

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item>
        {!token && <ButtonLogin />}
        {token && <Search token={token} />}
      </Grid>
    </Grid>
  );
}

