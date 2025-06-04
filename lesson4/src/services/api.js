import axios from 'axios';

const API_URL = 'https://684062b55b39a8039a57e865.mockapi.io/users';

export const getUsers = () => axios.get(API_URL);
export const deleteUser = (id) => axios.delete(`${API_URL}/${id}`);
export const updateUser = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const addUser = (data) => axios.post(API_URL, data);