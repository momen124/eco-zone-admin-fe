// pages/listings.js
import React, { useState, useEffect } from 'react';
import { Title, TextInput, Table, Card, Select } from '@mantine/core';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import Layout from '@/components/layout';
import Breadcrumb from '@/components/Breadcrumb';
import LoadingSpinner from '@/components/LoadingSpinner';
import CustomPagination from '../components/Pagination';

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setTimeout(() => {
      setListings([
        { id: 1, title: 'Listing 1', category: 'Category 1', status: 'Active' },
        { id: 2, title: 'Listing 2', category: 'Category 2', status: 'Inactive' },
        { id: 3, title: 'Listing 3', category: 'Category 1', status: 'Active' },
        { id: 4, title: 'Listing 4', category: 'Category 3', status: 'Inactive' },
        { id: 5, title: 'Listing 5', category: 'Category 2', status: 'Active' },
        { id: 6, title: 'Listing 6', category: 'Category 3', status: 'Inactive' },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  const filteredListings = listings.filter(listing => 
    (filter === 'all' || listing.status === filter) && listing.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredListings.length / itemsPerPage);
  const visibleListings = filteredListings.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const handleEdit = (id) => {
    console.log(`Editing listing ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Deleting listing ${id}`);
  };

  const rows = visibleListings.map((listing) => (
    <tr key={listing.id} className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-4 px-6">{listing.id}</td>
      <td className="py-4 px-6">{listing.title}</td>
      <td className="py-4 px-6">{listing.category}</td>
      <td className="py-4 px-6">{listing.status}</td>
      <td className="py-4 px-6 flex space-x-2">
        <button onClick={() => handleEdit(listing.id)} className="text-blue-600 hover:text-blue-800">
          <FiEdit />
        </button>
        <button onClick={() => handleDelete(listing.id)} className="text-red-600 hover:text-red-800">
          <FiTrash2 />
        </button>
      </td>
    </tr>
  ));

  return (
    <Layout>
      <div className="p-6">
        <Breadcrumb steps={['Dashboard', 'Listings']} currentStep={1} />
        <Title order={2} className="mt-4">Listings</Title>
        <Card shadow="sm" padding="lg" className="bg-white mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
            <TextInput
              placeholder="Search Listings"
              value={search}
              onChange={handleSearchChange}
              className="w-full md:w-1/3"
            />
            <Select
              data={[
                { value: 'all', label: 'All' },
                { value: 'Active', label: 'Active' },
                { value: 'Inactive', label: 'Inactive' },
              ]}
              value={filter}
              onChange={handleFilterChange}
              className="w-full md:w-1/4"
            />
          </div>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="overflow-x-auto">
              <Table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-2 px-6 text-left">ID</th>
                    <th className="py-2 px-6 text-left">Title</th>
                    <th className="py-2 px-6 text-left">Category</th>
                    <th className="py-2 px-6 text-left">Status</th>
                    <th className="py-2 px-6 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </Table>
            </div>
          )}
          <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onChangePage={handleChangePage}
            className="mt-4"
          />
        </Card>
      </div>
    </Layout>
  );
};

export default Listings;
