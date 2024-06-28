// components/ProjectTable.tsx
const ProjectTable = () => {
    return (
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Project</h3>
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Name</th>
              <th className="text-left py-2">Budget</th>
              <th className="text-left py-2">Status</th>
              <th className="text-left py-2">Completion</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">Spotify</td>
              <td className="py-2">$2,500</td>
              <td className="py-2">Working</td>
              <td className="py-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Invision</td>
              <td className="py-2">$5,000</td>
              <td className="py-2">Done</td>
              <td className="py-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ProjectTable;
  