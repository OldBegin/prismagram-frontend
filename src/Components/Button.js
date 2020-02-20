import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.button`
    background-color: ${ props => props.theme.blueColor};
    border-radius: ${ props => props.theme.borderRadius};
    border:0;
    color: white;
    font-weight: 600px;
    height: 30px;
    text-align: center;
    padding: 5px;
    font-size: 14px;
`;

const Button = ({text}) => <Container>{text}</Container>

Button.propTypes = {
    text: PropTypes.string.isRequired
};

export default Button;