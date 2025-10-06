import api from "../api/employeeDataAPI";

export const employeeService = {
    getAll: async(page = 1, limit = 10, sort = "all", search = "") => {
        const res = await api.get("/", {
            params: { page, limit, sort, search },
        })
        // console.log("API response:", res.data);

        return res.data;
    },

    search: async(query) => {
        const res = await api.get("/search", {
            params: { query }
        })
        // console.log("call in service:", res.data);

        return res.data;
    },

    create: async(emp) => {
        const res = await api.post("/create-employee", emp)
        // console.log("call from service",res);

        return res.data;
    }, 

    update: async(id, emp) => {
        const res = await api.put(`/${id}`, emp);
        return res.data;
    },

    delete: async(id) => {
        const res = await api.delete(`/${id}`);
        return res.data;
    }
}