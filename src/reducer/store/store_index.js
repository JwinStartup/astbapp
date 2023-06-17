import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from '../auth/auth_slice.js';



export const store = configureStore({
    reducer: {
        auth: authReducer,

    },
});

export * from '../auth/auth_slice.js';

