import React from "react";

export default function SkillSet(props) {
  return (
    <div className="rounded-md shadow-md">
      <img
        src={props.imageTitle}
        alt={props.skillTitle}
        className="w-40 h-20 rounded-md"
      />
    </div>
  );
}
