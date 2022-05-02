import { ISelectProps } from "models/core/select";
import React, { useState, FC } from "react";
import { FaChevronDown } from "react-icons/fa";
import "styles/core/xselect.scss";

const XSelect: FC<ISelectProps> = ({ items, defaultItem, onChange }) => {
  defaultItem = defaultItem || items[0];
  const [selected, setSelected] = useState(defaultItem);
  const [showList, setShowList] = useState(false);

  const setSelectedItem = (item: string) => {
    setSelected(item);
    if (onChange) {
      onChange(item);
    }
    setShowList(false);
  };

  const getItems = () => {
    return items?.map((el) => {
      return (
        <div onClick={() => setSelectedItem(el)} className="option" key={el}>
          {el}
        </div>
      );
    });
  };

  return (
    <div className="select">
      <div className="select-content" onClick={() => setShowList(!showList)}>
        <p className="selected">{selected}</p>
        <div className={"select-button " + (showList ? "rotate-180" : "")}>
          <FaChevronDown />
        </div>
      </div>
      <div
        className={(showList ? "show" : "") + " options"}
        onMouseLeave={() => setShowList(false)}
      >
        {getItems()}
      </div>
    </div>
  );
};

export default XSelect;
