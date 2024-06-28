// components/TeamMembers.tsx
const TeamMember: React.FC<{ name: string; role: string }> = ({ name, role }) => (
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-12 h-12 rounded-full bg-gray-200"></div>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  );
  
  const TeamMembers = () => {
    return (
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Team Members</h3>
        <TeamMember name="John Michael" role="Developer" />
        <TeamMember name="Alex Smith" role="Designer" />
        <TeamMember name="Samantha Ivy" role="Project Manager" />
      </div>
    );
  };
  
  export default TeamMembers;
  