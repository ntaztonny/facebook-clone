import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";
import StoryReel from "./StoryReel";
import Post from "./Post";

function App() {
  return (
    <div className="app">
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
  );
}

export default App;
