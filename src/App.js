import "./App.css";
// import bgImage from "../src/Assessts/backgroundIMG.jpg"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Home from "./components/Home/Home";
import ShowError from "./ShowError";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import Post from "./components/Post/Post";
import Gallery from "./components/Gallery/Gallery";
import Todo from "./components/Todo/Todo";
function App() {
  return (
    <div className="app">
      <ErrorBoundary FallbackComponent={ShowError}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/post" element={<Post />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
