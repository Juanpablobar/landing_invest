import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function Carrousel(props) {
  var items = [
    {
      backgroundImage:
        "https://cdn.wallpaperhub.app/cloudcache/1/b/5/8/e/f/1b58ef6e3d36a42e01992accf5c52d6eea244353.jpg",
    },
    {
      backgroundImage:
        "https://www.xtrafondos.com/wallpapers/lineas-de-colores-3057.jpg",
    },
    {
      backgroundImage:
        "https://www.pixelstalk.net/wp-content/uploads/2016/06/Solid-color-1920x1080-wallpapers.jpg",
    },
    {
      backgroundImage:
        "https://cutewallpaper.org/21/wallpapers-colores/Desktop-Color-HD-Wallpapers-PixelsTalk.Net.jpg",
    },
  ];
  const size = useWindowSize();

  return (
    <div>
      {size.width > 0 ? (
        <Carousel indicators={false}>
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      ) : (
        <div>
          <br />
        </div>
      )}
    </div>
  );
}

function Item(props) {
  const size = useWindowSize();

  const useStyles = makeStyles(() => ({
    card2: {
      backgroundImage: props.item.backgroundImage,
      padding: "75px 50px",
      width: size.width,   
      justifyContent: "center",
    },
    card: {
      width: size.width,
      flexDirection: "column",
      justifyContent: "center",
    },
    cardMedia: {
      width: size.width,
      height: size.width /4,
      justifyContent: "center",
    },
  }));

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={props.item.backgroundImage}
      />
    </Card>
  );
}
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

export default Carrousel;
