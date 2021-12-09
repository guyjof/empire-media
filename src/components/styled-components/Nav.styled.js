import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
background-color: ${({ theme }) => theme.colors.header};
margin: 10px 0 18px;
width: 100%;
`;

export const Link = styled(NavLink)`
  padding: .8rem 1.6rem;
  color: #999;
  font-size: 1rem;
  text-decoration: none;
  font-weight: 500;
  &.active{
    color: #006f99;
    box-shadow: 0px 1.5px 0px 0px #005390de;
  }
`;