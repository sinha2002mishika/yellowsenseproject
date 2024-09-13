import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookmark, FaBriefcase } from 'react-icons/fa';

function BottomNav() {
  return (
    <div className="bottom-nav">
      <Link to="/jobs">
        <FaBriefcase /> Jobs
      </Link>
      <Link to="/bookmarks">
        <FaBookmark /> Bookmarks
      </Link>
    </div>
  );
}

export default BottomNav;
