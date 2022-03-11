import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://i.pinimg.com/originals/46/ba/99/46ba99ac676d6c9820a85400da3adf6f.png"
        alt="music logo"
      />

      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption  Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__play">PLAYLISTS</strong>
      <hr />
      {/* maping the data from spotify */}
      {playlists?.items?.map((playlists) => (
        <SidebarOption title={playlists.name} />
      ))}
    </div>
  );
}

export default Sidebar;
