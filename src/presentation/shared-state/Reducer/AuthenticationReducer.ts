import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { SAVE_USER, SET_ISLOGGED } from "../Action/Authentications";
import { UserModel } from "../../../domain/Entities/UserModel";

export type AuthenticationState = {
    isLogged: boolean;
    myAccount: UserModel
}

export const INITIAL_AUTHENTICATION_STATE: AuthenticationState = {
    isLogged: false,
    myAccount: { _id: '', password: '', email: '', address: '', avatar: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMPEhUSEhMWFRUVFxoVGBcVGBcVFRcXFRUaFxoXFx0YHyggGB0lHRUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALUBFgMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAdEAEBAQEBAQADAQAAAAAAAAAAAREhYUGh4fAx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDbQFAsAAgQAMAAICKmcUAAAqLQAABMUADAAMAAAgQwAACBEwFCgAABABPi000AgQE+Ki6AQICczxaaUAgAnxaaUAgaCFNUADQInxU0FAAicxYmgtCgETmeLE3gLQAIigAAAYYAQIAGAAAAYAAAmLTCgAABhgAAEDEwFAAgQwCgABDAKFAAACACcFACBATmeLQAIAJzPFqKAQATmeLQAIAJwotAAAiczxQCgAROZ4sAKABE5niwAoAERQAAAMACBAAwAAAExQAAAwAAADAAAADAAAIGGAAAQDAKAAAAQATmef2FXSgECAnM8U0AIAJzPFqaoBABOZ5+PVpoAQASYUUCgAROZ4poFAAiczxYaBQAInM8WGgUACIoAAAGAAAAYAAABgAAAGAAAAYAAAAYAABAhgAAEAwCgAAAJFAT4VdARYEoJzPFNACGgJzPCroAQATmeLTSgEAE4VdNAAAicxTQKACQ5niw0CgAROZ4poFAAiKAAAAAECAAAAABgAAABQAAAAAAAAAAIEMAAAAAAAAAAgJ8WiaCkCAigAQAT5+w3i0AgAn9/q1NWgEAEWooAACfFgAABE+LE+AtCgET5+1iAtCgCKAAAAUAgQAAACAAAAAFRaAACaqKAAACAoUAgQAAAAAoAAAJFxAFwwACIAYqALhEAXCgARADCgCoALiUAKqAC4gBVQAhYAFIALDEAWoAKgA//9k=', cccd: '', gender: '', phoneNumber: '', score: 0, userName: '' }
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