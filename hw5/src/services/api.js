import axios from 'axios';

const BASE_URL = 'https://684062b55b39a8039a57e865.mockapi.io/tasks';

export const getTasks = () => axios.get(BASE_URL);
export const createTask = (task) => axios.post(BASE_URL, task);
export const updateTask = (id, task) => axios.put(`${BASE_URL}/${id}`, task);
export const deleteTask = (id) => axios.delete(`${BASE_URL}/${id}`);
