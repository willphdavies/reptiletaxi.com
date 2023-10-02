import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Album } from "../../common";
import { useAppState } from "../../data";
import "./Session.scss";

export function Session() {
  const { findAlbums } = useAppState();
  const { year, month, day } = useParams();
  if (!year || !month || !day) {
    throw new Error("no session id");
  }
  const albums = findAlbums(year, month, day);
  return (
    <Box className="session">
      <Box className="session__albums -flex -space-between">
        {albums.map((album, index) => (
          <Box className="album__container" key={`album-${album.title}`}>
            <Album key={`album-${album.title}`} album={album} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
