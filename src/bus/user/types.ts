// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type User = {
    _id: string | null,
    username: string | null,
};
export type UserState = User;
export type RefreshUser = User;
export type RegisterUser = User;

export type UserForm = {
    username: User['username']
};

// Contracts
export type SetUserContract = CaseReducer<UserState, PayloadAction<UserState>>

