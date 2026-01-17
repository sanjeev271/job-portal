import React from 'react';
import { useNavigate } from 'react-router-dom';

// Function to get company logo letter i have not used image for logos for my simplicity
const getCompanyLogo = (company) => {
  if (company === 'Amazon') return 'A';
  if (company === 'Tesla') return 'T';
  if (company === 'Swiggy') return 'SWIGGY';
  return company[0];
};

// Job Card Component - displays individual job details in a card format
const Card = ({ job, index }) => {
  const navigate = useNavigate();

  return (
    <div
      key={index}
      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
    >
      {/* Card Header - Company Logo and Time Badge */}
      <div className="flex items-start justify-between mb-4">
        {/* Company Logo in this place we can use company image */}
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          {getCompanyLogo(job.company)}
        </div>
        {/* Time Badge */}
        <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
          24h Ago
        </span>
      </div>

      {/* Job Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        {job.title}
      </h3>

      {/* Job Details with Icons  */}
      <div className="flex flex-wrap gap-1 mb-4 text-sm text-gray-600">
        {/* Experience */}
        <div className="flex items-center">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          {job.exp}
        </div>
        
        {/* Location */}
        <div className="flex items-center">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
          {job.location}
        </div>
        {/* Salary */}
        <div className="flex items-center">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          {job.salary}
        </div>
      </div>

      {/* Job Description */}
      <div className="mb-4 text-sm text-gray-600 space-y-1">
        <p>• A user-friendly interface lets you browse stunning photos and videos</p>
        <p>• Filter destinations based on interests and travel style, and create personalized</p>
      </div>

      {/* Apply Button- this will navigate to apply page with content coming soon because this page is not created */}
      <button
        onClick={() => navigate('/apply')}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        Apply Now
      </button>
    </div>
  );
};

export default Card;

