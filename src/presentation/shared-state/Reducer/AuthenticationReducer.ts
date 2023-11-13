import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { SAVE_USER, SET_ISLOGGED } from "../Action/Authentications";
import { UserModel } from "../../../domain/Entities/UserModel";

export type AuthenticationState = {
    isLogged: boolean;
    myAccount: UserModel
}

export const INITIAL_AUTHENTICATION_STATE: AuthenticationState = {
    isLogged: false,
    myAccount: { _id: '', password: '', email: '', address: '', avatar: '', cccd: '', gender: '', phoneNumber: '', score: 0, userName: '' }
}

export const AuthenticationReducer = createReducer(
    INITIAL_AUTHENTICATION_STATE,
    (builder) => {
        builder
            .addCase(SET_ISLOGGED, (state, action: PayloadAction<boolean>) => {
                state.isLogged = action.payload;
            })
            .addCase(SAVE_USER, ( state, action: PayloadAction<UserModel>) => {
                state.myAccount = action.payload
            })
    }
)