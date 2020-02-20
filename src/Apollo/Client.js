// Apollo 클라이언트 설정값이다.
// 클라이언트의 uri와 클라이언트의 state를 지정한다.

import ApolloClient from 'apollo-boost';
import { defaults, resolvers } from './LocalState';

export default new ApolloClient({
    uri: "http://localhost:4000",
    clientState: {
        defaults,
        resolvers
    }
});