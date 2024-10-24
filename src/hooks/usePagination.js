import { useEffect, useState } from "react";

const usePagination = ({ data = [], itemsPerPage = 4 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedData, setDisplayedData] = useState([]);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(data.length / itemsPerPage)
  );

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  useEffect(() => {
    const endIndex = currentPage * itemsPerPage;
    const startIndex = endIndex - itemsPerPage;

    setDisplayedData(data.slice(startIndex, endIndex));
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / itemsPerPage));
    setCurrentPage(1);
  }, [data.length, itemsPerPage]);

  return {
    currentPage,
    totalPages,
    displayedData,
    handlePrevPage,
    handleNextPage,
  };
};

export default usePagination;
