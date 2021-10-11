// Core
import React, { ChangeEvent, FC } from 'react';
import styled from 'styled-components';
import { useForm } from '../../../tools/hooks';
import { ContainerCenter } from '../../container';

// Elements
import { Button, Card, Input } from '../../elements';

// Types
interface PropTypes {

}

// Styles
const FormRegisterStyled = styled.div<PropTypes>`
    
`;
//! erorr
export const FormRegister: FC<PropTypes> = () => {
    const [ form, handleChange, setInitialForm, resetForm ] = useForm(null);

    const onSumbitBtn = () => {
        //! initialState
    };

    return (
        <FormRegisterStyled>
            <Card>
                <form onSubmit = { (event) => event.preventDefault() }>
                    <Input
                        // error = {  }
                        direction = 'column'
                        id =  'username'
                        label =  'username'
                        name =  'username'
                        onChange = { (event: ChangeEvent<HTMLInputElement>) => void handleChange(event, false) }
                    />
                    <ContainerCenter style = {{ marginTop: '10px' }}>
                        <Button
                            type = 'submit'
                            onClick = { onSumbitBtn }>INTRO HOLE
                        </Button>
                    </ContainerCenter>
                </form>
            </Card>
        </FormRegisterStyled>
    );
};

