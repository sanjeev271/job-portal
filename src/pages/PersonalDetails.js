import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BsArrowLeft, 
  BsBell, 
  BsFileEarmark,
  BsChevronDown 
} from 'react-icons/bs';

// Personal Details Page Component - User profile and personal information
const PersonalDetails = () => {
  const navigate = useNavigate();

  // state to hold form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: 'Male',
    contactInformation: '',
    profilePicture: '',
    attachments: '',
    province: '',
    district: '',
    municipality: '',
    wardNo: '',
    pinCode: '133207',
    email: '',
    phoneNo: '',
    emergencyContact: '',
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle file uploads
  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        [fieldName]: file.name,
      });
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile details saved:', formData);
    alert('Profile details saved successfully!');
  };

  // Function to handle form reset
  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: 'Male',
      contactInformation: '',
      profilePicture: '',
      attachments: '',
      province: '',
      district: '',
      municipality: '',
      wardNo: '',
      pinCode: '133207',
      email: '',
      phoneNo: '',
      emergencyContact: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
                <BsArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-bold text-gray-800">Profile Details</h1>
            </div>

            {/* Bell Icon for Notifications */}
            <button className="text-gray-600 hover:text-gray-800 transition-colors relative">
              <BsBell className="w-6 h-6" />
              {/* Notification Badge */}
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Section 1: Personal Details */}
            <div>
              <h2 className="text-xl font-semibold text-purple-600 mb-6 pb-2 border-b-2 border-purple-600">
                Personal Details
              </h2>
              
              <div className="space-y-4">
                {/* First Name */}
                <div className="flex items-center gap-6">
                  <label className="w-48 text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                {/* Last Name */}
                <div className="flex items-center gap-6">
                  <label className="w-48 text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Date of Birth */}
                <div className="flex items-center gap-6">
                  <label className="w-48 text-sm font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <input
                    type="text"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    placeholder="YYYY/MM/DD"
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Gender - Radio Buttons */}
                <div className="flex items-center gap-6">
                  <label className="w-48 text-sm font-medium text-gray-700">
                    Gender
                  </label>
                  <div className="flex-1 flex items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === 'Male'}
                        onChange={handleChange}
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-sm text-gray-700">Male</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === 'Female'}
                        onChange={handleChange}
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-sm text-gray-700">Female</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="Other"
                        checked={formData.gender === 'Other'}
                        onChange={handleChange}
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-sm text-gray-700">Other</span>
                    </label>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="flex items-center gap-6">
                  <label className="w-48 text-sm font-medium text-gray-700">
                    Contact Information
                  </label>
                  <input
                    type="tel"
                    name="contactInformation"
                    value={formData.contactInformation}
                    onChange={handleChange}
                    placeholder="+91 98XXXXXXXX"
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                {/* Profile Picture */}
                <div className="flex items-center gap-6">
                  <label className="w-48 text-sm font-medium text-gray-700">
                    Profile Picture
                  </label>
                  <div className="flex-1 relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, 'profilePicture')}
                      className="hidden"
                      id="profilePicture"
                    />
                    <label
                      htmlFor="profilePicture"
                      className="flex items-center gap-2 w-full border border-gray-300 rounded-md px-3 py-2 text-sm cursor-pointer hover:bg-gray-50"
                    >
                      <BsFileEarmark className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-600">
                        {formData.profilePicture || 'Upload a File'}
                      </span>
                    </label>
                  </div>
                </div>

                {/* Attachments */}
                <div className="flex items-center gap-6">
                  <label className="w-48 text-sm font-medium text-gray-700">
                    Attachments
                  </label>
                  <div className="flex-1 relative">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange(e, 'attachments')}
                      className="hidden"
                      id="attachments"
                    />
                    <label
                      htmlFor="attachments"
                      className="flex items-center gap-2 w-full border border-gray-300 rounded-md px-3 py-2 text-sm cursor-pointer hover:bg-gray-50"
                    >
                      <BsFileEarmark className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-600">
                        {formData.attachments || 'Upload a File'}
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Address Details */}
            <div>
              <h2 className="text-xl font-semibold text-purple-600 mb-6 pb-2 border-b-2 border-purple-600">
                Address Details
              </h2>
              
              <div className="space-y-4">
                {/* Province */}
                <div className="flex items-center gap-6">
                  <label className="w-48 text-sm font-medium text-gray-700">
                    Province
                  </label>
                  <div className="flex-1 relative">
                    <select
                      name="province"
                      value={formData.province}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white appearance-none"
                    >
                      <option value="">Select a Province</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Delhi">Delhi</option>
                    </select>
                    <BsChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                {/* District */}
                <div className="flex items-center gap-6">
                  <label className="w-48 text-sm font-medium text-gray-700">
                    District
                  </label>
                  <div className="flex-1 relative">
                    <select
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white appearance-none"
                    >
                      <option value="">Select a District</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Mysore">Mysore</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Pune">Pune</option>
                    </select>
                    <BsChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                {/* Municipality */}
                <div className="flex items-center gap-6">
                  <label className="w-48 text-sm font-medium text-gray-700">
                    Municipality
                  </label>
                  <div className="flex-1 relative">
                    <select
                      name="municipality"
                      value={formData.municipality}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white appearance-none"
                    >
                      <option value="">Select a Municipality</option>
                      <option value="BBMP">BBMP</option>
                      <option value="Mysore City">Mysore City</option>
                      <option value="BMC">BMC</option>
                      <option value="PCMC">PCMC</option>
                    </select>
                    <BsChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                {/* Ward no. */}
                <div className="flex items-center gap-6">
                  <label className="w-48 text-sm font-medium text-gray-700">
                    Ward no.
                  </label>
                  <div className="flex-1 relative">
                    <select
                      name="wardNo"
                      value={formData.wardNo}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white appearance-none"
                    >
                      <option value="">Select a Ward</option>
                      <option value="1">Ward 1</option>
                      <option value="2">Ward 2</option>
                      <option value="3">Ward 3</option>
                      <option value="4">Ward 4</option>
                    </select>
                    <BsChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                {/* Pin Code */}
                <div className="flex items-center gap-6">
                  <label className="w-48 text-sm font-medium text-gray-700">
                    Pin Code
                  </label>
                  <input
                    type="text"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleChange}
                    placeholder="133207"
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Contact Information */}
            <div>
              <h2 className="text-xl font-semibold text-purple-600 mb-6 pb-2 border-b-2 border-purple-600">
                Contact Information
              </h2>
              
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-6">
                  <label className="w-48 text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                {/* Phone no. */}
                <div className="flex items-center gap-6">
                  <label className="w-48 text-sm font-medium text-gray-700">
                    Phone no.
                  </label>
                  <input
                    type="tel"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleChange}
                    placeholder="+91 98XXXXXXXX"
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                {/* Emergency Contact */}
                <div className="flex items-center gap-6">
                  <label className="w-48 text-sm font-medium text-gray-700">
                    Emergency Contact
                  </label>
                  <input
                    type="tel"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleChange}
                    placeholder="+91 98XXXXXXXX"
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-200">
              {/* Reset Button */}
              <button
                type="button"
                onClick={handleReset}
                className="border border-purple-600 text-purple-600 bg-white rounded-md px-6 py-2 text-sm font-medium hover:bg-purple-50 transition-colors"
              >
                Reset
              </button>

              {/* Save Button */}
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white rounded-md px-8 py-2 text-sm font-semibold transition-colors"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
