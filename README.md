# instagram clone frontend  

## 의존성 라이브러리

```js
yarn add react-apollo-hooks  
yarn add apollo-boost
yarn add react-router  
yarn add graphql             //graphql 클라이인트패키지
yarn add styled-components   // scss나 sass 대신 태그를 이용하여 javascript형태로 스타일을 사용할수있다.
yarn add styled-reset
yarn add react-helmet
yarn add react-toastify  //메시지출력패키지

```

- 컬러추출어플 colorZilla 설치 (구글웹스토어)
- message 출력패키지 react-toastify설치

## 각 디렉토리의 구성

- Apollo: front와 backend 서버와의 연동을 위한 설정 및 로컬저장소를 graphql문법으로 구성하여 저장
  - Client.js: 서버연동설정 및 로컬서버인 LocalState.js 를 등록
  - LocalState.js: graphql 문법으로 만들어진 로컬서버파일 - 프론트에서 쿼리시 서버의 Api를 사용하는것과 동일한 스타일로 코딩할수 있게 해주는것이 마음에 든다.

- Components: 컴퍼넌트를 모아놓은 디렉터리
  - App.js: 유일한 전역 state인 isLoggedIn을 Router컴퍼넌트에 프롭스로 넘긴다.
  - Footer.js:
  - Input.js: 재사용을 위해 커스텀 컴퍼넌트로 만듦
  - Router.js: props로 전달받은 isLoggenIn 이 true이면, feed컴퍼넌트를 실행하고, false이면 Auth 컴퍼넌트를 실행하는 메인 라우터이다.

- Routes: 라우팅페이지를 모아놓은 디렉터리
  - Auth: 로그인 및 회원가입을 위한 페이지
  - Feed: 로그인된 후 post 피드를 보여주는 페이지
  - Post: 코딩전
  - Profile: 코딩전
  - EditProfile: 코딩전

- Styles: 글로벌 스타일을 위한 디렉터리
  - GlobalStyles.js: html 테크등의 글로벌 스타일을 정의
  - Theme: 자주사용하는 스타일을 상수로 정의하여 스타일을 재사용하기 용이하게 함.

## 기능들

- 로그인 뮤테이션 구현
- 회원가입 기능 구현
  - requestSecret: 회원정보 입력후 서밋시
  - confirmSecret: 시크릿 입력후 서밋시
  - signUp: 시크릿 입력후 서밋시

## 헤더구현
- Router