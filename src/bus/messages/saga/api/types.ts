// Types
import { MessagesState, Message, MessageUser } from '../../types';

// Contracts
export type FetchMessagesContract = () => Promise<MessagesState>
export type CreateMessageContract = (options: MessageUser) => Promise<Message>
export type DeleteMessageContract = (options: string) => Promise<boolean>
// export type editMessagesContract = (options: string) => Promise<Message>
