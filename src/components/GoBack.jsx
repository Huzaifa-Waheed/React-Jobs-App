import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import React from "react";

const GoBack = () => {
  return (
    <section>
      <div  className="container m-auto py-6 px-6">
        <Link
          to="/jobs"
          className="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
          <FaArrowLeft className="mr-2" /> Back to Job Listings
        </Link>
      </div>
    </section>
  );
};

export default GoBack;
