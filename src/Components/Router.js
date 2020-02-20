// 어떤 라우터들을 다룰지 보여주는 컴퍼넌트
// App에서 넘어온 props isLoggedIn 의 값이 true이면 Feed를 보여주고 false 이면 로그인창을 보여줌

import React from 'react';
import PropTypes from "prop-types";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Feed from '../Routes/Feed';
import Auth from '../Routes/Auth';

const LoggedInRoutes = () => <><Route exact path="/" component={ Feed } /></>
const LoggedOutRoutes = () => <><Route exact path="/" component={ Auth } /></>

const AppRouter = ({isLoggedIn}) =>(
    <Router>
        <Switch>{isLoggedIn? <LoggedInRoutes/>:<LoggedOutRoutes/>}</Switch>
    </Router>
);

AppRouter.propTypes= {
    isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;