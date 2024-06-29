import Layout from '@/components/layout';
import ProgressTracker from '../../components/ProgressTracker';
import ProjectTable from '../../components/ProjectTable';
import SalesOverview from '../../components/SalesOverview';
import StatisticsCards from '../../components/StatisticsCards';
import TeamMembers from '../../components/TeamMembers';
import ToDoList from '../../components/ToDoList';
import UserProfile from '../../components/UserProfile';

const Dashboard = () => {
  return (
    <Layout>
      <StatisticsCards />
      <SalesOverview />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TeamMembers />
        <ToDoList />
      </div>
      <ProgressTracker />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UserProfile />
        <ProjectTable />
      </div>
    </Layout>
  );
};

export default Dashboard;
