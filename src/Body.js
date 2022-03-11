import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import SongRow from './SongRow'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img
          className="body__img"
          src={discover_weekly?.image[0].url}
          alt={discover_weekly?.image}
        />

        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuf" />
          <FavoriteIcon fontSize='large' />
          <MoreHorizIcon />
        </div>

        {/* List of songs */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.tracj} />
        ))}
      </div>
    </div>
  );
}

export default Body;
