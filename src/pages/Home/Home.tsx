import { Box } from "@mui/system";
import { Album } from "../../common";
import "./Home.scss";
import { useAppState } from "../../data";
import { Link } from "react-router-dom";
import { Card, CardMedia } from "@mui/material";

export function Home() {
  const { albums } = useAppState();
  return (
    <Box className="page-home">
      <Card className="home__top-img">
        <CardMedia component="img" image="/img/reptiletaxi.png" />
      </Card>
      <Box className="home__albums -flex -space-between">
        {albums.slice(0, 2).map((album, index) => (
          <Box className="album__container" key={`album-${album.title}`}>
            <Album key={`album-${album.title}`} album={album} />
          </Box>
        ))}
        {albums.slice(2).map((album, index) => (
          <Box className="album__container" key={`album-${album.title}`}>
            <Link to={`/session/${album.dateSlug}`}>
              <Album key={`album-${album.title}`} album={album} imageOnly />
            </Link>
          </Box>
        ))}
      </Box>
      <Card className="home__bottom-img">
        <CardMedia component="img" image="/img/rep-cartoon.jpg" />
      </Card>
    </Box>
  );
}
