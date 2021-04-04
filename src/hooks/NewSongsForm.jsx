import React, { useState } from "react";

const NewSongForm = ({ handleAddSong }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddSong(title);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="song-name">Song name:</label>
      <input
        type="text"
        id="song-name"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="submit" value="add song" />
    </form>
  );
};

export default NewSongForm;
