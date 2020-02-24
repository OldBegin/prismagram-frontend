//index에서 ApolloProvider를 적용하여 App 이하 모든 컴퍼넌트에서 백엔드접근이 가능하게 함.
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { ApolloProvider } from "react-apollo-hooks";
import Client from "./Apollo/Client";

ReactDOM.render(
  <ApolloProvider client={Client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);