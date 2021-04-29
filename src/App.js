import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import data from "./data";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Carrousel from "./components/Carrousel";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NavigationIcon from "@material-ui/icons/Navigation";

export default function App() {
  const size = useWindowSize();

  const routeChange = (section) => {
    window.location.href = "/#" + section;
  };

  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      margin: "auto",
      minWidth: 275,
      width: size.width - 25,
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "56.25%", // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      [theme.breakpoints.down("xs")]: {
        flexGrow: 1,
      },
      fontFamily: "Open Sans",
    },
    subtitle: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
      fontFamily: "Open Sans",
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar style={{ backgroundColor: "#006853" }} position="sticky">
        <Toolbar
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <BootstrapButton
            onClick={() => routeChange("")}
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Typography className={classes.title} variant="h6" noWrap>
              {data.nombre}
            </Typography>
          </BootstrapButton>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <BootstrapButton
              onClick={() => routeChange("courses")}
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge color="secondary">
                <Typography
                  className={classes.subtitle}
                  variant="subtitle1"
                  noWrap
                  variant="h6"
                >
                  Cursos
                </Typography>
              </Badge>
            </BootstrapButton>
            <BootstrapButton
              onClick={() => routeChange("about")}
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Typography className={classes.subtitle} variant="h6" noWrap>
                Acerca de
              </Typography>
            </BootstrapButton>
            <BootstrapButton
              onClick={() => routeChange("contact")}
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Typography className={classes.subtitle} variant="h6" noWrap>
                Contacto
              </Typography>
            </BootstrapButton>
            <BootstrapButton
              onClick={() => routeChange("login")}
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <Typography className={classes.subtitle} variant="h6" noWrap>
                Login
              </Typography>
            </BootstrapButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            ></IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <main>
        {/* Carrousel */}
        <div className={classes.heroContent}>
          <Carrousel />
        </div>
        {/* Cursos */}
        <div
          id="courses"
          name="courses"
          style={{ height: size.height, backgroundColor: "#bed6ce" }}
        ></div>
        {/* Acerca de */}
        <div id="about" name="about" style={{ height: size.height }}></div>
        {/* Contacto */}
        <div
          id="contact"
          name="contact"
          style={{ height: size.height, backgroundColor: "#bed6ce" }}
        ></div>
        {/* login */}
        <div
          id="login"
          name="login"
          style={{ height: size.height, backgroundColor: "#222222" }}
        ></div>
      </main>
      <div></div>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
      <div
        style={{
          margin: 0,
          top: "auto",
          right: 20,
          bottom: 20,
          left: "auto",
          position: "fixed",
        }}
      >
        {FloatingActionButton()}
      </div>
    </React.Fragment>
  );
}

function FloatingActionButton() {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root1}>
      <Fab style={{backgroundColor:"#fff"}}  aria-label="whatsapp">
      <CardMedia
        image={"../whatsapp.png"}
        style={{width:40,height:40}}
      />
      </Fab>
    </div>
  );
}

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#006853",
    borderColor: "#006853",
    borderRight: "14px",
    borderLeft: "14px",

    "&:hover": {
      backgroundColor: "#015645",
      borderColor: "#015645",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#025040",
      borderColor: "#025040",
    },
  },
})(Button);

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
