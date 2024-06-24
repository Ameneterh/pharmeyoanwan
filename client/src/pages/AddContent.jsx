import React from "react";
import { Tabs } from "flowbite-react";
import { MdOutlinePostAdd, MdTextsms } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";
import AddPost from "../components/AddPost";
import AddVideo from "../components/AddVideo";
import AddMotivational from "../components/AddMotivational";

export default function AddContent() {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen overflow-x-auto">
      <Tabs>
        <Tabs.Item active title="Add Post" icon={MdOutlinePostAdd}>
          <AddPost />
        </Tabs.Item>
        <Tabs.Item active title="Add Video" icon={RiVideoAddLine}>
          <AddVideo />
        </Tabs.Item>
        <Tabs.Item active title="Add Motivational" icon={MdTextsms}>
          <AddMotivational />
        </Tabs.Item>
      </Tabs>
    </div>
  );
}
