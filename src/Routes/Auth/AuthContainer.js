import React, { useState } from 'react';
import AuthPresenter from './AuthPresenter';
import useInput from '../../Hooks/useInput';
import { useMutation } from 'react-apollo-hooks';
import { LOG_IN } from "./AuthQueries";

export default () => {

    const [action, setAction] = useState("logIn");
    const email = useInput("");
    const userName = useInput("");
    const fullName = useInput("");
    const password = useInput("");
    const [loginQuery] = useMutation(LOG_IN, {variables: { email: email.value, password: password.value }});
    //const [getToken] = useMutation(LOCAL_LOG_IN);
    
    const _onLogin = (e) => {
        //e.preventDefault();
        if(email !== ""){
            
            const result= loginQuery();
            console.log('token::::',result.data.logIn.token);
        }
    }

    return (
        <AuthPresenter 
            setAction={setAction} 
            action={action}
            email={email}
            userName={userName}
            fullName={fullName}
            password={password}
            onLogin={_onLogin}
        />
    )
};
