import axios from 'axios';

const API_URL = 'https://gorest.co.in/public/v2/users';
const AUTH_TOKEN = 'b405d4259a0ba0a6798c75d61d6f1be14268152b8c09acdec5c89af9bd789653';




// Función para obtener un usuario por ID
export const fetchUser = async (id:number) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user');
  }
};

// Función para obtener todos los usuarios
export const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};

// Función para agregar un nuevo usuario
export const addUser = async (user: { name: string, email: string, gender: string, status: string }) => {
  try {
    const response = await axios.post(API_URL, user,{ headers: { Authorization: `Bearer ${AUTH_TOKEN}` } });
   
    return response.data;
  } catch (error) {
    throw new Error('Failed to add user');
  }
};


export const createUser = (user: {name?: string, email?: string, gender?: string, status?: string }) => {
      axios.post(API_URL, user,{ headers: { Authorization: `Bearer ${AUTH_TOKEN}` } })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  
}
  






// Función para actualizar un usuario por ID
export const updateUser = async (id:number, user: { name?: string, email?: string, gender?: string, status?: string }) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, user);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update user');
  }
};

// Función para eliminar un usuario por ID
export const deleteUser = async (id:number) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    throw new Error('Failed to delete user');
  }
};


