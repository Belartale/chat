// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type User = {
    userId: string | null,
};
export type UserState = User;
export type RefreshUser = User;

// Contracts
export type SetUserContract = CaseReducer<UserState, PayloadAction<UserState>>

