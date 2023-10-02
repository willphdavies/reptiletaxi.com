import { Box, Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import "./About.scss";
export function About() {
  return (
    <Box className="page-about">
      <Card className="about__card">
        <CardHeader
          title="About Us"
          subheader="Reptile Taxi - The Origin Story"
        />
        <CardMedia component="img" image="/img/us1-min.jpg" />
        <CardContent>
          Reptile Taxi is a band formed by Martin and 'Mailman' Mike. Martyn is
          definitely the main creative source for the band, having written most
          of the songs on his Portland Made Doolin guitar. 'Mailman' Mike is a
          dedicated progressive rock drummer and harmonica player and has also
          contributed a number of songs himeself. They have had numerous
          different musician members over the years, with the latest additions
          being Will (rhythm guitar and vocals) and James (Bass).
        </CardContent>
      </Card>
      <Card className="about__card">
        <CardMedia component="img" image="/img/covert-cafe-2023.jpg" />
      </Card>
      <Card className="about__card">
        <CardMedia component="img" image="/img/2020-08-19_01-min.jpg" />
      </Card>
      <Card className="about__card">
        <CardMedia component="img" image="/img/2020-01-11_3-min.jpg" />
      </Card>
      <Card className="about__card">
        <CardMedia component="img" image="/img/2020-01-11_2-min.jpg" />
      </Card>
      <Card className="about__card">
        <CardMedia component="img" image="/img/2020-01-11_1-min.jpg" />
      </Card>
    </Box>
  );
}
