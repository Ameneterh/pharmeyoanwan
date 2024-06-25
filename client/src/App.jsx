import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import ContactPage from "./pages/ContactPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import UpdatePost from "./pages/UpdatePost";
import ArticlesPage from "./pages/ArticlesPage";
import HealthTalksPage from "./pages/HealthTalksPage";
import AddContent from "./pages/AddContent";
import PostView from "./pages/PostView";
import MotivationalsPage from "./pages/MotivationalsPage";
import ViewMotivational from "./pages/ViewMotivational";
import AdminOnlyRoutes from "./components/AdminOnlyRoutes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<ArticlesPage />} />
        <Route path="/health-talks" element={<HealthTalksPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/motivationals" element={<MotivationalsPage />} />
        <Route
          path="/motivationals/:motivationId"
          element={<ViewMotivational />}
        />
        <Route path="/posts/:slug" element={<PostView />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<AdminOnlyRoutes />}>
          <Route path="/add-content" element={<AddContent />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
