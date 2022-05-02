import XCard from "core/card/XCard";
import XBadges from "core/elements/XBadges";
import XTag from "core/elements/XTag";
import DFlex from "core/flexbox/DFlex";
import React from "react";
import { FC } from "react";

const Badges: FC = () => {
  return (
    <div>
      <XCard
        title={"Badges"}
        cardBody={
          <DFlex
            type={"d-flex"}
            flexContent={
              <>
                <XBadges name={"Primary"} type={"badge-primary"} />
                <XBadges name={"Info"} type={"badge-info"} />
                <XBadges name={"Success"} type={"badge-success"} />
                <XBadges name={"Secondary"} type={"badge-secondary"} />
                <XBadges name={"Warning"} type={"badge-warning"} />
                <XBadges name={"Danger"} type={"badge-danger"} />
                <XBadges name={"Dark"} type={"badge-dark"} />
              </>
            }
          />
        }
      />
      <XCard
        title={"Outline"}
        cardBody={
          <DFlex
            type={"d-flex"}
            flexContent={
              <>
                <XBadges name={"Primary"} type={"outline-primary"} />
                <XBadges name={"Info"} type={"outline-info"} />
                <XBadges name={"Success"} type={"outline-success"} />
                <XBadges name={"Secondary"} type={"outline-secondary"} />
                <XBadges name={"Warning"} type={"outline-warning"} />
                <XBadges name={"Danger"} type={"outline-danger"} />
                <XBadges name={"Dark"} type={"outline-dark"} />
              </>
            }
          />
        }
      />
      <XCard title={"Tags"} cardBody={<XTag />} />
    </div>
  );
};
export default Badges;
