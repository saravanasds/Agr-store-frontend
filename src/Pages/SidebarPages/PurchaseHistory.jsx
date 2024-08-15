import React, { useState } from 'react';
import { FaSortUp, FaSortDown, FaRupeeSign  } from 'react-icons/fa'; // Import sorting icons
import Products2 from '../../Accets/Prods-2.jpg';

function PurchaseHistory() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const ordersPerPage = 15;

  // Example data for orders (replace this with real data)
  const orders = Array.from({ length: 50 }, (_, i) => ({
    id: `ORD00${i + 1}`,
    productImage: Products2,
    productName: `Product ${i + 1}`,
    category: `Category ${i % 5 + 1}`,
    price: (i + 1) * 10,
    purchaseDate: `2024-08-${(i % 30) + 1}`,
    deliveredDate: `2024-08-${(i % 30) + 2}`,
    status: i % 2 === 0 ? 'Success' : 'Cancelled',
  }));

  // Sorting logic
  const sortedOrders = React.useMemo(() => {
    let sortableOrders = [...orders];
    if (sortConfig.key !== null) {
      sortableOrders.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableOrders;
  }, [orders, sortConfig]);

  // Calculate the orders to be displayed on the current page
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = sortedOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  // Handle sorting
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Render sorting icons
  const renderSortIcon = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'ascending' ? <FaSortUp /> : <FaSortDown />;
  };

  // Handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-3xl font-bold mb-6">Purchase History</h2>
      <div className="overflow-x-auto w-full container lg:w-[80%] m-auto border rounded-lg shadow-lg">
        <table className="table-auto w-full border-collapse text-sm md:text-base">
          <thead>
            <tr className="bg-gray-300">
              <th className="border px-4 py-2 cursor-pointer" onClick={() => requestSort('id')}>
                Purchase ID {renderSortIcon('id')}
              </th>
              <th className="border px-4 py-2">Product Image</th>
              <th className="border px-4 py-2 cursor-pointer" onClick={() => requestSort('productName')}>
                Product Name {renderSortIcon('productName')}
              </th>
              <th className="border px-4 py-2 cursor-pointer" onClick={() => requestSort('category')}>
                Category {renderSortIcon('category')}
              </th>
              <th className="border px-4 py-2 cursor-pointer" onClick={() => requestSort('price')}>
                Price {renderSortIcon('price')}
              </th>
              <th className="border px-4 py-2 cursor-pointer" onClick={() => requestSort('purchaseDate')}>
                Purchase Date {renderSortIcon('purchaseDate')}
              </th>
              <th className="border px-4 py-2 cursor-pointer" onClick={() => requestSort('deliveredDate')}>
                Delivered Date {renderSortIcon('deliveredDate')}
              </th>
              <th className="border px-4 py-2 cursor-pointer" onClick={() => requestSort('status')}>
                Status {renderSortIcon('status')}
              </th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order.id} className="text-center bg-white hover:bg-gray-100">
                <td className="border px-4 py-2">{order.id}</td>
                <td className="border px-4 py-2">
                  <img src={order.productImage} alt={order.productName} className="w-12 h-12 mx-auto md:w-16 md:h-16" />
                </td>
                <td className="border px-4 py-2">{order.productName}</td>
                <td className="border px-4 py-2">{order.category}</td>
                <td className="border px-4 py-2"><div className="flex items-center"><FaRupeeSign className="mr-1" /><span>{order.price}</span></div></td>
                <td className="border px-4 py-2">{order.purchaseDate}</td>
                <td className="border px-4 py-2">{order.deliveredDate}</td>
                <td className={`border px-4 py-2 ${order.status === 'Success' ? 'text-green-500' : 'text-red-500'}`}>
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(orders.length / ordersPerPage) }, (_, i) => (
          <button
            key={i + 1}
            className={`mx-1 px-3 py-1 border ${
              currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
            } rounded transition-colors duration-300`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PurchaseHistory;
