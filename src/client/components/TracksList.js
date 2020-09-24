import React from "react";

import { List } from "@material-ui/core";
import Track from "./Track";

export default function TracksList({ data }) {
  return (
    <List>
      {data.tracks && data.tracks.items.map((item) => <Track key={item.id} {...item} />)}
    </List>
  );
}
