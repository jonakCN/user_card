import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/Personalities';
import brandReducer from './slices/Brands';

const reducer = {
	users: userReducer,
	brands: brandReducer,
};

const store = configureStore({
	reducer: reducer,
	devTools: true,
});

export default store;
