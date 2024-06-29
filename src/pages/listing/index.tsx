import { Button, Modal, Table, Text, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import AdminLayout from '../../components/layout';

type Listing = { id: number, title: string, status: string }

const Listings = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [listingToDelete, setListingToDelete] = useState<number | null>(null);

  useEffect(() => {
    setListings([
      { id: 1, title: 'Item 1', status: 'Pending' },
      { id: 2, title: 'Item 2', status: 'Approved' },
      { id: 3, title: 'Item 3', status: 'Rejected' },
    ]);
  }, []);

  const deleteListing = (id: number) => {
    console.log(`Deleted listing ${id}`);
    setShowDeleteModal(false);
  };

  const handleDeleteClick = (id: number) => {
    setListingToDelete(id);
    setShowDeleteModal(true);
  };

  const rows = listings.map((listing) => (
    <tr key={listing.id}>
      <td>{listing.id}</td>
      <td>{listing.title}</td>
      <td>{listing.status}</td>
      <td>
        <Button onClick={() => handleDeleteClick(listing.id)}>Delete</Button>
      </td>
    </tr>
  ));

  return (
    <AdminLayout>
      <Title order={2}>Manage Listings</Title>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>

      <Modal
        opened={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Confirm Delete"
        size="sm"
      >
        <Text>Are you sure you want to delete this listing?</Text>
        <Button color="red" onClick={() => { if (listingToDelete) deleteListing(listingToDelete) }}>Delete</Button>
      </Modal>
    </AdminLayout>
  );
};

export default Listings;
