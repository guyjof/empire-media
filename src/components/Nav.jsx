import { StyledNav, Link } from './styled-components/Nav.styled'

const Nav = () => {
  return (
    <StyledNav>
      <Link to='/' exact>
        Overview
      </Link>
      <Link to='/history' exact>
        History
      </Link>
    </StyledNav>
  )
}

export default Nav
