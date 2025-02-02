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

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/Jobs' element={<JobsPage />} />
        <Route path='/Jobs/:id' element={<SingleJob />} loader={jobLoader} />  {/* (:id) Specify Dynamic Route */}
        <Route path='*' element={<NotFoundPage />} /> {/* 404 page (* path work for that page which is not exist yet) */}
      </Route>
  )
)

const App = () => {
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;
