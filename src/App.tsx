import React, { useEffect, useRef } from "react";
import "./App.scss";
import { AppRoutes } from "./App.routes";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import { Box, Chip } from "@mui/material";
import ReactAudioPlayer from "react-audio-player";
import { useAppState } from "./data";
Amplify.configure(awsExports);
interface AppProps {
  signOut?: () => void;
  user?: any;
}
function App(props: AppProps) {
  const { currentTrack, currentAlbum, setIsPlaying, isPlaying, onTrackEnd } =
    useAppState();
  const ref = useRef<ReactAudioPlayer>(null);
  return (
    <Box className="app-container">
      <Box className="container__routes">
        <AppRoutes />
      </Box>
      <Box className="app__player">
        <ReactAudioPlayer
          ref={ref}
          src={currentTrack?.src}
          title={currentTrack?.title}
          onEnded={onTrackEnd}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          autoPlay
          controls
        />
        {currentTrack && currentAlbum && currentAlbum.dateSlug && (
          <Chip
            className="player__now_playing"
            color="secondary"
            label={`${isPlaying ? "Now" : "Resume"} Playing: ${
              currentTrack.title
            } (${currentAlbum?.title})`}
          />
        )}
      </Box>
    </Box>
  );
}

export default App;
