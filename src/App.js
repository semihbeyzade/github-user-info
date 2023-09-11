import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Repo from "./pages/Repo/Repo";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
         <Route path="/:username/:reponame" element={<Repo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
