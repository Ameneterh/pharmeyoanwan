import React from "react";
import { Tabs } from "flowbite-react";
import { MdOutlinePostAdd } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";
import AddPost from "./AddPost";
import AddVideo from "./AddVideo";

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
      </Tabs>
    </div>
  );
}
