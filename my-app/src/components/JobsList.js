import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';

function JobsList() {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
  }, [page]);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
      if (response.data.length === 0) setHasMore(false);
      setJobs([...jobs, ...response.data]);
    } catch (error) {
      console.error('Error fetching jobs', error);
    }
  };

  const handleJobClick = (id) => {
    navigate(`/jobs/${id}`);
  };

  const handleBookmark = (job) => {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
    bookmarks.push(job);
    localStorage.setItem('bookmarkedJobs', JSON.stringify(bookmarks));
  };

  return (
    <InfiniteScroll
      dataLength={jobs.length}
      next={() => setPage(page + 1)}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more jobs to show</p>}
    >
      {jobs.map((job) => (
        <div key={job.id} className="job-card">
          <h3>{job.title}</h3>
          <p>{job.location}</p>
          <p>{job.salary}</p>
          <p>{job.phone}</p>
          <button onClick={() => handleJobClick(job.id)}>View Details</button>
          <button onClick={() => handleBookmark(job)}>Bookmark</button>
        </div>
      ))}
    </InfiniteScroll>
  );
}

export default JobsList;
