import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// Assignment api.
export const createAssignment = (payload: any) =>
  api.post('/assignment', payload);
export const updateAssignment = (id: string, payload: any) =>
  api.post(`/assignment/${id}`, payload);
export const deleteAssignment = (id: string) => api.delete(`/assignment/${id}`);
export const getAssignment = (id: string) => api.get(`/assignment/${id}`);
export const getAssignments = () => api.get('/assignments');

// Class api.
export const createClass = (payload: any) => api.post('/class', payload);
export const updateClsas = (id: string, payload: any) =>
  api.post(`/class/${id}`, payload);
export const deleteClass = (id: string) => api.delete(`class/${id}`);
export const getClass = (id: string) => api.get(`/class/${id}`);
export const getClasses = () => api.get('/classes');
