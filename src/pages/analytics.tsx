import { useState } from 'react';
import { Title, Text } from '@mantine/core';
import AdminLayout from '../components/layout';
import CustomPagination from '../components/Pagination';

const Analytics = () => {
  const analyticsData = [
    { id: 1, metric: 'Active Users', value: 120 },
    { id: 2, metric: 'Total Listings', value: 45 },
    { id: 3, metric: 'Reported Issues', value: 3 },
  ];

  const itemsPerPage = 1;
  const totalPages = Math.ceil(analyticsData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleData = analyticsData.slice(startIndex, startIndex + itemsPerPage);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <AdminLayout>
      <Title order={2}>Platform Analytics</Title>
      {visibleData.map((data) => (
        <div key={data.id}>
          <Text>{data.metric}: {data.value}</Text>
        </div>
      ))}
      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChangePage={handleChangePage}
      />
    </AdminLayout>
  );
};

export default Analytics;
