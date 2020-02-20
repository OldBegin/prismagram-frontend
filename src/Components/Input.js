import React from 'react';
import styled from 'styled-components';

const Container = styled.input`
    border: 0;
    border: ${ props => props.theme.boxBorder}
    border-radius: ${ props => props.theme.borderRadius};
    background-color: ${ props => props.theme.bgColor};
    height: 35px;
    padding-left: 10px;
`;


const Input = () => <Container/>

export default Input;