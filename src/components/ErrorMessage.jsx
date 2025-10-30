import { PropTypes } from "prop-types";

const ErrorMessage = ({ children }) => {
  if (!children) return null;

  return <span className="text-red-500 text-sm">{children}</span>;
};

ErrorMessage.propTypes = {
  children: PropTypes.any,
};

export default ErrorMessage;
