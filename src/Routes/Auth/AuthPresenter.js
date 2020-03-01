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
const Title = styled.div`
    botom-margin: 5px;
    padding: 10px;
`;
const Form = styled(Box)`
    padding: 40px;
    padding-bottom: 30px;
    margin-bottom: 15px;
    form {
        dev{
            margin-bottom: 5px
        }
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
    firstName,
    lastName,
    password,
    confirmPassword,
    secret,
    onLogin,
    onRequestSecret,
    onSignUp

}) => {

    const loginSwitch = ()=>{
        switch(action){
            case "logIn": return (
                    <form onSubmit={onLogin}>
                        <Title>로그인</Title>
                        <Input placeholder={"이메일"} autocomplete={"username"} value={email.value} onChange={email.onChangeHandler} type="email" />
                        <Input placeholder={"비밀번호"} autocomplete={"current-password"} value={password.value} onChange={password.onChangeHandler} type="password" />
                        <Button text={"로그인"} />
                    </form>
            );
            case "requestSecret": return (
                <form onSubmit={onRequestSecret}>
                    <Title>회원가입</Title>
                    <Input placeholder={"이메일"} value={email.value} onChange={email.onChangeHandler} type="email" /> {/* 이렇게 구조분해해서 사용가능 */}
                    <Input placeholder={"성"} value={lastName.value} onChange={lastName.onChangeHandler} required={false} />
                    <Input placeholder={"이름"} value={firstName.value} onChange={firstName.onChangeHandler} required={false} />
                    <Input placeholder={"사용자 아이디"} autocomplete={"username"} value={userName.value} onChange={userName.onChangeHandler} />
                    <Input placeholder={"비밀번호"} autocomplete={"new-password"} value={password.value} onChange={password.onChangeHandler} type="password" />
                    <Input placeholder={"비밀번호확인"} autocomplete={"new-password"} value={confirmPassword.value} onChange={confirmPassword.onChangeHandler} type="password" />
                    <Button text={"제출"} />
                </form>
            );
            case "signUp": return (
                <form onSubmit={onSignUp}>
                    <Title>이메일로 전송된 시크릿 문자를 입력하세요</Title>
                    <Input placeholder={"이메일로 전송된 시크릿문자를 입력하세요"} value={secret.value} onChange={secret.onChangeHandler} />
                    <Button text={"확인"} />
                </form>
            )
            default: return <></>;
        }  
    }
    return (
        <Wrapper>
            <Form>{ loginSwitch() }</Form>
            <StateChanger>
                {action === "logIn" ? (
                    <>
                        Don't have an account?{" "}
                        <Link onClick={() => setAction("requestSecret")}> Sign up</Link>
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
