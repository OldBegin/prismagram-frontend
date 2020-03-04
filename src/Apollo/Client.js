// 백엔드서버와 연결을 위한 Apollo 클라이언트 설정값이다.
// 클라이언트의 uri와 클라이언트의 state를 graphql 타입으로 지정한다.

import ApolloClient from 'apollo-boost'; // Apollo Client를 설정하는데 필요한것이 들어있는 패키지
import { defaults, resolvers } from './LocalState';

export default new ApolloClient({
    uri: "http://localhost:4000",
    clientState: {
        defaults,
        resolvers
    },
    request: async (operation)=>{
        const token = await localStorage.getItem("token");
        operation.setContext({
            headers:{
                Authorization: token ? `Bearer ${token}` : ''
            }
        })
    }
});
