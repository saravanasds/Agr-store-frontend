import React, { useState } from 'react';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    fatherName: 'Doe Senior',
    email: 'john.doe@example.com',
    mobile: '1234567890',
    dob: '1990-01-01',
    aadhar: '1234-5678-9012',
    district: '',
    constituency: '',
    referenceNumber: 'REF123456',
    address: '123 Main St, Springfield, USA',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-[90%]">
          <h1 className="text-xl font-bold leading-tight tracking-tight py-4 text-gray-900 md:text-2xl dark:text-white">
            Profile
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSaveClick}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(profile).map(([key, value]) => (
                <div key={key}>
                  <label htmlFor={key} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  {isEditing ? (
                    <input
                      type={key === 'dob' ? 'date' : 'text'}
                      name={key}
                      id={key}
                      value={value}
                      onChange={handleInputChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  ) : (
                    <p className="p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      {value}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              {isEditing ? (
                <button
                  type="submit"
                  className="lg:max-w-[70%] w-full mx-auto text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800"
                >
                  Save
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleEditClick}
                  className="lg:max-w-[70%] w-full mx-auto text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Profile;
       