import React from 'react';
import { gql } from "apollo-boost";
import { useQuery } from 'react-apollo-hooks';  // 쿼리수행을 위한 훅스
import styled, { ThemeProvider } from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from '../Styles/Theme';
import AppRouter from './Router';
import Footer from './Footer';
import Header from './Header';
import { BrowserRouter as Router} from 'react-router-dom';

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;

export default () => {
  
  const { data: {isLoggedIn} } = useQuery(QUERY);
  
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          <>
            <Header />
            <Wrapper>
              <AppRouter isLoggedIn={isLoggedIn} />
              <Footer />
            </Wrapper>
          </>
        </Router>
        <ToastContainer position={toast.POSITION.BOTTOM_CENTER} />
      </>
    </ThemeProvider>
  );
}



