import styled from 'styled-components'
import { colors } from '../../globalStyles'

export const HeaderContainer = styled.header`
  background-color: ${colors.purple};
  padding: 16px 0;

  position: stick;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

  .container,
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  h1,
  a {
    color: ${colors.white};
  }

  a:hover,
  button:hover {
    opacity: 0.8;
  }
`

export const HeaderButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${colors.white};
  font-size: 16px;
`
