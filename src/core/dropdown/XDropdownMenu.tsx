import { IDropDownProps } from "models/core/dropdown";
import React, { useState } from "react";
import { FC } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import "styles/core/xdropdown.scss";

const XDropdownMenu: FC<IDropDownProps> = ({ items, onChange }) => {
  const [showList, setShowList] = useState(false);

  const getItems = () => {
    return items?.map((el) => {
      return (
        <p
          className="x-dropdown-menu__item"
          onClick={() => setSelectedItem(el)}
          key={el}
        >
          {el}
        </p>
      );
    });
  };

  const setSelectedItem = (item: string) => {
    if (onChange) {
      onChange(item);
    }
    setShowList(false);
  };

  return (
    <div className="x-dropdown" onClick={() => setShowList(!showList)}>
      <span className="x-dropdown__icon">
        <HiDotsHorizontal />
      </span>
      <div
        className={(showList ? "show" : "") + " x-dropdown-menu"}
        onMouseLeave={() => setShowList(false)}
      >
        {getItems()}
      </div>
    </div>
  );
};

export default XDropdownMenu;
