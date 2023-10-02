import { Card, CardContent, CardHeader, CardMedia, List } from "@mui/material";
import { AlbumModel } from "../../data/Album.interface";
import { AlbumTrack } from "./Album.track";
import "./Album.scss";
import dayjs from "dayjs";

export interface AlbumProps {
  album: AlbumModel;
  imageOnly?: boolean;
}
export function Album(props: AlbumProps) {
  const { album, imageOnly } = props;
  return (
    <Card className="album">
      <CardHeader
        title={album.title}
        subheader={dayjs(album.date).format("MM/DD/YY")}
      />
      <CardMedia component="img" height={350} src={album.img} />
      {!imageOnly && (
        <CardContent>
          <List disablePadding>
            {album.tracks.map((track, index) => (
              <AlbumTrack key={`track-${index}`} track={track} album={album} />
            ))}
          </List>
        </CardContent>
      )}
    </Card>
  );
}
