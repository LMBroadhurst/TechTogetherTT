import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import personStateSlice from "./person/personState";
import { personApiSlice } from "./person/personAPI";
import storage from "redux-persist/lib/storage"; 
import { 
    PersistConfig, 
    persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, 
} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
    person: personStateSlice,
    [personApiSlice.reducerPath]: personApiSlice.reducer
});

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: [personApiSlice.reducerPath]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
              },
        }).concat(
            personApiSlice.middleware
    ),
    devTools: true
})

export let persistor = persistStore(store)

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;