import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from 'axios';

// se crea  el interface User  con los objetos de la data
interface User {
    id: number, 
    name: string, 
    email: string,
    gender: string,
    status: string
}

// array objects

interface UserState {
    users: User[];
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    users: [],
    loading: false,
    error:null
};

//thunks
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('https://gorest.co.in/public/v2/users');
    return response.data
});

const userSlice = createSlice({
    name: 'users', initialState,
    reducers :{},
    extraReducers:(builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
                state.loading = false;
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch users';
            });
        
    },
});



export default userSlice.reducer;