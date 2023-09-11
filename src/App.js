import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Profile from "./pages/Profile/Profile";
import Repo from "./pages/Repo/Repo";
import "react-calendar-heatmap/dist/styles.css";
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
         <Route path="/" element={<Profile />} />
         <Route path="/:username" element={<Profile />} />
         <Route path="/:username/:reponame" element={<Repo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
