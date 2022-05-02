import React, { FC } from "react";
import "styles/elements/buttons.scss";
import XCard from "core/card/XCard";
import XButton from "core/button/XButton";
import DFlex from "core/flexbox/DFlex";
import { FiSettings } from "react-icons/fi";
import { BsPencil } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { MdOutlineLightMode } from "react-icons/md";

const Buttons: FC = () => {
  return (
    <div className="card-section">
      <XCard
        title={"Default Buttons "}
        cardBody={
          <DFlex
            type={"space-around"}
            flexContent={
              <>
                <XButton name={"Primary"} type={"primary"} />
                <XButton name={"Primary"} type={"primary_outline"} />
              </>
            }
          />
        }
      />
      <XCard
        title={"Rounded Buttons "}
        cardBody={
          <DFlex
            type={"space-around"}
            flexContent={
              <>
                <XButton name={"Primary"} type={"outline_rounded"} />
                <XButton name={"Primary"} type={"primary_rounded"} />
              </>
            }
          />
        }
      />
      <XCard
        title={"Solid Buttons"}
        cardBody={
          <DFlex
            type={"space-around"}
            flexContent={
              <>
                <XButton name={"Primary"} type={"primary"} />
                <XButton name={"Info"} type={"info"} />
                <XButton name={"Success"} type={"success"} />
                <XButton name={"Warning"} type={"warning"} />
                <XButton name={"Danger"} type={"danger"} />
                <XButton name={"Secondary"} type={"secondary"} />
                <XButton name={"Dark"} type={"dark"} />
              </>
            }
          />
        }
      />
      <XCard
        title={"Outline Buttons"}
        cardBody={
          <DFlex
            type={"space-around"}
            flexContent={
              <>
                <XButton name={"Primary"} type={"primary_outline"} />
                <XButton name={"Info"} type={"info_outline"} />
                <XButton name={"Success"} type={"success_outline"} />
                <XButton name={"Warning"} type={"warning_outline"} />
                <XButton name={"Danger"} type={"danger_outline"} />
                <XButton name={"Secondary"} type={"secondary_outline"} />
                <XButton name={"Dark"} type={"dark_outline"} />
              </>
            }
          />
        }
      />
      <XCard
        title={"Buttons With Icons"}
        cardBody={
          <DFlex
            type={"d-flex"}
            flexContent={
              <>
                <XButton
                  icon={<FiSettings />}
                  name={"Left"}
                  type={"icon-left"}
                />
                <XButton
                  icon={<BsPencil />}
                  name={"Right"}
                  type={"icon-right"}
                />
                <XButton icon={<HiDownload />} type={"download"} />
                <XButton icon={<MdOutlineLightMode />} type={"mode"} />
              </>
            }
          />
        }
      />
    </div>
  );
};
export default Buttons;
