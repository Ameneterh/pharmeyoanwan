import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import ProfilePic from "../components/ProfilePic";
import ProgressBar from "../components/ProgressBar";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import ProjectsComponent from "../components/ProjectsComponent";
import { Link } from "react-router-dom";
import { Spinner } from "flowbite-react";
import Divider from "../components/Divider";
import { VideoCard } from "../components/Card";

export default function VideosPage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchVideos = async () => {
      try {
        const res = await fetch("/api/video/getvideos");
        const data = await res.json();
        setVideos(data.videos);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
      {loading && (
        <div className="flex justify-center items-center min-h-screen">
          <Spinner size="xl" />
        </div>
      )}

      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="text-2xl text-center font-semibold my-5">Videos List</h1>
        <Divider />
        <div className="flex flex-wrap gap-5 mt-5 justify-center">
          {videos ? (
            videos.map((video) => <VideoCard key={video._id} video={video} />)
          ) : (
            <h1>No Videos</h1>
          )}
        </div>
      </div>
    </main>
  );
}
