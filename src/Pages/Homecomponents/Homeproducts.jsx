import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DepartmentsTab = () => {
  const [departments, setDepartments] = useState([]);
  const [categoriesByDepartment, setCategoriesByDepartment] = useState({});

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/getAllDepartments');
        setDepartments(response.data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };

    fetchDepartments();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/getAllCategories');
        const fetchedCategories = response.data;

        // Group categories by department name
        const categoriesGroupedByDepartment = departments.reduce((acc, department) => {
          acc[department.department] = fetchedCategories.filter(
            (category) => category.department === department.department
          );
          return acc;
        }, {});

        setCategoriesByDepartment(categoriesGroupedByDepartment);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    if (departments.length > 0) {
      fetchCategories();
    }
  }, [departments]);

  return (
    <>
      <div className='w-[90%] mx-auto mt-6 sm:mt-10'>
        <h1 className='w-full text-center text-lg sm:text-2xl md:text-4xl font-bold uppercase tracking-wider text-[#3E4095] '>Shop By Categories</h1>
      </div>
      {departments.map((department) => (
        <div key={department.department} className="mx-auto py-2 px-4 sm:py-10 w-full sm:min-h-[500px] sm:px-10 ">
          <a href={`/shop/${department.department}`}>
            <h1 className="text-[16px] sm:text-2xl font-semibold text-center sm:text-left mb-2 sm:mb-4 text-[rgb(129,196,8)] tracking-wider">{department.department}</h1>
            <div className="tab-content sm:py-8 bg-[rgb(244,246,248)] rounded-lg shadow-md">
              <TabContent categories={categoriesByDepartment[department.department] || []} />
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

const TabContent = ({ categories }) => (
  <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-3">
    {categories.map((category) => (
      <div key={category._id} className="flex flex-col justify-center items-center rounded overflow-hidden hover:scale-[1.05] transform transition-all duration-300 hover:shadow-md hover:shadow-gray-700 hover:bg-white py-2">
        <img className="w-[70px] h-[70px] xs:w-[110px] xs:h-[110px] sm:w-[150px] sm:h-[150px] object-cover rounded-full border border-[rgb(255,181,36)]" src={category.categoryImage} alt={category.category} />
        <div className="pt-2 sm:pt-4">
          <div className="text-[10px] sm:text-lg bg-[rgb(129,196,8)] text-white px-2 py-1 rounded text-center">
            {category.category}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default DepartmentsTab;
