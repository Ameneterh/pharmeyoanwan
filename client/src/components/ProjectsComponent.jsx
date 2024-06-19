import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function ProjectsComponent({ project }) {
  return (
    <div className="min-h-[300px] w-full sm:w-[250px] bg-white dark:bg-slate-700 border-2 rounded-md shadow-md p-2 flex flex-col justify-between">
      <div className="">
        <h1 className="font-bold mb-3 text-center">{project.projectname}</h1>
        <img
          src={project.projectimage}
          alt={project.projectname}
          className="w-full max-h-[150px] object-cover object-top"
        />
        <p
          className="px-2 mt-2 line-clamp-4 leading-5 text-sm"
          dangerouslySetInnerHTML={{ __html: project && project.description }}
        ></p>
      </div>
      <div className="w-full mt-5 flex justify-center">
        <Link
          to={`/project/${project.slug}`}
          className="text-sm text-blue-600 hover:underline"
        >
          See Project Details ...
        </Link>
      </div>
    </div>
  );
}
