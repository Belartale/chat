// Types
import * as types from '../../types';

// Contracts
export type FetchMessagesContract = () => Promise<types.MessagesState>
export type CreateMessageContract = (options: types.MessageUser) => Promise<types.Message>
export type DeleteMessageContract = (options: string) => Promise<boolean>
export type ChangeMessageContract = (options: types.ChangeMessage) => Promise<boolean>
