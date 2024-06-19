import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./Components/Header";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import AddProject from "./pages/AddProject";
import ProjectView from "./pages/ProjectView";
import UpdateProject from "./pages/UpdateProject";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project/:slug" element={<ProjectView />} />
        <Route element={<PrivateRoute />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/updateproject/:projectId" element={<UpdateProject />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
