import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SearchBar from './search';
import Card from '../components/Card';
import { BsChevronDown } from 'react-icons/bs';

const jobs = [
  { company: 'Amazon', title: 'Full Stack Developer', exp: '1-3 yr Exp', location: 'Onsite', salary: '12LPA' },
  { company: 'Tesla', title: 'Node Js Developer', exp: '1-3 yr Exp', location: 'Onsite', salary: '12LPA' },
  { company: 'Swiggy', title: 'UX/UI Designer', exp: '1-3 yr Exp', location: 'Onsite', salary: '12LPA' },
  { company: 'Amazon', title: 'Full Stack Developer', exp: '1-3 yr Exp', location: 'Onsite', salary: '12LPA' },
];

const CreateJobs = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    jobTitle: 'Full Stack Developer',
    companyName: 'Amazon, Microsoft, Swiggy',
    location: '',
    jobType: 'FullTime',
    salaryMin: '↓↑ ₹0',
    salaryMax: '↓↑ ₹12,00,000',
    applicationDeadline: '',
    jobDescription: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job created:', formData);
    alert('Job published successfully!');
    navigate('/');
  };

  const handleSaveDraft = (error) => {
    error.preventDefault()
    console.log('Draft saved:', formData);
    alert('Draft saved!');
  };

  return (
    <div className="min-h-screen bg-white relative">
      <div className="fixed inset-0 bg-white opacity-60 backdrop-blur-sm z-0">
        <Header />
        <SearchBar />
        <main className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobs.map((job, index) => (
              <Card key={index} job={job} index={index} />
            ))}
          </div>
        </main>
      </div>

      <div className="fixed inset-0 bg-black bg-opacity-30 z-10 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-gray-100 z-20 relative">
          <div className="px-8 pt-6 pb-4 border-b border-gray-100 text-center">
            <h1 className="text-xl font-semibold text-gray-900">
              Create Job Opening
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="px-8 py-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Job Title
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <div className="relative">
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white appearance-none"
                  >
                    <option value="">Choose Preferred Location</option>
                    <option>Remote</option>
                    <option>Bangalore</option>
                    <option>Hyderabad</option>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                  </select>
                  <BsChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Job Type
                </label>
                <div className="relative">
                  <select
                    name="jobType"
                    value={formData.jobType}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white appearance-none"
                  >
                    <option>FullTime</option>
                    <option>PartTime</option>
                    <option>Internship</option>
                    <option>Contract</option>
                  </select>
                  <BsChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Salary Range
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    name="salaryMin"
                    value={formData.salaryMin}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="salaryMax"
                    value={formData.salaryMax}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Application Deadline
                </label>
                <input
                  type="date"
                  name="applicationDeadline"
                  value={formData.applicationDeadline}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Description
              </label>
              <textarea
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleChange}
                rows={5}
                placeholder="Please share a description to let the candidate know more about the job role"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between pt-2 gap-3">
              <button
                type="button"
                onClick={handleSaveDraft}
                className="w-full md:w-auto border border-gray-400 text-gray-800 rounded-md px-6 py-2 text-sm font-medium flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                Save Draft
                <BsChevronDown className="ml-1 w-4 h-4" />
              </button>

              <button
                type="submit"
                className="w-full md:w-auto bg-[#109CF1] hover:bg-[#0d8ad6] text-white rounded-md px-8 py-2.5 text-sm font-semibold flex items-center justify-center transition-colors"
              >
                Publish
                <span className="ml-2">➤➤</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateJobs;
