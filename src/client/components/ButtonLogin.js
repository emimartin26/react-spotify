import React from "react";
import { Button } from "@material-ui/core";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

import { authEndpoint, clientId, redirectUri, scopes } from "../utils/config";

export default function ButtonLogin() {
  return (
    <Button
      startIcon={<VpnKeyIcon />}
      variant="contained"
      color="primary"
      href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
        "%20"
      )}&response_type=token&show_dialog=true`}
    >
      Login to Spotify
    </Button>
  );
}
