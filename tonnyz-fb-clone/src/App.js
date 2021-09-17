import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import Widget from "./Widget";
import StoryReel from "./StoryReel";
import Post from "./Post";

function App() {
  const user = null;
  return (
    <div className="app">
      {/* {If no user render the login or the rest of the app} */}
      {!user ? (
        <Login />
      ) : (
        <div>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget />
            {/* side bar on the left*/}

            {/* feed in the center/*
             *Has the posts*/}
            {/* widgets on the right*/}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
