import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { Deezer } from './services/Deezer';

export const store = configureStore({
  reducer: {
    [Deezer.reducerPath]:Deezer.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(Deezer.middleware),
});
