import React from 'react';
import styled from 'styled-components';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

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
`;
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

            margin-bottom: 10px

        }
        button{
            width: 100%;
            margin-top: 5px;
        }
    }
`;
export default ({
    action,
    setAction,
    email,
    userName,
    fullName,
    password,
    onLogin
}) => {
    
    return (
        <Wrapper>
            <Form>
                {action === "logIn"
                    ? (<form onSubmit={onLogin}>
                        <Input placeholder={"이메일"} autocomplete={"username"} value={email.value} onChange={email.onChangeHandler} type="email" />
                        <Input placeholder={"비밀번호"} autocomplete={"current-password"} value={password.value} onChange={password.onChangeHandler} type="password" />
                        <Button text={"로그인"} />
                    </form>)
                    : (<form onSubmit={onLogin}>
                        <Input placeholder={"이메일"} value={email.value} onChange={email.onChangeHandler} type="email" /> {/* 이렇게 구조분해해서 사용가능 */}
                        <Input placeholder={"성명"} value={fullName.value} onChange={fullName.onChangeHandler} />
                        <Input placeholder={"사용자 이름"} autocomplete = {"username"} value={userName.value} onChange={userName.onChangeHandler} />
                        <Input placeholder={"비밀번호"} autocomplete = {"new-password"} value={password.value} onChange={password.onChangeHandler} type="password" />
                        <Button text={"로그인"} />
                    </form>)
                }
            </Form>
            <StateChanger>
                {action === "logIn" ? (
                    <>
                        Don't have an account?{" "}
                        <Link onClick={() => setAction("signUp")}> Sign up</Link>
                    </>
                ) : (
                        <>
                            Have an account?
              <Link onClick={() => setAction("logIn")}> Log in</Link>
                        </>
                    )}
            </StateChanger>
        </Wrapper>
    );
};
