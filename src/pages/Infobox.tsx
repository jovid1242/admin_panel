import XCard from "core/card/XCard";
import XInfobox from "core/elements/XInfobox";
import React, { FC } from "react";

const Infobox: FC = () => {
  return (
    <>
      <XCard title={"Infobox 1"} cardBody={<XInfobox type={"infobox-1"} />} />
      <XCard title={"Infobox 2"} cardBody={<XInfobox type={"infobox-2"} />} />
      <XCard title={"Infobox 3"} cardBody={<XInfobox type={"infobox-3"} />} />
    </>
  );
};
export default Infobox;
