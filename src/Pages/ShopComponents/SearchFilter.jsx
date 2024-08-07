import React, {useState}  from 'react'
import { FaSearch, FaChevronDown } from 'react-icons/fa';


function SearchFilter() {    

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('Select Category');
  
  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    setDropdownOpen(false);
  };

  return (
    <div className='flex justify-between items-center p-4 h-14 my-5'>
            {/* serach bar */}
            <div className="relative flex items-center border outline-none border-none ">
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="outline-none w-full border-2 border-[rgb(255,181,36)] text-xl rounded-2xl focus:outline-none  focus:border-[rgb(129,196,8)] p-2 pr-10 px-5" 
                />
                      <FaSearch className="absolute right-2 text-gray-500 text-xl" />
            </div>
            {/* filter */}
            <div className="relative w-[250px]">
                <div 
                  className="flex items-center justify-between border-2 border-[rgb(255,181,36)] rounded-xl bg-white p-2 cursor-pointer"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    <span>{selectedFilter}</span>
                    <FaChevronDown className="text-gray-500" />
                </div>
            {dropdownOpen && (
                <ul className="absolute z-10 w-full bg-white border-2 border-gray-300 rounded-2xl mt-1 overflow-hidden">
            <li 
              className="p-2 hover:bg-gray-200 cursor-pointer" 
              onClick={() => handleFilterClick('Category 1')}
            >
              Category 1  
            </li>
            <li 
              className="p-2 hover:bg-gray-200 cursor-pointer" 
              onClick={() => handleFilterClick('Category 2')}
            >
              Category 2
            </li>
            <li 
              className="p-2 hover:bg-gray-200 cursor-pointer" 
              onClick={() => handleFilterClick('Category 3')}
            >
              Category 3
            </li>
              </ul>
                )}
            </div>
          </div>
  )
}

export default SearchFilter