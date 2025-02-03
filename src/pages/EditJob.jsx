import React from 'react';
import { useParams, useLoaderData, Navigate, Links } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const EditJob = ({updateJob}) => {
    const job = useLoaderData();
    const [type, setType] = useState(job.type);
    const [title, setTitle] = useState(job.title);
    const [description, setDescription] = useState(job.description);
    const [salary, setSalary] = useState(job.salary);
    const [location, setLocation] = useState(job.location);
    const [company, setCompany] = useState(job.company.name);
    const [companyDescription, setCompanyDescription] = useState(job.company.description);
    const [contactEmail, setContactEmail] = useState(job.company.contactEmail);
    const [contactPhone, setContactPhone] = useState(job.company.contactPhone);

    const { id } = useParams();

    const navigate = useNavigate();

    const submitForm = async (event) => {
        const updatedJob = {
            id,
            type,
            title,
            description,
            salary,
            location,
            company: {
                name: company,
                description: companyDescription,
                contactEmail,
                contactPhone,
            },
        }
        updateJob(updatedJob);
        toast.success('Job updated successfully');
        return navigate('/jobs');
    }

    return (
        <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Edit Job</h2>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
                Job Type
              </label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                value={type}
                onChange={(event) => setType(event.target.value)}
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Job Listing Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. React Developer"
                required
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
                Salary
              </label>
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={salary}
                onChange={(event) => setSalary(event.target.value)}
              >
                <option value="Under PKR 100K">Under PKR 100K</option>
                <option value="PKR 100K - 150K">PKR 100K - 150K</option>
                <option value="PKR 150K - 200K">PKR 150K - 200K</option>
                <option value="PKR 200K - 250K">PKR 200K - 250K</option>
                <option value="PKR 250K - 300K">PKR 250K - 300K</option>
                <option value="PKR 300K - 350K">PKR 300K - 350K</option>
                <option value="PKR 350K - 400K">PKR 350K - 400K</option>
                <option value="PKR 400K - 500K">PKR 400K - 500K</option>
                <option value="PKR 500K - 600K">PKR 500K - 600K</option>
                <option value="PKR 600K - 750K">PKR 600K - 750K</option>
                <option value="Over PKR 750K">Over PKR 750K</option>

              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Company Location"
                required
                value={location}
                onChange={(event) => setLocation(event.target.value)}
              />
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label htmlFor="company" className="block text-gray-700 font-bold mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
                required
                value={company}
                onChange={(event) => setCompany(event.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Description
              </label>
              <textarea
                id="company_description"
                name="company_description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company do?"
                value={companyDescription}
                onChange={(event) => setCompanyDescription(event.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Email
              </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
                value={contactEmail}
                onChange={(event) => setContactEmail(event.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Phone
              </label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mb-3"
                type="submit"
              >
                Update Job
              </button>
            </div>

            <div>
                <Link to='/jobs'
                className=" block text-center bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                >
                    Cancel
                </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
    );
};

export default EditJob;