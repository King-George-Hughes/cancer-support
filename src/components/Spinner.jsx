import { PropTypes } from "prop-types";

const Spinner = ({ size = "lg", color }) => {
  return (
    <div
      className={`${
        size === "lg"
          ? "w-full h-[70vh] flex items-center justify-center"
          : null
      }`}
    >
      <div
        className={`inline-block ${
          size === "sm" ? "h-4 w-4 " : "h-16 w-16 "
        } animate-spin rounded-full ${
          size === "sm" ? "border-2 " : "border-8 "
        } border-solid border-current border-e-transparent align-[-0.125em] ${
          color ? color : "text-primary"
        } motion-reduce:animate-[spin_1.5s_linear_infinite]"
      `}
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};

Spinner.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default Spinner;
