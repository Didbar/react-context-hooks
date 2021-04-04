import React, { Component, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const SongsContext = createContext();

class SongsContextProvider extends Component {
  state = {
    songsArr: [
      { title: "almost home", id: 1 },
      { title: "memory gospel", id: 2 },
      { title: "this wild darkness", id: 3 },
    ],
  };

  addSong = (title) => {
    const newSongsArr = [...this.state.songsArr, { title, id: uuidv4() }];
    this.setState({ songsArr: newSongsArr });
  };

  render() {
    return (
      <SongsContext.Provider value={{ ...this.state, addSong: this.addSong }}>
        {this.props.children}
      </SongsContext.Provider>
    );
  }
}

export default SongsContextProvider;
