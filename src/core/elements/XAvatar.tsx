import { IAvatarProps } from "models/core/avatar";
import React from "react";
import { FC } from "react";
import "styles/core/xavatar.scss";
import AvatarImg from "assets/img/chat/profile-12.jpeg";

const XAvatar: FC<IAvatarProps> = ({ title, online, type }) => {
  const getTitle = () => {
    if (title) {
      return <label className="avatar_title">{title}</label>;
    }
  };
  const isOnline = () => {
    if (online) {
      return <div className="indicator_online"></div>;
    }
  };
  return (
    <div className="custom_bcg">
      {getTitle()}
      <div className={`avatar avatar-${type}`}>
        {isOnline()}
        <img className="rounded_circle" alt="avatar" src={AvatarImg} />
      </div>
    </div>
  );
};
export default XAvatar;
