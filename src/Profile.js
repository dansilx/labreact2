import React from 'react';

function Profile() {
  return (
    <div className="p-4 mb-6 border rounded bg-gray-100 flex justify-center items-center">
      <img
        src="https://www.nasa.gov/wp-content/uploads/2016/11/26646856911_ca242812ee_o_1.jpg"
        alt="Katherine Johnson"
        className="w-40 h-40 object-cover rounded-full shadow-lg"
      />
    </div>
  );
}

export default Profile;
