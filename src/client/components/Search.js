import React, { useState } from "react";
import getSpotifyData from "../services/getSpotifyData";
import {
  Card,
  CardContent,
  TextField,
} from "@material-ui/core";

import TracksList from "./TracksList";


export default function Search({ token }) {
  const [data, setData] = useState([]);

  const handleKeyPress = async (event) => {
    if(event.key === "Enter"){
      const uri = `https://api.spotify.com/v1/search?type=track&q=${event.target.value}`;
      const data = await getSpotifyData({ token, uri});
      
      setData(data)
    }
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <TextField
          id="standard-basic"
          label="Search music"
          onKeyPress={handleKeyPress}
        />
        <TracksList data={data} />
      </CardContent>
    </Card>
  );
}
