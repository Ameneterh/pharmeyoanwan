import { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import ProfilePic from "../Components/ProfilePic";
import ProgressBar from "../Components/ProgressBar";
import Footer from "../Components/Footer";
import CallToAction from "../Components/CallToAction";
import ProjectsComponent from "../Components/ProjectsComponent";
import { Link } from "react-router-dom";
import { Spinner } from "flowbite-react";

export default function ProjectsPage() {
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

          {/* web dev projects */}
          {webdevProjects && webdevProjects.length > 0 ? (
            <div className="flex flex-col w-full mt-2 sm:mt-8">
              <div className="flex w-full">
                <div className="flex w-full items-center">
                  <div className="flex-1 border-b"></div>
                  <div className="h-4 w-4 rounded-full bg-red-600 ml-1"></div>
                  <h1 className="px-2 text-2xl font-bold">Web Dev Projects</h1>
                </div>
              </div>

              <div className="w-full flex flex-wrap gap-4 mt-4">
                {webdevProjects.map((weblist) => (
                  <ProjectsComponent project={weblist} />
                ))}
              </div>
            </div>
          ) : (
            <div className="w-full text-center min-h-[150px]">
              No Web Dev Projects to load
            </div>
          )}

          {/* graphic designs projects */}
          {graphicsProjects && graphicsProjects.length > 0 ? (
            <div className="flex flex-col w-full mt-2 sm:mt-8">
              <div className="flex flex-col w-full">
                <div className="flex w-full items-center">
                  <h1 className="px-2 text-2xl font-bold">
                    Graphics Design Projects
                  </h1>
                  <div className="h-4 w-4 rounded-full bg-red-600 mr-1"></div>
                  <div className="flex-1 border-b"></div>
                </div>
              </div>
              <div className="w-full flex flex-wrap gap-4 mt-4">
                {graphicsProjects.map((graphiclist) => (
                  <ProjectsComponent project={graphiclist} />
                ))}
              </div>
            </div>
          ) : (
            <div className="w-full text-center min-h-[150px]">
              No Web Dev Projects to load
            </div>
          )}
          <CallToAction />
          <Link
            to="/contact"
            className="flex items-center justify-center uppercase bg-blue-500 text-white w-[200px] h-12 hover:opacity-70 mt-5 rounded-lg mx-auto"
          >
            contact me
          </Link>
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
