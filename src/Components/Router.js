// // 어떤 라우터들을 다룰지 보여주는 컴퍼넌트
// // App에서 넘어온 props isLoggedIn 의 값이 true이면 Feed를 보여주고 false 이면 로그인창을 보여줌

import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";
//import { useEffect } from "react";

const LoggedInRoutes = () => (
    <Switch>
        <Route exact path="/" component={Feed} />
    </Switch>
);
const LoggedOutRoutes = () => (
    <Switch>
        <Route exact path="/" component={Auth} />
    </Switch>
);

const AppRouter = ({ isLoggedIn }) =>{
    return(  
        <Router>
            { isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes /> }
        </Router>
  )
}

AppRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;