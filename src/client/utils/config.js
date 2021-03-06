export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = process.env.CLIENT_ID;
export const redirectUri =
  process.env.NODE_ENV === "production"
    ? location.origin
    : "http://localhost:9000";
export const scopes = [
  "user-top-read",
  "user-read-currently-playing",
  "user-read-playback-state",
];
