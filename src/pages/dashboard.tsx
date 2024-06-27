import { Title, Text, Card, Grid, Col } from '@mantine/core';
import AdminLayout from './layout';

const Dashboard = () => {
  return (
    <AdminLayout>
      <Title order={2}>Dashboard</Title>
      <Grid>
        <Col span={4}>
          <Card shadow="sm" p="lg">
            <Text>Card 1</Text>
          </Card>
        </Col>
        <Col span={4}>
          <Card shadow="sm" p="lg">
            <Text>Card 2</Text>
          </Card>
        </Col>
        <Col span={4}>
          <Card shadow="sm" p="lg">
            <Text>Card 3</Text>
          </Card>
        </Col>
      </Grid>
    </AdminLayout>
  );
};

export default Dashboard;
