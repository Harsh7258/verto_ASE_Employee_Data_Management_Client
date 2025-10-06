import React, { useEffect } from 'react';
import { useEmployeeStore } from "../app/store";
import { PencilIcon } from '@heroicons/react/24/solid'
import { TrashIcon } from '@heroicons/react/24/solid';

const EmployeeTable = () => {
  const { employees,
    page,
    total,
    sort,
    fetchEmployees,
    setSearchEmployee,
    setSort,
    setPage,
    deleteEmployee,
    openModal, 
  } = useEmployeeStore();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchEmployee(value); 
  };
  const handleOrder = (e) => {
    const value = e.target.value;
    setSort(value);
  }

  useEffect(() => {
    fetchEmployees();
  }, [page, sort]);

  return (
    <>
     <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className='font-bold text-2xl'>Employee Data Table</h2>
      <div className="flex justify-between items-center mb-4 pt-2">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            onChange={handleSearch}
          />
          <select
            className="border rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            onChange={handleOrder}
            
          >
            <option value="all">All</option>
            <option value="desc">Latest</option>
            <option value="asc">Oldest</option>
          </select>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        onClick={() => openModal()}>
          + Add Employee
        </button>
      </div>

      
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left text-gray-700 font-medium">Name</th>
              <th className="p-3 text-left text-gray-700 font-medium">Email</th>
              <th className="p-3 text-left text-gray-700 font-medium">Position</th>
              <th className="p-3 text-left text-gray-700 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((emp) => (
                <tr key={emp.id} className="border-t">
                  <td className="p-3">{emp.name}</td>
                  <td className="p-3">{emp.email}</td>
                  <td className="p-3">{emp.position}</td>
                  <td className="p-3 space-x-2">
                    <button
                      onClick={() => openModal(emp)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      <PencilIcon className='size-4' />
                    </button>
                    <button
                      onClick={() => deleteEmployee(emp.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      <TrashIcon className='size-4'/>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-3 text-center text-gray-500">
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      
        <div className="flex justify-center mt-4 space-x-2">
          <button
            className="px-3 py-1 border rounded hover:bg-gray-100"
            disabled={page === 1}
            onClick={() => setPage (page - 1)}
          >
            Prev
          </button>
          <span className="px-3 py-1">Total: {total}</span>
          <span className="px-3 py-1">Page: {page}</span>
          <button
            className="px-3 py-1 border rounded hover:bg-gray-100"
            disabled={employees.length < 10}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}


export default EmployeeTable;