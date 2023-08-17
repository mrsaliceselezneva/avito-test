import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import sidebarReducer from "./slices/sidebarSlice";

const persistConfig = {
    key: "root",
    storage,
};

const sidebarPersistedReducer = persistReducer(persistConfig, sidebarReducer);

export const store = configureStore({
    reducer: {
        sidebarReducer: sidebarPersistedReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
