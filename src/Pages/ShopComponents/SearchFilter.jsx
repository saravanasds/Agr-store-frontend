import React, { useState, useEffect } from 'react';
import { FaSearch, FaChevronDown } from 'react-icons/fa';

const SearchFilter = ({ products, setFilteredProducts, setCurrentPage, setTotalPages, productsPerPage, setSelectedSubcategory }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    // Generate dynamic subcategory list from products
    const subcategories = ['All', ...new Set(products.map(product => product.subcategory))];

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
        setDropdownOpen(false);
        setSelectedSubcategory(filter === 'All' ? 'all' : filter);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(e.target.value.toLowerCase()) &&
            (selectedFilter === 'All' || selectedFilter === 'all' || product.subcategory === selectedFilter)
        );
        setFilteredProducts(filtered);
        setCurrentPage(1);
        setTotalPages(Math.ceil(filtered.length / productsPerPage));
    };

    useEffect(() => {
        // Reapply filter when search term or selected filter changes
        handleSearch({ target: { value: searchTerm } });
    }, [selectedFilter]);

    return (
        <div className='flex justify-between items-center p-4 h-14 my-5'>
            {/* Search bar */}
            <div className="relative flex items-center border outline-none border-none">
                <input 
                    type="text" 
                    placeholder="Search" 
                    value={searchTerm}
                    onChange={handleSearch}
                    className="outline-none w-full border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-green-500 p-2 pr-10" 
                />
                <FaSearch className="absolute right-2 text-gray-500" />
            </div>
            {/* Filter */}
            <div className="relative w-[250px]">
                <div
                    className="flex items-center justify-between border-2 border-gray-300 rounded-2xl bg-white p-2 cursor-pointer"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    <span>{selectedFilter}</span>
                    <FaChevronDown className="text-gray-500" />
                </div>
                {dropdownOpen && (
                    <ul className="absolute z-10 w-full bg-white border-2 border-gray-300 rounded-2xl mt-1 overflow-hidden">
                        {subcategories.map(subcategory => (
                            <li 
                                key={subcategory}
                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                onClick={() => handleFilterClick(subcategory)}
                            >
                                {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default SearchFilter;
