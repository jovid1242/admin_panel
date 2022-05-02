import React, { useState } from "react";
import { FC } from "react";
import "styles/core/xtag.scss";

const XTag: FC = () => {
  const [tags, setTags] = useState(["tagone", "tagsecond", "tagthird"]);

  function handleKeyDonw(event: any) {
    if (event.key !== "Enter") return;
    const value = event.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    event.target.value = "";
  }

  function removeTag(index: number) {
    setTags(tags.filter((elem, i) => i !== index));
  }

  return (
    <div>
      <div className="tags-container">
        {tags.map((tag, index) => (
          <div className="tag" key={index}>
            {tag}
            <span onClick={() => removeTag(index)}>&times;</span>
          </div>
        ))}
      </div>
      <div className="tags-input">
        <input onKeyDown={handleKeyDonw} placeholder="Type Some Tag..." />
      </div>
    </div>
  );
};
export default XTag;
