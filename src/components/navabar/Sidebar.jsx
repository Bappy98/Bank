import React from 'react';

function Sidebar() {
  return (
    <div className="navigation">
      <ul>
        <li className="pt-6 p-2">
          <img src="image/sidebar-logo.png" alt="" />
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <img src="image/icon/New-File.png" alt="" />
            </span>
            <span className="title">New File</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <img src="image/icon/UW-360.png" alt="" />
            </span>
            <span className="title">UW 360</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <img src="image/icon/Update-incomplete-file.png" alt="" />
            </span>
            <span className="title">Update Incomplete File</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <img src="image/icon/Check-Status.png" alt="" />
            </span>
            <span className="title">Check Status</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
