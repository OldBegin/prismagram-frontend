import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../Components/Input';
import Button from '../Components/Button';

const Wrapper = styled.div`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Box = styled.div`
    ${props => props.theme.whiteBox}
    border-radius:0px;
    width: 100%;
    max-width: 350px;
`;

const StateChanger = styled(Box)`
    text-align:center;
    padding:20px 0px;
`

const Link = styled.span`
    color: ${props => props.theme.blueColor};
    cursor: pointer;
`;

const Form = styled(Box)`
    padding: 40px;
    padding-bottom: 30px;
    margin-bottom: 15px;
    form {
        input{
            width: 100%;
            &:first-child {
                margin-bottom: 10px
            }
        }
        button{
            width: 100%;
            margin-top: 15px;
        }
    }
`;



export default () => {

    const [ action, setAction ] = useState("logIn");
 
    return (
      <Wrapper>
        <Form>
          <form>
            <Input />
            <Input />
            <Button text = {"로그인"}/>
          </form>
        </Form>
        <StateChanger>
          {action === "logIn" ? (
            <>
              Don't have an account?{" "}
              <Link onClick={() => setAction("signUp")}>Sign up</Link>
            </>
          ) : (
            <>
              Have an account?
              <Link onClick={() => setAction("logIn")}>Log in</Link>
            </>
          )}
        </StateChanger>
      </Wrapper>
    );
};
