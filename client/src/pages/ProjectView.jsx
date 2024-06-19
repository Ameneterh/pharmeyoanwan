import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Spinner } from "flowbite-react";
import { useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";

export default function ProjectView() {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [project, setProject] = useState(null);
  const [recentProjects, setRecentProjects] = useState(null);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/project/getprojects/?slug=${slug}`);
        let data = await res.json();

        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setProject(data.projects[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchProjects();
  }, [slug]);

  useEffect(() => {
    try {
      const fetchRecentProjects = async () => {
        const res = await fetch(`/api/project/getprojects?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentProjects(data.projects);
        }
      };
      fetchRecentProjects();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );

  return (
    <main className="p-3 flex flex-col max-w-3xl mx-auto min-h-screen pb-12">
      <h1 className="text-3xl mt-10 font-serif max-w-2xl lg:text-4xl">
        {project && project.projectname}
      </h1>

      <img
        src={project && project.projectimage}
        alt={project && project.projectname}
        className="mt-10 p-3 min-h-[600px] w-full object-cover"
      />

      <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs items-center">
        <div className="flex items-center mt-5 gap-10">
          <Link
            to={`/search?category=${project && project.category}`}
            className="self-center flex items-center gap-4"
          >
            Category:
            <Button color="gray" size="sm" className="shadow-md capitalize">
              {project && project.category}
            </Button>
          </Link>
        </div>
        <span>
          {project && new Date(project.createdAt).toLocaleDateString()}
        </span>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: project && project.description }}
        className="p-3 max-w-2xl mx-auto w-full post-content"
      ></div>

      {project.category === "webdev" ? (
        <>
          <Link
            to={project.liveurl}
            target="_blank"
            className="mt-8 text-center hover:bg-slate-200 text-blue-700 border-2 p-2 border-blue-500 rounded-md"
          >
            View Project Live Link
          </Link>
        </>
      ) : (
        ""
      )}

      {currentUser ? (
        <Link
          to={`/updateproject/${project._id}`}
          className="mt-8 text-center hover:underline underline-offset-4"
        >
          Update Project
        </Link>
      ) : (
        ""
      )}

      {/* <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="text-xl mt-5">Recent Articles</h1>
        <div className="hidden sm:flex flex-wrap gap-5 mt-5 justify-center">
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
        <div className="sm:hidden flex flex-wrap gap-5 mt-5 justify-center">
          {recentPosts &&
            recentPosts.map((post) => (
              <PostCardMobile key={post._id} post={post} />
            ))}
        </div>
      </div> */}
    </main>
  );
}
