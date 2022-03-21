import React from "react";
import PropTypes from "prop-types";

const PageHeader = ({ title, subTitle }) => {
  return (
    <div className="center">
      <div className="col-12 col-md-8">
        <h1 className="text-center display-4">{title}</h1>
        <h2 className="fs-5">{subTitle}</h2>
        <hr />
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default PageHeader;
