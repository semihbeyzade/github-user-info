import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile/Profile";
import Repo from "./pages/Repo/Repo";
import "react-calendar-heatmap/dist/styles.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
         <Route path="/" element={<Profile />} />
         <Route path="/:username" element={<Profile />} />
         <Route path="/:username/:reponame" element={<Repo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
