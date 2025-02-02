import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import React from "react";
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import SingleJob, {jobLoader} from './pages/SingleJob';
import AddJob from './pages/AddJob';
import axios from 'axios';



const App = () => {

  // Add Job Function
  const addJob = async (newJob) => {
    console.log(newJob);
    try{
      const response = await new Promise((resolve, reject) => {
        $.ajax({
          url: '/api/jobs',
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify(newJob),
          success: function(){
            //console.log('Job Added Successfully');
            resolve();
            return;
          },
          error: reject
        })
      })
    }catch(error){
      console.log(error);
    }
  }

  // Delete Job Function
  const deleteJob = async (jobId) => {
    
    const response = await axios.delete(`/api/jobs/${jobId}`);
    if(response.status === 200 || response.ok){
      return;
    }

  }

  // Router
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/Jobs' element={<JobsPage />} />
          <Route path='/add-job' element={<AddJob addJobSubmit={addJob} />} />
          <Route 
            path='/Jobs/:id' 
            element={<SingleJob deleteJob={deleteJob} />}
            loader={jobLoader} 
          />  {/* (:id) Specify Dynamic Route */}

          <Route path='*' element={<NotFoundPage />} /> {/* 404 page (* path work for that page which is not exist yet) */}
        </Route>
    )
  )


  // Return RouterProvider
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );


};

export default App;
