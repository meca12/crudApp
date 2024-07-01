import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

const API_URL = 'https://gorest.co.in/public/v2/users';
const AUTH_TOKEN = 'b405d4259a0ba0a6798c75d61d6f1be14268152b8c09acdec5c89af9bd789653';

// Define la interfaz User con los objetos de la data
export interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

// Define el estado del slice
interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
   currentUser: User | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  currentUser: null,
};

// Thunks para operaciones asincrónicas
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(API_URL, { headers: { Authorization: `Bearer ${AUTH_TOKEN}` } });
  return response.data;
});
// get user para   actualizar  
 
export const getUserfor = createAsyncThunk('users/fetchUsers', async (id: number) => {
  const response = await axios.get(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
  });
   return response.data;
});


export const addUser = createAsyncThunk('users/addUser', async (user: Omit<User, 'id'>) => {
  const response = await axios.post(API_URL, user, { headers: { Authorization: `Bearer ${AUTH_TOKEN}` } });
  console.log(response.data)
  return response.data;
});
export const updateUser = createAsyncThunk('users/updateUser', async ({ id, user }: { id: number; user: Omit<User, 'id'> }) => {
  const response = await axios.put(`${API_URL}/${id}`, user, { headers: { Authorization: `Bearer ${AUTH_TOKEN}` } });
  return response.data;
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (id: number) => {
  await axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
  });
  return id;
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      })
       .addCase(addUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.users.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<User>) => {
        const index = state.users.findIndex((user) => user.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      .addCase(deleteUser.fulfilled, (state, action: PayloadAction<number>) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
      });
  },
});

export default userSlice.reducer;
