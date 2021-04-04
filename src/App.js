import Navbar from "./components/Navbar";
import BookList from "./components/BookList";

import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";
import SongsContextProvider from "./contexts/SongsContext";

import ThemeToggle from "./components/ThemeToggle";
import SongList from "./hooks/SongList";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <section className="with-classes">
            <Navbar />
            <BookList />
            <ThemeToggle />
          </section>
          <section className="with-hooks">
            <SongsContextProvider>
              <SongList />
            </SongsContextProvider>
          </section>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
