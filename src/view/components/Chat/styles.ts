// Core
import styled from 'styled-components';

// Types
type MessageDetailsType = {
    direction: boolean;
}

type MessageType = {
    isOwner: boolean;
}

type MessageBodyType = {
    isOwner: boolean;
}

export const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 20px);
    padding: 10px;
`;

export const WindowChat = styled.div`
    width: 100%;
    margin-bottom: 10px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 0;
    }
`;

export const Message = styled.div<MessageType>`
    margin-bottom: 10px;
    display: flex;
    justify-content: ${ ({ isOwner }) => isOwner ? 'flex-end' : 'flex-start' };
`;

export const MessageBody = styled.div<MessageBodyType>`
    min-width: 120px;
    display: inline-block;
    padding: 10px;
    border-radius: 5px;
    background-color: ${({ theme, isOwner }) => isOwner ? theme.message.messageBodyIsOwner : theme.message.messageBody};
`;

export const MessageUserName = styled.p`
    font-size: 12px;
    color: ${({ theme }) => theme.message.messageFontSecondary};
`;

export const MessageText = styled.p`
    color: ${({ theme }) => theme.message.messageFont};
    font-size: 17px;
    margin: 5px 0px;
`;

export const MessageDetails = styled.div<MessageDetailsType>`
    display: flex;
    ${({ direction }) => !direction ? { justifyContent: 'space-between' } : { justifyContent: 'flex-end' }}
`;

export const MessageChanged = styled.p`
    font-size: 12px;
    color: ${({ theme }) => theme.message.messageFont};
`;

export const MessageDate = styled.p`
    font-size: 12px;
    color: ${({ theme }) => theme.message.messageFont};
`;

export const Form = styled.form`
`;
