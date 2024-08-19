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
      <div className=' mt-10 py-4'>
        <h1 className='w-full text-center text-5xl font-bold tracking-wider text-[#3E4095]'>Shop By Departments</h1>
      </div>

      <div class="w-full flex justify-center items-center gap-5 flex-wrap p-4 lg:px-10 pb-20 pt-10  ">

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {departments.map((department, index) => (
            <div key={index} className="bg-[rgb(244,246,248)] rounded-xl overflow-hidden shadow-lg hover:scale-[1.1] transform transition-all duration-300">
              <div className="w-full h-[200px] flex justify-center items-center">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={department.departmentImage}
                  alt={`Slide ${index}`}
                />
              </div>
              <div className="w-full text-center py-5 text-[rgb(69,89,91)]">
                <h2 className="text-xl font-semibold">{department.department}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>


    </>
  );
};

export default Homecatagory;
