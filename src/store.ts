import {configureStore} from "@reduxjs/toolkit";
import useReducer  from "./features/userSlice";

// estructura redux 
const store = configureStore({
    reducer: {
        users: useReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;
