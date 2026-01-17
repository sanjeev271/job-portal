import React from 'react';
import { Link } from 'react-router-dom';
import { BsPerson, BsBriefcase } from 'react-icons/bs';

// Footer Component - Contains links to Profile and Applied Jobs
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-center gap-8">
          {/* Profile Link */}
          <Link
            to="/profile"
            className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors font-medium"
          >
            <BsPerson className="w-5 h-5" />
            <span>Profile</span>
          </Link>

          {/* Applied Jobs Link */}
          <Link
            to="/jobs/applied"
            className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors font-medium"
          >
            <BsBriefcase className="w-5 h-5" />
            <span>Applied Jobs</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

