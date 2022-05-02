import React from "react";
import XCard from "core/card/XCard";
import XAlert from "core/elements/XAlert";
import { FC } from "react";

const Alerts: FC = () => {
  return (
    <div>
      <XCard
        title={"Default Alerts"}
        cardBody={
          <>
            <XAlert
              text="Alert! Lorem Ipsum is simply dummy text of the printing."
              type={"primary"}
            />
            <XAlert
              text="Alert! Lorem Ipsum is simply dummy text of the printing."
              type={"warning"}
            />
            <XAlert
              text="Alert! Lorem Ipsum is simply dummy text of the printing."
              type={"success"}
            />
            <XAlert
              text="Alert! Lorem Ipsum is simply dummy text of the printing."
              type={"info"}
            />
            <XAlert
              text="Alert! Lorem Ipsum is simply dummy text of the printing."
              type={"error"}
            />
          </>
        }
      />
      <XCard
        title={"Outline Alerts"}
        cardBody={
          <>
            <XAlert
              text="Alert! Lorem Ipsum is simply dummy text of the printing."
              type={"outline-primary"}
            />
            <XAlert
              text="Alert! Lorem Ipsum is simply dummy text of the printing."
              type={"outline-error"}
            />
          </>
        }
      />
      <XCard
        title={"Solid Alerts"}
        cardBody={
          <>
            <XAlert
              text="Alert! Lorem Ipsum is simply dummy text of the printing."
              type={"solid-primary"}
            />
            <XAlert
              text="Alert! Lorem Ipsum is simply dummy text of the printing."
              type={"solid-danger"}
            />
          </>
        }
      />
    </div>
  );
};

export default Alerts;
