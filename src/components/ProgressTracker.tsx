// components/ProgressTracker.tsx
const ProgressTracker = () => {
    return (
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Progress Track</h3>
        <div className="mb-4">
          <p>React Material Dashboard</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="mb-4">
          <p>Argon Design System</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>
        <div>
          <p>Vuja's New UI Kit PRO</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '40%' }}></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProgressTracker;
  