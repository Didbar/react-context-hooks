import React, { useContext } from "react";

import NewSongForm from "./NewSongsForm";
import { ThemeContext } from "../contexts/ThemeContext";
import { SongsContext } from "../contexts/SongsContext";

const SongList = () => {
  const { songsArr, addSong } = useContext(SongsContext);
  const handleAddSong = (title) => {
    addSong(title);
  };
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="song-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        {songsArr.map((song) => (
          <li key={song.id} style={{ background: theme.ui }}>
            {song.title}
          </li>
        ))}
      </ul>

      <NewSongForm handleAddSong={handleAddSong} />
    </div>
  );
};

export default SongList;
