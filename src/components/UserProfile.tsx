// components/UserProfile.tsx
const UserProfile = () => {
    return (
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 rounded-full bg-gray-200 mr-4"></div>
          <div>
            <p className="font-semibold">John Snow</p>
            <p className="text-gray-500">3 days ago</p>
          </div>
        </div>
        <p className="mb-4">
          Personal profiles are the perfect way for you to grab their attention and persuade recruiters to continue reading your CV. Because you’re telling them from the off exactly why they hire you.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Read more</button>
      </div>
    );
  };
  
  export default UserProfile;
  