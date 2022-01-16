
import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

const App =() => {
  return (
    <div className="App">
      <div className="Header" >
          <Users/>
          <Posts/>
      </div>
      <div><Comments/></div>
    </div>
  );
}

export default App;
