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

import menuReducer from "./slices/menuSlice";
import profileReducer from "./slices/profileSlice";
import sidebarReducer from "./slices/sidebarSlice";

const persistConfig = {
    key: "root",
    storage,
};

const menuPersistedReducer = persistReducer(persistConfig, menuReducer);
const profilePersistedReducer = persistReducer(persistConfig, profileReducer);
const sidebarPersistedReducer = persistReducer(persistConfig, sidebarReducer);

export const store = configureStore({
    reducer: {
        menuReducer: menuPersistedReducer,
        profileReducer: profilePersistedReducer,
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
