import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import useInput from '../Hooks/useInput';
import Input from './../Components/Input';
import { Camera, Home, Airplane, Compass, HeartEmpty, User } from './icons';

const HeaderStyle = styled.header`
  border-bottom: ${ props => props.theme.boxBorder};
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 53px;
  border-radius: 0;
  border: 0;
  width: 100%;
  padding: 13px 0px;
  margin-bottom: 32px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  display:flex;
  justify-content: center;
`;

const HeaderColumn = styled.div`
  width: 33%;
  text-align: center;
  &:first-child {
    margin-right: auto;
    text-align: left;
  }
  &:last-child {
    margin-left: auto;
    text-align: right;
  }
`;

const SearchInput = styled(Input)`
  background-color: ${ props => props.theme.bgColor};
  padding: 5px;
  height: auto;
  width: 80%;
  text-align: center;
  &::placeholder {
    opacity: 0.8;
    font-weight: 200;
  }

`;

const HeaderLink = styled(Link)`
  margin-left: 22px;
`;

const Header = ({history}) => {
  
  const search = useInput("");
  const { value, onChangeHandler } = search;
  const _onSearchSubmit = (e) =>{
    e.preventDefault();
    history.push(`/search?term=${value}`);
  }

  return (
    <HeaderStyle>
      <Wrapper>
        <HeaderColumn>
          <HeaderLink to="/">
            <Camera/>
          </HeaderLink>
        </HeaderColumn>
        <HeaderColumn>
          <form onSubmit={_onSearchSubmit}>
            <SearchInput placeholder={"Search"} value={value} onChange={onChangeHandler} />
          </form>
        </HeaderColumn>
        <HeaderColumn>
          <HeaderLink to="/home">
            <Home/>
          </HeaderLink>
          <HeaderLink to="/message">
            <Airplane/>
          </HeaderLink>
          <HeaderLink to="/explore">
            <Compass/>
          </HeaderLink>
          <HeaderLink to="/notifications">
            <HeartEmpty/>
          </HeaderLink>
          <HeaderLink to="/username">
            <User/>
          </HeaderLink>
        </HeaderColumn>
      </Wrapper>
    </HeaderStyle>
 
  );
}

export default withRouter(Header);