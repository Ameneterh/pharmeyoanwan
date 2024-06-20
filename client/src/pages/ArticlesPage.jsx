import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import ProfilePic from "../components/ProfilePic";
import ProgressBar from "../components/ProgressBar";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import ProjectsComponent from "../components/ProjectsComponent";
import { Link } from "react-router-dom";
import { Spinner } from "flowbite-react";

export default function ArticlesPage() {
  const [webdevProjects, setWebdevProjects] = useState([]);
  const [graphicsProjects, setGraphicsProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(webdevProjects);
  console.log(graphicsProjects);

  console.log(webdevProjects.length);

  useEffect(() => {
    setLoading(true);
    const fetchWebdevProjects = async () => {
      try {
        const res = await fetch("/api/project/getprojects?category=webdev");
        const data = await res.json();
        setWebdevProjects(data.projects);
        fetchGraphicsProjects();
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchGraphicsProjects = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/project/getprojects?category=graphics");
        const data = await res.json();
        setGraphicsProjects(data.projects);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWebdevProjects();
  }, []);

  return (
    <div>
      <SideBar />
      <div className="ml-12 sm:ml-[90px] grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 sm:col-span-2 min-h-screen p-4">
          {loading && (
            <div className="flex justify-center items-center min-h-screen">
              <Spinner size="xl" />
            </div>
          )}

          <h1>Articles Page</h1>
        </div>

        <div className="hidden md:block right-0">
          <ProgressBar />
          <ProfilePic />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <Footer />
        </div>
      </div>
    </div>
  );
}
