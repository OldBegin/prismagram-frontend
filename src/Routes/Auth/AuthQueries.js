import { gql } from "apollo-boost";

// 로그인 뮤테이션
export const LOG_IN = gql`
    mutation logIn($email:String!, $password: String!){
        logIn(email:$email, password:$password){
            token
        }
    }
`;

// 로컬스토리지에 토큰을 저장하는 함수를 호출하는 뮤테이션
export const LOCAL_LOG_IN = gql`
    mutation logUserIn( $token: String!){
        logUserIn(token: $token) @client
    }
`;