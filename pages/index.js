import { useState } from "react";

//Material UI
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

//Components
import Playlist from "../components/playlist";
import Player from "../components/player";
import Header from "../components/header";
import Footer from '../components/footer';

//Playlist object
import { getPlaylist } from "./api/playlist";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    backgroundColor: "transparent",
    position: "relative",

    [theme.breakpoints.down("md")]: {
      width: "100vw",
      height: "100%",
      padding: "0px",
    },
  },
  paper: {
    backgroundColor: "transparent",
    position: "relative",

    borderRadius: 0,
    height: "100%",
  },
}));

export default function Home({ playlists, darkTheme, dark }) {
  const tracks = playlists.map((track) => {
    return {
      id: track.id,
      title: track.title,
      url: track.url,
      duration: track.duration,
      number: track.number,
      description: track.description,
      image: track.artwork,
    };
  });
  const [selectedTrack, setSelectedTrack] = useState(null);
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.paper}>
      <Container maxWidth="lg" className={classes.container}>
        <Header
          darkTheme={darkTheme}
          dark={dark}
          selectedTrack={selectedTrack}
        />
        {selectedTrack && dark && (
          <Player
            selectedTrack={selectedTrack}
            setSelectedTrack={setSelectedTrack}
            dark={dark}
          />
        )}
        {selectedTrack && !dark && (
          <Player
            selectedTrack={selectedTrack}
            setSelectedTrack={setSelectedTrack}
            dark={dark}
          />
        )}

        {tracks.map((track) => (
          <Playlist
            track={track}
            key={track.id}
            setSelectedTrack={setSelectedTrack}
          />
        ))}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </Container>
    </Paper>
  );
}

export async function getStaticProps() {
  const data = await getPlaylist();
  return {
    props: {
      playlists: data,
    },
    revalidate: 1,
  };
}
