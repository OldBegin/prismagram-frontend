import React, { useState } from 'react';
import AuthPresenter from './AuthPresenter';
import useInput from '../../Hooks/useInput';
import { useMutation } from 'react-apollo-hooks';
import { REQUEST_TOKEN, LOCAL_LOG_IN, REQUEST_SECRET, CONFIRM_SECRET, SIGN_UP} from "./AuthQueries";
import { toast } from 'react-toastify';

export default () => {
    const [action, setAction] = useState("logIn");
    const email = useInput("youngun.you@daum.net");
    const firstName = useInput("");
    const lastName = useInput("");
    const userName = useInput("");
    const password = useInput("");
    const confirmPassword = useInput("");
    const secret = useInput("");

    const [requestToken] = useMutation(REQUEST_TOKEN, {variables: { email: email.value, password: password.value}});
    const [logIn] = useMutation(LOCAL_LOG_IN);
    const [requestSecret] = useMutation(REQUEST_SECRET, { variables: { email: email.value }});
    const [confirmSecret] = useMutation(CONFIRM_SECRET, { variables: { email: email.value, secret: secret.value }});
    const [signUp] = useMutation(SIGN_UP, { variables: {
                                                email: email.value,
                                                firstName: firstName.value,
                                                lastName: lastName.value,
                                                userName: userName.value,
                                                password: password.value
                                            }
                                });

    const _onLogin = async (e) => {
        e.preventDefault();
        if(email !== "" && password){
            try{       
                await requestToken().then(({data}) => {
                    const { requestToken: token } = data;
                    token 
                        ? logIn({ variables: { token } })
                        : toast.error("토큰발행 실패!");   
                })
            }catch(error){
                toast.error("이메일 또는 비밀번호을 다시 확인해 주세요");
            }
        }
    }

    const _onRequestSecret = async e => {
        e.preventDefault();
        if ( email === "" || userName === "" || password === "" ) {
            toast.error("필수항목을 채워주세요");
        } else if (password.value !== confirmPassword.value) {
            toast.error("비밀번호를 확인해주세요");
        } else {
        try {
            const isRequestOk = await requestSecret();
            if (isRequestOk) {
            setAction("signUp");
            }
        } catch (error) {
            toast.error(error.message);
        }
        }
        console.log(email.value);
        console.log(userName.value);
    };

    const _onSignUp = async e => {
        e.preventDefault();
        const { data: { confirmSecret: isConfirmed }} = await confirmSecret();
        if (isConfirmed) {
        signUp().then(isSignedUp => {
            isSignedUp
                ? toast.success("회원가입에 성공했습니다!")
                : toast.error("회원가입에 실패했습니다.");
        });
        } else {
        toast.error(
            `일치하지 않습니다. 시크릿문자를 다시 확인해주세요`
        );
        }
    };

    return (
        <AuthPresenter
        setAction={setAction}
        action={action}
        email={email}
        userName={userName}
        firstName={firstName}
        lastName={lastName}
        password={password}
        confirmPassword={confirmPassword}
        secret={secret}
        onLogin={_onLogin}
        onRequestSecret={_onRequestSecret}
        onSignUp={_onSignUp}
        />
    );
    }
