import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types/userType";

const initialState: User = {
    _id: "",
    email: "",
    firstName: "",
    lastName: "",
    pictureUrl: "",
    serverAuthToken: ""
};

export const user = createSlice({
    name: "user",
    initialState,
    reducers: {
        reduxLogin: (state, action: PayloadAction<User>) => {
            return action.payload;
        },
        reduxLogout: () => {
            return initialState;
        }
    }
});

export const selectUser = (state: { user: User }) => state.user;
export const selectUserId = (state: any) => state.user._id;
export const selectServerAuthToken = (state: any) => state.user.serverAuthToken;
export const selectUserFirstName = (state: any) => state.user.firstName;
export const selectUserLastName = (state: any) => state.user.lastName;
export const selectUserPictureUrl = (state: any) => state.user.pictureUrl;

export const { reduxLogin, reduxLogout } = user.actions;

export default user.reducer;