import { useSearchParams } from "react-router-dom";
import { PropTypes } from "prop-types";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const PAGE_SIZE = 3;

const Paginate = ({ count, perPage }) => {
  const PAGE_SIZE = perPage || 4;
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  // Next
  function nextPage() {
    window.scrollTo(0, 0);

    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  // Previous
  function prevPage() {
    window.scrollTo(0, 0);

    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  // const searchValue = searchParams.get("search");
  // const search = !searchValue ? null : searchValue;

  if (pageCount <= 1) return null;
  // if (search) return null;

  return (
    <div className="w-full flex items-center justify-between p-5 mt-0 lg:mt-10">
      <div className="hidden md:block text-2xl">
        <small>
          Showing <strong>{(currentPage - 1) * PAGE_SIZE + 1}</strong> to{" "}
          <strong>
            {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
          </strong>{" "}
          out of <strong>{count}</strong> results
        </small>
      </div>

      <div className="w-full md:w-fit flex items-center justify-between md:justify-normal gap-4">
        <button
          className={`${
            currentPage === 1 ? "bg-pink-100" : "bg-pink-600 text-white"
          } py-3 px-5 rounded-lg font-medium flex items-center gap-2`}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <FaArrowLeft /> Prev
        </button>
        <button
          className={`${
            currentPage === pageCount ? "bg-pink-100" : "bg-pink-600 text-white"
          }  py-3 px-5 rounded-lg font-medium flex items-center gap-2`}
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          Next <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

Paginate.propTypes = {
  count: PropTypes.number,
  perPage: PropTypes.number,
};

export default Paginate;
