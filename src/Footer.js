import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import LoopIcon from "@mui/icons-material/Loop";
import { Grid, Slider } from "@mui/material";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";

function Footer() {
  return (
    <div className="footer">
      {/* Album and song details */}
      <div className="footer__left">
        <img
          className="footer__cover"
          src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/114/posts/34296/final_image/Final-image.jpg"
          alt="albbum_cover"
        />
        <div className="footer__songInfo">
          <h4>We Have An Anchor</h4>
          <p> Priscilla J. Owens</p>
        </div>
      </div>

      {/* Player controls */}
      <div className="footer__center">
        <ShuffleIcon className="footer__color" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <LoopIcon className="footer__color" />
      </div>

      {/* Volume controls */}
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider className="footer__slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
