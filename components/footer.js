import { useState } from "react";

//Material UI
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

//Components
import Subscribers from "./subscribers";
import SendETH from "./sendETH";

const useStyles = makeStyles((theme) => ({
  boxWrapper: {
    display: "flex",
    padding: "0 16px",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1.5rem",
    },
  },

  leftContainer: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  box: {
    marginTop: "1rem",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1.5rem",
    },
  },
  boxLast: {
    margin: "1rem 0 3rem 0",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      margin: "1.5rem 0",
    },
  },
  form: {
    display: "flex",
    justifyContent: "flexStart",
    alignItems: "center",
    margin: "1rem 0",
  },
  input: {
    margin: "0 1rem",
  },

  light: {
    width: "14px",
    height: "14px",
    borderRadius: "14px",
    border: "1px solid #ffffff",
    backgroundColor: "transparent",
    cursor: "pointer",
  },

  dark: {
    width: "14px",
    height: "14px",
    borderRadius: "14px",
    border: "1px solid #333333",

    backgroundColor: "transparent",
    cursor: "pointer",
  },
}));

export default function Header({ darkTheme, dark, selectedTrack }) {
  const classes = useStyles();
  const [info, setInfo] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [support, setSupport] = useState(false);
  const handleInfo = () => {
    setInfo(!info);
  };

  return (
    <Box className={classes.boxWrapper}>

      <Box className={classes.leftContainer}>
        {info ? (
          <Box className={classes.box}>
          </Box>
        ) : (
          <Box className={classes.box}>
            
          </Box>
        )}
        <Box className={classes.boxLast}>

          <Link href="mailto:clemhepburn@gmail.com">
            <Typography
              variant="body2"
              style={{ marginRight: "10px" }}
              color="primary"
            >
              Contact
            </Typography>
          </Link>
          <Typography
            variant="body2"
            style={{ cursor: "pointer" }}
            color="primary"
            onClick={() => setSupport(true)}
          >
            Support
          </Typography>
        </Box>
      </Box>
      {showForm && <Subscribers setShowForm={setShowForm} dark={dark} />}
      {support && <SendETH setSupport={setSupport} dark={dark} />}
    </Box>
  );
}