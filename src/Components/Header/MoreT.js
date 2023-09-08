import React from 'react';
import { BiSolidDownload } from 'react-icons/bi';
import { BiTrendingUp } from 'react-icons/bi';
import { MdLiveHelp } from 'react-icons/md';
import { IoMdNotifications } from 'react-icons/io';
import './MoreT.css';

const MoreT = () => {
  return (
    <div className="moret">
      <div className="moret_in">
        <span className="myicons">
          <IoMdNotifications />
        </span>

        <p>Notification Preferences</p>
      </div>
      <hr />

      <div className="moret_in">
        <span className="myicons">
          <MdLiveHelp />
        </span>

        <p>24x7 Customer Care</p>
      </div>
      <hr />

      <div className="moret_in">
        <span className="myicons">
          <BiTrendingUp />
        </span>

        <p>Advertise</p>
      </div>
      <hr />

      <div className="moret_in">
        <span className="myicons">
          <BiSolidDownload />
        </span>

        <p>Download App</p>
      </div>
    </div>
  );
};

export default MoreT;
