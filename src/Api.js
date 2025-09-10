import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getJobs = (search, page, limit) =>
  API.get(`/jobs?search=${search}&page=${page}&limit=${limit}`);

export const addJob = (jobData) => API.post("/jobs", jobData);
