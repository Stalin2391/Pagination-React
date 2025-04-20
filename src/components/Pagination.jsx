const Pagination = ({ setCurrentPage, currentPage, noOfPages }) => {
  const handlePageChange = (n) => {
    setCurrentPage(n);
  };

  const goToPrev = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const goToNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="page-container">
      <button disabled={currentPage === 0} onClick={() => goToPrev()}>
        prev
      </button>
      {[...Array(noOfPages).keys()].map((n) => (
        <button
          onClick={() => handlePageChange(n)}
          className={`page-number ${n === currentPage ? "active" : ""}`}
        >
          {n}
        </button>
      ))}
      <button
        disabled={currentPage === noOfPages - 1}
        onClick={() => goToNext()}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
