import React, { useState } from "react";
import getSpotifyData from "../services/getSpotifyData";

import { Card, CardContent, TextField } from "@material-ui/core";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

export default function Search({ token }) {
  const [data, setData] = useState([]);

  const handleKeyPress = async (event) => {
    if(event.key === "Enter"){
      const uri = `https://api.spotify.com/v1/search?type=track&q=${event.target.value}`;
      const data = await getSpotifyData({ token, uri});
      
      setData(data)
    }
  }

  console.log(data.tracks && JSON.stringify(data.tracks.items));

  return (
    <Card variant="outlined">
      <CardContent>
        <TextField
          id="standard-basic"
          label="Search music"
          onKeyPress={handleKeyPress}
        />
        <List>
          {data.tracks &&
            data.tracks.items.map((item) => {
              return (
                <>
                  <ListItem key={item.album.name} alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar src={item.album.images[2].url} />
                    </ListItemAvatar>

                    <ListItemText
                      primary={item.name}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                          >
                            {item.artists[0].name}
                          </Typography>
                          {` - ${item.album.name}`}
                        </React.Fragment>
                      }
                    />
                    <audio controls="controls">
                      <source src={item.preview_url} type="audio/mpeg"/>
                    </audio>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              );
            })}
        </List>
      </CardContent>
    </Card>
  );
}
