import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import UserDataService from '../services/PersonalityService';

const initialState = [];

export const retrieveBrands = createAsyncThunk('brands/retrieve', async () => {
	const res = await UserDataService.getBrand();
	return res.data;
});

const brandSlice = createSlice({
	name: 'brand',
	initialState,
	extraReducers: {
		[retrieveBrands.fulfilled]: (state, action) => {
			// return [...action.payload];
			return [action.payload];
		},
	},
});

const { reducer } = brandSlice;
export default reducer;
