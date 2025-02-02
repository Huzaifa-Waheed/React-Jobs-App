import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import React from "react";

const GoBack = () => {
  return (
    <section>
      <div class="container m-auto py-6 px-6">
        <NavLink
          href="/jobs"
          class="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
          <FaArrowLeft className="mr-2" /> Back to Job Listings
        </NavLink>
      </div>
    </section>
  );
};

export default GoBack;
