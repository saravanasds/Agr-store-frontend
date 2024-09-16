import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Homecatagory = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/getAllDepartments');
        console.log('Departments:', response.data);
        setDepartments(response.data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };

    fetchDepartments();
  }, []);


  return (
    <>
      <div className='w-[95%] mx-auto'>
        <div className='mb-2 sm:mb-8 mt-8'>
          <h1 className='w-full text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl uppercase font-bold tracking-wider text-[#3E4095]'>Shop By Departments</h1>
        </div>

        <div class="w-full flex justify-center items-center gap-2 sm:gap-5 flex-wrap p-4 lg:px-10 pb-6 sm:pb-20 sm:pt-10 sm:border-none rounded-md bg-[rgb(244,246,248)] sm:mb-20">

          <div class="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 ">
            {departments.map((department, index) => (
              <div key={index} className="bg-white rounded overflow-hidden shadow sm:shadow-lg hover:scale-[1.1] transform transition-all duration-300 px-1 lg:p-3 flex justify-center items-center">
                <a href={`/shop/${department.department}`}>
                  <div className="w-[70px] h-[70px] xs:w-[110px] xs:h-[110px] sm:w-[180px] sm:h-[180px] xl:w-[220px] xl:h-[220px] flex justify-center items-center">
                    <img
                      className="w-full h-full object-cover rounded-full"
                      src={department.departmentImage}
                      alt={`Slide ${index}`}
                    />
                  </div>
                  <div className="w-full text-center py-2 sm:py-5 text-[rgb(69,89,91)]">
                    <h2 className="text-[10px] sm:text-xl font-semibold">{department.department}</h2>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>


    </>
  );
};

export default Homecatagory;
