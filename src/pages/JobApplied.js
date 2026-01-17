import React from 'react';
import { useNavigate } from 'react-router-dom';

// Sample data for applied jobs 
const appliedJobs = [
  { 
    id: 1,
    company: 'Amazon', 
    title: 'Full Stack Developer', 
    description: 'A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style.',
    salary: '₹12,00,000',
    status: 'Shortlisted'
  },
  { 
    id: 2,
    company: 'Tesla', 
    title: 'Node Js Developer', 
    description: 'A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style.',
    salary: '₹10,00,000',
    status: 'Progress'
  },
  { 
    id: 3,
    company: 'Swiggy', 
    title: 'UX/UI Designer', 
    description: 'A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style.',
    salary: '₹8,00,000',
    status: 'Selected'
  },
  { 
    id: 4,
    company: 'Microsoft', 
    title: 'React Developer', 
    description: 'A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style.',
    salary: '₹15,00,000',
    status: 'Shortlisted'
  },
  { 
    id: 5,
    company: 'Google', 
    title: 'Python Developer', 
    description: 'A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style.',
    salary: '₹18,00,000',
    status: 'Progress'
  },
];

// Function to get status badge color
const getStatusColor = (status) => {
  if (status === 'Shortlisted') return 'bg-green-100 text-green-800';
  if (status === 'Progress') return 'bg-blue-100 text-blue-800';
  if (status === 'Selected') return 'bg-purple-100 text-purple-800';
  return 'bg-gray-100 text-gray-800';
};

// Job Applied Page Component - Shows all jobs user has applied to in a table format
const JobApplied = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header with Back Arrow, Title, and Bell Icon */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Back Arrow and Title */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate(-1)}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <h1 className="text-2xl font-bold text-gray-800">Applied Jobs</h1>
            </div>

            {/* Bell Icon for Notifications */}
            <button className="text-gray-600 hover:text-gray-800 transition-colors relative">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              {/* Notification Badge */}
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {appliedJobs.length === 0 ? (
          // Empty State - When no jobs are applied
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <svg
              className="mx-auto h-16 w-16 text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">No Applications Yet</h3>
            <p className="text-gray-600 mb-4">Start applying to jobs to see them here</p>
            <button
              onClick={() => navigate('/')}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Browse Jobs
            </button>
          </div>
        ) : (
          // Table for Applied Jobs
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                {/* Table Header */}
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Job Title
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Descriptions
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Company Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Salary..
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Status
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-gray-200">
                  {appliedJobs.map((job) => (
                    <tr
                      key={job.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      {/* Job Title Column */}
                      <td className="px-6 py-4">
                        <span className="text-purple-600 font-medium">
                          {job.title}
                        </span>
                      </td>

                      {/* Descriptions Column */}
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-600 max-w-md">
                          {job.description}
                        </p>
                      </td>

                      {/* Company Name Column */}
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-gray-800">
                          {job.company}
                        </span>
                      </td>

                      {/* Salary Column */}
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-700">
                          {job.salary}
                        </span>
                      </td>

                      {/* Status Column */}
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(job.status)}`}
                        >
                          {job.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobApplied;
