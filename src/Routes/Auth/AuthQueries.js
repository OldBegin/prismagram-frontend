import { gql } from "apollo-boost";

// 로그인 뮤테이션
export const REQUEST_TOKEN = gql`
    mutation requestToken($email:String!, $password: String!){
        requestToken(email:$email, password:$password)
    }
`;

// 로컬 API logUserIn 을 이용하여 토큰을 로컬저장소에 저장: 로컬API 경로: Apollo/LocalState.js
export const LOCAL_LOG_IN = gql`
    mutation logUserIn( $token: String!){
        logUserIn(token: $token) @client
    }
`;

// 이메일 인증 요청
export const REQUEST_SECRET = gql`
    mutation requestSecret( $email: String! ){
        requestSecret(email: $email)
    }
`;

// 이메일 인증 확인
export const CONFIRM_SECRET = gql`
    query confirmSecret( $email: String!, $secret: String!){
        confirmSecret(email:$email, secret:$secret)
    }
`;

// 회원가입완료
export const SIGN_UP = gql`
    mutation signUp( $email: String!, $userName: String!, $firstName: String, $lastName:String, $password: String!){
        signUp(email:$email, userName: $userName, firstName: $firstName, lastName:$lastName, password: $password)
    }
`;