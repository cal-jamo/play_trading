import { configureStore } from "@reduxjs/toolkit";
import user from './features/userSlice';
import athlete from './features/athleteSlice';

export const store = configureStore({
    reducer: {
        user,
        athlete,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;