// components/StatisticsCards.tsx
const StatisticCard: React.FC<{ title: string; value: string; percentage: string }> = ({ title, value, percentage }) => (
    <div className="bg-white shadow rounded-lg p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl">{value}</p>
      </div>
      <p className="text-green-500">{percentage}</p>
    </div>
  );
  
  const StatisticsCards = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <StatisticCard title="Today's Money" value="$53,000" percentage="+55%" />
        <StatisticCard title="Today's Users" value="2,300" percentage="+3%" />
        <StatisticCard title="New Clients" value="+3,462" percentage="-2%" />
        <StatisticCard title="Sales" value="$103,430" percentage="+5%" />
      </div>
    );
  };
  
  export default StatisticsCards;
  