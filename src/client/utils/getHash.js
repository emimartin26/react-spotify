// returns the current hash location in a normalized form
// (excluding the leading '#' symbol)
const currentLocation = () => {
  return window.location.hash.replace(/^#/, "") || "/";
};

export default function getHash() {
  const hash = currentLocation()
    .split("&")
    .reduce(function (initial, item) {
      if (item) {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});

  //window.location.hash = "/";
  return hash ? hash : null;
}
