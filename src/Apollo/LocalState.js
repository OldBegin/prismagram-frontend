// 로컬 state 컴퍼넌트
// 유일한 전역사용 state인 isLoggedIn 값만 다룬다.
// default 값은 브라우저의 로컬스토리지에 'token' 이 있는지를 확인하여 결정한다. 토큰이 있으면 true,  없으면 false
// logUserIn: 토큰과 캐쉬를 인자로 받아서 
//            토큰은: 로컬스토리지에 저장하고, 
//            캐쉬는: isLoggedIn을 true로 설정한다.
// logUserOut: 로컬스토리지의 토큰을 삭제하고 캐쉬를 비운다.

export const defaults = {
    isLoggedIn: Boolean(localStorage.getItem('token')) || false
}

export const resolvers = {
    Mutation: {
        logUserIn: (_, {token},{cache})=>{
            localStorage.setItem('token',token);
            cache.writeData({
                data: {
                    isLoggedIn: true
                }
            });
            return null;
        },
        logUserOut: (_, __, {cache})=>{
            localStorage.removeItem('token');
            window.location.reload();
            return null;
        }
    }
} 