import React, { FC } from "react";
import "styles/layouts/footer.scss";

const Footer: FC = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-section">
          <p>
            <a href="#">Copyright © 2022 Repost, All rights reserved.</a>
          </p>
          <p>
            <a href="#">Coded with Repost.Space</a>
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
