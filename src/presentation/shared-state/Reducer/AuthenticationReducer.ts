import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { SET_ISLOGGED } from "../Action/Authentications";

export type AuthenticationState = {
    isLogged: boolean;
}

export const INITIAL_AUTHENTICATION_STATE: AuthenticationState = {
    isLogged: false,
}

export const AuthenticationReducer = createReducer(
    INITIAL_AUTHENTICATION_STATE, 
    (builder) => {
        builder
            .addCase(SET_ISLOGGED, (state, action: PayloadAction<boolean>) => {
                state.isLogged = action.payload
            })
    }
)