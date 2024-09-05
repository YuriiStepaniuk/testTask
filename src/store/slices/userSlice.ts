import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  address: any;
  company: any;
}
// {any} to avoid describing nested objects, since it`s not required for the task

interface UsersState {
  users: User[];
  status: string;
  error: string | null;
}

const initialState: UsersState = { users: [], status: "idle", error: null };

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;
