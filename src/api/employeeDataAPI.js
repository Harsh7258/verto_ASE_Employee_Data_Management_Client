import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000/api/employee",
    headers: {
        "Content-Type": "application/json"
    },
})

// const call = async(page = 1, limit = 10, sort = "all", search = "") => {
//     const res = await api.get("/", {
//         params: { page, limit, sort, search }
//     });
//     console.log(res.data);
// }
// call();

export default api;