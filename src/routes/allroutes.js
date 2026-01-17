import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import CreateJobs from '../pages/CreateJobs';
import JobApplied from '../pages/JobApplied';
import PersonalDetails from '../pages/PersonalDetails';

// Placeholder component for pages that are not yet created this will show a simple message 
const Placeholder = ({ title }) => (
  <div className="max-w-6xl mx-auto px-4 py-10">
    <h1 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h1>
    <p className="text-gray-600">Content coming soon.</p>
  </div>
);

// All Routes Component - Defines all the routes for the application
const AllRoutes = () => {
  return (
    <Routes>
      {/* Home page - Shows job listings */}
      <Route path="/" element={<Home />} />
      
      {/* Jobs page - Same as home (shows job listings) */}
      <Route path="/jobs" element={<Home />} />
      
      {/* Create Jobs page - Form to create new job */}
      <Route path="/jobs/create" element={<CreateJobs />} />
      
      {/* Find Talents page - Placeholder */}
      <Route path="/talents" element={<Placeholder title="Find Talents" />} />
      
      {/* About page */}
      <Route path="/about" element={<About />} />
      
      {/* Testimonials page - Placeholder */}
      <Route path="/testimonials" element={<Placeholder title="Testimonials" />} />
      
      {/* Apply page - Placeholder */}
      <Route path="/apply" element={<Placeholder title="Apply Now" />} />
      
      {/* Job Applied page - Shows all applied jobs */}
      <Route path="/jobs/applied" element={<JobApplied />} />
      
      {/* Personal Details page - User profile and information */}
      <Route path="/profile" element={<PersonalDetails />} />
    </Routes>
  );
};

export default AllRoutes;
