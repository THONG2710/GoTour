import { createAction } from "@reduxjs/toolkit";

const SET_ISLOGGED = createAction<boolean, 'Authentication/isLogged'>('Authentication/isLogged');

export {SET_ISLOGGED}