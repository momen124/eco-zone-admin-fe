import { Pagination } from '@mantine/core';

const CustomPagination = ({ currentPage, totalPages, onChangePage }) => {
  return (
    <Pagination
      pages={totalPages}
      value={currentPage}
      onChange={(page) => onChangePage(page)}
    />
  );
};

export default CustomPagination;
