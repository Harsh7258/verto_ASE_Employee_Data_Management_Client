import { create } from "zustand";
import { toast } from "react-toastify";
import { employeeService } from "../services/employeeServices";

export const useEmployeeStore = create((set, get) => ({
    employees: [],
    total: 0,
    page: 1,
    search: "",
    sort: "all",
    modalOpen: false,
    editingEmployee: null,
    loading: false,
    error: null,

    fetchEmployees: async() => {
        const { page, search, sort } = get();
        set({ 
            loading: true, 
            error: null 
        });

        try {
            let data;
            if(search && search.trim() !== ""){
                data = await employeeService.search(search);
                set({ 
                employees: data.employees,
                loading: false });
            } else {
                data = await employeeService.getAll(page, 10, sort, search);
                // console.log("Fetched employees:", data);
                set({ 
                    employees: data.employees, 
                    total: data.totalRows, 
                    loading: false 
                });
            }
        } catch (err) {
            set({ 
                error: err.response?.data?.message || err.message, loading: false 
            });
        }
    },

    setSearchEmployee: async(query) => {
        if(!query) {
            set({ search: query, page: 1 });
            get().fetchEmployees();
            return;
        };
        try {
        const data = await employeeService.search(query);
        // console.log("call from store search: ",data)
            set({ 
                employees: data.employees, 
                search: query, 
                loading: false });
        } catch (err) {
            set({ error: err.response?.data?.message || err.message, 
                loading: false 
            });
        }
    },

    createEmployee: async(emp) => {
        try{
            await employeeService.create(emp);
            // console.log(data)
            get().fetchEmployees();
            toast.success("Employee created successfully!");
        } catch(err) {
            set({
                error: err.response?.data?.message || err.message,
            })
            toast.error(err.response?.data?.message || err.message);
        }
    },

    updateEmployee: async(id, emp) => {
        try {
            await employeeService.update(id, emp);
            get().fetchEmployees();
             toast.success("Employee updated successfully!");
        } catch (err) {
            set({
                error: err.response?.data?.message || err.message
            })
            toast.error(err.response?.data?.message || err.message);
        }
    },

    deleteEmployee: async(id) => {
        try {
            await employeeService.delete(id);
            get().fetchEmployees();
             toast.success("Employee deleted successfully!");
        } catch (err) {
            set({
                error: err.response?.data?.message || err.message
            })
            toast.error(err.response?.data?.message || err.message);
        }
    },

    setPage: (page) => set({ page }),
    setSort: (sort) => set({ sort }),
    openModal: (emp = null) => set({ 
        modalOpen: true, 
        editingEmployee: emp 
    }),
    closeModal: () => set({
         modalOpen: false, 
         editingEmployee: null 
    }),
}))