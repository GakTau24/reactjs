import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { About } from "./pages/About"
import { Social } from "./pages/Social";

function App() {
  return (
    <>
      {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/sosial-media">Social</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul> */}

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/media-sosial" element={<Social />} />
    </Routes>
    </>
  );
}

export default App;
