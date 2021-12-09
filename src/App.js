import { Routes, Route } from "react-router-dom";
import "./App.scss";
import "./styles/global.styles.scss";
import HomePage from "./components/pages/homepage/homepage.component";
import ProjectPage from "./components/pages/project/project-page.component";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;
