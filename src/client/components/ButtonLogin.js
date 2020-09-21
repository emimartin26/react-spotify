import React from "react";
import { authEndpoint, clientId, redirectUri, scopes } from "../utils/config";

export default function ButtonLogin() {
  return (
    <a
      href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
        "%20"
      )}&response_type=token&show_dialog=true`}
    >
      Login
    </a>
  );
}
