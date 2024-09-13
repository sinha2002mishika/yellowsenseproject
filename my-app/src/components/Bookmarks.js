import React, { useEffect, useState } from 'react';

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
    setBookmarks(savedBookmarks);
  }, []);

  return (
    <div>
      {bookmarks.length === 0 ? (
        <p>No bookmarks available</p>
      ) : (
        bookmarks.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.location}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Bookmarks;
