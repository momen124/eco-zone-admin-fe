import { Pagination } from '@mantine/core';

const CustomPagination = ({ currentPage, totalPages, onChangePage }) => {
  return (
    <Pagination
      page={currentPage}
      onChange={onChangePage}
      total={totalPages}
    />
  );
};

export default CustomPagination;
