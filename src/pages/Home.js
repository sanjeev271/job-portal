import React from 'react';
import SearchBar from './search';
import Card from '../components/Card';

// Job data - This would typically come from an API or database
const jobs = [
  { company: 'Amazon', title: 'Full Stack Developer', exp: '1-3 yr Exp', location: 'Onsite', salary: '12LPA' },
  { company: 'Tesla', title: 'Node Js Developer', exp: '5-8 yr Exp', location: 'Onsite', salary: '15LPA' },
  { company: 'Swiggy', title: 'UX/UI Designer', exp: '2-3 yr Exp', location: 'Onsite', salary: '8LPA' },
  { company: 'Amazon', title: 'Full Stack Developer', exp: '3-6 yr Exp', location: 'Onsite', salary: '10LPA' },
  { company: 'Tesla', title: 'Node Js Developer', exp: '1-3 yr Exp', location: 'Onsite', salary: '12LPA' },
  { company: 'Swiggy', title: 'UX/UI Designer', exp: '1-3 yr Exp', location: 'Onsite', salary: '11LPA' },
  { company: 'Amazon', title: 'Full Stack Developer', exp: '3-5 yr Exp', location: 'Onsite', salary: '12LPA' },
  { company: 'Tesla', title: 'Node Js Developer', exp: '2-4 yr Exp', location: 'Onsite', salary: '13LPA' },
];

// Home Page Component - Displays search bar and job listings using Card component
const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Search and Filter Bar */}
      <SearchBar />

      {/* Job Listings Grid */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Map through jobs array and create a card for each job using Card component */}
          {jobs.map((job, index) => (
            <Card key={index} job={job} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
