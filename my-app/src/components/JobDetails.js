import React from 'react';
import { useParams } from 'react-router-dom';

function JobDetails() {
  const { id } = useParams();
  const jobs = JSON.parse(localStorage.getItem('jobs')) || [];

  const job = jobs.find((job) => job.id === parseInt(id));

  if (!job) return <p>Job not found</p>;

  return (
    <div>
      <h1>{job.title}</h1>
      <p>Location: {job.location}</p>
      <p>Salary: {job.salary}</p>
      <p>Phone: {job.phone}</p>
      <p>Description: {job.description}</p>
    </div>
  );
}

export default JobDetails;
