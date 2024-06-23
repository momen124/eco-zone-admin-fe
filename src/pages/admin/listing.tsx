// src/pages/admin/listings.js
import { Title, Table, Button, Modal, Text } from '@mantine/core';
import { useState, useEffect } from 'react';
import AdminLayout from './layout';

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State for delete modal
  const [listingToDelete, setListingToDelete] = useState(null); // State to store listing to delete

  useEffect(() => {
    // Fetch listings from your API
    // Here we use a static array for demonstration purposes
    setListings([
      { id: 1, title: 'Item 1', status: 'Pending' },
      { id: 2, title: 'Item 2', status: 'Approved' },
      { id: 3, title: 'Item 3', status: 'Rejected' },
    ]);
  }, []);

  const deleteListing = (id) => {
    // Implement API call to delete listing
    console.log(`Deleted listing ${id}`);
    // Close modal after deletion
    setShowDeleteModal(false);
  };

  const handleDeleteClick = (id) => {
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

      {/* Delete listing modal */}
      <Modal
        opened={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Confirm Delete"
        size="sm"
      >
        <Text>Are you sure you want to delete this listing?</Text>
        <Button color="red" onClick={() => deleteListing(listingToDelete)}>Delete</Button>
      </Modal>
    </AdminLayout>
  );
};

export default Listings;
