import { configureStore } from '@reduxjs/toolkit';
import { utilisateurSlice } from './userSlice';


export const store = configureStore({
    reducer: {
       utilisateurs: utilisateurSlice,
        

    },
});