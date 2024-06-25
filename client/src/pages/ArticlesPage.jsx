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
import PostCard, { PostCardMobile } from "../components/Card";

export default function ArticlesPage() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/post/getposts");
        const data = await res.json();
        setPosts(data.posts);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
      {loading && (
        <div className="flex justify-center items-center min-h-screen">
          <Spinner size="xl" />
        </div>
      )}

      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="text-2xl text-center font-semibold my-5">
          List of Articles
        </h1>
        <Divider />
        <div className="flex flex-col justify-center items-center mb-5">
          <div className="hidden sm:flex flex-wrap gap-5 mt-5 justify-center">
            {posts &&
              posts.map((post) => <PostCard key={post._id} post={post} />)}
          </div>
          <div className="sm:hidden flex flex-wrap gap-5 mt-5 justify-center">
            {posts &&
              posts.map((post) => (
                <PostCardMobile key={post._id} post={post} />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
