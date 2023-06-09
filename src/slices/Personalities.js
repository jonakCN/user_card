import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import UserDataService from '../services/PersonalityService';

const initialState = [];

export const retrieveUsers = createAsyncThunk('users/retrieve', async () => {
	const res = await UserDataService.getAll();
	return res.data;
});

const userSlice = createSlice({
	name: 'user',
	initialState,
	extraReducers: {
		[retrieveUsers.fulfilled]: (state, action) => {
			// return [...action.payload];
			return [action.payload];
		},
	},
});

const { reducer } = userSlice;
export default reducer;
