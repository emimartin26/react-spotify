import React from 'react';

import { List, Divider } from "@material-ui/core";
import Track from "./Track";

export default function TracksList({ data }){
  return (
    <List>
      {data.tracks &&
        data.tracks.items.map((item) => {
          return (
            <>
              <Track item={item} />
              <Divider variant="inset" component="li" />
            </>
          );
        })}
    </List>
  );
};
