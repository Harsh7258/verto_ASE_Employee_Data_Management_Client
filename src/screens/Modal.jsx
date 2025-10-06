import React, { useState, useEffect } from "react";
import { useEmployeeStore } from "../app/store";

const Modal = () => {
  const {
    modalOpen,
    editingEmployee,
    createEmployee,
    updateEmployee,
    closeModal,
  } = useEmployeeStore();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");

  useEffect(() => {
    if (editingEmployee) {
      setName(editingEmployee.name);
      setEmail(editingEmployee.email);
      setPosition(editingEmployee.position);
    } else {
      setName("");
      setEmail("");
      setPosition("");
    }
  }, [editingEmployee]);

  if (!modalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const emp = { name, email, position };

    if (editingEmployee) {
      updateEmployee(editingEmployee.id, emp);
    } else {
      createEmployee(emp);
    }

    closeModal();
  };



  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start pt-20">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className={`relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md z-10
            transform transition-transform duration-900 ease-in-out
            ${modalOpen ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}`}>
            <h2 className="text-xl font-semibold mb-4">
                {editingEmployee ? "Edit Employee" : "Add Employee"}
            </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Name"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Position"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />

          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              {editingEmployee ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;