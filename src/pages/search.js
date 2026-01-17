import React from 'react'

const search = () => {
  return (
    <div>
      {/* Search and Filter Bar */}
      <div className="bg-white border-b border-gray-200 py-6 mt-4">
        <div className="max-w-6xl mx-auto px-2">
          <div className="flex flex-wrap items-center gap-4">
            {/* Search Bar */}
            <div className="flex-1 min-w-[260px]">
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search By Job Title, Role"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Location Dropdown */}
            <div className="min-w-[210px]">
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <select className="w-full pl-11 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white text-gray-700">
                  <option>Preferred Location</option>
                  <option>Remote</option>
                  <option>Onsite</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  ▼
                </span>
              </div>
            </div>

            {/* Job Type Dropdown */}
            <div className="min-w-[190px]">
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <select className="w-full pl-11 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white text-gray-700">
                  <option>Job type</option>
                  <option>FullTime</option>
                  <option>PartTime</option>
                  <option>Internship</option>
                  <option>Contract</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  ▼
                </span>
              </div>
            </div>
{/* Salary Range Mock */}
<div className="flex-1 min-w-[200px]">
  <div className="bg-white border border-gray-300 rounded-lg px-5 py-3">
    <div className="flex items-center justify-between text-sm text-gray-700">
      <span>Salary per month</span>
      <span className="font-semibold">₹50k – ₹80k</span>
    </div>

    {/* Range display */}
    <div className="relative mt-4 h-6 flex items-center">
      {/* Active range */}
      <div className="absolute left-[25%] right-[20%] h-0.5 bg-black" />

      {/* Left marker */}
      <div className="absolute left-[25%] w-3 h-3 -translate-x-1/2 bg-white border-2 border-black rounded-full" />

      {/* Right marker */}
      <div className="absolute right-[20%] w-3 h-3 translate-x-1/2 bg-white border-2 border-black rounded-full" />
      <div className='absolute right-[20%] w=3 h-3 '>

      </div>
    </div>
  </div>
</div>
</div> 
</div>
</div> 
</div>
)
}

export default search
