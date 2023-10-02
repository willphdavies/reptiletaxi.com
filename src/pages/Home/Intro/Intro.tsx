import { Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import "./Intro.scss";
export function Intro() {
  return (
    <Card className="home-intro">
      <CardMedia component="img" height="300" src="/img/cartoon-jam.jpeg" />
      <CardContent>
        <Typography>
          Welcome to All In One Take. Our recordings are not just any ordinary performances, but rather they're captured from the depths of the creative spontaneity that can only come from a jam session in a small bar in Portland, Oregon.

          You know the kind of bar I'm talking about, the ones with the dimly lit corners, where the musky scent of aged whiskey fills the air, and the sound of clinking glasses and murmurs of conversation create the perfect backdrop for the raw energy of improvisation to flourish.

          It's in these intimate settings that our musicians let loose, taking their instruments on a wild ride, creating a musical journey that's as unpredictable as it is captivating. And with our recordings, you can experience the magic of it all, from the comfort of your own home.

          So, come on in and let our live recordings transport you to a small bar in Portland, where the music flows freely, the creativity is unbounded, and the magic of improvisation is captured All In One Take.

        </Typography>
      </CardContent>
    </Card>
  );
}