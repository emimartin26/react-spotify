import React from "react";

import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@material-ui/core";


export default function Track({ item }){
  const { album, name, artists, preview_url } = item;

  return (
    <ListItem key={album.name} alignItems="flex-start">
      <ListItemAvatar>
        <Avatar src={album.images[2].url} />
      </ListItemAvatar>

      <ListItemText
        primary={name}
        secondary={
          <React.Fragment>
            <Typography component="span" variant="body2" color="textPrimary">
              {artists[0].name}
            </Typography>
            {` - ${album.name}`}
          </React.Fragment>
        }
      />
      <audio controls="controls">
        <source src={preview_url} type="audio/mpeg" />
      </audio>
    </ListItem>
  );
}