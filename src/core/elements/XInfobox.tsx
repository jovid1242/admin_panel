import React, { FC } from "react";
import "styles/core/xinfobox.scss";
import { HiOutlineCube, HiArrowNarrowRight } from "react-icons/hi";
import { IInfoboxProps } from "models/core/elements";

const XInfobox: FC<IInfoboxProps> = ({ type }) => {
  return (
    <div>
      <div className={type}>
        <div className="info-icon">
          <HiOutlineCube />
        </div>
        <h5 className="info-heading">Layout Package</h5>
        <p className="info-text">
          Lorem ipsum dolor sit amet, labore et dolore magna aliqua.
        </p>
        <div className="info-link">
          <a href="">
            Discover <HiArrowNarrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};
export default XInfobox;
